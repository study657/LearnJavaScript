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














// Экранировка спецсимволов в регулярках
// Задача №1
// Дана строка:
// let str = 'a.a aba aea';
// Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.