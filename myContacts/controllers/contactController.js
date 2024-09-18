const asyncHandler = require("express-async-handler");
// Get all contacts

const getAllContacts = asyncHandler(async (req, res) => {
  res.send("Contacts Page");
});

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.send("input required");
  }
  res.send("Create Contacts");
});

const getContact = asyncHandler(async (req, res) => {
  res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).send(`Update Contact for ID : ${req.params.id}`);
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).send(`Delete Contact for ID : ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
