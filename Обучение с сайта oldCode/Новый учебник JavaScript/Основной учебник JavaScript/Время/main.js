// // Работа с объектом Date в JavaScript
// // Задача №1
// // Выведите на экран текущий день.

// let date  = new Date();
// console.log(date.getDate());




// // Задача №2
// // Выведите на экран текущий месяц.

// let date  = new Date();
// console.log(date.getMonth() + 1);




// // Задача №3
// // Выведите на экран текущий год.

// let date  = new Date();
// console.log(date.getFullYear());














// // Форматирование даты в JavaScript
// // Задача №1
// // Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.

// let date  = new Date();
// console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + date.getDate() + '.' + addZero((date.getMonth() + 1)) + '.' + date.getFullYear());

// function addZero(num){
//     if(num >= 0 && num <= 9){
//         return '0' + num;
//     }else{
//         return num;
//     }
// };




// // Задача №2
// // Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.

// let date      = '2020-06-15';
// let newDate   = date.split('-').reverse().join('.');
// console.log(newDate);














// // Получения дня недели на JavaScript
// // Задача №1
// // Выведите на экран номер текущего дня недели.

// let date  = new Date();
// console.log(date.getDay());




// // Задача №2
// // Определите, является ли текущий день недели выходным или рабочим днем.

// let date  = new Date();
// if(date.getDay() == 0 && date.getDay() == 6){
//   console.log('Сегодня выходной');
// }else{
//   console.log('Сегодня рабочий день');
// }




// // Задача №3
// // Определите сколько дней осталось до ближайшего воскресенья.

// let date        = new Date();
// let currentDay  = date.getDay();
// let result      = 7 - currentDay;
// console.log(result);














// // Вывод частей даты словом в JavaScript
// // Задача №1
// // Пусть дан следующий массив:
// // let months = [
// // 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// // 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// // ];
// // Выведите с помощью этого массива название текущего месяца.

// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// let date  = new Date();
// let month = date.getMonth();
// console.log(months[month]);














// // Установка времени в объекте Date в JavaScript
// // Задача №1
// // Узнайте, какой день недели был в ваш день рождения.

// let date  = new Date(1994, 5, 12);
// let days  = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// let day   = date.getDay();
// console.log(days[day]);














// // Работа с getTime
// // Задача №1
// // Выведите на экран timestamp, соответствующий дате 1 января 2025 года.

// let date  = new Date(2025, 0, 1);
// document.write(date.getTime());




// // Разница между датами
// // Задача №2
// // Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.

// let date1 = new Date(1988, 2, 1);
// let date2 = new Date(2000, 0, 10);
// let diff  = date2.getTime() - date1.getTime();
// console.log(diff / (1000 * 60 * 60 * 24));




// // Задача №3
// // Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

// let now       = new Date();
// let myBirsday = new Date(1994, 5, 12);
// let diff      = now.getTime() - myBirsday.getTime();
// console.log(Math.round(diff / (1000 * 60 * 60 * 24 * 30)));














// // Разница между объектами с датой в JavaScript
// // Задача №1
// // Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

// let date1 = new Date(2010, 1, 15);
// let date2 = new Date(2000, 8, 1);
// let diff  = date1 - date2;
// console.log(diff);




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.

// let date1 = new Date(2010, 1, 15);
// let date2 = new Date(2000, 8, 1);
// let diff  = date1 - date2;
// console.log(diff / (1000 * 60 * 60 * 24));




// // Задача №3
// // Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.

// let date1 = new Date(2010, 1, 15);
// let date2 = new Date(2000, 8, 1);
// let diff  = date1 - date2;
// console.log(diff / (1000 * 60 * 60 * 24 * 30));




// // Задача №4
// // Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.

// let date1 = new Date(2010, 1, 15);
// let date2 = new Date(2000, 8, 1);
// let diff  = date1 - date2;
// console.log(diff / (1000 * 60 * 60 * 24 * 365));














