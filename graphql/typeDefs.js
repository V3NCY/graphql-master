import userType from "./typeDefs/user.js";
import { mergeTypeDefs } from "@graphql-tools/merge";
import hotelType from "./typeDefs/hotel.js";
import restaurantType from "./typeDefs/restaurant.js";
import eventType from "./typeDefs/event.js"

export default mergeTypeDefs([userType, hotelType, restaurantType, eventType]);