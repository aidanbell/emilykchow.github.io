var express = require("express");
var router = express.Router();
var groceryItemCtrl = require("../controllers/groceryItems");

router.get("/", groceryItemCtrl.indexGroceryItem);
router.get("/new", groceryItemCtrl.newGroceryItem);
router.post("/", groceryItemCtrl.createGroceryItem);
router.post("/:id", groceryItemCtrl.editGroceryItem);
router.delete("/delete/:id", groceryItemCtrl.removeGroceryItem);
router.get("/:id", groceryItemCtrl.showGroceryItem);
router.post("/grocerylist/:id/addgrocery", groceryItemCtrl.addToGroceryList);
router.delete("/delete/:id", groceryItemCtrl.removeGroceryFromList);

module.exports = router;
