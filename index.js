const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const mongoose = require("mongoose");

const Post = require("./Models/Post");
const user = require("./Models/User");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect("mongodb://localhost:27017/mern-graphql")
  .then(() => {
    console.log("connection successfull!!!");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server is running at ${res.url}`);
  })
  .catch((error) => {
    console.log("something went wrong", error);
  });
