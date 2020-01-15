var express = require("express");
var router = express.Router();
var apiGroceryCtrl = require("../controllers/api/grocery");
var apiGroceryListCtrl = require("../controllers/api/grocerylist");

router.get("/groceries", apiGroceryCtrl.getAllGroceries);
router.get("/groceries/:id", apiGroceryCtrl.getOneGrocery);
router.post("/groceries", apiGroceryCtrl.createGrocery);
router.put("/groceries/:id", apiGroceryCtrl.updateGrocery);
router.delete("/groceries/:id", apiGroceryCtrl.deleteGrocery);

router.get("/grocerylist", apiGroceryListCtrl.getAllGroceriesLists);
router.get("/grocerylist/:id", apiGroceryListCtrl.getOneGroceryList);
router.post("/grocerylist", apiGroceryListCtrl.createGroceryList);
router.put("/grocerylist/:id", apiGroceryListCtrl.updateGroceryList);
router.delete("/grocerylist/:id", apiGroceryListCtrl.deleteGroceryList);

module.exports = router;
