const express = require("express");
const {
  getAllTodo,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");
const router = express.Router();

router.post("/", createTodo);
router.get("/", getAllTodo);
router.get("/:id", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
