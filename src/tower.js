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
    this.fullyUpgraded = false;
  }
  levelUp() {
    this.level += 1;
    this.damage += 2;
    this.range += 2;
  }
  findTarget() {
    let targets = [];
    if (this.position === 0) {
      targets = [16, 17, 18 ,19];
    } else if (this.position === 1) {
      targets = [12, 13, 14, 15];
    } else if (this.position === 2) {
      targets = [5, 6, 33, 34];
    } else if (this.position === 3) {
      targets = [47, 48, 49, 50];
    } else if (this.position === 4) {
      targets = [37, 38, 39, 40];
    }
    return targets;

  }

}
