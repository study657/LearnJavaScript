// // Заполнение массивов
// // Давайте заполним массив десятью иксами 'x'. Для этого воспользуемся методом push:

// let arr = [];

// for(let i = 0; i < 10; i++){
//     arr.push('x');
// }
// console.log(arr);




// // Давайте теперь заполним массив числами от 1 до 10:

// let arr = [];

// for(let i = 1; i <= 10; i++){
//     arr.push(i);
// }
// console.log(arr);




// // Можно не использовать push, а указать ключи напрямую:

// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr[i] = 'x';
// }

// console.log(arr); //выведет ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']



// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr[i] = i + 1;
// }

// console.log(arr); //выведет [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




// // Переворот массива
// // Давайте из массива ['a', 'b', 'c', 'd', 'e'] сделаем ['e', 'd', 'c', 'b', 'a']. 
// // Для этого переберем исходный массив с конца и запишем его элементы в новый массив - они будут идти в обратном порядке:

// let arr     = ['a', 'b', 'c', 'd', 'e'];
// let result  = [];

// for(let i = arr.length - 1; i >= 0; i--){
//     result.push(arr[i]);
// }
// console.log(result);




// // Переворот объекта
// // Давайте поменяем ключи и значения в объекте, например из {a: 1, b: 2, c: 3, d: 4, e: 5} сделаем {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}.

// // Для этого переберем циклом for-in исходный объект и создадим при этом новый объект result. 
// // Ключами нового объекта сделаем элементы старого (это obj[key]), а значениями нового объекта - ключи старого (это key):

// let obj     = {
//     'a': 1, 
//     'b': 2, 
//     'c': 3, 
//     'd': 4, 
//     'e': 5
// };
// let result  = {};

// for(let key in obj){
//     result[obj[key]] = key;
// }
// console.log(result);




// // Подсчет количества элементов
// // Пусть дан массив ['a', 'b', 'c', 'a', 'a', 'b']. 
// // Давайте подсчитаем количество одинаковых элементов в этом массиве и сделаем результат в виде объекта {a: 3, b: 2, c: 1}.

// // Для решения сделаем объект count с начальным значением {a: 0, b: 0, c: 0}. 
// // Будем перебирать массив циклом и увеличивать соответствующее значение в объекте count. 
// // К примеру: если текущий элемент массива - это 'a', то увеличим count['a'] на единицу - вот так: count['a']++.

// // Только вместо 'a' следует подставлять текущий элемент массива, вот так: count[arr[i]]++. Давайте напишем окончательный код:

// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let obj = {
//     'a' : 0,
//     'b' : 0,
//     'c' : 0
// };

// for(let i = 0; i < arr.length; i++){
//     obj[arr[i]]++;
// }
// console.log(obj);


// // Пойдем дальше: то, что объекта count имеет изначальное значение {a: 0, b: 0, c: 0} 
// // - не очень удобно, ведь мы обычно не знаем, какие элементы есть в массиве.

// // Пусть объект count формируется автоматически таким образом: если такого элемента в count нет, то ему следует присвоить значение 1, 
// // а если есть - просто увеличить значение на единицу:

// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let obj = {};

// for(let i = 0; i < arr.length; i++){
//     if(obj[arr[i]] == undefined){
//         obj[arr[i]] = 1;
//     }else{
//         obj[arr[i]]++;
//     }
// }
// console.log(obj);




// // Перебор многомерных массивов
// // Пусть дан следующий двухмерный массив:

// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

// // Давайте выведем все его элементы на экран. Для этого нам необходимо запустить два вложенных друг в друга цикла:

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         document.write(arr[i][j]);
//     }
// }








































// // Задачи для решения
// // Заполнение массивов

// // 1. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

// let arr = [];
// let str = '';

// for(let i = 1; i <= 5; i++){
//     str += 'x';
//     arr.push(str);
// }
// console.log(arr);




// //2. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.

// let arr = [];

// for(let i = 1; i <= 5; i++){
//     let str = '';
//     for(let j = 1; j <= i; j++){
//         str += i;
//     }
//     arr.push(str);
// }
// console.log(arr);




// // 3. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив,
// // а вторым - сколько элементов должно быть в массиве. 
// // Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill(value, length){
//     let arr = [];
//     for(let i = 1; i <= length; i++){
//         arr.push(value);
//     }
//     return arr;
// };
// console.log(arrayFill('x', 5));




// // 4. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// let arr = [1, 1, 1, 2, 2, 3, 8, 10];

// function arraySum(massiv){
//     let sum = 0;
//     for(let i = 0; i < massiv.length; i++){
//         sum = sum + arr[i];
//         if(sum > 10){
//             return i + 1;
//         }
//     }
// };

// console.log(arraySum(arr));




// // Переворот массива
// // 5. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// let arr     = [1, 3, 5, 10, 20, 25, 40, 50];
// let result  = [];

// for(let i = arr.length - 1; i >= 0; i--){
//     result.push(arr[i]);
// }
// console.log(result);




// // Многомерные массивы
// // 6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         sum += arr[i][j];
//     }
// }
// console.log(sum);




// 7. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        for(let k = 0; k < arr[i][j].length; k++){
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);