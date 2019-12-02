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
     let game = new GameState;
     let creationMode = null;

    setInterval(() => {
      if (game.health > 0) {
        if (time < 10 seconds) {
          game.students.addStudent(new StudentType[0]);
        } else if (time < 20 seconds) {
          game.students.addStudent(new StudentType[1]);
        } else if (time < 30 seconds) {
          game.students.addStudent(new StudentType[2]);
        } else if (time >= 30 seconds) {
          game.students.addStudent(new StudentType[3]);
        }
        game.students.advanceStudents();
        for (let i = 0; i < game.students.length; i++) {
          if (game.students[i].health < 1) {
            game.students.removeStudent(i);
          }
        }
      } else {
        // you lost function
      }
      // board.checkIfWon();
      // board.time++;
      // students.addStudent(board.time);
      // increment game.money

    }, 1000);



    addStudent(time) {
      if (time < 10 seconds) {
        this.students.push(new StudentType.types[0]);
      } else if (time < 20 seconds) {
        this.students.push(new StudentType.types[1]);
      } else if (time < 30 seconds) {
        this.students.push(new StudentType.types[2]);
      } else if (time >= 30 seconds) {
        this.students.push(new StudentType.types[3]);
      }
    }
  });

  $("#makeTower1").click(function() {
    creationMode = towerType1;
  });

// may not work correctly because of weird timing things
  function attachContactListeners() {
    for (let i = 0; i < 5; i++) {
      $(".spaces").on("click", "p#" + i, function() {
        if (spaceHasTower) {
          game.upgradeTower();
        } else {
          game.buyTower(creationMode, i);
        }
      });
    }
  }
});
