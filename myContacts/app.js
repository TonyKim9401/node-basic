const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('Hello, Node!');
})

// get contacts
app.get("/contacts", (req, res) => {
    res.send('Contacts Page');    
})

// get a specific contact
app.get("/contacts/:id", (req, res) => {
    res.send(`View Contact for ID: ${req.params.id}`);
})

// create new contact
app.post("/contacts", (req, res) => {
    res.send('Create Contacts');
})

// update contact
app.put("/contacts/:id", (req, res) => {
    res.send(`Update Contact for ID : ${req.params.id}`);
})

// delete contact
app.delete("/contacts/:id", (req, res) => {
    res.send(`Delete Contact for ID : ${req.params.id}`);
})

app.listen(3000, () => {
    console.log('The server is running');
})