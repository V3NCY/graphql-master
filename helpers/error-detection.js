import { UserInputError } from "apollo-server";

export const formatError = (err) => {
    if (err.message.startsWith('Database Error: ')) {
      return new Error('Internal server error');
    }
    if(err.originalError instanceof UserInputError) {
        // Here we can format our user input errors;
        delete err.extensions.exception
    }
    return err;
}
