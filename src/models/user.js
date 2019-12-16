const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);
