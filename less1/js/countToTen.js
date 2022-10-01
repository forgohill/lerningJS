/* Функция countToTen выполняет следующие действия:
    * Инициализирует count нулевым значением
    * запускает цикл с проверкой того, что текущее значение count меньше 10
    * Увеличивает значение count на 1
    *Добавляет текущее значение вместе со следующим за ним символом разрыва строки в абзац с id="theCount"
    *запускает следующую итерацию цикла
*/
function countToTen () {
    var count = 0;
    while (count < 10) {
        count++;
        document.getElementById("theCount").innerHTML +=
            count + "<br>"
    }
}