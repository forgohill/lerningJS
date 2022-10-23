// проверка : поиск DOM - 
// объекта, чтобы понять поддерживает ли
// HTML5 audio

let test_audio = document.createElement("audio");
if (test_audio.play) {
    console.log("Браузер поддерживает элемент HTML5 audio");
} else {
    console.log("Браузер не поддерживает HTML5 audio");
}