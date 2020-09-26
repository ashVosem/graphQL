const graphql = require("graphql");
const directors = require("../models/director");
const movies = require("../models/movie");

const Types = require("../types/types");
const Mutation = require("../mutations/mutations");

const MovieType = Types.MovieType;
const DirectorsType = Types.DirectorsType;

const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movies.findById(args.id);
      },
    },
    director: {
      type: DirectorsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return directors.findById(args.id);
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies.find({});
      },
    },
    directors: {
      type: new GraphQLList(DirectorsType),
      resolve(parent, args) {
        return directors.find({});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
