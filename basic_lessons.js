// 0 cls
console.clear();

console.log(' 1. write HelloWorld');
console.log('Hello, World! from MuSa');

// 2 однострочный коммент
// You know nothing, Jon Snow!
// 2.2 многострочный  
/* bla
   bla */

// 3 Выведите на экран друг за другом три имени: Robert, Stannis, Renly. 
console.log('Robert'); console.log('Stannis'); console.log('Renly');

// 4 Выведите на экран число 9780262531962.
console.log(9780262531962);

// 5 Выведите на экран What Is Dead May Never Die
// ---> https://repl.it
console.log("What Is Dead May Never Die");

// 6 математические операции
/*
    * — умножение
    / — деление
    - — вычитание
    % — остаток от деления
    ** — возведение в степень
*/
// ---> Деление на ноль — это Infinity (бесконечность).
// Выведите на экран результат деления числа 81 на 9.
console.log(81 / 9);

// 7 разность между числами 6 и -81 и выведет ответ на экран
console.log(6 - -81);

// 8 коммутативным законом.
// операция коммутативная, если поменяв местами операнды, 
//  вы получаете тот же результат. например: 3 + 2 = 2 + 3.
// не коммутативная операция вычитания? Конечно, нет: 2 - 3 ≠ 3 - 2. 
//считает и выводит последовательно на экран значения следующих математических выражений: «3 в степени 5» и «-8 разделить на -4».
console.log(3 ** 5); console.log(-8 / -4);

// 9 вычислить и на экран выражения: 8 / 2 + 5 - -3 / 2
console.log(((8 / 2) + 5) - (-3 / 2));

// 10 Дано вычисление 70 * 3 + 4 / 8 + 2. Расставьте скобки так, чтобы оба сложения (3 + 4) и (8 + 2) высчитывались в первую очередь.
console.log( 70 * (3 + 4) / (8 + 2));

// 11 
// Максимальное возможное целое число 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER);
//Вычислите произведение чисел: 0.39 и 0.22
console.log(0.39 * 0.22);

// 12 Бесконечность (Infinity)
console.log((Infinity + Infinity) / 10);

// 13 NaN
console.log(0 / 0); 

// 14 Линтер-проверяет код на соответствие стандартам=красивый код
// «разница между пятью в квадрате и произведением трёх и семи». Расставьте скобки таким образом, чтобы не нарушать правило no-mixed-operators.
console.log((5 ** 2) - (3 * 7));

// 15 Кавычки
// 'A' "B" `C`
//  \" -экранирование кавычки,  \ в тексте не выводится
//на экран: "Khal Drogo's favorite word is "athjahakar""
console.log(`"Khal Drogo's favorite word is "athjahakar""`);
console.log("\"Khal Drogo's favorite word is \"athjahakar\"\"");

// 16 Экранирующие последовательности
// перевод строки: \n
//  вывести используя только один console.log()
// - Did Joffrey agree?
// - He did. He also said "I love using \n".
console.log("- Did Joffrey agree?\n- He did. He also said \"I love using \\n\".");

// 17 Конкатенация - Операция соединения строк 
console.log("Winter " + 'came ' + 'for ' + 'the ' + 'House ' + 'of ' + 'Frey.');

// 18  ASCII или UTF-8.
console.log(String.fromCharCode(126));
console.log(String.fromCharCode(94));
console.log(String.fromCharCode(37));
//Ваше решение: console.log(`~\n`+`^\n`+`%`);

// 19 переменная
// Создайте переменную с именем motto и содержимым What Is Dead May Never Die!. Распечайте содержимое переменной.
let motto = 'What Is Dead May Never Die!';
console.log(motto);

// 20 изменение переменной
let name = 'Brienna';
 name = 'anneirB';

// 21 Выбор имени переменной
let x = 2;
let myBrothersCount = 2;

// 22 
