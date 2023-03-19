class Zoo {
  constructor(creatures) {
    this.creatures = creatures;
  }

  makeSoundsOfNature() {
    this.creatures
      .forEach(element => {
        element.makeSound();
      });
  }
}