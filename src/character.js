export class Character {
  constructor(name, race, class, items) {
    this.name = name,
    this.id,
    this.race = race,
    this.class = class,
    this.level = 1,
    this.str = 10,
    this.dex = 10,
    this.con = 10,
    this.wis = 10,
    this.int = 10,
    this.cha = 10,
    this.currentHP = 0,
    this.maxHP = 0,
    this.itemPouch = items,
    this.alive = true
  }

  levelUp(stat) {
    this.level += 1;
    switch (stat) {
      case 0:
        this.str += 1;
        break;
      case 1:
        this.dex += 1;
        break;
      case 2:
        this.con += 1;
        break;
      case 3:
        this.wis += 1;
        break;
      case 4:
        this.int += 1;
        break;
      case 5:
        this.cha += 1;
        break;
    }
    this.maxHP = (this.con * 5);
    this.currentHP = maxHP;
  }
  takeDamage(hit) {
    if (hit > this.currentHP) {
      this.currentHP = 0;
      this.die();
    }
    else {
      this.currentHP -= hit;
    }
  }
  takeHeal(heal) {
    if ((this.currentHP + heal) > this.totalHP) {
      this.currentHP = this.totalHP;
    }
    else {
      this.currentHP += heal;
    }
  }
  die() {
    console.log("YO ARE DED");
  }
  respawn() {
    console.log("YO ARE NOT DED ANIMOAR");
  }
}
