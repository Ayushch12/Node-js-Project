//@desc Get all contacts
//@route GET/api/contacts
//@access public
const getContacts = (req,res)=>{
    res.status(200).json({ message: "Get all the messages"})
  };

  //@desc Create new contacts
//@route POST/api/contacts
//@access public
const CreateContact = (req,res)=>{
    res.status(200).json({ message: "Get all the messages"})
  };

//@desc Get all contacts
//@route GET/api/contacts/:id
//@access public
const getContact = (req,res)=>{
    res.status(200).json({ message: `Update contact for ${req.params.id}`})
  };

  //@desc updatel contacts
//@route update/api/contacts/:id
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({ message: `Update contact for ${req.params.id}`})
  };

  //@desc delete contacts
//@route delete/api/contacts:id
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({ message: `Delete contact for ${req.params.id}`})
  };


  module.exports = {getContacts,getContact,CreateContact,deleteContact,updateContact } ;


