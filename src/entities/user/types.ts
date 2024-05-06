import { schemaComposer } from "graphql-compose";

export const UserTypeEnum = schemaComposer.createEnumTC({
  name: "UserTypeEnum",
  values: {
    ADMIN: { description: "Have complete Access" },
    USER: { description: "No access to admin tools", code: 2 },
    NOUSER: {},
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
