import { MongoClient, ServerApiVersion } from "mongodb";

const URI = "mongodb://mongodb:27017;

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("✅ Connected to MongoDB!");
} catch (err) {
  console.error("❌ MongoDB connection failed:", err);
}

let db = client.db("employees");

export default db;

