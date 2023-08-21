/*
    Main types:
    - string
    - int
    - float
    - boolean
    - ID
*/
export const typeDefs = `#graphql
 type Game {
    is: ID!
    title: String!
    platform: [String!]!
}

type Review {
    id: ID!
    rating: Int!
    content: String!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
}

type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
}
`;
