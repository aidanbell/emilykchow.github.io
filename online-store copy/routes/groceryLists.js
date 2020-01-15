var express = require("express");
var router = express.Router();
var groceryListCtrl = require("../controllers/groceryLists");

router.get("/", groceryListCtrl.indexGroceryList);
router.get("/new", groceryListCtrl.newGroceryList);
router.post("/:id", groceryListCtrl.editGroceryList);
router.post("/", groceryListCtrl.createGroceryList);
router.get("/:id", groceryListCtrl.showGroceryList);
router.get("/delete/:id", groceryListCtrl.removeGroceryList);

module.exports = router;
