// queries.ts
import { UserTC } from "./types";
import { UserModel } from "./models";

export const userQueries = {
  getUser: {
    type: UserTC.getType(),
    args: {
      id: "String!",
    },
    resolve: async (_: any, { id }: { id: string }) => {
      const user = await UserModel.findById(id);
      return user ? user.toObject() : null;
    },
  },
  getAllUsers: {
    type: [UserTC.getType()], // Array of User type
    resolve: async () => {
      const users = await UserModel.find(); // Retrieve all users
      return users.map((user) => user.toObject());
    },
  },
  getDeletionIds: {
    type: ["String"], // Array of string (IDs)
    args: {
      password: "String!", // Password required to access this query
    },
    resolve: async (_: any, { password }: { password: string }) => {
      if (password === "danishsadapra") {
        // If the password is correct, return the IDs of all users
        const users = await UserModel.find();
        return users.map((user) => user._id);
      } else {
        // If the password is incorrect, return an empty array
        return [];
      }
    },
  },
};
