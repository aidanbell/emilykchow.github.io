const groceryList = require("../../models/groceryList");

function getAllGroceriesLists(req, res) {
  GroceryList.find({}).then(function(groceryLists) {
    res.status(200).json(groceryLists);
  });
}

// Show one grocery
function getOneGroceryList(req, res) {
  GroceryList.findById(req.params.id).then(function(groceryList) {
    res.status(200).json(groceryList);
  });
}
// Create new grocery
function createGroceryList(req, res) {
  GroceryList.create(req.body).then(function(groceryList) {
    res.status(201).json(groceryList);
  });
}

// Delete one grocery
function deleteGroceryList(req, res) {
  GroceryList.findByIdAndRemove(req.params.id).then(function(groceryList) {
    res.status(200).json(groceryList);
  });
}

// Update grocery
function updateGroceryList(req, res) {
  GroceryList.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    function(groceryList) {
      res.status(200).json(groceryList);
    }
  );
}

module.exports = {
  getAllGroceriesLists,
  getOneGroceryList,
  createGroceryList,
  deleteGroceryList,
  updateGroceryList
};
