/**
 * Расчет с функциями
 * 
 * На этот раз мы хотим написать вычисления с
 * использованием функций и получить результаты.
 * Давайте посмотрим на некоторые примеры:
 * 
 * seven(times(five())); // must return 35
 * 
 * four(plus(nine())); // must return 13
 * 
 * eight(minus(three())); // must return 5
 * 
 * six(dividedBy(two())); // must return 3
 * 
 * Требования:
 * 
 * Должна быть функция для каждого числа от 0 ("ноль") до 9 ("девять")
 * Должна быть функция для каждой из следующих математических операций: плюс, минус, умножить, разделить.
 * Каждое вычисление состоит ровно из одной операции и двух чисел
 * Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
 * Деление должно быть целочисленным . Например, это должно возвращать 2, а не 2.666666...:
 * 
 * eight(dividedBy(three()));
 */


function zero() { }
function one() { }
function two() { }
function three() { }
function four() { }
function five() { }
function six() { }
function seven() { }
function eight() { }
function nine() { }

function plus() { }
function minus() { }
function times() { }
function dividedBy() { }