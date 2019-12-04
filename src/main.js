import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import GameState from './gameState.js';
import Brain from './img/brain.png';
import Jail from './img/jail2.jpeg';
import GameOver from './img/gameOver.jpg';
import tower1_tier1 from './img/gameAssets/tower1_tier1.png';

const t1t1 = new Image();
t1t1.src = tower1_tier1;
$("#towerDump").append(t1t1);

$(document).ready(function() {
// $('.jail').addClass();
// $('.jail').removeClass();
// $("#brainImage").html("<img src='"+Brain+"' alt='Image of a brain'>");
//     $('#jailBanner').html("<img id='jailPic'src='"+Jail+"' alt='Image of a jail cell'>");

  $('#start').click(function(event) {
     $('#start').hide();
     let game = new GameState();
     console.log(game)
     let creationMode = null;
     let time = 0;
     let spaceNumber = 53;
     let towerNumber = 5;
     attachContactListeners();

    setInterval(() => {
      if (game.health > 0) {
        console.log(time);
        time++;

        // Adding students every second
        if (time < 10) {
          console.log(game.studentTypes.types[0]);
          game.students.addStudent(game.studentTypes.types[0]);
        } else if (time < 20) {
          game.students.addStudent(game.studentTypes.types[1]);
        } else if (time < 30) {
          game.students.addStudent(game.studentTypes.types[2]);
        } else {
          game.students.addStudent(game.studentTypes.types[0]);
        }
        game.students.advanceStudents();
        game.students.checkHealth();

        // Increment game health down - gameState.js

        // for (let i = 0; i < game.students.length; i++) {
        //   if (game.students[i].progress > 10) {
        //     game.health -= 10;
        //   }
        // }

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
