const MovieType = new GraphQLObjectType({
    name: "Movie",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      director: {
        type: DirectorsType,
        resolve(parent, args) {
          return directors.findById(parent.directorId);
        },
      },
    }),
  });
  
  const DirectorsType = new GraphQLObjectType({
    name: "Director",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      movies: {
        type: new GraphQLList(MovieType),
        resolve(parent, args) {
          return movies.find({ directorId: parent.id });
        },
      },
    }),
  });

