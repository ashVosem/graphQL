const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schema/schema");

const app = express();
const PORT = 3001;

mongoose
  .connect(
    "mongodb+srv://ashvosem:8278151an@cluster0.v57cv.mongodb.net/learning?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to DB"))
  .catch(() => console.log("not connected to DB"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(cors());

app.listen(PORT, (err) => {
  err ? console.log(error) : console.log("Server started!");
});
