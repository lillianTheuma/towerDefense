export default class Tower {
  constructor(range, fireRate, damage, cost, typeId) {
    this.ID,
    this.level = 1,
    this.range = range,
    this.fireRate = fireRate,
    this.damage = damage,
    this.typeID = typeId,
    this.cost = cost,
    this.value = cost,
    this.position;
  }
  levelUp(base) {
    this.level += 1;
    this.damage += base.damage;
    this.range += (base.range / 2);
  }
  findTarget(students) {
    // This math is going to require using a student object
    console.error(students+" No YOU deal with this");
  }
}
