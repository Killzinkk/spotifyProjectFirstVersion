import { MongoClient } from "mongodb";

const URI = "mongodb+srv://Killzinkk:AbmuW54Lhd4udQO2@cluster0.w5n9p5v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotifyDb")