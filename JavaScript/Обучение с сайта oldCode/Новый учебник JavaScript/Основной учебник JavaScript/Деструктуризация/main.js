// // Деструктуризация массивов в JavaScript
// // Задача №1
// // В следующем коде части массива записываются в соответствующие переменные:

// // let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];
// // let position   = arr[3];
// // let salary     = arr[4];
// // Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// let [name, surname, department, position, salary] = arr;




// Массив из функции
// // Задача №2
// // В следующем коде части массива записываются в соответствующие переменные:
// // function func() {
// // 	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// // }
// // let arr = func();

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];
// // let position   = arr[3];
// // let salary     = arr[4];
// // Переделайте этот код через деструктуризацию согласно изученной теории.

// function func() {
// 	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// };
// let [name, surname, department, position, salary] = func();
// console.log(department);




// // Пропуск значений
// // Задача №3
// // В следующем коде части массива записываются в соответствующие переменные:

// // let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// // let department = arr[2];
// // let position   = arr[3];
// // Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// let [,, department, position,] = arr;
// console.log(position);




// // Остаток
// // Задача №4
// // В следующем коде части массива записываются в соответствующие переменные:
// // let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// // let name    = arr[0];
// // let surname = arr[1];

// // let info = arr.slice(2); // все элементы со второго до конца массива
// // Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// let [name, surname, ...info] = arr;
// console.log(info);




// // Значение по умолчанию
// // Задача №5
// // В следующем коде части массива записываются в соответствующие переменные:

// // let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];

// // let position;
// // if (arr[3] !== undefined) {
// // 	position = arr[3];
// // } else {
// // 	position = 'джуниор';
// // }
// // Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['Иван', 'Иванов', 'отдел разработки'];
// let [name, surname, department, position = 'джуниор'] = arr;
// console.log(position);




// // Задача №6
// // Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.

// let arr = [2025];
// let [year = getYear(), month = getMonth(), day = getDay()] = arr;
// console.log(month);

// function getYear(){
//     return (new Date).getFullYear();
// };

// function getMonth(){
//     return (new Date).getMonth();
// };

// function getDay(){
//     return (new Date).getDate();
// };














// // Деструктуризация объектов в JavaScript
// // Задача №1
// // В следующем коде части объекта записываются в соответствующие переменные:
// // let options = {
// // 	color: 'red',
// // 	width:  400,
// // 	height: 500,
// // };

// // let color  = options.color;
// // let width  = options.width;
// // let height = options.height;
// // Переделайте этот код через деструктуризацию согласно изученной теории.

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color, width, height} = options;
// console.log(color);




// // Другие имена переменных
// // Задача №2
// // В следующем коде части объекта записываются в соответствующие переменные:

// // let options = {
// // 	color: 'red',
// // 	width:  400,
// // 	height: 500,
// // };

// // let c = options.color;
// // let w = options.width;
// // let h = options.height;
// // Переделайте этот код через деструктуризацию согласно изученной теории.

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color: c, width: w, height: h} = options;
// console.log(w);




// // Значения по умолчанию
// // Задача №3
// // В следующем коде части объекта записываются в соответствующие переменные:
// // let options = {
// // 	width:  400,
// // 	height: 500,
// // };

// // let color;
// // if (options.color !== undefined) {
// // 	color = options.color;
// // } else {
// // 	color = 'black';
// // }

// // let width  = options.width;
// // let height = options.height;
// // Переделайте этот код через деструктуризацию согласно изученной теории.

// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color = 'black', width, height} = options;
// console.log(color);




// // Другие переменные и значения по умолчанию
// // Задача №4
// // В следующем коде части объекта записываются в соответствующие переменные:
// // let options = {
// // 	width:  400,
// // 	height: 500,
// // };

// // let с;
// // if (options.с !== undefined) {
// // 	с = options.color;
// // } else {
// // 	с = 'black';
// // }

// // let w = options.width;
// // let h = options.height;
// // Переделайте этот код через деструктуризацию согласно изученной теории.

// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color: c = 'black', width: w, height: h} = options;
// console.log(c);














// // Деструктуризация параметров функций в JavaScript
// // Задача №1
// // Переделайте следующий код через деструктуризацию согласно изученной теории:
// // function func(employee) {
// // 	let name       = employee[0];
// // 	let surname    = employee[1];
// // 	let department = employee[2];
// // 	let position   = employee[3];
// // 	let salary     = employee[4];
// // }
// // func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

// function func([name, surname, department, position, salary]) {
// 	console.log(name, surname, department, position, salary);
// };
// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );




// // Задача №2
// // Переделайте следующий код через деструктуризацию согласно изученной теории:
// // function func(employee) {
// // 	let name     = employee[0];
// // 	let surname  = employee[1];
// // 	let info     = employee.slice(2);
// // }
// // func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

// function func([name, surname, ...info]) {
//     console.log(name);
//     console.log(surname);
//     console.log(info);
// };
// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );




// // Задача №3
// // Переделайте следующий код через деструктуризацию согласно изученной теории:
// // function func(employee) {
// // 	let name       = employee[0];
// // 	let surname    = employee[1];
// // 	let department = employee[2];
	
// // 	let position;
// // 	if (arr[3] !== undefined) {
// // 		position = arr[3];
// // 	} else {
// // 		position = 'джуниор';
// // 	}
// // }
// // func( ['Иван', 'Иванов', 'отдел разработки'] );

// function func([name, surname, department, position = 'джуниор']) {
//     console.log(name);
//     console.log(surname);
//     console.log(department);
//     console.log(position);
// };
// func( ['Иван', 'Иванов', 'отдел разработки'] );




// // Задача №4
// // Переделайте следующий код через деструктуризацию согласно изученной теории:
// // function func(department, employee, hired) {
// // 	let name     = employee[0];
// // 	let surname  = employee[1];
	
// // 	let year  = hired[0];
// // 	let month = hired[1];
// // 	let day   = hired[2];
// // }
// // func( 'отдел разработки', ['Иван', 'Иванов'], ['2018, 12, 31'] );

// function func(department, [name, surname], [year, month, day]) {
//     console.log(department);
//     console.log(name);
//     console.log(surname);
//     console.log(year);
//     console.log(month);
//     console.log(day);
// }
// func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );




// // Объекты в параметрах
// // Задача №5
// // Переделайте следующий код через деструктуризацию согласно изученной теории:
// // function func(options) {
// // 	let color  = options.color;
// // 	let width  = options.width;
// // 	let height = options.height;
// // }
// // func( {color: 'red', width: 400, height: 500} );

// function func({color, width, height}) {
//     console.log(color);
//     console.log(width);
//     console.log(height);
// };
// func( {color: 'red', width: 400, height: 500} );




// Задача №6
// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;
	
// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }
// func( {color: 'red', width: 400, height: 500} );

function func({color = 'black', width, height}) {
    console.log(color);
    console.log(width);
    console.log(height);
}
func( {width: 400, height: 500} );