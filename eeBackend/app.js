const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT;

// middlware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.g5uwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

(async function run() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    const userCollection = await client.db("usersDB").collection("users");

    app.get("/users", (_, res) => {});
  } catch (err) {
    console.log(err.message);
  }
})();

app.get("/", (req, res) => {
  res.send("server is working");
});

app.listen(port, () => {
  console.log(`the server is running port on : ${port}`);
});
