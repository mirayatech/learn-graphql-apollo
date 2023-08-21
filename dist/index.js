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
        game(_, args) {
            return database.games.find((game) => game.id === args.id);
        },
        authors() {
            return database.authors;
        },
        author(_, args) {
            return database.authors.find((author) => author.id === args.id);
        },
        reviews() {
            return database.reviews;
        },
        review(_, args) {
            return database.reviews.find((review) => review.id === args.id);
        },
    },
    Game: {
        reviews(parent) {
            return database.reviews.filter((r) => r.game_id === parent.id);
        },
    },
    Review: {
        author(parent) {
            return database.authors.find((a) => a.id === parent.author_id);
        },
        game(parent) {
            return database.games.find((g) => g.id === parent.game_id);
        },
    },
    Author: {
        reviews(parent) {
            return database.reviews.filter((r) => r.author_id === parent.id);
        },
    },
};
const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers, // Handle queries using the defined resolvers
    });
    // Start the server on port 4000 and get its URL
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log("Server ready at", url);
};
startServer();
