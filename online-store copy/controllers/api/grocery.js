const GroceryItem = require("../../models/groceryItem");

function getAllGroceries(req, res) {
  GroceryItem.find({}).then(function(groceries) {
    res.status(200).json(groceries);
  });
}

// Show one grocery
function getOneGrocery(req, res) {
  GroceryItem.findById(req.params.id).then(function(grocery) {
    res.status(200).json(grocery);
  });
}
// Create new grocery
function createGrocery(req, res) {
  GroceryItem.create(req.body).then(function(grocery) {
    res.status(201).json(grocery);
  });
}

// Delete one grocery
function deleteGrocery(req, res) {
  GroceryItem.findByIdAndRemove(req.params.id).then(function(grocery) {
    res.status(200).json(grocery);
  });
}

// Update grocery
function updateGrocery(req, res) {
  GroceryItem.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    function(grocery) {
      res.status(200).json(grocery);
    }
  );
}

module.exports = {
  getAllGroceries,
  getOneGrocery,
  createGrocery,
  deleteGrocery,
  updateGrocery
};
