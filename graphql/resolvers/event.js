import Event from "../../models/Event.js";

export default {
    Query: {
        event: async (root, { _id }) => {
            const event = await Event.findById(_id);
            return event;
        },
        events: async () => {
            const events = await Event.find({});
            return events;
        }
    },
    Mutation: {
        createEvent: async (root, args) => {
            const newEvent = new Event(args.input)
            await newEvent.save();
            return newEvent;
        },
        editEvent: async (root, { _id, input }) => {
            const event = await Event.findByIdAndUpdate(_id,
                { $set: input },
                {
                    runValidators: true,
                    new: true,
                })
            return event;
        },
        deleteEvent: async (root, { _id }) => {
            const event = Event.findOneAndDelete(_id);
            return event;
        },
    }


}