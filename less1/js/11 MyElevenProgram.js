var animals = ["тигр", "медведь"];
var fruit = ["дыня", "апельсин"];
var dishes = ["тарелка", "бокал", "чашка"];

var whereIsTheTiger = animals.indexOf("тигр");
var fruitAndAnimals = fruit.concat(animals);

document.write (animals + "<br>");
document.write ("Индекс тигра: " + whereIsTheTiger + "<br>");
document.write (fruitAndAnimals + "<br>");
whereIsTheTiger = fruitAndAnimals.indexOf("тигр");
document.write ("Индекс тигра: " + whereIsTheTiger + "<br>");