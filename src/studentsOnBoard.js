export default class StudentsOnBoard {
  constructor() {
    this.students = [];
    this.currentId = 0;
  }

  findStudentByID(id){
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) {
        return [this.students[i], i];
      }
    }
    return false;
  }

  addStudent(student) {
    student.id = this.currentId;
    this.students.push(student);
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
    for (let i = 0; i < this.students.length; i++) {
      this.students[i].progress++;
    }
  }

  checkHealth() {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].health < 0) {
        this.students.removeStudent(i);
      }
    }
  }
}
