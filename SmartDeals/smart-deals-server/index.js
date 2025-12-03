const express = require("express");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// FIREBASE_SERVICE_KEY

const decoded = Buffer.from(process.env.FIREBASE_SERVICE_KEY, "base64").toString("utf8");
const serviceAccount = JSON.parse(decoded);
// const serviceAccount = require("./smart-deals-firebase-admin-sdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//middleware
app.use(cors());
app.use(express.json());

const logger = (req, res, next) => {
  console.log("logging info");
  next();
};

const verifyFirebaseToken = async (req, res, next) => {
  // console.log('in the verify middleware',req.headers.authorization);
  if (!req.headers.authorization) {
    // donot allow to go
    return res.status(401).send({ message: "unauthorized access" });
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  //verify token
  try {
    const tokenInfo = await admin.auth().verifyIdToken(token);
    req.token_email = tokenInfo.email;
    console.log("after token validation", tokenInfo);
    next();
  } catch {
    return res.status(401).send({ message: "unauthorized access" });
  }
};

const verifyJWTToken = (req, res, next) => {
  console.log("in middleware", req.headers.authorization);
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  const token = authorization.split(" ")[1];
  if (!token) return res.status(401).send({ message: "unauthorized access" });
// verify token

jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
  if(err){
return res.status(401).send({message:'unauthorized access'});
  }
  // console.log('after decoded',decoded);
  req.token_email=decoded.email;
   next();
})

 
};

// console.log(process.env);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@milestone10.q154yhh.mongodb.net/?appName=milestone10`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Smart Deals Server running");
});

//DB
async function run() {
  try {
    // await client.connect();

    // create db
    const db = client.db("smart_db");
    // create table
    const productsCollection = db.collection("products");
    const bidsCollection = db.collection("bids");
    const userCollection = db.collection("users");

    //jwt related apis

    app.post("/getToken", (req, res) => {
      const loggedUser = req.body;
      // console.log("logged user", loggedUser);
      const token = jwt.sign(loggedUser, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.send({ token: token });
    });

    //add user
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const email = req.body.email;
      const query = { email: email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        res.send({
          message: "user already exists",
        });
      } else {
        const result = await userCollection.insertOne(newUser);
        res.send(result);
      }
    });

    //get recent products
    app.get("/latest-products", async (req, res) => {
      const cursor = productsCollection
        .find()
        .sort({ created_at: -1 })
        .limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });
    //add products
    app.post("/products",verifyFirebaseToken, async (req, res) => {
      const newProduct = req.body;
      const result = await productsCollection.insertOne(newProduct);
      res.send(result);
    });

    //get all products
    app.get("/products", async (req, res) => {
      // console.log(req.query);
      email = req.query.email;
      const query = {};
      if (email) query.email = email;
      // const projectFields={title:1, price_min:1,price_max:1}
      // const cursor=productsCollection.find().sort({price_min:-1}).skip(3).limit(5).project(projectFields);
      const cursor = productsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    //get single products
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: id };
      const result = await productsCollection.findOne(query);
      res.send(result);
    });

    //edit products
    app.patch("/products/:id", async (req, res) => {
      const id = req.params.id;
      const updatedProduct = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          name: updatedProduct.name,
          price: updatedProduct.price,
        },
      };
      const result = await productsCollection.updateOne(query, update);
      res.send(result);
    });

    //remove products
    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    });

    // bids related

    //get all bids

    //get customer's bids with firebase token
    // app.get("/bids",logger,verifyFirebaseToken, async (req, res) => {
    //   console.log('headers',req.query.email,req.token_email);
    //   const email = req.query.email;
    //   const query = {};
    //   if (email) {
    //     if(email!==req.token_email)return res.status(403).send({message: 'forbidden access'});
    //     query.buyer_email = email;
    //   }

    //   const cursor = bidsCollection.find(query).sort({bid_price:-1});
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    //custom token bids
    app.get("/bids",verifyFirebaseToken, async (req, res) => {
      // console.log('cusstom', req.headers);
      const email = req.query.email;
      const query = {};
      if (email){
        if(email!==req.token_email)return res.status(403).send({message:'forbidden access'}) 
         query.buyer_email = email;
      }
      const cursor = bidsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // add bids
    app.post("/bids", async (req, res) => {
      const newBid = req.body;
      const result = await bidsCollection.insertOne(newBid);
      res.send(result);
    });

    //bids by producs
    app.get("/products/bids/:productId", verifyFirebaseToken, async (req, res) => {
        const productId = req.params.productId;
        const query = { product: productId };
        const cursor = bidsCollection.find(query).sort({ bid_price: -1 });
        const result = await cursor.toArray();
        res.send(result);
      }
    );

    app.delete("/bids/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bidsCollection.deleteOne(query);
      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
