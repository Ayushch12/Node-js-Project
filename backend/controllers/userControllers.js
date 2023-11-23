// const asyncHandler = require("express-async-handler") ;
// const bcrypt = require("bcrypt");
// const User = require("../models/userModel")

// //@desc Register a user
// //@route POST/api/users/register
// //@access public
// const registerUser = asyncHandler(async(req, res) => {
//     const {username,email,password} = req.body;
//     if(!username || !email || password ){
//         res.status(400);
//         throw new Error("All field are mandatory!");
//     }
//     const userAvailable = await User.findOne({email});
//     if(userAvailable){
//         res.status(400);
//         throw new Error("User already register!");
//     }

//     //Hash Password -------
// const hashedPassword = await bcrypt.hash(password, 10);
// console.log("Hashed Password", hashedPassword);
//   res.json({message: "Register the user"})
//   });

//   //@descLogin a user
// //@route POST/api/users/Login
// //@access public
// const loginUser = asyncHandler(async (req, res)=>{
//     res.json({message: "login user"});
// });

//     //@desc Currnet user info
// //@route PUT/api/users/current
// //@access private
// const currentUser = asyncHandler(async(req, res)=>{
//     res.json({message: "Current user information"});
// });

//   module.exports= {registerUser,loginUser,currentUser};


const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc Register a user
//@route POST/api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  // Hash Password -------
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password", hashedPassword);
  res.json({ message: "User registered successfully!" });
});

//@desc Login a user
//@route POST/api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//@desc Current user info
//@route GET/api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
