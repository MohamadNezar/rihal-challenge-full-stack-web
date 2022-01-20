const db = require('../util/database');



module.exports = class Class{

constructor(id,name){
    this.id=id;
    this.name=name;
}

save(){
    return db.execute(
        'INSERT INTO classes (class_name) VALUES (?)',[this.name]
    );
}

update(){
  return db.execute('UPDATE classes SET class_name = ? , modified_date = ? WHERE id = ?',[this.name,new Date(),this.id]);
}

static fetchAll() {
    return db.execute('SELECT id,class_name as Name,DATE_FORMAT(`created_date`, "%m/%d/%Y %H:%i") AS "Created",DATE_FORMAT(`modified_date`, "%m/%d/%Y %H:%i") AS "Modified" FROM `classes`');
  }

  static findById(id) {
    return db.execute('SELECT * FROM classes WHERE classes.id = ?', [id]);
  }
static deleteById(id){
  return db.execute('DELETE FROM classes WHERE classes.id = ?',[id]);
}  

}