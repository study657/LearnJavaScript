// // Введение в регулярные выражения
// // Задача №1
// // Дана строка:
// // let str = 'ahb acb aeb aeeb adcb axeb';
// // Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.

// let str     = 'ahb acb aeb aeeb adcb axeb';
// let newStr  = str.replace(/a.b/g, '');
// console.log(newStr);




// // Задача №2
// // Дана строка:
// // let str = 'aba aca aea abba adca abea';
// // Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.

// let str     = 'aba aca aea abba adca abea';
// let newStr  = str.replace(/a..a/g, '');
// console.log(newStr);




// // Задача №3
// // Дана строка:
// // let str = 'aba aca aea abba adca abea';
// // Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.

// let str     = 'aba aca aea abba adca abea';
// let newStr  = str.replace(/ab.a/g, '');
// console.log(newStr);














// // Операторы повторения символов в регулярках
// // Задача №1
// // Дана строка:
// // let str = 'aa aba abba abbba abca abea';
// // Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.

// let str     = 'aa aba abba abbba abca abea';
// let newStr  = str.replace(/ab+a/g, '-');
// console.log(newStr);




// // Задача №2
// // Дана строка:
// // let str = 'aa aba abba abbba abca abea';
// // Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.

// let str     = 'aa aba abba abbba abca abea';
// let newStr  = str.replace(/ab*a/g, '-');
// console.log(newStr);




// // Задача №3
// // Дана строка:
// // let str = 'aa aba abba abbba abca abea';
// // Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.

// let str     = 'aa aba abba abbba abca abea';
// let newStr  = str.replace(/ab?a/g, '-');
// console.log(newStr);




// // Задача №4
// // Дана строка:
// // let str = 'aa aba abba abbba abca abea';
// // Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.

// let str     = 'aa aba abba abbba abca abea';
// let newStr  = str.replace(/ab*a/g, '-');
// console.log(newStr);














// // Группирующие скобки в регулярках
// // Задача №1
// // Дана строка:
// // let str = 'ab abab abab abababab abea';
// // Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.

// let str     = 'ab abab abab abababab abea';
// let newStr  = str.replace(/ab(ab)+/g, '-');
// console.log(newStr);














// // Экранировка спецсимволов в регулярках
// // Задача №1
// // Дана строка:
// // let str = 'a.a aba aea';
// // Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.

// let str = 'a.a aba aea';
// let res = str.replace(/a\.a/g, '-');
// console.log(res);




// // Задача №2
// // Дана строка:
// // let str = '2+3 223 2223';
// // Напишите регулярку, которая найдет строку '2+3', не захватив остальные.

// let str = '2+3 223 2223';
// let res = str.replace(/2\+3/g, '-');
// console.log(res);




// // Задача №3
// // Дана строка:
// // let str = '23 2+3 2++3 2+++3 345 567';
// // Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).

// let str = '23 2+3 2++3 2+++3 345 567';
// let res = str.replace(/2\++3/g, '-');
// console.log(res);




// // Задача №4
// // Дана строка:
// // let str = '23 2+3 2++3 2+++3 445 677';
// // Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.

// let str = '23 2+3 2++3 2+++3 445 677';
// let res = str.replace(/2\+*3/g, '-');
// console.log(res);




// // Задача №5
// // Дана строка:
// // let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// // Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.

// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// let res = str.replace(/\*q+\+/g, '-');
// console.log(res);




// // Задача №6
// // Дана строка:
// // let str = '[abc] {abc} abc (abc) [abc]';
// // Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.

// let str = '[abc] {abc} abc (abc) [abc]';
// let res = str.replace(/\[...\]/g, '!');
// console.log(res);














// // Фигурные скобки в регулярных выражения
// // Задача №1
// // Дана строка:
// // let str = 'aa aba abba abbba abbbba abbbbba';
// // Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.

// let str = 'aa aba abba abbba abbbba abbbbba';
// let res = str.replace(/ab{2,4}a/g, '-');
// console.log(res);




// // Задача №2
// // Дана строка:
// // let str = 'aa aba abba abbba abbbba abbbbba';
// // Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается менее 3-х раз (включительно).

// let str = 'aa aba abba abbba abbbba abbbbba';
// let res = str.replace(/ab{1,3}a/g, '-');
// console.log(res);




// // Задача №3
// // Дана строка:
// // let str = 'aa aba abba abbba abbbba abbbbba';
// // Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).

// let str = 'aa aba abba abbba abbbba abbbbba';
// let res = str.replace(/ab{4,}a/g, '-');
// console.log(res);














// // Ограничение жадности в регулярках
// // Задача №1
// // Дана строка:
// // let str = 'aba accca azzza wwwwa';
// // Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме 'a').

// let str = 'aba accca azzza wwwwa';
// let res = str.replace(/a.+?a/g, '!');
// console.log(res);














// Группы символов в регулярных выражениях