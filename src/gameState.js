export default class gameState {
  constructor(towers, towerTypes, students, studentTypes) {
    this.towers = towers,
    this.towerTypes = towerTypes,
    this.students = students,
    this.studentTypes = studentTypes,
    this.health = 200,
    this.money = 1000;
  }
  buyTower(typeID, position) {
    if (towerTypes.findTowerByID(typeID).cost <= this.money) {
      tower = towerTypes[typeID];
      towers.addTower(tower, position);
      return true;
    } else if (towerTypes.findTowerByID(typeID){
      console.log()
    } else {
      console.error("You are attempting to buy a tower with an invalid type ID!");
      return false ;
    }
  }
}
