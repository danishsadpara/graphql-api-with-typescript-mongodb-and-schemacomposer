import { schemaComposer } from "graphql-compose";

export const UserTypeEnum = schemaComposer.createEnumTC({
  name: "UserTypeEnum",
  values: {
    SUPPLIER: { description: "Supplier user type" },
    CLIENT: { description: "Client user type", code: 2 },
    CUSTOMER: {},
  },
});

export const UserTC = schemaComposer.createObjectTC({
  name: "User",
  fields: {
    name: "String!",
    email: "String",
    password: "String",
    dob: "Date",
  },
});

export const InputUserTC = schemaComposer.createInputTC({
  name: "UserInputs",
  fields: {
    name: "String!",
    email: "String",
    password: "String",
    dob: "Date",
  },
});

export const UserDeleteTC = schemaComposer.createObjectTC({
  name: "UserDelete",
  fields: {
    message: "String!",
  },
});
