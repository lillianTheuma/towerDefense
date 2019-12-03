export default class Space {
  constructor(id, type) {
    this.id = id;
    this.type = type;
    this.occupied = null;
  }

  addTower(tower) {
    this.occupied = tower;
  }
}
