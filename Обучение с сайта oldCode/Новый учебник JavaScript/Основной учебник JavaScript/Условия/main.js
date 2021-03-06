// // Конструкция if-else в JavaScript
// // Операторы больше и меньше
// // Задача №1
// // Если переменная test больше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let test    = 10;
// if(test > 10){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }




// // Задача №2
// // Если переменная test меньше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let test    = 10;
// if(test < 10){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }




// // Задача №3
// // Если переменная test больше или равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let test    = 10;
// if(test >= 10){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }




// // Задача №4
// // Если переменная test меньше или равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let test    = 10;
// if(test <= 10){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }




// // Проверка на равенство
// // Задача №5
// // Если переменная test равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let test    = 10;
// if(test == 10){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }




// // Проверка на неравенство
// // Задача №6
// // Если переменная test не равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let test = 80;
// if(test != 10){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }




// // Сравнение переменных
// // Задача №7
// // Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение на экран.

// let test1 = 2;
// let test2 = 6;
// if(test1 > test2){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }














// // Сложные условия в if-else в JavaScript
// // Логическое И
// // Задача №1
// // Если переменная num больше нуля и меньше 5, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let num = 4;
// if(num > 0 && num < 5){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }




// // Задача №2
// // Если переменная num больше или равна 10 и меньше или равна 20, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let num = 15;
// if(num >= 10 && num <= 20){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }




// // Задача №3
// // Если переменная num1 равна или меньше 1, а переменная num2 больше или равна 3, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let num1 = 3;
// let num2 = 7;
// if(num1 <= 1 && num >= 3){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }














// // Конструкция if-else и булевы значения
// // Задача №1
// // Если переменная test равна true, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let test    = true;
// if(test === true){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }




// // Задача №2
// // Если переменная test равна false, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let test    = false;
// if(test === false){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }














// // Сокращенный синтаксис if-else в JavaScript
// // Задача №1
// // Если переменная test равна 10, то пусть на экран выведется слово 'верно'. В противном случае пусть ничего не произойдет.

// let test = 20;
// if(test === 10){
//     console.log('Верно');
// }














// // Комбинации конструкций if-else в JavaScript
// // Задача №1
// // В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = 19;

// if(day >=1 && day < 10){
//     console.log('Вы попали в первую декаду месяца');
// }
// if(day >=10 && day < 20){
//     console.log('Вы попали во вторую декаду месяца');
// }
// if(day >=20 && day <= 31){
//     console.log('Вы попали в третью декаду месяца');
// }




// // Конструкция else if
// // Задача №2
// // Решите предыдущую задачу на декады месяца через конструкцию else if.

// let day = 31;

// if(day >=1 && day < 10){
//     console.log('Вы попали в первую декаду месяца');
// }else if(day >=10 && day < 20){
//     console.log('Вы попали во вторую декаду месяца');
// }else if(day >=20 && day <= 31){
//     console.log('Вы попали в третью декаду месяца');
// }




// // Задача №3
// // Модифицируйте предыдущую задачу так, чтобы, если в переменной day будет не число от 1 до 31, выдавалось сообщение об ошибке.

// let day = 'sad';

// if(day >=1 && day < 10){
//     console.log('Вы попали в первую декаду месяца');
// }else if(day >=10 && day < 20){
//     console.log('Вы попали во вторую декаду месяца');
// }else if(day >=20 && day <= 31){
//     console.log('Вы попали в третью декаду месяца');
// }else{
//     console.log('Ошибка, вы ввели не число!');
// }




// // Задача №4
// // Пусть в переменной age хранится число. Если это число меньше 10 или больше 99, то выведите на экран сообщение об этом.
// // Если же число попадает в указанный диапазон, то найдите сумму цифр этого числа.
// // Если полученная сумма меньше или равна 9, то выведите на экран сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двузначна.

// let age = 87;

// if(age < 10 || age > 99){
//     console.log('Число не попадает в указанный диапазон');
// }else{
//     let str     = String(age);
//     let result  = Number(str[0]) + Number(str[1]);

