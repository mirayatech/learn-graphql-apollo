import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import database from "./database";
import { typeDefs } from "./schema";

// Define resolvers for GraphQL queries
const resolvers = {
  Query: {
    games() {
      return database.games;
    },
    reviews() {
      return database.reviews;
    },
    authors() {
      return database.authors;
    },
    review(_, args) {
      return database.reviews.find((review) => review.id === args.id);
    },
    game(_, args) {
      return database.games.find((game) => game.id === args.id);
    },
    author(_, args) {
      return database.authors.find((author) => author.id === args.id);
    },
  },
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs, // Define the schema and its types
    resolvers, // Handle queries using the defined resolvers
  });

  // Start the server on port 4000 and get its URL
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log("Server ready at", url);
};

startServer();
