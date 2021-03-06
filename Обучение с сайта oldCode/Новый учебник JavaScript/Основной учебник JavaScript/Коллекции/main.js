// // Массивы в JavaScript
// // Задача №1
// // Создайте массив с элементами 'a', 'b' и 'c'. Выведите его на экран с помощью функции alert, а также выведите его в консоль с помощью console.log.

// let arr = ['a', 'b', 'c'];
// console.log(arr);




// // Задача №2
// // Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.

// let arr = ['a', 'b', 'c'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);




// // Задача №3
// // Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'.

// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr[0] + '+' + arr[1] + '+' + arr[2] + '+' + arr[3]);




// // Задача №4
// // Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.

// let arr = [1, 2, 3];
// console.log(arr[0] + arr[1] + arr[2]);




// // Задача №5
// // Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
// // Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

// let arr     = [2, 5, 3, 9];
// let num1    = arr[0] * arr[1];
// let num2    = arr[2] * arr[3];
// let result  = num1 + num2;
// console.log(result);




// // Задача №6
// // Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr.length);




// // Задача №7
// // Создайте массив с произвольными элементами. Выведите на экран последний элемент этого массива.

// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr[arr.length - 1]);




// // Задача №8
// // Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);




// // Задача №9
// // Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.

// let arr = [1, 2, 3, 4, 5];
// arr[0] += 3;
// arr[1] += 3;
// arr[2] += 3;
// arr[3] += 3;
// arr[4] += 3;
// console.log(arr);




// // Задача №10
// // Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

// let arr = [1, 2, 3];
// arr[0]++;
// arr[1]++;
// arr[2]++;
// console.log(arr);




// // Задача №11
// // С помощью описанного приема создайте массив с элементами 1, 2 и 3.

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);




// // Задача №12
// // Пусть дан такой массив:
// // let arr = [1, 2, 3];
// // Добавьте ему в конец элементы 4 и 5.

// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// console.log(arr);














// // Объекты в JavaScript
// // Задача №1
// // Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'. Выведите на экран все его элементы.

// let obj = {
//     1:    'a',
//     2:    'b',
//     3:    'c'
// };
// console.log(obj['1'] + ',' + obj['2'] + ',' + obj['3']);




// // Задача №2
// // Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.

// let obj = {
//     a:  1,
//     b:  2,
//     c:  3
// };
// console.log(obj['a'] + obj['b'] + obj['c']);




// // Задача №3
// // Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.

// let obj = {
//     '1a':   1,
//     '2b':   2,
//     'c-c':  3
// };
// console.log(obj['1a'] + obj['2b'] + obj['c-c']);




// // Задача №4
// // Дан объект:
// // let obj = {'1a': 1, 'b2': 2, 'с-с': 3, 'd4': 4};
// // Для каких ключей данного объекта кавычки обязательны, а для каких нет?

// let obj = {'1a': 1, 'b2': 2, 'с-с': 3, 'd4': 4};

// Ответ: Ковычки обязательно для ключа 1а, с-с, т.к. ключи в объекте, которые начинаются с цифры и затем идет строка, а так же с дифисами запрещены и требуют взятие в ковычки.
//        А для ключей b2 и d4 ковычки не обязательны. Но все равно лучше их ставить, чтобы не путаться и прийти к общему заполнению ключами в объекте.




// // Задача №5
// // Дан объект:
// // let obj = {key1: 1, key2: 2, key3: 3};
// // Найдите сумму его элементов. Обращайтесь к элементам с помощью изученного синтаксиса.

// let obj = {key1: 1, key2: 2, key3: 3};
// console.log(obj.key1 + obj.key2 + obj.key3);




// // Задача №6
// // Дан объект:
// // let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
// // К каким элементам этого объекта допустимо обращение через свойство, а к каким - нет?

// let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};

// Ответ: К ключам 1а, еее- запрещено обращаться как к свойствам, т.е. через точку, т.к. их заполнение несет грубую ошибку в написании ключа без ковычек. Остальные ключи могут быть получены как свойства.




// // Задача №7
// // Создайте объект user с ключами name (имя), surname (фамилия), patronymic (отчество) и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.

// let user    = {
//     'name'      :   'Александр',
//     'surname'   :   'Петров',
//     'patronymic':   'Валерьевич',
//     'age'       :   54
// };

// console.log(user['surname'] + ' ' + user['name'] + ' ' + user['patronymic']);




// // Задача №8
// // Создайте объект date (дата) с ключами year (год), month (месяц) и day (день) и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате 'год-месяц-день'.

// let date    = {
//     'year'      : 2020,
//     'month'     : 'Май',
//     'day'       : 15
// };

// console.log(date['year'] + '-' + date['month'] + '-' + date['day']);




// // Задача №9
// // Создайте объект с ключами a, b и c и элементами 1, 2 и 3.

// let obj = {};
// obj['a'] = 1;
// obj['b'] = 2;
// obj['c'] = 3;
// console.log(obj);














// // Ключи из переменных в JavaScript
// // Задача №1
// // Дан следующий массив:
// // let arr = {'a', 'b', 'c'};
// // Дана также переменная key со значением 2.
// // Выведите на экран элемент, ключ которого хранится в переменной key.

// let arr = ['a', 'b', 'c'];
// let key = 2;
// console.log(arr[key]);




// // Задача №2
// // Дан следующий массив:
// // let arr = [1, 2, 3, 4, 5];
// // Дана также переменная key1 со значением 1 и переменная key2 со значением 2.
// // Найдите сумму элементов, ключи которых хранятся в наших переменных.

// let arr     = [1, 2, 3, 4, 5];
// let key1    = 1;
// let key2    = 2;
// console.log(arr[key1] + arr[key2]);




// // Ключи объектов
// // Задача №3
// // Дан следующий объект:
// // let obj = {'a': 1, 'b': 2, 'c': 3};
// // Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью переменной key соответствующий элемент массива.

// let obj = {'a': 1, 'b': 2, 'c': 3};
// let key = 'b';
// console.log(obj[key]);