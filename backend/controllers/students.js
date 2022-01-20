const Student = require("../models/student");



exports.getAllStudent=(req,res,next)=>{

Student.fetchAll().then((data)=>res.json(data[0])).catch(err=>res.json({message:err.message}));

}

exports.addStudent = (req,res,next)=>{
const student  = new Student(null,req.body.classId,req.body.countryId,req.body.name,req.body.dateOfBirth);
if(student.classId==null||student.countryId==null||student.dateOfBirth==null||student.name==null)
res.status(400).send('All fields mandatory!');
else
student.save().then(()=>res.send('added student succesfully')).catch(err=>res.json(err.message));
}

exports.update = (req,res,next)=>{
   const student = new Student(req.body.id,req.body.classId,req.body.countryId,req.body.name,req.body.dateOfBirth);
   if(student.id==null||student.classId==null||student.countryId==null||student.dateOfBirth==null||student.name==null)
res.status(400).send('All fields mandatory!');
else
   student.update().then(()=>res.send('update student succesfully')).catch(err=>res.json(err.message));

}


exports.deleteStudent = (req,res,next)=>{

Student.deleteById(req.params.id).then((data)=>res.json(data)).catch(err=>res.json(err.message));

}

exports.studentsPerClass =(req,res,next)=>{
   Student.getStudentsPerClass().then(data=>res.json(data[0])).catch(err=>res.json(err.message));
}

exports.studentsPerCountry = (req,res,next)=>{
   Student.getStudentsPerCountry().then(data=>res.json(data[0])).catch(err=>res.json(err.message));
}

exports.avgAgeOfStudents =(req,res,next)=>{
Student.getAvgAgeOfStudents().then(data=>res.json(data[0])).catch(err=>res.json(err.message));
}