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
// Commented out imports are currently unused Graphics

import tower1_t1 from './img/gameAssets/tower1_tier1.png';
import tower1_t2 from './img/gameAssets/tower1_tier2.png';
// import tower1_t3 from './img/gameAssets/tower1_tier3.png';

import tower2_t1 from './img/gameAssets/tower2_tier1.png';
import tower2_t2 from './img/gameAssets/tower2_tier2.png';
// import tower2_t3 from './img/gameAssets/tower2_tier3.png';

import tower3_t1 from './img/gameAssets/tower3_tier1.png';
import tower3_t2 from './img/gameAssets/tower3_tier2.png';
// import tower3_t3 from './img/gameAssets/tower3_tier3.png';

import tower1_t3L from './img/gameAssets/tower1_tier3L.png';
import tower1_t3R from './img/gameAssets/tower1_tier3R.png';

import tower2_t3L from './img/gameAssets/tower2_tier3L.png';
import tower2_t3R from './img/gameAssets/tower2_tier3R.png';

import tower3_t3L from './img/gameAssets/tower3_tier3L.png';
import tower3_t3R from './img/gameAssets/tower3_tier3R.png';

// import tower1_t1_fire from './img/gameAssets/tower1_tier1_fire.png';
// import tower1_t2_fire from './img/gameAssets/tower1_tier2_fire.png';
//
// import tower1_t3L_fire from './img/gameAssets/tower1_tier3L_fire.png';
// import tower1_t3R_fire from './img/gameAssets/tower1_tier3R_fire.png';
//
// import tower2_t1_fire from './img/gameAssets/tower2_tier1_fire.png';
// import tower2_t2_fire from './img/gameAssets/tower2_tier2_fire.png';
//
// import tower2_t3L_fire from './img/gameAssets/tower2_tier3L_fire.png';
// import tower2_t3R_fire from './img/gameAssets/tower2_tier3R_fire.png';
//
// import tower3_t1_fire from './img/gameAssets/tower3_tier1_fire.png';
// import tower3_t2_fire from './img/gameAssets/tower3_tier2_fire.png';
//
// import tower3_t3L_fire from './img/gameAssets/tower3_tier3L_fire.png';
// import tower3_t3R_fire from './img/gameAssets/tower3_tier3R_fire.png';

import zombieUp from './img/gameAssets/zombieU.png';
import zombieDown from './img/gameAssets/zombieD.png';
import zombieLeft from './img/gameAssets/zombieL.png';
import zombieRight from './img/gameAssets/zombieR.png';

// import zombie_hurt_up from './img/gameAssets/zombieU_hurt.png';
// import zombie_hurt_down from './img/gameAssets/zombieD_hurt.png';
// import zombie_hurt_left from './img/gameAssets/zombieL_hurt.png';
// import zombie_hurt_right from './img/gameAssets/zombieR_hurt.png';

