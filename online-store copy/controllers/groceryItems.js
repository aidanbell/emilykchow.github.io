var GroceryItem = require("../models/groceryItem");
var GroceryList = require("../models/groceryList");

// This just displays the add grocery item
function newGroceryItem(req, res) {
  res.render("grocery/new", { title: "Add Groceries" });
}

// "Add item button"
function createGroceryItem(req, res) {
  var grocery = new GroceryItem(req.body);
  grocery.save(function(err) {
    if (err) return res.redirect("/grocery/add");
    console.log(grocery);
    // for now, redirect right back to new.ejs
    res.redirect("/grocery");
  });
}

// review controller
function addToGroceryList(req, res) {
  var groceryItem = GroceryItem.findById(req.params.id);
  GroceryList.findById(req.body.groceryListId, function(err, groceryList) {
    groceryList.groceryItems.push(groceryItem);
    groceryList.save(function(err) {
      res.redirect(`/grocery/${grocery._id}`);
    });
  });
}

function removeGroceryFromList(req, res) {
  GroceryList.findById(req.body.groceryListId, function(err, groceryList) {
    groceryList.groceryItems.pop(groceryItem);
    groceryList.save(function(err) {
      res.redirect(`/grocery/${groceryList._id}`);
    });
  });
}

function removeGroceryItem(req, res) {
  GroceryItem.findByIdAndDelete(req.params.id, function(err, grocery) {
    if (err) return res.redirect(`/grocery/${grocery._id}`);
  });
  return res.redirect("/grocery/");
}

function editGroceryItem(req, res) {
  var grocery = {
    name: req.body.name,
    stock: req.body.stock
  };
  GroceryItem.update({ _id: req.params.id }, grocery, function(err, grocery) {
    res.redirect(`/grocery/${req.params.id}`);
  });
}

function showGroceryItem(req, res) {
  GroceryItem.findById(req.params.id, function(err, grocery) {
    res.render("grocery/show", {
      title: "Grocery Details",
      grocery
    });
  });
}

function indexGroceryItem(req, res) {
  GroceryItem.find({}, function(err, groceries) {
    res.render("grocery/index", { title: "All Groceries", groceries });
  });
}

function addToGroceryList(req, res) {
  GroceryList.findById(req.params.id, function(err, grocerylist) {
    grocerylist.groceryItems.push(req.body.groceryId);
    grocerylist.save(function(err) {
      res.redirect(`/grocerylist/${req.params.id}`);
    });
  });
}

module.exports = {
  newGroceryItem,
  createGroceryItem,
  removeGroceryItem,
  editGroceryItem,
  showGroceryItem,
  indexGroceryItem,
  addToGroceryList,
  removeGroceryFromList
};
