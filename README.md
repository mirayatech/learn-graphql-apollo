# 📖 Overview

In this repository, I'm documenting my progress as I dive deep into the world of GraphQL. With the help of Apollo Server, I've built a GraphQL server and have been actively working on various GraphQL queries and mutations. Join me as I explore this technology and build a simple schema to manage and query video game data.

## 🏗️ Project Structure

### 🚀 index.ts

The heart of this project is the `index.ts` file. Here's a brief overview of what I've accomplished:

- Setup an Apollo Server, incorporating the defined schema (`typeDefs`) and the corresponding resolvers (`resolvers`).
- Skillfully crafted resolvers for querying games, authors, reviews, and related data.
- Added mutations for adding, updating, and deleting games.

### 💾 database.ts

Within `database.ts`, I've created mock data to serve as the initial dataset for the GraphQL server. This data consists of:

- A collection of video games, each with details such as title, platform, and a unique ID.
- A list of authors, including their names and verification status.
- A set of reviews, each linked to an author and a game, complete with ratings and content.

### 📋 schema.ts

In `schema.ts`, I've defined the GraphQL schema using the Schema Definition Language (SDL). The schema outlines the various types, queries, mutations, and input types utilized in this project:

- Types for `Game`, `Review`, and `Author`, each with their own distinct fields and relationships.
- Queries designed to fetch games, reviews, authors, and individual items via their unique IDs.
- Mutations for adding, deleting, and updating game data.

## 🧠 Learning Focus

This project has been my personal playground for mastering GraphQL. My learning journey has included:

- Crafting a GraphQL schema using SDL.
- Skillfully implementing GraphQL resolvers to handle queries and mutations.
- Leveraging Apollo Server to set up a GraphQL server.
- Engaging in basic CRUD operations (Create, Read, Update, Delete) through GraphQL mutations.
- Forming connections between GraphQL types, such as the relationships between games, authors, and reviews.

## 📈 My Progress

Throughout this journey, I've achieved various milestones:

- Successfully set up a GraphQL server using Apollo Server.
- Created a robust schema to define the structure of data.
- Implemented resolvers to handle queries and mutations with precision.
- Gained experience in establishing relationships between different types.
- Improved my ability to model and manipulate data using GraphQL.

## 🚗 Getting Started

To dive into my learning journey and explore this project on your own:

1. 📦 Clone this repository to your local machine.
2. ⚙️ Install the necessary dependencies by running `npm install`.
3. 🚀 Start the server with `npm start`.


## 📸	Screenshots

![Screenshot 2023-08-21 at 19 28 46](https://github.com/mirayatech/learn-graphql-apollo/assets/71933266/f701e573-6e7a-4506-bddd-89ad4a688b83)
![Screenshot 2023-08-21 at 19 35 05](https://github.com/mirayatech/learn-graphql-apollo/assets/71933266/99be15a9-e0d6-404f-bbd3-5a66134471dc)
![Screenshot 2023-08-21 at 19 27 48](https://github.com/mirayatech/learn-graphql-apollo/assets/71933266/a60d59ce-d3fc-4de5-9eeb-3573f72ccfc9)
![Screenshot 2023-08-21 at 15 28 50](https://github.com/mirayatech/learn-graphql-apollo/assets/71933266/7455715b-fc7b-4982-9576-083600df5b4e)