const towerSprites = [
  [tower1_t1, tower1_t2, tower1_t3L, tower1_t3R],
  [tower2_t1, tower2_t2, tower2_t3L, tower2_t3R],
  [tower3_t1, tower3_t2, tower3_t3L, tower3_t3R]
];

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
    let creationMode = null;
    let time = 0;
    let spaceNumber = 53;
    let towerNumber = 5;
    let movingRight = [0, 1, 2, 6, 7,8, 9, 12, 13, 14, 15, 16, 17, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 52];
    let movingLeft = [21, 22, 25, 26, 27, 28, 30, 31, 32, 33, 34];
    let movingDown = [3, 4, 5, 18, 19, 20, 21, 23, 24, 35, 36, 37, 38];
    let movingUp = [10, 11, 29, 30, 50, 51]

    setInterval(() => {
      for (var i = 0; i < 53; i++) {
        $("#path" + i).html("");
      }
      if (game.health > 0) {
        time++;

        // Adding students every second
        if (time < 10) {
          game.students.addStudent(new Student(1,1,1));
        } else if (time < 20) {
          game.students.addStudent(new Student(2,1,2));
        } else if (time < 30) {
          game.students.addStudent(new Student(4,1,4));
        } else {
          game.students.addStudent(new Student(8,1,8));
        }
        game.students.advanceStudents();
        game.health -= game.students.checkEscapes();
        // Increment game health down - gameState.js
        if (game.students.students.length === 0) {
          // You win
          console.log("You win!");
        }

      } else {
        console.log("you lost");
      }

      // Change Zombie Direction Sprites
      for (let i = 0; i < game.students.students.length; i++) {
        let j = game.students.students[i].progress;

        if (movingRight.includes(j)) {
          const newStudent = new Image();
          newStudent.src = zombieRight;
          $("#path" + game.students.students[i].progress).append(newStudent);
        }
        else if (movingLeft.includes(j)) {
          const newStudent = new Image();
          newStudent.src = zombieLeft;
          $("#path" + game.students.students[i].progress).append(newStudent);
        }
        else if (movingUp.includes(j)) {
          const newStudent = new Image();
          newStudent.src = zombieUp;
          $("#path" + game.students.students[i].progress).append(newStudent);
        }
        else if (movingDown.includes(j)) {
          const newStudent = new Image();
          newStudent.src = zombieDown;
          $("#path" + game.students.students[i].progress).append(newStudent);
        }
        else if (j < 53 && !j) {
          console.error("WHAT DID YOU DO");
        }
      }

      // board.checkIfWon();

    }, 500);

    setInterval(() => {
      for (let i = 0; i < game.towers.towers.length; i++) {
        if (game.towers.towers[i]) {
          let targetArray = game.towers.towers[i].findTarget();
          // for each potential target
          for (let j = 0; j < targetArray.length; j++) {
            // Finding which student is on the space
            for (var k = 0; k < game.students.students.length; k++) {
              let target = targetArray[j];
              console.log(target);
              // console.log(game.students.students[target]);
              if (game.students.students[k].progress === target){
                // console.log(game.towers.towers[i].damage);
                game.students.students[k].takeDamage(game.towers.towers[i].damage);
                // console.log("path" + j);
                $("#path" + j).html("");
              }
            }
          }
        }
      }
    }, 50);

    // let towerTick = 0;
    // setInterval(() => {
    //   towerTick++;
    //   for (let i=0;i<game.towers.towers.length;i++) {
    //     if (game.towers.towers[i]) {
    //       const target = game.towers.towers[i].findTarget(game.students, game.towers.towers[i]);
    //       if (target) {
    //         game.students[target].takeDamage(game.towers.towers[i].damage);
    //       }
    //     }
    //   }
    //   game.money += game.students.checkHealth();
    // }, 250);

    function attachContactListeners() {
      $("#towerSelection").on("click", "button", function() {
        if (this.id == "selectTower1") {
          creationMode = game.towerTypes.types[0];
        }
        else if (this.id == "selectTower2") {
          creationMode = game.towerTypes.types[1];
        }
        else if (this.id == "selectTower3") {
          creationMode = game.towerTypes.types[2];
        }
      });

      // i looks for tiles with towerTags, j goes through tower types and selects one
      $('#mapDiv').on("click", "td", function() {
        for (let i = 0; i <= 5; i++) {
          if (this.id == "tower" + i) {
            // Checks type
            for (let j = 0; j < 3; j++) {
              // Looks at the type of tower you clicked, buying a tower and assigning a sprite to the space
              if (creationMode === game.towerTypes.types[j]) {
                console.log(game.towers.towers);
                // buy a tower and place on position
                if (game.towers.towers[i] == false) {
                  console.log("there is no tower at game.towers.towers[i]");
                  game.buyTower(j,i);
                  if (game.towers.towers[i]) {
                    const towerSprite = new Image();
                    towerSprite.src = towerSprites[j][0];
                    $("#tower" + i).append(towerSprite);
                  }
                  // upgrade a tower currently in that position
                } else {
                  console.log("pre upgrade tower level:", game.towers.towers[i].level);
                  game.upgradeTower(i);
                  console.log("tower level:", game.towers.towers[i].level);
                  if (game.towers.towers[i].level === 3 && !game.towers.towers[i].fullyUpgraded) {
                    $("#tower" + i).html("");
                    const towerSpriteL = new Image();
                    const towerSpriteR = new Image();
                    towerSpriteL.src = towerSprites[j][game.towers.towers[i].level-1];
                    towerSpriteR.src = towerSprites[j][game.towers.towers[i].level];
                    $("#tower" + i).append(towerSpriteL);
                    $("#towerR" + i).append(towerSpriteR);
                  }
                  else if (game.towers.towers[i].level === 2) {
                    $("#tower" + i).html("");
                    const towerSprite = new Image();
                    towerSprite.src = towerSprites[j][game.towers.towers[i].level-1];
                    $("#tower" + i).append(towerSprite);

                  } else {
                    console.log("no more upgrades!");
                  }
                }
              }
            }
          }
        }
      });
    }
  });
});
