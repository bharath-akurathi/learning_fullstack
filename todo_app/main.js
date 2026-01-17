// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // todos is the collection inside the todo db
    // a new document will be created by the following syntax
    const todo = new Todo({
        desc: "Description of this todo",
        isDone: false,
        days: Math.floor(Math.random() * 45 + 5 * Math.random())
    })
    todo.save()
    res.send('Hello World!')
})

//to check the documents 
app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({ title: todo.title, desc: todo.desc })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})