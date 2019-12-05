export default class Student {
  constructor(health, speed, strength) {
    this.id,
    this.maxHealth = health,
    this.health = health,
    this.speed = speed,
    this.strength = strength,
    this.typeId,
    this.progress = 0;
  }

  takeDamage(damage) {
    if (this.health > damage) {
      this.health -= damage;
    }
    else {
      this.health = 0;
    }
  }
}
