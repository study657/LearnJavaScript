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














// // Группы символов в регулярных выражениях
// // Задача №1
// // Дана строка:
// // let str = 'a1a a2a a3a a4a a5a aba aca';
// // Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.

// let str = 'a1a a2a a3a a4a a5a aba aca';
// let res = str.replace(/a\d{1}a/g, '-');
// console.log(res);




// // Задача №2
// // Дана строка:
// // let str = 'a1a a22a a333a a4444a a55555a aba aca';
// // Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.

// let str = 'a1a a22a a333a a4444a a55555a aba aca';
// let res = str.replace(/a\d+a/g, '-');
// console.log(res);




// // Задача №3
// // Дана строка:
// // let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
// // Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').

// let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
// let res = str.replace(/a\d*a/g, '-');
// console.log(res);




// // Задача №4
// // Дана строка:
// // let str = 'avb a1b a2b a3b a4b a5b abb acb';
// // Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.

// let str = 'avb a1b a2b a3b a4b a5b abb acb';
// let res = str.replace(/a\Db/g, '-');
// console.log(res);




// // Задача №5
// // Дана строка:
// // let str = 'ave a#b a2b a$b a4b a5b a-b acb';
// // Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.

// let str = 'ave a#b a2b a$b a4b a5b a-b acb';
// let res = str.replace(/a\Wb/g, '-');
// console.log(res);




// // Задача №6
// // Дана строка:
// // let str = 'ave a#a a2a a$a a4a a5a a-a aca';
// // Напишите регулярку, которая заменит все пробелы на '!'.

// let str = 'ave a#a a2a a$a a4a a5a a-a aca';
// let res = str.replace(/\s/g, '-');
// console.log(res);














// // Наборы символов в регулярных выражениях
// // Задача №1
// // Дана строка:
// // let str = 'aba aea aca aza axa';
// // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква 'b', 'e' или 'x'.

// let str = 'aba aea aca aza axa';
// let res = str.replace(/a[bex]a/g, '-');
// console.log(res);




// // Задача №2
// // Дана строка:
// // let str = 'a1a a3a a7a a9a aba';
// // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - цифра от 3-х до 6-ти.

// let str = 'a1a a3a a7a a9a aba';
// let res = str.replace(/a[3-6]a/g, '-');
// console.log(res);




// // Задача №3
// // Дана строка:
// // let str = 'aba aea afa aha aga';
// // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до g.

// let str = 'aba aea afa aha aga';
// let res = str.replace(/a[a-g]a/g, '-');
// console.log(res);




// // Задача №4
// // Дана строка:
// // let str = 'aba aea afa aha aga';
// // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.

// let str = 'aba aea afa aha aga';
// let res = str.replace(/a[a-fj-z]a/g, '-');
// console.log(res);




// // Задача №5
// // Дана строка:
// // let str = 'aAa aea aEa aJa a3a';
// // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от A до D.

// let str = 'aAa aea aEa aJa a3a';
// let res = str.replace(/a[a-fA-D]a/g, '-');
// console.log(res);




// // Задача №6
// // Дана строка:
// // let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных.

// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.replace(/a[a-z]+a/g, '-');
// console.log(res);




// // Задача №7
// // Дана строка:
// // let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.

// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.replace(/a[a-zA-Z]+a/g, '-');
// console.log(res);




// // Задача №8
// // Дана строка:
// // let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.

// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.replace(/a[a-z1-9]+a/g, '-');
// console.log(res);














// // Инвертирование наборов символов в регулярках
// // Задача №1
// // Напишите регулярку, которая найдет строки по шаблону: цифра '1', затем символ не 'e' и не 'x', цифра '2'.

// let res = str.replace(/1[^ex]2/g, '-');




// // Задача №2
// // Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ цифра от 2 до 7, буква 'z'.

// let res = str.replace(/x[^2-7]z/g, '-');




// // Задача №3
// // Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая латинская буква от 1 и более раз, буква 'z'.

// let res = str.replace(/x[^A-Z]+z/g, '-');




// // Задача №4
// // Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая маленькая латинская буква и не цифра от 1 до 5 от 1 и более раз, буква 'z'.

// let res = str.replace(/x[^a-zA-Z1-5]+z/g, '-');














// // Особенности кириллицы в регулярках
// // Задача №1
// // Дана строка:
// // let str = 'wйw wяw wёw wqw';
// // Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'w', а между ними - буква кириллицы.

// let str = 'wйw wяw wёw wqw';
// let res = str.replace(/w[а-яё]w/g, '-');
// console.log(res);




// // Задача №2
// // Дана строка:
// // let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
// // Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз.

// let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
// let res = str.replace(/[а-яёА-ЯЁ]+/g, '-');
// console.log(res);














// // Спецсимволы внутри квадратных скобок
// // Задача №1
// // Дана строка:
// // let str = 'aba aea aca aza axa a.a a+a a*a';
// // Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.

// let str = 'aba aea aca aza axa a.a a+a a*a';
// let res = str.replace(/a[.+*]a/g, '-');
// console.log(res);




// // Задача №2
// // Дана строка:
// // let str = 'xaz x.z x3z x@z x$z xrz';
// // Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ точка, НЕ собака, и НЕ доллар, а потом буква 'z'.

// let str = 'xaz x.z x3z x@z x$z xrz';
// let res = str.replace(/x[^.@$]z/g, '-');
// console.log(res);














// // Группы символов внутри квадратных скобок
// // Задача №1
// // Напишите регулярку, которая найдет строки по шаблону: цифра или точка от 1 и более раз.

// let res = str.replace(/[\d.]+/g, '-');




// // Задача №2
// // Напишите регулярку, которая найдет строки по шаблону: не цифра и не буква от 'a' до 'g' от 3 до 7 раз.

// let res = str.replace(/[^\da-g]{3,7}/g, '-');














// Спецсимволы-исключения внутри квадратных скобок
// Задача №1
// Дана строка:
// let str = 'x[]z x{}z x.z x()z';
// Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем любое количество любых скобок, затем буква 'z'.

let str = 'x[]z x{}z x.z x()z';
