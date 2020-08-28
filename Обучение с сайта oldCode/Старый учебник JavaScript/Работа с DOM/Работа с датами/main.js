// var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// let date = new Date();
// let day = date.getDay();

// console.log(days[day]);




// Задаем определенный момент времени
// Когда мы с вами создавали объект Date() (таким образом: new Date()) мы оставляли круглые скобки пустыми. В этом случае мы получали текущий момент времени.

// Однако, можно поступить и по-другому - передать ему параметры в формате new Date(год, месяц, день, часы, минуты, секунды, миллисекунды) 
// и в этом случае в переменную date запишется не текущий момент времени, а тот, который мы указали в параметрах

// Особенности такого формата: отсчет месяцев начинается с нуля, отсутствующие параметры, начиная с часов считаются равными нулю, а для года, месяцев и дней – единице.

// Давайте узнаем день недели (словом) за определенную дату:

// var date = new Date(2025, 10, 5, 12, 59, 59);
// var day = date.getDay();
// var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// alert(days[day]);
// Часы, минуты и секунды можно и не указывать - это не на что не повлияет:

// var date = new Date(2025, 10, 5);
// var day = date.getDay();
// var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// alert(days[day]);




// Работа с getTime
// При работе с датой существует специальный формат timestamp, который в JavaScript показывает количество миллисекунд, 
// прошедшее с 1-го января 1970 года по текущий (или заданный) момент времени.

// Существует специальный метод getTime, с помощью которого можно получить время в формате timestamp.

// Получим текущий момент времени в этом формате:


// var date = new Date();
// console.log(date.getTime());


// Получим заданный момент времени в этом формате:

// var date = new Date(2015, 12, 4, 23, 59, 59);
// alert(date.getTime());

// Получим разницу в миллисекундах между текущим и заданным моментом времени:

// let now = new Date(2020, 02, 03);
// let date = new Date();
// let newDate = now.getTime() - date.getTime();
// console.log(newDate);





// Работа с Date.parse
// Функция Date.parse принимает дату в формате 'год-месяц-деньTчасы:минуты:секунды' и возвращает соответствующей ей timestamp 
// (количество миллисекунд, прошедших с полуночи 1 января 1970 года до заданного момента времени).

// Давайте выведем количество миллисекунд, которые прошли с 1 января 1970 года до 25 мая 2015, 12:59:59:


// document.write(Date.parse('2015-05-25T12:59:59'));





// // Определяем весокосный год или нет

// let year = 2024;

// let date = new Date(year, 2, 0);
// console.log(date.getDate());

// if(date.getDate() == 29){
//     console.log('Год весокосный');
// }else{
//     console.log('Год не весокосный');
// }





// Создаем функцию, которая проверяет корректная дата передана или нет

// function correctDate(year, month, day){
//     let date = new Date(year, month - 1, day);
//     if(date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day){
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(correctDate(2020, 02, 29));




// Выясняем знак зодиака, полученный от пользователя

// let date = new Date(prompt('Введите Вашу дату в формате (год-месяц-число) и мы покажем Ваш знак зодиака', ''));
// let month = date.getMonth();
// let day = date.getDate();
// let correctDate = addZero((month + 1)) + '-' + addZero(day);

// function addZero(num){
//     if(num <= 9){
//         num = '0' + num;
//     }
//     return num;
// }

// if(correctDate >= '01-21' && correctDate <= '02-19'){
//     console.log('Ваш знак зодиака: Водолей');
// }else if(correctDate >= '02-20' && correctDate <= '03-20'){
//     console.log('Ваш знак зодиака: Рыбы');
// }else if(correctDate >= '03-21' && correctDate <= '04-20'){
//     console.log('Ваш знак зодиака: Овен');
// }else if(correctDate >= '04-21' && correctDate <= '05-21'){
//     console.log('Ваш знак зодиака: Телец');
// }else if(correctDate >= '05-22' && correctDate <= '06-21'){
//     console.log('Ваш знак зодиака: Близнецы');
// }else if(correctDate >= '06-22' && correctDate <= '07-22'){
//     console.log('Ваш знак зодиака: Рак');
// }



// let year = 2024;

// let date = new Date(year, 02, 0);

// if(date.getDate() == 29){
//     console.log('Год весокосный');
// }else{
//     console.log('Год не весокосный');
// }





// // Делаем таймер обратного отсчета с текущего значения до полуночи

// let time    = document.getElementById('time');

// timer();
// setInterval(timer, 1000);
// function timer(){
//     let now     = new Date();
//     let target  = new Date(
//         now.getFullYear(),
//         now.getMonth(),
//         now.getDate() + 1,
//         0,
//         0,
//         0
//     );
    
//     let diff    = Math.ceil((target.getTime() - now.getTime()) / 1000);
    
//     let hours   = Math.floor(diff / (60 * 60));
//     let diff_1  = diff % (60 * 60);
    
//     let minutes = Math.floor(diff_1 / 60);
//     let seconds  = diff_1 % 60;

//     function addZero(num){
//         if(num <= 9){
//             num = '0' + num;
//         }
//         return num;
//     };

//     time.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
// };





// // Скрипт по отсчету кол-ва дней до Нового года

// let time = document.getElementById('time');

// timer();
// setInterval(timer, 1000);

// function timer(){
//     let now         = new Date();
//     let newYear     = new Date(
//         now.getFullYear() + 1,
//         0,
//         1,
//         0,
//         0,
//         0
//     );
    