// // Нахождение последнего дня месяца в JavaScript
// // Задача №1
// // Необязательная задача для любителей покодить: допишите код представленной функции до конца. Учтите, что високосный год - это не обязательно год, который делится на 4. Погуглите его определение.

// function getLastDay(month, year) { // функция должна принимать и год
// 	let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
// 	if (month != 1) {
// 		return lastDays[month]; // если не февраль
// 	}else{
//       if(year % 4 == 0 || year % 100 == 0){
//         lastDays[1] = 29;
//         return lastDays[month];
//       }else{
//         lastDays[1] = 28;
//         return lastDays[month];
//       }
// 	}
// };
// console.log(getLastDay(1, 2009));




// // Задача №2
// // Оформите этот способ решения проблемы в виде функции, которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.

// function getLastDay(year, month){
//     let date = new Date(year, month, 0);
//     return date.getDate();
// };
// console.log(getLastDay(2014, 2));




// // Задача №3
// // Определите, какой день недели будет в последнем дне пятого месяца 2025 года.

// console.log(getLastDay(2025, 5));




// // Задача №4
// // Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.

// function isLeap(year){
//   let date  = new Date(year, 2, 0);
  
//   return date.getDate() == 29;
// };
// console.log(isLeap(2005));














// // Проверка корректности даты в JavaScript
// // Задача №1
// // Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января:
// // console.log(checkDate(2025, 0, 31)); // выведет true
// // console.log(checkDate(2025, 0, 32)); // выведет false

// function checkDate(year, month, day){
//     let date = new Date(year, month, day);

//     return date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
// };
// console.log(checkDate(2025, 0, 31)); // выведет true
// console.log(checkDate(2025, 0, 32)); // выведет false














// // Получение моментов времени в JavaScript
// // Задача №1
// // Определите, какой день недели будет 31 декабря текущего года.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), 11, 31);
// console.log(date.getDay());




// // Задача №2
// // Определите, какой день недели будет 1 числа текущего месяца.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), now.getMonth(), 1);
// console.log(date.getDay());




// // Задача №3
// // Определите, какой день недели будет 31 декабря следующего года.

// let now   = new Date();
// let date  = new Date(now.getFullYear() + 1, 11, 31);
// console.log(date.getDay());




// // Задача №4
// // Определите, какой день недели будет через год в такую же дату, как сегодня.

// let now   = new Date();
// let date  = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
// console.log(date.getDay());




// // Задача №5
// // Определите, какой день недели был год назад в такую же дату, как сегодня.

// let now   = new Date();
// let date  = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
// console.log(date.getDay());




// // День следующего или предыдущего месяца
// // Задача №6
// // Вопрос: не будет ли проблемы, если текущий месяц январь? Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц.
// Ответ: нет не будет, т.к. JS автоматически переопределит текущую дату, согласно данным параметрам




// // Задача №7
// // Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
// console.log(date.getDay());




// // Разность моментов
// // Задача №8
// // Определите, сколько дней между 1 января и 10 сентября текущего года.

// let now   = new Date();
// let date1 = new Date(now.getFullYear(), 8, 10);
// let date2 = new Date(now.getFullYear(), 0, 1);
// let diff  = date1 - date2;
// console.log(diff / (1000 * 60 * 60 * 24));




// // Задача №9
// // Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.

// let now   = new Date();
// let date1 = new Date(now.getFullYear(), now.getMonth() + 1, 10);
// let date2 = new Date(now.getFullYear(), now.getMonth(), 20);
// let diff  = date1 - date2;
// console.log(diff / (1000 * 60 * 60 * 24));




// // Момент времени дня
// // Задача №10
// // Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12, 00, 00);
// let diff  = now - date;
// console.log(diff / (1000 * 60 * 60));




// // Задача №11
// // Определите, сколько часов прошло между началом дня и текущим моментом времени.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// let diff  = now - date;
// console.log(diff / (1000 * 60 * 60));




// // Задача №12
// // Определите, сколько часов осталось до конца дня.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
// let diff  = date - now;
// console.log(diff / (1000 * 60 * 60));




// // Циклическая проверка
// // Задача №13
// // Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.

// let now   = new Date().getFullYear();
// let date  = 2000;
// let result  = [];

// for(let i = date; i <= now; i++){
//   let daate = new Date(i, 0, 1);

//   if(daate.getDay() == 6 || daate.getDay() == 0){
//     result.push(i);
//   }
// }
// console.log(result.length);














// // Практика на получение моментов времени в JavaScript
// // Задача №1
// // Определите, сколько секунд прошло с начала дня до настоящего момента времени.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// let diff  = now - date;
// console.log(diff);




// // Задача №2
// // Определите, сколько секунд секунд осталось до конца дня.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
// let diff  = date - now;
// console.log(diff);




// // Задача №3
// // Определите, сколько дней осталось до нового года.

// let now   = new Date();
// let date  = new Date(now.getFullYear() + 1, 0);
// let diff  = date - now;
// console.log(diff / (1000 * 60 * 60 * 24));




// // Задача №4
// // Определите, сколько пятниц 13-е в текущем году.

// let now         = new Date();
// let firstMonth  = 0;
// let lastMonth   = 11;
// let result      = [];

// for(let i = firstMonth; i <= lastMonth; i++){
//   let date  = new Date(now.getFullYear(), i, 13);

//   if(date.getDay() == 5){
//     result.push(date);
//   }
// }
// console.log(result);
// console.log(result.length);




// // Задача №5
// // Определите, какой год был 3 месяца назад.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
// console.log(date.getFullYear());




// // Задача №6
// // Определите, какой день недели будет в последнем дне текущего месяца.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), now.getMonth() + 1, 0);
// console.log(date.getDate());




// // Задача №7
// // Определите, сколько дней осталось до конца месяца года.

// let now   = new Date();
// let date  = new Date(now.getFullYear(), now.getMonth() + 1, 1);
// let diff  = date - now;
// console.log(diff / (1000 * 60 * 60 * 24));




// // Задача №8
// // Напишите код, который будет определять, високосный ли текущий год.

// function isLiep(year){
//     let date  = new Date(year, 2, 0);

//     if(date.getDate() == 29){
//       console.log('Год весокосный');
//     }else{
//       console.log('Год не весокосный');
//     }
// };
// isLiep(2021);




// // Задача №9
// // Напишите код, который будет находить предыдущий високосный год.

// function getLiapYear(year){
//     for(let i = year; i >= 0; i--){
//       let date  = new Date(i, 2, 0);
//       if(date.getDate() == 29){
//         return date.getFullYear();
//       }
//     }
// };
// console.log(getLiapYear(2010));




// // Задача №10
// // Напишите код, который будет находить следующий високосный год.

// function getLiapYear(year){
//     for(let i = year; i <= 2100; i++){
//       let date  = new Date(i, 2, 0);
//       if(date.getDate() == 29){
//         return date.getFullYear();
//       }
//     }
// };
// console.log(getLiapYear(2021));














// // Строковое сравнение дат на JavaScript
// // Задача №1
// // Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
// // let date1 = '2020-11-31';
// // let date2 = '2020-12-01';

// let date1 = '2020-11-31';
// let date2 = '2020-12-01';

// if(date1 > date2){
//     console.log('date1 Больше data2');
// }else{
//     console.log('date2 Больше data1');
// }




// // Задача №2
// // Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
// // let date1 = '09-21';
// // let date2 = '09-23';

// let date1 = '09-21';
// let date2 = '09-23';

// if(date1 > date2){
//     console.log('date1 Больше data2');
// }else{
//     console.log('date2 Больше data1');
// }




// // Задача №3
// // Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.

// let date    = '28.03';
// if(date >= '21.03' && date <= '20.04'){
//     console.log('Вы ОВЕН');
// }














// // Сравнение объектов с датами в JavaScript
// // Задача №1
// // Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий полдень текущего дня. Сравните два этих объекта и определите, был ли уже полдень или нет.

// let date1   = new Date();
// let date2   = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 12, 0, 0);

