import mongoose from 'mongoose'

import { ContactSchema} from '../models/crmModel'

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = async (req, res) => {
    
    try {
        let newContact = new Contact(req.body);
        await newContact.save(); 
        res.json(newContact)
    } catch (error) {
        res.send(error)
    }
        //  newContact.save( ( err, contact) => {
        //     if( err) res.send(err)

        //     res.json(contact)
        // })
}

export const getContact = async (req, res) => {
    

    try {
        let contacts = await Contact.find({});
        res.json(contacts)
    } catch (error) {
        res.send(error)
    }


    // Contact.find({}, (err, contact)=>{
    //     if( err) res.send(err)
    //     res.json(contact)
    // })

}

export const getContactWithID = async (req, res) => {
    

    try {
        let contact = await Contact.findById(req.params.contactID);
        res.json(contact)
    } catch (error) {
        res.send(error)
    }

    // Contact.findById(req.params.contactID, (err, contact)=>{
    //     if( err) res.send(err)
    //     res.json(contact)
    // })

}


export const updateContact = async (req, res) => {

    try {
        let contact = await  Contact.findOneAndUpdate(
        {
            _id: req.params.contactID
        }, 
        req.body
        ,
        { new: true, useFindAndModify: false}
        );
        res.json(contact)
    } catch (error) {
        res.send(error)
    }
    
    // Contact.findOneAndUpdate({
    //     _id: req.params.contactID
    // }, 
    // req.body
    // ,
    // { new: true, useFindAndModify: false}
    // ,
    // (err, contact) => {
    //     if( err) res.send(err)
    //     res.json(contact)
    // })

}


export const deleteContact = async (req, res) => {

    try {
        await Contact.remove({
            _id: req.params.contactID
        });

        res.json({
            message: "successfully deleted contact"
        })
    } catch (error) {
        res.send(error)
    }
    
    // Contact.remove({
    //     _id: req.params.contactID
    // }, (err) => {
    //     console.log(err)

    //     if( err) res.send(err)
    //     res.json({
    //         message: "successfully deleted contact"
    //     })
    // })    

}