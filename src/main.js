import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Smashedwindow from './img/smashedwindow.jpg';
import Student from './student.js';
import Tower from './tower.js';
import GameState from './gameState.js';
import Brain from './img/brain.png';
import Jail from './img/jail2.jpeg';
import GameOver from './img/gameOver.jpg';

// Importing Game Graphics -------------------------------
import tower1_t1 from './img/gameAssets/tower1_tier1.png';
import tower1_t2 from './img/gameAssets/tower1_tier2.png';
import tower1_t3 from './img/gameAssets/tower1_tier3.png';

import tower2_t1 from './img/gameAssets/tower2_tier1.png';
import tower2_t2 from './img/gameAssets/tower2_tier2.png';
import tower2_t3 from './img/gameAssets/tower2_tier3.png';

import tower3_t1 from './img/gameAssets/tower3_tier1.png';
import tower3_t2 from './img/gameAssets/tower3_tier2.png';
import tower3_t3 from './img/gameAssets/tower3_tier3.png';

import zombieUp from './img/gameAssets/zombieU.png';
import zombieDown from './img/gameAssets/zombieD.png';
import zombieLeft from './img/gameAssets/zombieL.png';
import zombieRight from './img/gameAssets/zombieR.png';

import tower1_t3L from './img/gameAssets/tower1_tier3L.png';
import tower1_t3R from './img/gameAssets/tower1_tier3R.png';

import tower2_t3L from './img/gameAssets/tower2_tier3L.png';
import tower2_t3R from './img/gameAssets/tower2_tier3R.png';

import tower3_t3L from './img/gameAssets/tower3_tier3L.png';
import tower3_t3R from './img/gameAssets/tower3_tier3R.png';

// How to make a new Sprite:
  // Make IMG Tags----------------------
  // const sprite_tower1_t1 = new Image();

  // Set URLs --------------------------
  // sprite_tower1_t1.src = tower1_t1;

// How to display a Sprite to a coordinate in the grid:
  // $("ID_OF_SPACE").append(sprite_tower1_t1);

// -------------------------------------------------------

$(document).ready(function() {
  // $('.jail').addClass();
  // $('.jail').removeClass();
  // $("#brainImage").html("<img src='"+Brain+"' alt='Image of a brain'>");
  //     $('#jailBanner').html("<img id='jailPic'src='"+Jail+"' alt='Image of a jail cell'>");
  $('#start').click(function(event) {
    $('#start').hide();
    attachContactListeners();
    let game = new GameState();
    console.log(game)
    let creationMode = null;
    let time = 0;
    let spaceNumber = 53;
    let towerNumber = 5;
    let movingRight = [0, 1, 2, 6, 7,8, 9, 12, 13, 14, 15, 16, 17, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 52];

    setInterval(() => {
      for (var i = 0; i < 53; i++) {
        $("#path" + i).html("");
      }
      if (game.health > 0) {
        console.log(time);
        time++;

        // Adding students every second
        if (time < 10) {

          game.students.addStudent(new Student(1,15,1));
        } else if (time < 20) {
          game.students.addStudent(new Student(2,1,2));
        } else if (time < 30) {
          game.students.addStudent(new Student(4,1,4));
        } else {
          game.students.addStudent(new Student());
        }
        game.students.advanceStudents();

        game.health -= game.students.checkEscapes();
        // Increment game health down - gameState.js
        console.log(game);

      } else {
        console.log("you lost");
      }
      for (let i = 0; i < game.students.students.length; i++) {
        let j = game.students.students[i].progress;
        console.log(movingRight);

        if (movingRight.includes(j)) {
          const newStudent = new Image();
          newStudent.src = zombieRight;
          console.log(zombieRight);
          $("#path" + game.students.students[i].progress).append(newStudent);
        }
      }

      // board.checkIfWon();

    }, 1000);
    let towerTick = 0;
    setInterval(() => {
      towerTick++;
      game.towers.towers.forEach(function(tower) {
        if (tower) {
          const target = tower.findTarget(this.students);
          if (target) {
            this.students[target].takeDamage(tower.damage);
          }
          this.students[target].takeDamage(tower.damage);
        }
      });
      game.students.checkHealth();
    }, 250);
    function attachContactListeners() {
      $("#towerSelection").on("click", "button", function() {
        if (this.id == "tower3") {
          creationMode = game.towers.types[0];
          console.log("tower3");
        }
        console.log("should print out name of button: " + this.id);
      });
      $('#mapDiv').on("click", "td", function() {
        for (let i = 0; i < 5; i++) {
          if (this.id == "tower" + i) {
            console.log("tower" + i);
          }
        }
      });
    }
  });
});
