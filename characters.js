class Character {
  constructor(name) {
    this.name = name;
    this.distance = 1; // расстояние по умолчанию
    this._stoned = false;
  }

  get attack() {
    let attackValue = 100 - (this.distance - 1) * 10;
    if (attackValue < 0) attackValue = 0;
    return this._stoned
      ? attackValue - Math.log2(this.distance) * 5
      : attackValue;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name);
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name);
  }
}

export { Magician, Daemon };
