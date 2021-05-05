export default `

    type Event {
        _id: String!
        title: String!
        description: String!
        image: String!
    }

    input CreateEventInput {
        title: String!
        description: String!
        image: String!
    }

    type Query {
        event (_id: String!): Event
        events: [Event]
    }
    
    type Mutation {
        createEvent (input: CreateEventInput!): Event
        editEvent (_id: String!, input: CreateEventInput!): Event
        deleteEvent (_id: String!): Event
    }

`