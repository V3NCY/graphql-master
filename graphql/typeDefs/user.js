export default `

    input UserInput {
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
        hotels: [String]
        firstName: String!
        lastName: String!
        roles: [String]
        events: [Event]
    }

    type User {
        _id: String!
        username: String!
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
        registerUser (input: UserInput!): User
        editUser (_id: String!, input: UserInput!): User 
        deleteUser (_id: String!): User
        login(username: String!, email: String!, password: String!): String
        logout: User
        
    }

`