//     if(result <= 9){
//         console.log('Сумма цифр однозначна');
//     }else{
//         console.log('Сумма цифр двузначна');
//     }
// }














// // Область видимости let и var в if-else
// // Задача №1
// // Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет.
// // Код, однако, не работает. Исправьте ошибку автора кода.
// // Вот проблемный код:

// // let age = 17;

// // if (age >= 18) {
// // 	let adult = true;
// // } else {
// // 	let adult = false;
// // }
// // console.log(adult);

// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }
// console.log(adult);




// // Задача №2
// // Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет.
// // Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.
// // Вот проблемный код:
// // let age = 17;
// // let adult;

// // if (age >= 18) {
// // 	let adult = true;
// // } else {
// // 	let adult = false;
// // }
// // console.log(adult);

// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }
// console.log(adult);




// // Задача №3
// // Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет.
// // После проверки кода оказалось, что если возраст равен или больше 18 лет, то в переменную adult записывается true, как и должно быть, однако, если возраст меньше 18, то переменная adult имеет значение undefined.
// // Исправьте ошибку автора кода.
// // Вот проблемный код:

// // let age = 17;
// // let adult;

// // if (age >= 18) {
// // 	adult = true;
// // } else {
// // 	let adult = false;
// // }
// // console.log(adult);

// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }
// console.log(adult);




// // Задача №4
// // Автор приведенного ниже кода хотел выполнить проверку возраста.
// // Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.
// // Вот проблемный код:

// // let age = 17;
// // let result;

// // if (age >= 18) {
// // 	if (age <= 23) {
// // 		let result = 'от 18 до 23';
// // 	} else {
// // 		let result = 'больше 23';
// // 	}
// // } else {
// // 	let result = 'меньше 18';
// // }
// // console.log(result);

// let age = 17;
// let result;

// if (age >= 18) {
// 	if (age <= 23) {
// 		result = 'от 18 до 23';
// 	} else {
// 		result = 'больше 23';
// 	}
// } else {
// 	result = 'меньше 18';
// }
// console.log(result);




// // Задача №5
// // Автор приведенного ниже кода хотел выполнить проверку возраста.
// // Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined. Исправьте ошибку автора кода.
// // Вот проблемный код:

// // let age = 19;
// // let result;

// // if (age >= 18) {
// // 	let result;
	
// // 	if (age <= 23) {
// // 		result = 'от 18 до 23';
// // 	} else {
// // 		result = 'больше 23';
// // 	}
// // } else {
// // 	result = 'меньше 18';
// // }
// // console.log(result);

// let age = 19;
// let result;

// if (age >= 18) {
// 	if (age <= 23) {
// 		result = 'от 18 до 23';
// 	} else {
// 		result = 'больше 23';
// 	}
// } else {
// 	result = 'меньше 18';
// }
// console.log(result);














// // Примеры использования if-else в JavaScript
// // Задача №1
// // Решите аналогичную задачу, только определите в какую треть часа попадает указанное количество минут.

// let min = 12;

// if(min >= 0 && min < 20){
//     console.log('1 треть');
// }else if(min >= 20 && min < 40){
//     console.log('2 треть');
// }else if(min >= 40 && min <= 60){
//     console.log('e треть');
// }else{
//     console.log('Вы допустили ошибку');
// }




// // Задача №2
// // В переменной arr содержится некоторый массив с числами.
// // Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.

// let arr = [1, 2, 3];

// if(arr.length == 3){
//     console.log(arr[0] + arr[1] + arr[2]);
// }




// // Задача №3
// // Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.

// let num     = 20;
// let str     = String(num);
// let last    = Number(str[str.length - 1]);

// if(last == 0){
//     console.log('Число в конце равно 0');
// }else{
//     console.log('Число в конце не равно 0');
// }




// // Задача №4
// // Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.

// let num     = 53;
// let str     = String(num);
// let last    = str[str.length - 1];

// if(last == 0 || last == 2 || last == 4 || last == 6 || last == 8){
//     console.log('Число является четным');
// }else{
//     console.log('Число является НЕ четным');
// }




// // Остаток от деления
// // Задача №5
// // Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком.
// // Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.

// let num = 54;

