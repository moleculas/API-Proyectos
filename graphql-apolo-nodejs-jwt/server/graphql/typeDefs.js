const { gql } = require('apollo-server');

module.exports = gql`
type Query {
  ping: String!,
  users: [User!],
  user(id: ID!): User
}

type Mutation {
  registerUser(registerInput: RegisterInput): User,  
  loginUser(loginInput: LoginInput): User
}

type User { 
 userName: String, 
 email: String,
 password: String,  
 token: String
}

input RegisterInput {
 userName: String, 
 email: String
 password: String,
 confirmPassword: String
}

input LoginInput {
 email: String,
 password: String
}
`