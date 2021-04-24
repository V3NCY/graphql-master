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
            const userData = args.input;
            if (!validator.isEmail(userData.email)) {
                throw new UserInputError(`This email: ${userData.email} is not valid, please try again...`, {
                    field: "email",
                    value: userData.email,
                    constraint: "isEmail",
                })
            }

            if (!validator.isLength(userData.password, { min: 4, max: 50 })) {
                throw new UserInputError(`Password has to be between 4 and 50 symbols`, {
                    field: "password",
                    value: userData.password,
                    constraint: "isLength",
                })
            }

            userData.password = await bcryptjs.hash(userData.password, 10);
            const newUser = new User(userData);
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
                expiresIn: "1d"
            });

            return token;
        },
        logout: async (root, args, context) => {
            return context.user;
        }
    }


}