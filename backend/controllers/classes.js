

const Class = require("../models/class");
const { updateCountry } = require("./countries");



exports.getAllClasses = (req,res,next)=>{

Class.fetchAll().then(data=>res.json(data[0])).catch(err=>res.json({message:err.message})); 
}

exports.deleteClass = (req,res,next)=>{
Class.deleteById(req.params.id).then(data=>res.json(data)).catch(err=>res.json(err.message));
}

exports.addClass = (req,res,next)=>{
const newClass = new Class(null,req.body.name);
if(newClass.name==null)
    res.status(400).send('name should not be null!');
    else
newClass.save().then(()=>res.send('class added successfully!')).catch(err=>res.json(err.message));
}

exports.updateClass= (req,res,next)=>{
    const updatedClass = new Class(req.body.id,req.body.name);
    if(updatedClass.name==null)
    res.status(400).send('name should not be null!');
    else
    updatedClass.update().then(()=>res.send('update class succesfully!')).catch(err=>res.json(err.message));
}