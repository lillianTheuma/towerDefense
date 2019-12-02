export default class TowerTypes {
  constructor() {
    this.types = [];
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
