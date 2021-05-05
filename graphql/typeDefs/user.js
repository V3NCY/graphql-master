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
        login(email: String!, password: String!): String
        logout: User
        
    }

`