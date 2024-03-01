const router = require("express").Router()
const Todo = require("../models/task")

//routes
router.post("/add/todo",(req, res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo})

    //Save the todo
    newTodo.save()
    .then(() => {
            console.log("Succefully added")
            res.redirect('/')}
    )
    .catch((err) => console.log(err))
})

router.get("/delete/todo/:_id",(req, res) =>{
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Deleted Todo.")
        res.redirect("/")
    })
    .catch((err) => console.log(err))
})



module.exports = router;