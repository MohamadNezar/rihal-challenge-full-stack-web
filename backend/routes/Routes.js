
const express = require('express');

const studentController = require("../controllers/students");
const countryController = require("../controllers/countries");
const classesController = require("../controllers/classes");
const router = express.Router();


router.get("/students",studentController.getAllStudent);
router.post("/add-student",studentController.addStudent);
router.post("/update-student",studentController.update);
router.delete("/delete-student/:id",studentController.deleteStudent);

router.get("/countries",countryController.getAllCuontries);
router.post("/add-country",countryController.addCountry);
router.post("/update-country",countryController.updateCountry);
router.delete("/delete-country/:id",countryController.deleteCountry);

router.get("/classes",classesController.getAllClasses);
router.post("/add-class",classesController.addClass);
router.post("/update-class",classesController.updateClass);
router.delete("/delete-class/:id",classesController.deleteClass);


router.get("/studentsperclass",studentController.studentsPerClass);


router.get("/studentspercountry",studentController.studentsPerCountry);

router.get("/avgageofstudents",studentController.avgAgeOfStudents);

module.exports = router;