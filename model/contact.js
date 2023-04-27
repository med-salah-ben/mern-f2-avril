const mongoose = require("mongoose");
const {model , Schema} = mongoose;

const contactSchema = new Schema({
    name:{type:String , required:true},
    email:{type:String, required:true },
    phone: String
});

const Contact = model("Contacts" , contactSchema);

module.exports = Contact;