export class Item {
  constructor(name, id, action, strength) {
    this.name = name,
    this.id = id,
    this.action = action,

    switch(action):
    case 0:
    this.function = function(target, strength) {
      target.takeHeal(strength);
    }
    break;
    case 1:
    this.function = function(target, strength) {
      target.takeDamage(strength);
    }
    break;
  }
}
