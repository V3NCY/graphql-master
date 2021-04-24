import userType from "./typeDefs/user.js";
import { mergeTypeDefs } from "@graphql-tools/merge";
import hotelType from "./typeDefs/hotel.js";

export default mergeTypeDefs([userType, hotelType]);