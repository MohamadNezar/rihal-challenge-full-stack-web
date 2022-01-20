const db = require("../util/database");

module.exports = class Student {
  constructor(
    id,
    classId,
    countryId,
    name,
    dateOfBirth,
    ) {
    this.id = id;
    this.classId = classId;
    this.countryId = countryId;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }

  save() {
    return db.execute(
      'INSERT INTO students (class_id,country_id,name,date_of_birth) VALUES (?,?,?,?)',
      [this.classId, this.countryId, this.name, this.dateOfBirth]
    );
  }

   update(){
    
    return db.execute('UPDATE students SET name = ?,class_id = ?,country_id = ? ,date_of_birth = ?, modified_date = ? WHERE id = ?',[this.name,this.classId,this.countryId,this.dateOfBirth,new Date(),this.id]);
  }


  static fetchAll() {
    return db.execute('SELECT students.id,students.name AS Name,classes.class_name AS Class,countries.name as Country,students.class_id AS classId,students.country_id AS countryId,DATE_FORMAT(`date_of_birth`,"%m/%d/%Y") AS "Date of Birth",DATE_FORMAT(students.created_date, "%m/%d/%Y %H:%i") AS "Created",DATE_FORMAT(students.modified_date, "%m/%d/%Y %H:%i") AS "Modified" FROM `students` LEFT JOIN `classes` ON students.class_id=classes.id LEFT JOIN `countries` ON students.country_id=countries.id;');
  }

  static findById(id) {
    return db.execute('SELECT * FROM students WHERE students.id = ?', [id]);
  }

  static deleteById(id){
    return db.execute("DELETE FROM students WHERE students.id = ?",[id]);
  }

static getStudentsPerClass(){
  return db.execute('SELECT classes.class_name AS `name`,COUNT(students.id) AS `number` FROM `students` LEFT JOIN `classes` ON students.class_id=classes.id GROUP BY class_id;');
}

static getStudentsPerCountry (){
  return db.execute('SELECT countries.name AS `name`,COUNT(students.id) AS `number` FROM `students` LEFT JOIN `countries` ON students.country_id=countries.id GROUP BY country_id;');
}

static getAvgAgeOfStudents(){
  return db.execute('SELECT ROUND(AVG(CONVERT(((CURRENT_DATE-date_of_birth)*0.0001),int))) as `avg` from students');
}

};
