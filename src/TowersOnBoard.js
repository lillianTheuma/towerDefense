export default class towersOnBoard {
  constructor() {
    this.towers = [false, false, false, false, false],
    this.currentId = 0;
  }
  findTowerByID(id) {
    this.towers.forEach(function(tower) {
      if tower.id = id {
        return tower;
      }
    });
  return false;
  }
  addTower(towerTypes, typeID, position) {
    let newTower = towerTypes.types[typeID];
    newTower.id = this.currentId;
    this.currentId++;
    this.towers[position] = newTower;
  }
}
