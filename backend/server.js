const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const { connect } = require("http2");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection")

connectDb();
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());       //Build middleware for post request
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