// if(date1 > date2){
//     console.log('Полдень уже прошел!');
// }else{
//     console.log('Полдень скоро будет!');
// }




// // Задача №2
// // Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий 15 число текущего месяца. Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.

// let date1   = new Date();
// let date2   = new Date(date1.getFullYear(), date1.getMonth(), 15);

// if(date1 > date2){
//     console.log('Половина месяца уже прошла!');
// }else{
//     console.log('Половина месяца еще не прошла!');
// }














// // Количество времени до ближайшей даты на JavaScript
// // Задача №1
// // Используя приведенный мною код, окончательно решите задачу.

// let now  = new Date();
// let date = new Date(now.getFullYear(), 2, 8); // текущий год

// let diff = date - now; // разница

// if (diff > 0) {
// 	console.log('До праздника 8 марта осталось: ' + diff / (1000 * 60 * 60 * 24));
// } else if (diff == 0) {
// 	console.log('Праздник 8 марта сегодня!');
// } else {
//     date = new Date(now.getFullYear() + 1, 2, 8);
//     diff = date - now;
//     console.log('До праздника 8 марта осталось: ' + diff / (1000 * 60 * 60 * 24));
// }




// // Задача №2
// // Пусть ваш День Рождения - первое марта. Определите, сколько дней осталось до вашего ближайшего дня рождения.

// let now     = new Date();
// let date    = new Date(now.getFullYear(), 2, 1);
// let diff    = (date - now) / (1000 * 60 * 60 * 24);

// if(diff > 0){
//     console.log('До Вашего дня рождения осталось: ' + diff + ' дней');
// }else if(diff == 0){
//     console.log('Поздравляем с Днем рождения!');
// }else{
//     date = new Date(now.getFullYear() + 1, 2, 1);
//     diff    = (date - now) / (1000 * 60 * 60 * 24);
//     console.log('До Вашего дня рождения осталось: ' + Math.floor(diff) + ' дней');
// }




// Задача №3
// Пусть теперь День Рождения может быть произвольным и содержится в переменных month и day. Определите, сколько дней осталось до заданного этой датой праздника. 
// Учтите при решении, что есть счастливчики, которые родились 29 февраля. Не забудьте их учесть в вашем решении.

let month   = 2;
let day     = 29;

let now     = new Date();
let date    = new Date(now.getFullYear(), month - 1, day);
let diff    = (date - now) / (1000 * 60 * 60 * 24);

if(diff > 0){
    if(month == 2 && day == 29){
        if(isLiap()){
            console.log('До Вашего дня рождения осталось: ' + Math.ceil(diff) + ' дней');
        }else{
            console.log('До Вашего дня рождения осталось: ' + Math.ceil(diff) - 1 + ' дней');
        }
    }else{
        console.log('До Вашего дня рождения осталось: ' + Math.ceil(diff) + ' дней');
    }
}else if(diff == 0){
    console.log('Поздравляем с Днем рождения!');
}else{
    if(month == 2 && day == 29){
        if(isLiap()){
            date = new Date(now.getFullYear() + 1, month - 1, day);
            diff    = (date - now) / (1000 * 60 * 60 * 24);
            console.log('До Вашего дня рождения осталось: ' + (Math.ceil(diff) - 1) + ' дней');
        }else{
            date = new Date(now.getFullYear() + 1, month - 1, day);
            diff    = (date - now) / (1000 * 60 * 60 * 24);
            console.log('До Вашего дня рождения осталось: ' + (Math.ceil(diff) - 1) + ' дней');
        }
    }
    date = new Date(now.getFullYear() + 1, month - 1, day);
    diff    = (date - now) / (1000 * 60 * 60 * 24);
    console.log('До Вашего дня рождения осталось: ' + Math.ceil(diff) + ' дней');
}

function isLiap(year){
    let date    = new Date(year, 2, 0);
    if(date.getDate() == 29){
        return true;
    }else{
        return false;
    }
};
console.log(isLiap(2021));