const express = require("express");
const app = express();
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