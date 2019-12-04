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
      $("#path" + game.students.students[i].progress).text("student here");
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
