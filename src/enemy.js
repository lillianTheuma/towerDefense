export class Enemy {
  constructor(name, species, level, health, attack) {
    this.species = species,
    this.level = level,
    this.health = health,
    this.attack = attack,
    this.id,
    this.alive = true
  }
  takeDamage(hit) {
    if (hit > this.currentHP) {
      this.currentHP = 0;
      this.die();
    }
    else {
      this.currentHP -= hit;
    }
  }
  die() {
    console.log("I HEV BIN DIFEET, TED");
    this.alive = false;
  }
  spawn() {
    console.log("A KREATIR UPEER'D");
  }
}

// Author: Anise the Human who is NOT a total fking nerd*

// * actually is a total fking nerd, I lied
