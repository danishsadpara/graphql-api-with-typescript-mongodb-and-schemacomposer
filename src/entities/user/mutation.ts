import { UserTC, InputUserTC, UserDeleteTC } from "./types";
import { UserModel } from "./models"; // Import your MongoDB model

export const userMutations = {
  createUser: {
    type: UserTC.getType(),
    args: {
      input: InputUserTC,
    },
    resolve: async (_: any, { input }: Record<string, any>) => {
      const createdUser = await UserModel.create(input);
      return createdUser.toObject();
    },
  },
  updateUser: {
    type: UserTC.getType(),
    args: {
      userId: "String!", // Assuming userId is required and of type String
      input: InputUserTC,
    },
    resolve: async (_: any, { userId, input }: Record<string, any>) => {
      // Check if user exists
      const userExists = await UserModel.exists({ _id: userId });
      if (!userExists) {
        throw new Error(`User with ID ${userId} does not exist.`);
      }

      // Check if email field is present in the input
      if (input.email) {
        throw new Error(`Updating email is not allowed.`);
      }

      // Update the user except for the email field
      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        { $set: { ...input } },
        { new: true }
      );

      return updatedUser?.toObject();
    },
  },
  deleteUser: {
    type: UserDeleteTC.getType(),
    args: {
      userId: "String!", // Assuming userId is required and of type String
    },
    resolve: async (_: any, { userId }: Record<string, any>) => {
      // Check if user exists
      const userExists = await UserModel.exists({ _id: userId });
      if (!userExists) {
        throw new Error(`User with ID ${userId} does not exist.`);
      }

      // Delete the user
      await UserModel.findByIdAndDelete(userId);

      // Return success message
      return {
        message: `User with ID ${userId} has been deleted successfully.`,
      };
    },
  },
};
