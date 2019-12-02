export default class Tower {
  constructor(range, fireRate, damage, typeId) {
    this.ID,
    this.level = 1,
    this.range = range,
    this.fireRate = fireRate,
    this.damage = damage,
    this.typeID,
    this.position;
  }
  levelUp(base) {
    this.level += 1;
    this.damage += base.damage;
    this.range += (base.range / 2);
  }
  nearestStudent() {
    // requires student objects to work
  }
}
