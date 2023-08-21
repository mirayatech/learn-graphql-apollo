import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import database from "./database";
import { typeDefs } from "./schema";
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
    },
};
// server setup
const server = new ApolloServer({
    typeDefs,
    // handle queires based on our schemas and types
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log("server ready at port", 4000);
