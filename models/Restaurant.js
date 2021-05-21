import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantSchema = new Schema({
    title: String,
    description: String,
    extras: String,
    image: String,
    rating: {
        type: Number,
        default: 0,
    },
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;