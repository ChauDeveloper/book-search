const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    _id: ID
    author: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type Auth {
    token: ID!
    user: User
  }
  input savedBook{
    authors: String
    description: String
    bookId: String
    image: String
    link: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(userId: ID!, input:savedBook): User
    removeBook(bookId:ID!):User
  }
`;

module.exports = typeDefs;