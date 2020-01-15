var GroceryItem = require("../models/groceryItem");
var GroceryList = require("../models/groceryList");

// This just displays the add grocery item
function newGroceryList(req, res) {
  res.render("groceryList/new", { title: "Add Grocery List" });
}

// "Add item button"
function createGroceryList(req, res) {
  var groceryList = new GroceryList(req.body);
  groceryList.save(function(err) {
    if (err) return res.redirect("/groceryList");
    res.redirect(`/groceryList/${groceryList._id}`);
  });
}

function removeGroceryList(req, res) {
  GroceryList.findByIdAndDelete(req.params.id, function(err) {
    if (err) return res.redirect(`groceryList/`);
    res.redirect("/groceryList");
  });
}

///update
function editGroceryList(req, res) {
  var groceryList = {
    name: req.body.name
  };
  GroceryList.update({ _id: req.params.id }, groceryList, function(err) {
    res.redirect(`/grocerylist/${req.params.id}/`);
  });
}

// find grocery list
// list out all items
// remove that item from groceryList { groceryItems[] }

function showGroceryList(req, res) {
  GroceryList.findById(req.params.id)
    .populate("groceryItems")
    .exec(function(err, grocerylist) {
      GroceryItem.find({}, function(err, groceries) {
        res.render("groceryList/show", {
          title: "Grocery List Details",
          grocerylist,
          groceries
        });
      });
    });
}

//list
function indexGroceryList(req, res) {
  GroceryList.find({}, function(err, groceryLists) {
    res.render("groceryList/index", {
      title: "All Grocery Lists",
      groceryLists
    });
  });
}

module.exports = {
  newGroceryList,
  createGroceryList,
  removeGroceryList,
  editGroceryList,
  showGroceryList,
  indexGroceryList
};
