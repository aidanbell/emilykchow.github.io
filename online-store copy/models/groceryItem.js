const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groceryItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
  // grocery: { type: mongoose.Schema.Types.ObjectId, ref: "Grocery" }
});

module.exports = mongoose.model("GroceryItem", groceryItemSchema);
