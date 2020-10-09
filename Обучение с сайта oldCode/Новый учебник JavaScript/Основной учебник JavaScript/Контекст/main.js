// // Привязывание контекста через метод call в JavaScript
// // Задача №1
// // Дана функция:
// // function func() {
// // 	console.log(this.value);
// // }
// // Даны три инпута:
// // <input id="elem1" value="text1">
// // <input id="elem2" value="text2">
// // <input id="elem2" value="text3">
// // С помощью метода call и функции func выведите на экран value каждого из инпутов.

// let elem1   = document.getElementById('elem1');
// let elem2   = document.getElementById('elem2');
// let elem3   = document.getElementById('elem3');

// function func() {
// 	console.log(this.value);
// };
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);




// // Задача №2
// // Пусть дан следующий код:
// // <input id="elem" value="привет">
// // let elem = document.querySelector('#elem');
// // function func(surname, name) {
// // 	console.log(this.value + ', ' + surname + ' ' + name);
// // }
// // func(); // тут должно вывести 'привет, Иванов Иван'
// // Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// };
// func.call(elem, 'Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'














// Привязывание контекста через метод apply в JavaScript
// Задача №1
// Пусть дан следующий код:
// <input id="elem" value="привет">
// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
// func(); // тут должно вывести 'привет, Иванов Иван'
// Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}
func.apply(elem, ['Иванов', 'Иван']); // тут должно вывести 'привет, Иванов Иван'