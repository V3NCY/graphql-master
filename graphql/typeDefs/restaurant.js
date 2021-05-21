import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

export default `

    scalar JSON
    scalar JSONObject

    type Restaurant {
        _id: String!
        title: String!
        description: String!
        extras: String!
        rating: Float!
        image: String!
    }

    input CreateRestaurantInput {
        title: String!
        description: String!
        extras: String!
        rating: Float!
        image: String!
    }

    type Query {
        restaurant (_id: String!): Restaurant
        restaurants: [Restaurant]
        hardcodedRestaurants: JSONObject
    }
    
    type Mutation {
        createRestaurant (input: CreateRestaurantInput!): Restaurant
        editRestaurant (_id: String!, input: CreateRestaurantInput!): Restaurant
        deleteRestaurant (_id: String!): Restaurant
    }

`