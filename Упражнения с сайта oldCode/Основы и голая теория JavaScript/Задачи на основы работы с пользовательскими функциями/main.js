// // Задача №1
// // Задача. Сделайте функцию, которая возвращает куб числа. Число передается параметром.

// // // Первый метод
// // function cube(num) {
// // 	return num * num * num
// // }
// // console.log(cube(6));

// // Второй метод
// function cubResult (number){
//     return Math.pow(number, 3);
// };
// console.log(cubResult(6));



// // 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function numberCvadrat (number){
//     return number * number;
// };
// console.log(numberCvadrat(6));



// // 2. Сделайте функцию, которая возвращает сумму двух чисел.

// function sum (a, b){
//     return a + b;
// };
// console.log(sum(3, 4));



// //3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// function calc (a, b, c){
//     return (a - b) / c;
// };
// console.log(calc(10, 5, 5));



// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

var obj = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};

function weekDay (number){
    for(let key in obj){
        if(number == key){
            return obj[key];
        }
    }
};
console.log(weekDay(7));