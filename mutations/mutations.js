const graphql = require("graphql");
const directors = require("../models/director");
const movies = require("../models/movie");

const Types = require("../types/types");

const MovieType = Types.MovieType;
const DirectorsType = Types.DirectorsType;

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addDirector: {
      type: DirectorsType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const director = new directors({
          name: args.name,
          age: args.age,
        });
        return director.save();
      },
    },
    addMovie: {
      type: MovieType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        directorId: { type: GraphQLID },
      },
      resolve(parent, args) {
        const movie = new movies({
          name: args.name,
          genre: args.genre,
          directorId: args.directorId,
        });
        return movie.save();
      },
    },
  },
});

module.exports = Mutation;
