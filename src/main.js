import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Student from './../student.js';
import StudentsOnBoard from './../studentsOnBoard.js';
import StudentType from './../studentType.js';
import Tower from './../tower.js';
import TowersOnBoard from './../TowersOnBoard.js';
import TowerTypes from './../towerTypes.js';

$(document).ready(function() {
  $('').submit(function(event) {
    event.preventDefault();
     var game = new gameState;
     var gameStudents = new StudentsOnBoard;
     var gameTowers = new towersOnBoard;

    setInterval(() => {
      if (game.health > 0) {
        gameStudents.advanceStudents();
        for (let i = 0; i < 20; i++) {
          // if (space id matches
        }

      }
      // board.checkIfWon();
      // board.time++;
      // students.addStudent(board.time);
      // increment game.money

    }, 1000);

    // addStudent(time) {
    //   if (time < 10 seconds) {
    //     this.students.push(new StudentType.types[0]);
    //   } else if (time < 20 seconds) {
    //     this.students.push(new StudentType.types[1]);
    //   } else if (time < 30 seconds) {
    //     this.students.push(new StudentType.types[2]);
    //   } else if (time >= 30 seconds) {
    //     this.students.push(new StudentType.types[3]);
    //   }
    // }
  });
});
