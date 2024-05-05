import { schemaComposer } from "graphql-compose";
import { userQueries } from "./entities/user/queries";
import { userMutations } from "./entities/user/mutation";

schemaComposer.Query.addFields({
  ...userQueries,
  // Add other entity queries here
});

schemaComposer.Mutation.addFields({
  ...userMutations,
  // Add other entity mutations here
});

export const ApiSchema = schemaComposer.buildSchema();
