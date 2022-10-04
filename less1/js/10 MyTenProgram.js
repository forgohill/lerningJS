let arrOne = [
    'Ваня',
    'Иштван',
    'Оля', //висящая запетая
];

let matrixOne = [
[1,2,3,],
[4,5,6,],
[7,8,9,],
];

let arrTwo = [
    "Коля",
    {
        type: "JS",
        age:35
    },
    true,
    function () {
        console.log ('Привет, я Коля');
    }
];

console.log (arrTwo);
console.log (arrTwo[0]);
console.log (arrTwo[1].type);
console.log (arrTwo[2]);
arrTwo[3]();

console.log (matrixOne);
console.log (matrixOne[0][1]);

let bestAlbumsByGenre = [[],[],[],];
bestAlbumsByGenre [0] = [];
bestAlbumsByGenre [0][0] = "Johny Cash: Live at Folsom Prison";
bestAlbumsByGenre [0][1] = "Patsy Cline: Sentimentally Yours";
bestAlbumsByGenre [0][2] = "Hans Williams: I'm Blue Inside";
bestAlbumsByGenre [1] = [];
bestAlbumsByGenre [1][0] = "T-Rex: Slider";
bestAlbumsByGenre [1][1] = "Nirvana: Nevermind";
bestAlbumsByGenre [1][2] = "Lou Reed: Transformer";
bestAlbumsByGenre [2] = [];
bestAlbumsByGenre [2][0] = "Flipper: Generic";
bestAlbumsByGenre [2][1] = "The Dead Milkmen: Big Lizard in my Backyard";
bestAlbumsByGenre [2][2] = "Patti Smith: Easter";

// var valuesOfNumber = [2,4,1.5,80];

// let myArray = [];
// myArray[2000] = [];
// myArray.length; //return 2001
// console.log (myArray);
// // console.log (myArray.length);
// myArray.length = 10;
// console.log (myArray);
// myArray.length;
// console.log (myArray.length);
// myArray.length = 100;
// console.log (myArray);