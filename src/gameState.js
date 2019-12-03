import TowerTypes from './towerTypes.js';
import StudentTypes  from './studentType.js';
import TowerOnBoard from './TowersOnBoard.js';
import StudentsOnBoard from './studentsOnBoard';

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
    if (this.towerTypes.findTowerByID(typeID).cost <= this.money) {
      let tower = this.towerTypes[typeID];
      this.towers.addTower(tower, position);
      this.money -= this.towerTypes.findTowerByID(typeID).cost;
      return true;
    } else if (this.towerTypes.findTowerByID(typeID)){
      console.log("You cannot afford this upgrade");
    } else {
      console.error("You are attempting to buy a tower with an invalid type ID!");
      return false ;
    }
  }
  upgradeTower(position) {
    const price = this.towers[position].price * (this.towers[position].level + 1);
    if (this.money >= price) {
      this.towers[position].levelUp(this.towerTypes[this.towers.typeId]);
      this.money -= price;
    } else if (!this.towers[position]){
      console.warn("The tower you are attempting to upgrade is not present!");
    } else {
      console.error("You are attempting to upgrade a tower at an invalid location!");
    }
  }
}
