const express = require("express");
const router = express.Router();
const {getContact,
    getContacts,
    CreateContact,
    deleteContact,
    updateContact} = require("../controllers/contactController")

//Define a get method firn all contacts-------
router.route("/").get(getContacts);

//Define a POST method -------
router.route("/").post( CreateContact);

//Define a GET:id methodd -------
  router.route("/:id").get(  getContact);

  //Define a PUT:id method ----------------
router.route("/:id").put( updateContact);

  //Define a DELETE:id method -------
router.route("/:id").delete(deleteContact);

module.exports = router;