// if(num % 2 == 0){
//     console.log('Число четное');
// }else{
//     console.log('Число НЕ четное');
// }




// // Задача №6
// // Дано число. Проверьте, что оно делится на 3.

// let num     = 332;
// let ostatok = num % 3;

// if(ostatok == 0){
//     console.log('Число делится на три, ответ: ' + num / 3);
// }else{
//     console.log('Число НЕ делится на три, остаток: ' + ostatok);
// }














// // Практика на условия if-else в JavaScript
// // Задача №1
// // В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let month = 6;

// if(month >= 1 && month < 3){
//     console.log('ЗИМА');
// }else if(month >= 3 && month < 6){
//     console.log('ВЕСНА');
// }else if(month >= 6 && month < 9){
//     console.log('ЛЕТО');
// }else if(month >= 9 && month < 12){
//     console.log('ОСЕНЬ');
// }




// // Задача №2
// // Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str         = 'abcde';
// let firsSimbol  = str[0];

// if(firsSimbol == 'a'){
//     console.log('Да');
// }else{
//     console.log('Нет');
// }




// // Задача №3
// // Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let num         = 12345;
// let firstNum    = Number(String(num)[0]);

// if(firstNum == 1 || firstNum == 2 || firstNum == 3){
//     console.log('Да');
// }else{
//     console.log('Нет');
// }




// // Задача №4
// // Дано трехзначное число. Найдите сумму цифр этого числа.

// let num = 126;
// let str = String(num);
// if(str.length == 3){
//     console.log(Number(str[0]) + Number(str[1]) + Number(str[2]));
// }else{
//     console.log('Число не трехзначное!');
// }




// // Задача №5
// // Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let num                 = 123123;
// let str                 = String(num);
// let sumFirstThreeNum    = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let sumLastThreeNum     = Number(str[3]) + Number(str[4]) + Number(str[5]);

// if(sumFirstThreeNum == sumLastThreeNum){
//     console.log('Да');
// }else{
//     console.log('Нет');
// }














// // Конструкция switch-case в JavaScript
// // Задача №1
// // Переменная num может принимать значения 1, 2, 3 или 4. Если она имеет значение 1, то выведите на экран текст 'зима', если значение 2 - 'весна' и так далее. 
// // Если в переменной будет какое-то другое значение - выведите на экран сообщение об ошибке. Решите задачу через switch-case.

// let num = 4;

// switch(num){
//     case 1:
//         console.log('ЗИМА');
//     break;
//     case 2:
//         console.log('ВЕСНА');
//     break;
//     case 3:
//         console.log('ЛЕТО');
//     break;
//     case 4:
//         console.log('ОСЕНЬ');
//     break;
//     default:
//         console.log('Ошибка!');
//     break;
// }














// // Тернарный оператор в JavaScript
// // Задача №1
// // Пусть дана переменная num, которая может быть либо отрицательной, либо положительной. 
// // Запишите в переменную result число 1, если переменная num больше или равна нулю, и число -1, если переменная num меньше нуля.

// let num     = -21;
// let check   = num >= 0 ? 1: -1;
// console.log(check);














// // Логические операции в JavaScript
// // Задача №1
// // Пусть даны следующие переменные:
// // let a = 2 * (3 - 1);
// // let b = 6 - 2;
// // Используя оператор ==, узнайте, равны ли значения этих переменных или нет.

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log(a == b);




// // Задача №2
// // Пусть даны следующие переменные:
// // let a = 5 * (7 - 4);
// // let b = 1 + 2 + 7;
// // Используя оператор >, узнайте, больше ли переменная a, чем b.

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// console.log(a > b);




// // Задача №3
// // Пусть даны следующие переменные:
// // let a = 2 ** 4;
// // let b = 4 ** 2;
// // Используя операцию оператор !=, узнайте, разные ли значения этих переменных или нет.

// let a = 2 ** 4;
// let b = 4 ** 2;
// console.log(a != b);














// Функция confirm в JavaScript
// Задача №1
// Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен.

let question    = confirm('Вам есть 18 лет?');

if(question){
    console.log('Для взрослых');
}else{
    console.log('Доступ пользователя запрещен!');
}