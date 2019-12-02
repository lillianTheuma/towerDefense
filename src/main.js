import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Student from './student.js';
import StudentsOnBoard from './studentsOnBoard.js';
import StudentType from './studentType.js';
import Tower from './tower.js';
import TowersOnBoard from './TowersOnBoard.js';
import TowerTypes from './towerTypes.js';
import GameState from './gameState.js';

$(document).ready(function() {
  $('#start').submit(function(event) {
    event.preventDefault();
     let game = new GameState;
     let creationMode = null;
     let time = 0;

    setInterval(() => {
      if (game.health > 0) {
        time++;
        console.log(time);

        // Adding students every second
        if (time < 10) {
          game.students.addStudent(new StudentType[0]);
        } else if (time < 20) {
          game.students.addStudent(new StudentType[1]);
        } else if (time < 30) {
          game.students.addStudent(new StudentType[2]);
        } else {
          game.students.addStudent(new StudentType[3]);
        }
        game.students.advanceStudents();

        // Pruning out dead students
        for (let i = 0; i < game.students.length; i++) {
          if (game.students[i].health < 1) {
            game.students.removeStudent(i);
          }
          if (game.students[i].progress > 10) {
            game.health -= 10;
          }
        }

        game.money += 10;
      } else {
        // you lost function
      }

      // board.checkIfWon();
      // board.time++;
      // students.addStudent(board.time);
      // increment game.money

    }, 1000);

    $("#makeTower1").click(function() {
      creationMode = towerType1;
    });

    // may not work correctly because of weird timing things
    function attachContactListeners() {
      for (let i = 0; i < 5; i++) {
        $(".spaces").on("click", "p#" + i, function() {
          // if (spaceHasTower) {
          //   game.upgradeTower();
          // } else {
          //   game.buyTower(creationMode, i);
          // }
        });
      }
    }
  });
});
