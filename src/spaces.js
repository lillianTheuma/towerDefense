import Space from './space.js';

export default class Spaces {
  constructor() {
    this.spaces = [];
  }
  addSpaces(towerNumber, pathNumber) {
    for (let i = 0; i < towerNumber; i++) {
      this.spaces.push(new Space(i, "tower"));
    }
    for (let i = 0; i < pathNumber; i++) {
      this.spaces.push(new Space(i, "path"));
    }
  }
}
