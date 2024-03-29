export default `

    input UserInput {
        email: String!
        password: String!
        confirmPassword: String!
        firstName: String!
        lastName: String!
        hotels: [String]
        events: [String]
        roles: [String]
    }

    type User {
        _id: String!
        email: String!
        password: String!
        confirmPassword: String!
        firstName: String!
        lastName: String!
        hotels: [Hotel]
        events: [Event]
        roles: [String]
    }

    type Query {
        user (_id: String!): User
        users: [User]
        currentUser: User
    }
    
    type Mutation {
        registerUser (input: UserInput!): String
        editUser (_id: String!, input: UserInput!): User 
        deleteUser (_id: String!): User
        login( email: String!, password: String!): String
        logout: User
        
    }

`