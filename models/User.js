import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema ({
    email:  {
        unique: true,
        type: String,
    },
    password:  { 
        type: String, 
        min: 4, 
        max: 50 
    },
    games: [{
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

const User = mongoose.model("User", UserSchema);
export default User;