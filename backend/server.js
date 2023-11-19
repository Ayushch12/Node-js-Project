const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 4000;

app.get("/api/contacts", (req,res)=>{
    res.json("Get all the contact")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

