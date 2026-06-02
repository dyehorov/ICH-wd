import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.MONGO_URI || "uri_not_set_in_env_file"
const client = new MongoClient(uri)

let db

export async function connectDB() {
  try {
    await client.connect()
    db = client.db()

    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Failed to connect to MongoDB", error)
  }
}

export function getDb() {
  if (!db) {
    throw new Error("Database not connected")
  }
  return db
}
