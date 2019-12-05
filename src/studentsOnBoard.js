export default class StudentsOnBoard {
  constructor() {
    this.students = [];
    this.currentId = 0;
  }

  findStudentByID(id){
    this.students.forEach(function(student, i) {
      if (student.id == id) {
        return [student, i];
      }
    });
    return false;
  }

  addStudent(student) {
    const newStudent = student;
    newStudent.id = this.currentId;
    this.students.push(newStudent);
    this.currentId++;
  }

  removeStudent(id) {
    let newStudents = [];
    this.students.forEach(function(student) {
      if (!(student.id == id)) {
        newStudents.push(student);
      }
    });
    this.students = newStudents;
  }

  advanceStudents() {
    console.log("Advancing students");
    this.students.forEach(function(student) {
      student.progress+=student.speed;
    });
  }

  checkHealth() {
    let stopped = 0;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].health < 0) {
        stopped += this.students[i].maxHealth;
        this.students.removeStudent(i);
      }
    }
    return stopped;
  }
  checkEscapes() {
    let escapes = 0;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].progress > 53) {
        escapes+=this.students[i].strength;
        this.removeStudent(this.students[i].id);
      }
    }
    return escapes;
  }
}
