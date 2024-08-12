const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();

dbConnect();

const router = require("./routes/contactRoutes");

app.get("/", (req, res) => {
    res.send('Hello, Node!');
})

// body parser middleware register
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use("/contact", router);

app.listen(3000, () => {
    console.log('The server is running');
})