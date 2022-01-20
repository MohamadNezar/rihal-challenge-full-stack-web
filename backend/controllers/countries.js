

const Country = require("../models/country");


exports.getAllCuontries= (req,res,next)=>{
    Country.fetchAll().then(data=>res.json(data[0])).catch(err=>res.json({message:err.message}));
}

exports.deleteCountry=(req,res,next)=>{
Country.deleteById(req.params.id).then(data=>res.json(data)).catch(err=>res.json(err.message));
}


exports.updateCountry=(req,res,next)=>{
const updatedCountry = new Country(req.body.id,req.body.name);
if(updatedCountry.name==null)
res.status(400).send('name should not be null!');
else
updatedCountry.update().then(()=>res.send('update country succesfully!')).catch(err=>res.json(err.message));
}

exports.addCountry = (req,res,next)=>{
const newCountry = new Country(null,req.body.name);
if(newCountry.name==null)
res.status(400).send('name should not be null!');
else
newCountry.save().then(()=>res.send("Country Added Successfuly!")).catch(err=>res.json(err.message));
}