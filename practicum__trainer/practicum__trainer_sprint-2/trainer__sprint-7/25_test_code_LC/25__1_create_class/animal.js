class Animal extends Creature {
  constructor(beast, sound, legs) {
    super(beast, sound, legs);
    this.legs = 4;
  }
  getLegs() {
    return this.legs;
  }

}