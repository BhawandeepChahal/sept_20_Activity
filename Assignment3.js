const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

  db.run('CREATE TABLE IF NOT EXISTS Student(stu_id INTEGER PRIMARY KEY,stu_name VARCHAR(20),program_group VARCHAR(20))');
  db.run('CREATE TABLE IF NOT EXISTS Class(class_id INTEGER PRIMARY KEY,class_name VARCHAR(20),room VARCHAR(20),date_session VARCHAR(20))');
  db.run('CREATE TABLE IF NOT EXISTS Enrollment(enrollment_id INTEGER PRIMARY KEY,class_id INTERGER,student_id INTEGER)');
db.run("INSERT INTO Student(stu_id,stu_name,program_group) values(23,'Sukhprit','CSAT'),(98,'Bhawandip','BMAT'),(65,'GursharanPrit','QAMT'),(43,'Simaarjitt','KAST')");
 //db.run("INSERT INTO Class(class_id,class_name,room,date_session) values(1,'CSAC','11','12-11-98'),(2,'QMAC','12','14-12-98'),(3,'KAMC','13','11-01-98')");
 db.run("INSERT INTO Enrollment(enrollment_id,class_id,student_id) values (91,2,98),(92,3,65),(93,1,23)");
 
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });

