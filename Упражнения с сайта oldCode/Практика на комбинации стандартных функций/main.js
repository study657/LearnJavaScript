// // Отработка стандартных функций JavaScript
// // 1. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения

// // // Первый метод
// // let str = 'здесь какой-то текст';
// // let newStr = str[0].toUpperCase() + str.substr(1);
// // console.log(newStr);


// // Второй метод
// let str = 'здесь какой-то текст';
// str = str.split('');
// str[0] = str[0].toUpperCase();
// let result = str.join('');
// console.log(result);



// // 2. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл

// let str = '123456';
// str = str.split('').reverse().join('');
// console.log(str);



// // 3. Проверьте, что строка начинается на http://

// // // Первый метод
// // let str = 'http://domen.ru';
// // let usl = str.split('');
// // let esll = usl[0] + usl[1] + usl[2] + usl[3] + usl[4] + usl[5] + usl[6];

// // if (esll == 'http://'){
// //     console.log('Строка начинается на http://');
// // }else{
// //     console.log('ВНИМАНИЕ: Строка не начинается на http://');
// // }
// // console.log(str);


// // Второй метод
// let str = 'domen.ru';
// let usles = str.substr(0, 7);

// if(usles == 'http://'){
//     console.log('Строка начинается на http://');
// }else{
//     console.log('ВНИМАНИЕ: Строка не начинается на http://');
// }
// console.log(str);



// 4. Проверьте, что строка заканчивается на .html.

let str = 'index.html';

let usulles = str.substr(-5);
if(usulles == '.html'){
    console.log('Строка заканчивается на .http');
}else{
    console.log('ВНИМАНИЕ: Строка не заканчивается на .http');
}
console.log(usulles);