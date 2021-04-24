import User from "../../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import dotenv from "dotenv";
import { UserInputError } from "apollo-server";
dotenv.config();

export default {
    Query: {
        user: async (root, { _id }) => {
            const user = await User.findById(_id).populate("hotels");
            return user;
        },
        users: async () => {
            const users = await User.find({}).populate("hotels");
            return users;
        },
        currentUser: async (root, args, context) => {
            console.log('====>', context.user)
            return context.user;
        },
    },
    Mutation: {
        createUser: async (root, args) => {
            const userInput = args.input;
            if (!validator.isEmail(userInput.email)) {
                throw new UserInputError(`This email: ${userInput.email} is not valid, please try again...`, {
                    field: "email",
                    value: userInput.email,
                    constraint: "isEmail",
                })
            }

            if (!validator.isLength(userInput.password, { min: 4, max: 50 })) {
                throw new UserInputError(`Password has to be between 4 and 50 symbols`, {
                    field: "password",
                    value: userInput.password,
                    constraint: "isLength",
                })
            }

            userInput.password = await bcryptjs.hash(userInput.password, 10);
            const newUser = new User(userInput);
            await newUser.save();
            return newUser;
        },
        editUser: async (root, { _id, input }) => {
            const user = await User.findByIdAndUpdate(_id,
                { $set: input },
                {
                    runValidators: true,
                    new: true,
                }).populate("hotels")
            return user;
        },
        deleteUser: async (root, { _id }) => {
            const user = User.findOneAndDelete(_id).populate("hotels");
            return user;
        },
        login: async (root, { email, password }) => {
            const matchedUser = await User.findOne({ email });
            if (!matchedUser) {
                throw new UserInputError(`No users with this e-mail: ${email} found...`, {
                    field: "email",
                    value: email,
                    constraint: "emailDoesNotExist",
                })
            }

            const validPassword = await bcryptjs.compare(password, matchedUser.password);
            if (!validPassword) {
                throw new UserInputError(`Incorrect password, please try again...`, {
                    field: "password",
                    value: "",
                    constraint: "passwordIncorrect",
                })
            }

            const privateKey = process.env.JSONWEBTOKEN_PRIVATE_KEY;
            const token = jwt.sign({
                _id: matchedUser._id,
                email: matchedUser.email,
            }, privateKey, {
                expiresIn: "24h"
            });

            return token;
        },
        logout: async (root, args, context) => {
            return context.user;
        }
    }


}