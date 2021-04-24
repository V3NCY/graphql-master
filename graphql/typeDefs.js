// import path from "path";
// import { loadFilesSync } from "@graphql-tools/load-files";

import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from "./typeDefs/user.js";
import hotelType from "./typeDefs/hotel.js";

// const __dirname = path.resolve();
// const typesArray = loadFilesSync(path.join(__dirname, './graphql/types'), { extensions: ['js'] });


export default mergeTypeDefs([userType, hotelType]);