import TowerTypes from './towerTypes.js';
import TowersOnBoard from './TowersOnBoard.js';
import StudentsOnBoard from './studentsOnBoard';
import Tower from './tower.js';
import Student from './student.js';
export default class GameState {
  constructor() {
    this.towers =  new TowersOnBoard(),
    this.towerTypes = new TowerTypes(),
    this.students = new StudentsOnBoard(),
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
  sellTower(position) {
    if (this.towers[position]) {
      this.money += this.towers[position].value;
      this.towers[position] = false;
    } else {
      console.warn("There is no tower at this location.");
    }
  }
  upgradeTower(position) {
    const price = this.towers[position].price * (this.towers[position].level + 1);
    if (this.money >= price) {
      this.towers[position].levelUp(this.towerTypes[this.towers.typeId]);
      this.towers[position].value += price;
      this.money -= price;
    } else if (!this.towers[position]){
      console.warn("The tower you are attempting to upgrade is not present!");
    } else {
      console.warn("You are attempting to upgrade a tower at an invalid location!");
    }
  }
}
