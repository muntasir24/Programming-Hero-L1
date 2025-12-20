const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Ensure dotenv is required at the top
const admin = require("firebase-admin");
const app = express();
const port = process.env.PORT || 3000;

// Corrected Base64 Decoding
const decoded = Buffer.from(process.env.FIREBASE_SERVICE_KEY, "base64").toString("utf8");
const serviceAccount = JSON.parse(decoded);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Middleware
app.use(cors());
app.use(express.json());

// Verify Token Middleware
const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: 'unauthorized access' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.decoded = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send({ message: 'unauthorized access' });
  }
};

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@milestone10.q154yhh.mongodb.net/?appName=milestone10`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // await client.connect(); // Optional in v4.7+
    
    const db = client.db("blood-donation");
    const userCollections = db.collection('user');
    const requestsCollection = db.collection('allrequests');

    // Public: Create User
    app.post('/users', async (req, res) => {
      const userInfo = req.body;
      userInfo.role = "donor";
      userInfo.status = "active";
      userInfo.createAt = new Date();
      const result = await userCollections.insertOne(userInfo);
      res.send(result);
    });

    // Role Check
    app.get('/users/role/:email', async (req, res) => {
      const email = req.params.email;
      const result = await userCollections.findOne({ email });
      res.send(result);
    });

    // Secure: Create Donation Request
    app.post('/requests', verifyFirebaseToken, async (req, res) => {
      const data = req.body;
      data.createAt = new Date();
      // Safety check: verify requester email matches the token email
      if(req.decoded.email !== data.requesterEmail) {
        return res.status(403).send({message: 'forbidden access'});
      }
      const result = await requestsCollection.insertOne(data);
      res.send(result);
    });

    app.get('/users',verifyFirebaseToken,async(req,res)=>{
     const cursor=userCollections.find();
     const result=await cursor.toArray();
     res.send(result);
    })
    
app.patch('/update/user/role-status', verifyFirebaseToken, async (req, res) => {
  try {
    const { email, status, role } = req.body; 
    
    if (!email) {
      return res.status(400).send({ message: "User email is required" });
    }

    const query = { email: email };
    
    // Dynamically build the update object so  can update one or both
    const updateFields = {};
    if (status) updateFields.status = status;
    if (role) updateFields.role = role;

    const updateDoc = {
      $set: updateFields
    };

    const result = await userCollections.updateOne(query, updateDoc);
    
    if (result.matchedCount === 0) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

    console.log("Connected to MongoDB!");
  } finally {
    // Keep connection open
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Blood Donation Server is Running");
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});