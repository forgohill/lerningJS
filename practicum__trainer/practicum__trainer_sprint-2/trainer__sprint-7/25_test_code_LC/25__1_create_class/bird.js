class Bird extends Creature {
  constructor(...args) {
    super(...args);
  }
  clapWings() {
    console.log(this.beast + ' похлопала крыльями');
  }
}