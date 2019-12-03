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
    const student = this.findStudentByID(id);
    if (student) {
      const i = student[1];
      this.students.splice(i, 1);
    } else {
      console.error("invalid ID");
    }
  }

  advanceStudents() {
    console.log("Advancing students");
    this.students.forEach(function(student) {
      student.progress+=student.speed;
    })
  }

  checkHealth() {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].health < 0) {
        this.students.removeStudent(i);
      }
    }
  }
}
