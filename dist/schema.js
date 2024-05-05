"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSchema = void 0;
// schema.ts
const graphql_compose_1 = require("graphql-compose");
const queries_1 = require("./entities/contact/queries");
const mutation_1 = require("./entities/contact/mutation");
graphql_compose_1.schemaComposer.Query.addFields(Object.assign({}, queries_1.contactQueries));
graphql_compose_1.schemaComposer.Mutation.addFields(Object.assign({}, mutation_1.contactMutations));
exports.ApiSchema = graphql_compose_1.schemaComposer.buildSchema();
