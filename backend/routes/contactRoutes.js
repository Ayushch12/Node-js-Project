const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  deleteContact,
  updateContact,
} = require("../controllers/contactController");

//Define a get method firn all contacts-------
router.route("/").get(getContacts).post(createContact);

//Define a GET:id methodd -------
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;


