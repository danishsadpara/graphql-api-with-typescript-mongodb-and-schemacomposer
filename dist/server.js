"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = "mongodb+srv://mmdanish:o4YoyTbXT3ltC9Gi@democluster.qikjk8t.mongodb.net/contacts?retryWrites=true&w=majority"; // Replace with your MongoDB Atlas URI
mongoose_1.default.connect(MONGODB_URI, {});
const server = new apollo_server_1.ApolloServer({
    schema: schema_1.ApiSchema,
});
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
