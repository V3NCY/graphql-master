import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        unique: true,
        type: String,
    },
    email: {
        unique: true,
        type: String,
    },
    password: {
        type: String,
        min: 4,
        max: 50
    },
    hotels: [{
        type: Schema.Types.ObjectId,
        ref: 'Hotel'
    }],
    firstName: {
        type: String,
        min: 4,
        max: 100,
    },
    lastName: {
        type: String,
        min: 4,
        max: 100,
    },
    roles: [],
})

const User = mongoose.model("User", userSchema);
export default User;