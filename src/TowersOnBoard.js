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
    tower.id = this.currentId;
    this.currentId++;
    this.towers[position] = tower;
  }
  removeTower(position) {
    this.towers[position] = false;
  }
}
