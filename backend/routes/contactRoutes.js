const express = require("express");
const router = express.Router();

//Define a get method -------
router.route("/").get((req,res)=>{
  res.status(200).json({ message: "Get all the messages"})
});

//Define a post method -------
router.route("/").post((req,res)=>{
    res.status(200).json({ message: "Create a contact"})
  });

  //Define a put method -------
router.route("/:id").put((req,res)=>{
    res.status(200).json({ message: `Update contact for ${req.params.id}`})
  });

  //Define a delete method -------
router.route("/:id").delete((req,res)=>{
    res.status(200).json({ message: `Delete contact for ${req.params.id}`})
  });

module.exports = router;
