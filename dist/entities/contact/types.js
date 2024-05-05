"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputContactTC = exports.ContactTC = exports.ContactTypeEnum = void 0;
// types.ts
const graphql_compose_1 = require("graphql-compose");
exports.ContactTypeEnum = graphql_compose_1.schemaComposer.createEnumTC({
    name: "ContactTypeEnum",
    values: {
        SUPPLIER: { description: "Supplier contact type" },
        CLIENT: { description: "Client contact type", code: 2 },
        CUSTOMER: {},
    },
});
exports.ContactTC = graphql_compose_1.schemaComposer.createObjectTC({
    name: "Contact",
    fields: {
        account: "String!",
        company: "String!",
        firstName: "String!",
        lastName: "String!",
        phone: "String!",
        email: "String!",
        enabled: "Boolean!",
        type: {
            type: exports.ContactTypeEnum,
        },
    },
});
exports.InputContactTC = graphql_compose_1.schemaComposer.createInputTC({
    name: "InputContact",
    fields: {
        account: "String!",
        company: "String!",
        firstName: "String!",
        lastName: "String!",
        phone: "String!",
        email: "String!",
        enabled: "Boolean!",
        type: "ContactTypeEnum",
    },
});
