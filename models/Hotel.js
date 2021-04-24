import mongoose from "mongoose";
const { Schema } = mongoose;

const hotelSchema = new Schema ({
    title:  String,
    description: String,
    extras: String,
    image: String,
    rating: {
        type: Number,
        default: 0,
    },
})

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;