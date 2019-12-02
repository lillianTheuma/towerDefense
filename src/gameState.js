export default class GameState {
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
      this.money -= towerTypes.findTowerByID(typeID).cost;
      return true;
    } else if (towerTypes.findTowerByID(typeID){
      console.log()
    } else {
      console.error("You are attempting to buy a tower with an invalid type ID!");
      return false ;
    }
  }
  upgradeTower(position) {
    const price = this.towers[position].price * (this.towers[i].level + 1);
    if (money >= price) {
      tower.levelUp(this.towerTypes[this.towers.typeId]);
      this.money -= price;
    } else if (!this.towers[posiiton]){
      console.warn("The tower you are attempting to upgrade is not present!");
    } else {
      console.error("You are attempting to upgrade a tower at an invalid location!");
    }
  }

}
