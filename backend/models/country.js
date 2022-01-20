const db = require('../util/database');



module.exports = class Country{

constructor(id,name){
    this.id=id;
    this.name=name;
}

save(){
    return db.execute(
        'INSERT INTO countries (name) VALUES (?)',[this.name]
    );
}

update(){
  return db.execute('UPDATE countries SET name = ? , modified_date = ? WHERE id = ?',[this.name,new Date(),this.id]);
}

static fetchAll() {
    return db.execute('SELECT id,name as Name,DATE_FORMAT(`created_date`, "%m/%d/%Y %H:%i") AS "Created",DATE_FORMAT(`modified_date`, "%m/%d/%Y %H:%i") AS "Modified" FROM countries');
  }

  static findById(id) {
    return db.execute('SELECT * FROM countries WHERE countries.id = ?', [id]);
  }

  static deleteById(id){
    return db.execute('DELETE FROM countries WHERE countries.id = ?',[id])
  }

}