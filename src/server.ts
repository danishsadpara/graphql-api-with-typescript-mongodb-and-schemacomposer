import { ApolloServer } from "apollo-server";
import { ApiSchema } from "./schema";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

// Retrieve MongoDB URI from environment variable
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MongoDB URI is not provided in the environment variable.");
  process.exit(1);
}

mongoose.connect(MONGODB_URI, {});

const server = new ApolloServer({
  schema: ApiSchema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
