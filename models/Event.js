import mongoose from "mongoose";
const { Schema } = mongoose;

const eventSchema = new Schema({
    title: String,
    description: String,
    image: String,
})

const Event = mongoose.model("Event", eventSchema);
export default Event;