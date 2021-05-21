import Restaurant from "../../models/Restaurant.js";
import hardcodedRestaurants from './hardcodedrestaurants.js'
export default {
    Query: {
        restaurant: async (root, { _id }) => {
            const restaurant = await Restaurant.findById(_id);
            return restaurant;
        },
        restaurants: async () => {
            const restaurants = await Restaurant.find({});
            return restaurants;
        },
        hardcodedRestaurants: () => {
            return hardcodedRestaurants
        },
        hardcodedRestaurants: () => {
            return hardcodedRestaurants
        },
    },
    Mutation: {
        createRestaurant: async (root, args) => {
            const newRestaurant = new Restaurant(args.input)
            await newRestaurant.save();
            return newRestaurant;
        },
        editRestaurant: async (root, { _id, input }) => {
            const restaurant = await Restaurant.findByIdAndUpdate(_id,
                { $set: input },
                {
                    runValidators: true,
                    new: true,
                })
            return restaurant;
        },
        deleteRestaurant: async (root, { _id }) => {
            const restaurant = Restaurant.findOneAndDelete(_id);
            return restaurant;
        },
    }


}