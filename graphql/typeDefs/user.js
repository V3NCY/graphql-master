export default `

    input UserInput {
        email: String!
        password: String!
        hotels: [String]
        firstName: String!
        lastName: String!
        roles: [String]
    }

    type User {
        _id: String!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        hotels: [Hotel]
        roles: [String]
    }

    type Query {
        user (_id: String!): User
        users: [User]
        currentUser: User
    }
    
    type Mutation {
        createUser (input: UserInput!): User
        editUser (_id: String!, input: UserInput!): User 
        deleteUser (_id: String!): User
        login(email: String!, password: String!): String
        logout: User
    }

`