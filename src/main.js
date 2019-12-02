import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Tower from './../tower.js';
import TowersOnBoard from './../TowersOnBoard.js';
import TowerTypes from './../towerTypes.js';
import { Student } from './../student.js';
import { StudentsOnBoard } from './../studentsOnBoard.js';

$(document).ready(function() {
  $('').submit(function(event) {
    event.preventDefault();
    // var board = new GameBoard;
    // var students = new StudentsOnBoard;
    // var towers = new TowersOnBoard;

    setInterval(() => {
      // Advance student position by 1 while on board
      // board.checkIfWon();
      // board.time++;
      // students.addStudent(board.time);


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
