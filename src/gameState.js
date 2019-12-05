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
    this.money = 1000000;
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
    if (this.towers.towers[position]) {
      this.money += this.towers.towers[position].value;
      this.towers.towers[position] = false;

    } else {
      console.warn("There is no tower at this location.");
    }
  }
  upgradeTower(position) {

    if (this.towers.towers[position].level < 3) {
      const price = this.towers.towers[position].price * (this.towers.towers[position].level + 1);
    if (this.towers.towers[position].level >= 3){
      this.towers.towers[position].fullyUpgraded = true;
    }
    if (this.towers.towers[position].level < 3) {
      console.log(this.towers.towers[position].cost);
      const price = this.towers.towers[position].cost * (this.towers.towers[position].level + 1);
      console.log("money: " + this.money + "price" + price);

      if (this.money >= price) {
        this.towers.towers[position].levelUp();
        this.towers.towers[position].value += price;
        this.money -= price;
      } else if (!this.towers.towers[position]){
        console.warn("The tower you are attempting to upgrade is not present!");
      } else {
        console.warn("You are attempting to upgrade a tower at an invalid location!");
      }
    }
  }
}
