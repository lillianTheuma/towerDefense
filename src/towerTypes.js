import Tower from './tower.js';

export default class TowerTypes {
  constructor(types) {
    this.types = [new Tower(5,2,2,500,0),new Tower(8,4,2,1500,1),new Tower(3,1,2,500,2)];
  }
  findTowerByID(id) {
    this.types.forEach(function(type) {
      if (type.id == id) {
        return type;
      }
    });
  return false;
  }
}
