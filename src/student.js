export class Student {
  constructor(health, speed, strength) {
    this.id;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    this.typeId;
    this.progress = 0;
  }

  takeDamage(number) {
    this.health -= number;
  }
}
