import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./resolvers/user.js";
import hotelResolver from "./resolvers/hotel.js";
import restaurantResolver from "./resolvers/restaurant.js"
import eventResolver from "./resolvers/event.js"

export default mergeResolvers([userResolver, hotelResolver, restaurantResolver, eventResolver]);