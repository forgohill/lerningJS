class Creature {
  constructor(beast, sound) {
    this.beast = beast;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.beast + ' сказал ' + '"' + this.sound + '"');
  }

  getBeast() {
    return this.beast;
  }
}