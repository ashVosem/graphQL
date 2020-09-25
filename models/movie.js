const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// "id": "5f6b3be0020392f7e4f5ac8f"

const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: String,
});

module.exports = mongoose.model("Movie", movieSchema);