//     let diffAll     = Math.ceil((newYear.getTime() - now.getTime()) / 1000);
//     let days        = Math.floor(diffAll / (60 * 60 * 24));
//     let diffHours   = diffAll % (60 * 60 * 24);
//     let hours       = Math.floor(diffHours / (60 * 60));
//     let diffMinutes = diffHours % (60 * 60);
//     let minutes     = Math.floor(diffMinutes / 60);
//     let seconds     = diffMinutes % 60;

//     function addZero(num){
//         if(num <= 9){
//             num = '0' + num;
//         }
//         return num;
//     };
    
//     time.innerHTML = 'Осталось ' + addZero(days) + ' дней до Нового года!     ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
// };













































// // Задача №1
// // Задача. Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.

// let date = new Date();

// function addZero(num){
//     if(num <= 9){
//         num = '0' + num;
//     }
//     return num;
// };
// document.write(addZero(date.getFullYear()) + '-' + addZero((Number(date.getMonth()) + 1)) + '-' + addZero(date.getDate()));




// // Задача №2
// // Задача. Выведите на экран текущий месяц словом, по-русски.

// let month       = ['Январь', 'Февраль' , 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
// let date        = new Date();
// let corMonth    = date.getMonth();
// console.log(month[corMonth]);



















// // Работа с new Date
// //1. Выведите на экран текущий день

// let date = new Date();
// document.write(date.getDate());




// // 2. Выведите на экран текущий месяц

// let date = new Date();
// document.write(date.getMonth() + 1);




// // 3. Выведите на экран текущий год

// let date = new Date();
// document.write(date.getFullYear());




// // 4. Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, 
// // которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)

// let date = new Date();
// function getZeroDate(num){
//     if(num <= 9){
//         num = '0' + num;
//     }
//     return num;
// };
// document.write(getZeroDate(date.getDate()) + '.' + getZeroDate((date.getMonth() + 1)) + '.' + date.getFullYear() + ' ' + getZeroDate(date.getHours()) + '.' + getZeroDate(date.getMinutes()) + '.' + getZeroDate(date.getSeconds()));




// // Работа с getDay
// // 5. Выведите на экран номер текущего дня недели

// let date = new Date();
// document.write(date.getDay());




// // 6. Выведите на экран текущий день недели (словом, по-русски). 
// // Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски

// function showDay(num){
//     let date = new Date();
//     let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     num = date.getDay();
//     document.write(week[num]);
// };
// showDay(1);




// // 7. Узнайте, какой был 7-го января 2018 года

// let date = new Date(2018, 0, 7, 12);
// let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// let day  = date.getDay();
// console.log(week[day]);




// // Работа с getTime
// // 8. Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени

// let date = new Date();
// let minutes = Math.floor(date.getTime() / (1000 * 60));
// document.write(minutes);




// // Работа с Date.parse
// // 9. Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse

// let now             = new Date();
// let nowTimeStamp    = now.getTime();
// let date            = Date.parse('1988-03-01T00:00:00');
// let hours = Math.floor((nowTimeStamp - date) / (1000 * 60 * 60));
// document.write(hours);




// // 10. Выведите на экран количество секунд с начала дня до настоящего момента времени

// // Первый вариант решения
// let now             = new Date();
// let nowTimeStamp    = now.getTime();
// let date            = Date.parse('2020-02-07T00:00:00');
// let result          = Math.floor((now - date) / 1000);
// document.write(result + '<br>');


// // Второй вариант решения
// var date1 = new Date();
// var now1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0);
// var ssss = Math.floor((date1.getTime() - now1.getTime()) / 1000);
// document.write(ssss);




// // 11. Выведите на экран количество секунд, которое осталось до конца дня.

// // Первый вариант решения
// let now1         = new Date();
// let finishDay1   = new Date(now1.getUTCFullYear(), now1.getMonth(), now1.getDate() + 1, 0, 0, 0);
// let result1      = Math.floor((finishDay1.getTime() - now1.getTime()) / 1000);
// document.write(result1 + '<br>');


// // Второй вариант решения
// let now2             = new Date();
// let nowTimeStamp     = now2.getTime();
// let finishDay2       = Date.parse('2020-02-08T00:00:00');
// let result2          = Math.floor((finishDay2 - nowTimeStamp) / 1000);
// document.write(result2)




// 12. Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31' (с конкретным годом).
// По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения. Воспользуйтесь методом Date.parse

let text    = document.getElementById('text');
let age     = document.getElementById('age');

function showDate(){
    let nowDate         = new Date();
    let year            = nowDate.getFullYear();
    let month           = nowDate.getMonth() + 1;
    let day             = nowDate.getDate();
    let birthday        = String(text.value);
    let correctBirthday = birthday.substr(5);

    let nowDateTimeStamp  = Date.parse(year + '-' + month + '-' + day);
    let BirthdayTimeStamp = Date.parse(year + '-' + correctBirthday + 'T00:00:00');

    let diffMillisec = (BirthdayTimeStamp - nowDateTimeStamp) / 1000;

    let days = diffMillisec / (60 * 60 * 24);

    age.innerHTML = 'Дней, оставшихся до Вашего дня Рождения осталось: ' + days;

    if(days == 0){
        age.innerHTML = 'Поздравляем Вас с Днем рождения!';
    }else if(days < 0){
        days = 365 + Number((diffMillisec / (60 * 60 * 24)));
        age.innerHTML = 'Дней, оставшихся до Вашего дня Рождения осталось: ' + days;
    };
};