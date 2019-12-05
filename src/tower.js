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

  findTarget(students) {
    let targeted;
    switch(this.position) {
      case 0:
      targeted = [15,16,17,18];
      break;
      case 1:
      targeted = [12,13,14,15,16];
      break;
      case 2:
      targeted = [4,5,6,7,8,32,33,34,35];
      break;
      case 3:
      targeted = [37,38,39,40];
      break;
      case 4:
      targeted = [45,46,47,48,49];
      break;
    }
    let targets = [];
    students.forEach(function(student, i) {
      targeted.forEach(function(target) {
        if (student.progress == target) {
          targets.push(i);
        }
      });
    });
    return targets;
  }
}
