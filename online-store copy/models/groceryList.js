const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groceryListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  groceryItems: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "GroceryItem" }]
  }
});

module.exports = mongoose.model("GroceryList", groceryListSchema);
