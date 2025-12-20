const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const admin = require("firebase-admin");

const decoded =Buffer.from(process.env.FIREBASE_SERVICE_KEY,"base64").toString("utf8");

const serviceAccount=JSON.parse(decoded);



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// MIDDLEWARE_______________________________________
app.use(cors());
app.use(express.json());

const verifyFireBaseToken = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).send({ message: "unathzorized access" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    // console.log(decoded.email);
    req.token_email = decoded.email;
    next();
  } catch (err) {
    return res.status(401).send({ message: "unazthorized access" });
  }
  //  console.log(token);
};
// _________________________________________________

app.get("/", (req, res) => {
  res.send("PawMart SERVER IS RUNNING");
});

//DB

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@milestone10.q154yhh.mongodb.net/?appName=milestone10`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    //CREATE DATABASE
    const db = client.db("PawMart");

    //CREATE TABLE
    const listingCollection = db.collection("listings");
    const ordresCollection = db.collection("orders");

    //    LISTINGS related______________________________________

    app.post("/lsitings", async (req, res) => {
      const newListings = req.body;
      const result = await listingCollection.insertOne(newListings);
      res.send(result);
    });

    app.get("/latest-listings", async (req, res) => {
      const cursor = listingCollection.find().sort({ date: -1 }).limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/listings", async (req, res) => {
      // console.log(req.query.email);
      const email = req.query.email;
      const category = req.query.category;
      const name = req.query.name;
      const query = {};
      if (email) query.email = email;
      if (category) query.category = category;
      if (name) {
        query.name = { $regex: name, $options: "i" };
      }

      console.log(query);
      const cursor = listingCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/listings/price-range", async (req, res) => {
      try {
        const min = Number(req.query.min) || 1;
        const max = Number(req.query.max) || Infinity;

        // Build query
        const query = { price: { $gte: min, $lte: max } };

        // Fetch listings
        const cursor = listingCollection.find(query);
        const listings = await cursor.toArray();

        res.send(listings);
      } catch (err) {
        console.error("Failed to fetch listings by price range:", err);
        res.status(500).json({ error: "Server Error" });
      }
    });
    app.get("/listings/:id", async (req, res) => {
      try {
        const id = req.params.id;

        // Convert string id to ObjectId
        const query = { _id: new ObjectId(id) };
        const listing = await listingCollection.findOne(query);

        if (!listing) {
          return res.status(404).send({ message: "Listing not found" });
        }

        res.send(listing);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
      }
    });

    app.patch("/listings/:id", verifyFireBaseToken, async (req, res) => {
      const id = req.params.id;
      const updateListing = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          name: updateListing.name,
          category: updateListing.category,
          price: updateListing.price,
          location: updateListing.location,
          description: updateListing.description,
          image: updateListing.image,
        },
      };
      const result = await listingCollection.updateOne(query, update);
      res.send(result);
    });
    app.delete("/listings/:id", verifyFireBaseToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await listingCollection.deleteOne(query);
      res.send(result);
    });

    // ORDERS Related
    app.post("/orders", async (req, res) => {
      const newOrder = req.body;
      const result = await ordresCollection.insertOne(newOrder);
      res.send(result);
    });

    app.get("/orders", async (req, res) => {
      try {
        const email = req.query.email;
        const query = {};
        if (email) {
          query.email = email;
        }
        const cursor = ordresCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        res.send(error);
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`RUNNING ON PORT ${port}`);
});
