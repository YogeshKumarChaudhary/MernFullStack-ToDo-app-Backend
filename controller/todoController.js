const todoModel = require("../model/todoModel");

const getAllTodo = async (req, res) => {
  try {
    const todo = await todoModel.find();
    res.status(200).json(todo);
  } catch (err) {
    res.status(404).json(err);
  }
};
const getTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await todoModel.findById({ _id: todoId });
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).send(err);
  }
};
const createTodo = async (req, res) => {
  try {
    const todo = await new todoModel(req.body).save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const newData = req.body;
    const todo = await todoModel.findByIdAndUpdate(todoId, newData, {
      new: true,
    });
    res.status(200).json(todo);
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await todoModel.findByIdAndDelete(todoId);
    res.status(200).json({message:"Deleted Succesfully!",todo});
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getAllTodo, getTodo, createTodo, updateTodo, deleteTodo };
