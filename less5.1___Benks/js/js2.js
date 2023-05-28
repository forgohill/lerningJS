const person = 'Tallac';
const elevation = 9738;
const print = function () {
  console.log(`Mt, ${this.person} is ${this.elevation} feel tall`)
};
const funHike = { person, elevation, print };
funHike.print();

const person1 = 'Garry', sound = 'TikTok'

let skier = {
  person1,
  sound,

  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell} !!! ;)`)
  },
  speed(mph) {
    this.speed = mph;
    console.log('speed:', mph);
  }
};
skier.powderYell();
skier.speed();