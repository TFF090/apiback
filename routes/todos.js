const { Router } = require("express");
const router = Router();

const Todo = require("../models/todo");

// get all todos 
router.get("/", async (req, res) => {
    try {
        const todo = await Todo.find({});

        res.json(todo);
    } catch (error) {
        console.log({
            error,  
            message: "Get metod ishlamad, Nmadr notor",
        });
    }
});

//  add POST - todo 
router.post("/", async (req, res) => {
    const { title } = req.body;

    let todo = await Todo.findOne({title});
    if (todo) return res.send("This todo already axists");

    todo = new Todo(req.body);
    await todo.save();

    res.send("Todo added")
});

// ID boycha get qlad
router.get("/:_id", async (req, res) => {
    try {
        const todo = await Todo.find({_id: req.params._id});

        res.json(todo);
    } catch (error) {
        console.log({
            error,
            message: "Get metod ishlamad, Nmadr notor",
        });
    }
});

//  delete divece
router.delete("/:_id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete({_id: req.params._id});

        res.send(`Todo with id ${ req.params._id} deleted ok`);
    } catch (error) {
        console.log({
            error,
            message: "Get metod ishlamad, Nmadr notor",
        });
    }
});

// edit delete
router.patch("/:_id", async (req, res) => {
    try {
        const _id = req.params._id;
        const updTodo = req.body

        const result = await Todo.findByIdAndUpdate(_id, updTodo);
        res.send(result);
    } catch (error) {
        console.log({
            error,
            message: "Get metod ishlamad, Nmadr notor",
        });
    }
});

module.exports = router