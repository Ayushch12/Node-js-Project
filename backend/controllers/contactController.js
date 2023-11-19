const asyncHandler = require("express-async-handler") ;
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route GET/api/contacts
//@access public
const getContacts = asyncHandler(async(req, res) => {
  const contacts = await Contact.find();     // Thsi is comming from the contactModel
  res.status(200).json( contacts);
});
//@desc Create new contacts
//@route POST/api/contacts
//@access public

const createContact = asyncHandler(async(req, res) => {
  console.log("The request body is : ", req.body);
  const {name, email, phone} = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone
  });
  res.status(201).json(contact);
});
//@desc Get contact by ID
//@route GET/api/contacts/:id
//@access public
const getContact = async(req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};
//@desc Update contacts
//@route PUT/api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete contacts
//@route DELETE/api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
};
