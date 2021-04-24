export default `

    type Hotel {
        _id: String!
        title: String!
        description: String!
        extras: String!
        rating: Float!
        image: String!
    }

    input CreateHotelInput {
        title: String!
        description: String!
        extras: String!
        rating: Float!
        image: String!
    }

    type Query {
        hotel (_id: String!): Hotel
        hotels: [Hotel]
    }
    
    type Mutation {
        createHotel (input: CreateHotelInput!): Hotel
        editHotel (_id: String!, input: CreateHotelInput!): Hotel
        deleteHotel (_id: String!): Hotel
    }

`