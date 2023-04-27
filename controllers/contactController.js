const Contact = require('../model/contact');



exports.postContact = async(req,res)=>{
    try {
        const {name , email ,phone} = req.body ;
        if(!name || !email || !phone){
            return res.status(400).send({msg:"please enter all fields..!"})
        }
        const contact = await Contact.findOne({email:email})
        if(contact){
            return res.status(400).send({msg:"Contact already exist !"})
        }

        const newContact = new Contact({name , email , phone})
        await  newContact.save();
        return res.status(201).send({msg:"Adding Contact Successfully..." , response:newContact})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg : "can not adding contact!!!"})

    }
}

exports.getContacts =async(req,res)=>{
    try {
        const result = await Contact.find({});
        return res.status(200).send({msg:"Getting Contacts Success" , response : result})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg : "can not getting contacts!!!"})
    }
}

exports.getContact =async(req,res)=>{
    try {
        const id = req.params.id
        const result = await Contact.findOne({_id:id});
        if(!result){
            return res.status(400).send({msg:"can not Get Contact with this ID"})
        }
        return res.status(200).send({msg:"Getting Contact Success" , response : result})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg : "can not getting contact!!!"})
    }
}

exports.deleteContact =async(req,res)=>{
    try {
        const id = req.params.id
        await Contact.findOneAndDelete({_id:id});
        return res.status(200).send({msg:"Delete Contact Success" })
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg : "can not delete contact!!!"})
    }
}

exports.updateContact =async(req,res)=>{
    try {
        const id = req.params.id
        const data = req.body
        await Contact.findOneAndUpdate({_id:id} , {$set:{...data}});
        return res.status(200).send({msg:"Update Contact Success" })
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg : "can not Update contact!!!"})
    }
}