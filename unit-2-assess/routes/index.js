const express = require("express");
const router = express.Router();
const { todos } = require("../data/todos");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "To Do", todos });
});

router.post("/", function(req, res, next) {
  const todo = {
    title: req.body.todo,
    done: false
  };

  todos.push(todo);
  return res.redirect("back");
});

module.exports = router;
