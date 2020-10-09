// // Задачи на функции работы с массивами в JavaScript

// // Задача №1
// // Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let arr_1 = ['a', 'b', 'c'];
// let arr_2 = [1, 2, 3];
// let correctArr = arr_1.concat(arr_2);

// console.log(correctArr);

// // //Вариант 1:
// // var c = a.concat(b);
// // alert(c); //получится массив ['a', 'b', 'c', 1, 2, 3]

// // //Вариант 2:
// // var c = b.concat(a);
// // alert(c); //получится массив [1, 2, 3, 'a', 'b', 'c']



// // Задача №2
// // Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);
// console.log(arr);



// // Работа с concat
// // 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// let arr_1 = [1, 2, 3];
// let arr_2 = [4, 5, 6];
// let correctArr = arr_1.concat(arr_2);
// console.log(correctArr);



// // Работа с reverse
// // 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);



// // Работа с push, unshift
// // 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);



// // 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);



// // Работа с shift, pop
// // 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// let arr = ['js', 'css', 'jq'];
// let elem = arr.shift();
// document.write(elem);



// // 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ['js', 'css', 'jq'];
// document.write(arr.pop());


// // Работа с slice
// // 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0, 3);
// console.log(newArr);



// // 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(3);
// console.log(newArr);



// // Работа с splice
// // 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// let delArr = arr.splice(1, 2);
// console.log(arr);



// // 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let arr = [1, 2, 3, 4, 5];
// let delArr = arr.splice(0, 1) + arr.splice(3, 1);
// console.log(arr);



// // 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);



// // 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(1, 0, 'a', 'b') + arr.splice(6, 0, 'c') + arr.splice(8, 0, 'e');
// console.log(arr);



// // Работа с sort
// // 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// let arr = [3, 4, 1, 2, 7];
// arr.sort();
// console.log(arr);



// Работа с Object.keys
// 14.	Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

let obj = {
    js:'test', 
    jq: 'hello', 
    css: 'world'
};
console.log(Object.keys(obj));