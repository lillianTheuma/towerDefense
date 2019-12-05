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
    console.log(this.towerTypes.types[typeID].cost);
    if (this.towerTypes.types[typeID].cost <= this.money) {
      const tower = this.towerTypes.types[typeID];
      this.towers.addTower(tower, position);
      this.money -= tower.cost;
      console.log(this.towers);
      return true;
    } else if (this.towers.towers[position]){
      console.log("There is already a tower here");
    } else if (this.towerTypes.types[typeID].cost > this.money) {
      console.warn("You can't afford that tower!");
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
    if (this.towers[position].level < 3) {
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
}
