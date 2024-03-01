const express = require("express");
const { default: mongoose } = require("mongoose");


const app = express()
const PORT = process.env.PORT || 3000;

//DB connection
mongoose.connect('mongodb://127.0.0.1:27017/todo-app');

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))
app.set("view engine", "ejs")

//Routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})