import Tower from './tower.js';

export default class TowersOnBoard {
  constructor() {
    this.towers = [false, false, false, false, false],
    this.currentId = 0;
  }
  findTowerByID(id) {
    this.towers.forEach(function(tower) {
      if (tower.id == id) {
        return tower;
      }
    });
    return false;
  }
  addTower(tower, position) {
    let theTower;
    switch(tower.typeID) {
      case 0:
        theTower = new Tower(5,2,2,500,0);
        break;
      case 1:
        theTower = new Tower(8,4,2,1500,1);
        break;
      case 2:
        theTower = new Tower(3,1,2,500,2);
        break;
    }
    theTower.id = this.currentId;
    this.currentId++;
    theTower.position = position;
    this.towers[position] = theTower;
  }
  removeTower(position) {
    this.towers[position] = false;
  }
}
