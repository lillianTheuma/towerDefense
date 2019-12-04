import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import GameState from './gameState.js';
import Student from './student.js';
import Brain from './img/brain.png';
import Jail from './img/jail2.jpeg';
import GameOver from './img/gameOver.jpg';
import tower1_tier1 from './img/gameAssets/img/tower1_tier1.png';

let tower1Dump = $("#tower1_tier1");
tower1Dump.src = tower1_tier1;

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

    setInterval(() => {
      if (game.health > 0) {
        console.log(time);
        time++;

        // Adding students every second
        if (time < 10) {

          game.students.addStudent(new Student(1,1,1));
        } else if (time < 20) {
          game.students.addStudent(new Student(2,1,2));
        } else if (time < 30) {
          game.students.addStudent(new Student(4,1,4));
        } else {
          game.students.addStudent(new Student());
        }
        console.log(game.students.students);
        game.students.advanceStudents();
        game.students.checkHealth();

        // Increment game health down - gameState.js

        for (let i = 0; i < game.students.length; i++) {
          if (game.students[i].progress > 10) {
            game.health -= 20;
          }
        }

        game.money += 10;
      } else {
        console.log("you lost");
      }

      // board.checkIfWon();
      // students.addStudent(board.time);

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
    }, 250);
    function attachContactListeners() {
      $("#towerSelection").on("click", "button", function() {
        if (this.id == "tower3") {
          creationMode = game.towers.types[0];
          console.log("tower3");
        }
        console.log("should print out name of button: " + this.id);
      });
    }
  });
});
