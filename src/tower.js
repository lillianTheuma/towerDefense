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
  levelUp() {
    this.level += 1;
    this.damage += 2;
    this.range += 2;
  }

  findTarget(students, position) {
    const pathwayCoords = [[0,1],[1,1],[2,1],[2,2],[2,3],[2,4],[3,4],[4,4],[5,4],[6,4],[6,3],[6,2],[7,2],[8,2],[8,2],[9,2],[10,2],[11,2],[12,2],[12,3],[12,4],[12,5],[12,6],[11,6],[11,7],[11,8],[10,8],[9,8],[8,8][7,8],[7,7],[7,6],[6,6],[5,6],[4,6],[3,6],[3,7],[3,8],[3,9],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[13,10],[14,10],[14,9],[14,8],[15,8]];
    const towerPositionCoords =
    [[12,1],[9,3],[3,4],[12,9],[3,11]];
    let nearestTarget = [0,0]
    let studentCoords;
    let towerCoords;
    const tower = this;
    let horizontalDistance;
    let vertDistance;
    let distance;
    students.students.forEach(function(student, i) {
      console.log(pathwayCoords[student.progress] + "pathwayCoord " + i);
      studentCoords = pathwayCoords[student.progress];
      towerCoords = towerPositionCoords[position];

      horizontalDistance = Math.abs(studentCoords[0]-towerCoords[0]);
      vertDistance = Math.abs(vertDistance = studentCoords[1]-towerCoords[1]);

      distance = Math.sqrt((Math.pow(vertDistance,2))+(Math.pow(horizontalDistance,2)));

      if (distance > nearestTarget[0] && distance < tower.range) {
        nearestTarget = [distance, i];
      }
    });
    if (!(nearestTarget[1] == false)) {
      return nearestTarget[1];
    } else {
      console.log("no target");
      return false;
    }
  }
}
