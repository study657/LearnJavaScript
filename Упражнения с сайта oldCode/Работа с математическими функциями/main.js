// Работа с %
// // 1. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

// let a = 10,
//     b = 3;

// alert(a % b);

// // 2. Даны переменные a и b. 
// // Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

// let a       = 11,
//     b       = 3,
//     rest    = a % b;

// if(rest == 0){
//     console.log('Делится');
//     alert('Результат деления: ' + (a / b));
// }else{
//     console.log('Делится с остатком');
//     alert('Остаток от деления: ' + (a % b));
// }

// // Работа со степенью и корнем
// // 3. Возведите 2 в 10 степень. Результат запишите в переменную st.

// let st = Math.pow(2, 10);

// console.log(st);

// // 4. Найдите квадратный корень из 245.

// console.log(Math.round(Math.sqrt(245)));

// // 5. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let result = +'';

// for(let i = 0; i < arr.length; i++){
//     let cubArr    = Math.pow(arr[i], 2);
//     result += cubArr;
//     let cubArrKor = Math.sqrt(result);
//     console.log(cubArrKor);
// }

// // 6. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// let koren = Math.sqrt(379);

// console.log(Math.round(koren));
// console.log(koren.toFixed(1));
// console.log(koren.toFixed(2));
// console.log(koren.toPrecision(5));

// // 7. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// let obj = {
//     floor : '',
//     ceil  : ''
// };

// let koren    = Math.sqrt(587);
// let result_1 = Math.floor(koren);
// let result_2 = Math.ceil(koren);

// obj.floor = result_1;
// obj.ceil  = result_2;

// console.log(obj);

// // Нахождение максимального и минимального числа
// // 8. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

// let massiv = [4, -2, 5, 19, -130, 0, 10];

// console.log(Math.min.apply(null, massiv));
// console.log(Math.max.apply(null, massiv));

// // Работа с рандомом
// // 9. Выведите на экран случайное целое число от 1 до 100.

// function randomNumber(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// console.log(randomNumber(1, 100));

// // 10. Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).

// let arr = [];

// for(let i = 0; i < 50; i++){
//     arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// }

// console.log(arr);

// // Работа с модулем
// // 11. Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

// let a = -10;
// let b = -2;

// console.log(Math.abs(a) - Math.abs(b));

// // 12. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. 
// // Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

// let a = 4;
// let b = 10;
// let c = Math.abs((a - b));

// console.log(c);

// // 13. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

// let arr         = [12, 15, 20, 25, 59, 79];
// let result      = +'';
// let kolElemMass = arr.length;

// for(let i = 0; i < arr.length; i++){
//     result += arr[i];
// }
// console.log(result / kolElemMass);

// // 14. Напишите скрипт, который будет находить факториал числа. 
// // Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

// function factorialNum (factorial){
//     var result = 1;
//     for(i = 1; i <= factorial; i++){
//         result *= i;
//     }
//     console.log(result);
// };

// factorialNum(4);