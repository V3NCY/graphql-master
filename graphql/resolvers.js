import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./resolvers/user.js";
import hotelResolver from "./resolvers/hotel.js";

export default mergeResolvers([userResolver, hotelResolver]);