// // Калькулятор
// let buttons     = document.querySelectorAll('#calc .button');
// let display     = document.getElementById('display');

// for(let button of buttons){
//     button.addEventListener('click', function(){
//         if(this.dataset.type == 'C'){
//             display.value   = '';
//         }else if(this.dataset.type == '='){
//             display.value   = eval(display.value);
//         }else{
//             display.value   += this.dataset.type;
//         }
//     });
// }














// // Игра крестики-нолики
// let cells           = document.querySelectorAll('.cell');
// let message         = document.getElementById('message');
// let restart         = document.getElementById('restart');
// let btn             = document.getElementById('btn');
// let win_x           = document.getElementById('win_x');
// let win_0           = document.getElementById('win_0');
// let win_draw        = document.getElementById('win_draw');

// let pause           = false;
// let player          = 'X';
// let qualityMovies   = 0;
// let wins            = {
//     'X'         : 0,
//     '0'         : 0,
//     'win_draw'  : 0 
// };

// for(let cell of cells){
//     cell.addEventListener('click', function(){
//         if(!cell.innerHTML && !pause){
//             cell.innerHTML      = player;
//             message.innerHTML   = 'Ходит: ' + setPlayerMovies();
//             qualityMovies++;

//             if(checkWin(cells)){
//                 pause               = true;
//                 message.innerHTML   = 'Выиграл: ' + setPlayerMovies();
//                 wins[player]++;
//                 console.log(wins);
//             }else if(qualityMovies == 9){
//                 message.innerHTML   = 'Ничья';
//                 wins['win_draw']++;
//             }
//         }
//         updateStatistic(wins);
//     });
// }

// restart.addEventListener('click', function(){
//     for(let cell of cells){
//         cell.innerHTML  = '';
//     }
//     pause               = false;
//     player              = 'X';
//     qualityMovies       = 0;
//     message.innerHTML   = 'Ходит: X';
// });

// btn.addEventListener('click', function(){
//     wins            = {
//         'X'         : 0,
//         '0'         : 0,
//         'win_draw'  : 0 
//     };
//     updateStatistic(wins);
// });

// function setPlayerMovies(){
//     if(player == 'X'){
//         player = '0';
//     }else{
//         player = 'X';
//     }
//     return player;
// };

// function checkWin(cells){
//     let winIndex = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     for(let i = 0; i < winIndex.length; i++){
//         if(
//             cells[winIndex[i][0]].innerHTML == cells[winIndex[i][1]].innerHTML &&
//             cells[winIndex[i][1]].innerHTML == cells[winIndex[i][2]].innerHTML &&
//             cells[winIndex[i][0]].innerHTML != ''
//         ){
//             return true;
//         }
//     }
//     return false;
// };

// function updateStatistic(wins){
//     win_x.innerHTML     = wins['X'];
//     win_0.innerHTML     = wins['0'];
//     win_draw.innerHTML  = wins['win_draw'];
// };














// // Тест с вопросами №1
// let questions       = document.querySelectorAll('.question');
// let check           = document.getElementById('check');

// for(let question of questions){
//     let inputs      = question.querySelectorAll('input');
    
//     for(let input of inputs){
//         input.addEventListener('click', function(){
//             removeChecked(inputs);
//             this.setAttribute('checked', '');
//         });
//     }
// }

// check.addEventListener('click', function(){
//     let trueAnsver      = getTrueAnsver(questions);
//     let noneAnsver      = getNoneAnsver(questions);
//     let wrongAnsver     = questions.length - (trueAnsver + noneAnsver);
    
//     alert('Правильных ответов: ' + trueAnsver + ' (' + ((100 * trueAnsver / questions.length)).toFixed(0) + '%' + ')' + '\nНеправильных ответов: ' + wrongAnsver + '\nБез ответов: ' + noneAnsver);
// });

// function getTrueAnsver(questions){
//     let arr     = [];
//     for(let question of questions){
//         let inputs  = [...question.querySelectorAll('input')];
        
//         let check   = inputs.some(function(elem){
//             if(elem.hasAttribute('data-true') && elem.checked){
//                 arr.push(elem);
//                 return true;
//             }else{
//                 return false;
//             }
//         });
//     }
//     return arr.length;
// };

// function getNoneAnsver(questions){
//     let arr     = [];
//     for(let question of questions){
//         let inputs  = [...question.querySelectorAll('input')];
        
//         let check   = inputs.every(function(elem){
//             if(!elem.checked){
//                 return true;
//             }else{
//                 return false;
//             }
//         });

//         if(check){
//             arr.push(check);
//         }
//     }
//     return arr.length;
// };

// function removeChecked(inputs){
//     for(let input of inputs){
//         input.removeAttribute('checked');
//     }
// };














// // Тест с вопросами №2
// let questions       = document.querySelectorAll('.question');
// let next            = document.getElementById('next');
// let check           = document.getElementById('check');
// let curr            = 0;

// next.addEventListener('click', function(){
//     questions[curr].style.display  = 'none';
//     curr++;
//     questions[curr].style.display  = 'block';

//     if(curr == questions.length - 1){
//         next.style.display  = 'none';
//         check.style.display = 'block';
//     }
// });

// check.addEventListener('click', function(){
//     let trueAnsver      = getTrueAnsver(questions);
//     let noneAnsver      = getNoneAnsver(questions);
//     let wrongAnsver     = questions.length - (trueAnsver + noneAnsver);
    
//     alert('Правильных ответов: ' + trueAnsver + ' (' + ((100 * trueAnsver / questions.length)).toFixed(0) + '%' + ')' + '\nНеправильных ответов: ' + wrongAnsver + '\nБез ответов: ' + noneAnsver);
// });

// function closeQuestion(questions){
//     for(let i = 0; i < questions.length; i++){
//         questions[i].style.display  = 'none';
//     }
//     questions[curr].style.display   = 'block';
// };
// closeQuestion(questions);

// for(let question of questions){
//     let inputs      = question.querySelectorAll('input');
    
//     for(let input of inputs){
//         input.addEventListener('click', function(){
//             removeChecked(inputs);
//             this.setAttribute('checked', '');
//         });
//     }
// }

// function removeChecked(inputs){
//     for(let input of inputs){
//         input.removeAttribute('checked');
//     }
// };

// function getTrueAnsver(questions){
//     let arr     = [];
//     for(let question of questions){
//         let inputs  = [...question.querySelectorAll('input')];
        
//         let check   = inputs.some(function(elem){
//             if(elem.hasAttribute('data-true') && elem.checked){
//                 arr.push(elem);
//                 return true;
//             }else{
//                 return false;
//             }
//         });
//     }
//     return arr.length;
// };

// function getNoneAnsver(questions){
//     let arr     = [];
//     for(let question of questions){
//         let inputs  = [...question.querySelectorAll('input')];
        
//         let check   = inputs.every(function(elem){
//             if(!elem.checked){
//                 return true;
//             }else{
//                 return false;
//             }
//         });

//         if(check){
//             arr.push(check);
//         }
//     }
//     return arr.length;
// };














// // Опрос
// let test            = document.getElementById('test');
// let questions       = document.querySelectorAll('.question');
// let your_answers    = document.querySelectorAll('.your_answer');
// let result          = document.getElementById('result');
// let check           = document.getElementById('check');
// let again           = document.getElementById('again');

// function setAtribute(){
//     for(let question of questions){
//         let inputs      = question.querySelectorAll('input[type="radio"]');
    
//         for(let input of inputs){
//             input.addEventListener('click', function(){
//                 removeCheckedAttr(inputs);
//                 setCheckedAttr(input);
//             });
//         }
//     }
// };
// setAtribute();

// function setCheckedAttr(input){
//     input.setAttribute('checked', '');
// };

// function removeCheckedAttr(inputs){
//     for(let input of inputs){
//         input.removeAttribute('checked', '');
//     }
// };

// check.addEventListener('click', function(){
//     again.style.display     = 'block';
//     check.style.display     = 'none';
//     for(let question of questions){
//         let inputs          = question.querySelectorAll('input');
//         let yourAnswers     = question.querySelectorAll('.your_answer');
    
//         for(let i = 0; i < yourAnswers.length; i++){
//             for(let input of inputs){
//                 if(yourAnswers[i].value == ''){
//                     if(input.hasAttribute('checked')){
//                         input.parentElement.classList.add('choose');
//                     }
//                 }
//             }
//         }
//     }

//     let clone           = test.cloneNode(true);
//     let inputsClone     = clone.querySelectorAll('input[type="radio"]');
    
//     for(let inputClone of inputsClone){
//         inputClone.remove();
//     }
//     result.style.display        = 'block';
//     result.append(clone);
//     test.style.display          = 'none';

//     let qws             = clone.querySelectorAll('.question');
    
//     for(let i = 0; i < qws.length; i++){
//         let choose      = qws[i].querySelectorAll('.choose');
        
//         for(let k = 0; k < choose.length; k++){
//             choose[k].innerHTML += ' (' + Math.floor((100 / choose.length)) + '%)';
//         }
//     }
// });

// again.addEventListener('click', function(){
//     check.style.display     = 'block';
//     again.style.display     = 'none';

//     let text    = result.querySelector('#test');
//     text.remove();

//     result.style.display        = 'none';
//     test.style.display          = 'block';
// });














// // Чеклист
// // Реализуйте чеклист. Должен быть инпут с добавлением задачи, а над ним - список с задачами. Возле каждой задачи чекбос. 
// // Если нажать на чекбокс - задача становится выполненной, перечеркивается и становится серого цвета, чекбокс при этом пропадает. Справа от любой задачи должен быть крестик для удаления этой задачи.
// // Задачу также можно поредактировать, если сделать двойной клик по ней - в этом случае вместо пункта списка появляется инпут с текстом задачи, можно поредактировать текст задачи, 
// // нажать Enter и задача изменится. Инпут при этом исчезнет.

// let addItem     = document.getElementById('addItem');
// let itemParent  = document.getElementById('itemParent');

// addItem.addEventListener('keypress', function(event){
//     let code    = event.keyCode;
    
//     if(code == 13){
//         let generalDiv      = document.createElement('div');
//         generalDiv.classList.add('item');
//         itemParent.append(generalDiv);

//         let input           = document.createElement('input');
//         input.type          = 'checkbox';
//         input.classList.add('checkbox');
//         generalDiv.append(input);

//         let textDiv         = document.createElement('div');
//         textDiv.classList.add('text');
//         textDiv.innerHTML   = addItem.value;
//         generalDiv.append(textDiv);

//         let correctInput    = document.createElement('input');
//         correctInput.type   = 'text';
//         correctInput.classList.add('edit');
//         generalDiv.append(correctInput);

//         let button          = document.createElement('button');
//         button.classList.add('remove');
//         button.innerHTML    = 'X';
//         generalDiv.append(button);

//         input.addEventListener('click', function func(){
//             generalDiv.classList.add('complete');
//             input.removeEventListener('click', func);
//         });

//         textDiv.addEventListener('dblclick', function(){
//             generalDiv.classList.add('edit');
//             correctInput.value  = this.innerHTML;

//             correctInput.addEventListener('keypress', function(event){
//                 let code        = event.keyCode;

//                 if(code == 13){
//                     generalDiv.classList.remove('edit');
//                     textDiv.innerHTML   = this.value;
//                 }
//             });
//         });

//         button.addEventListener('click', function(){
//             generalDiv.remove();
//         });

//         addItem.value       = '';
//     }
// });














// // Автодополнение
// // Суть: дан, к примеру, массив стран. Дан инпут. Когда вы вводите первые буквы страны под инпутом появляется выпадающий список, в котором расположены страны, 
// // которые начинаются на те буквы, которые вы ввели. Чем больше букв вы вводите - тем меньше стран в списке. 
// // Страну можно выбрать, кликнув по ней мышкой - в этом случае ее название появится в инпуте. Список стран храните в массиве.

// let countries   = ["Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола", "Андорра", "Антигуа и Барбуда", "Антильские острова", "Аргентина", "Армения", "Афганистан", 
//                 "Багамские острова", "Бангладеш", "Барбадос", "Бахрейн", "Белиз", "Белоруссия", "Бельгия", "Бенин", "Болгария", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", 
//                 "Буркина-Фасо", "Бурунди", "Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гватемала", "Гвинея", 
//                 "Гвинея-Бисау", "Германия", "Голландия", "Гондурас", "Гонконг", "Гренада", "Гренландия", "Греция", "Грузия", "Гуам", "Дания", "Демократическая Республика Конго", "Джибути", 
//                 "Доминиканская республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", 
//                 "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Киргизия", "Кирибати", "Китай", "КНДР", "Колумбия", "Коморские острова", 
//                 "Коста-Рика", "Кот-д'Ивуар", "Куба", "Кувейт", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", 
//                 "Македония", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта", "Марокко", "Мартиника", "Мексика", "Микронезия", "Мозамбик", "Молдавия", "Монако", "Монголия", "Мьянма", "Намибия", 
//                 "Непал", "Нигер", "Нигерия", "Никарагуа", "Новая Зеландия", "Новая Каледония", "Норвегия", "ОАЭ", "Оман", "Пакистан", "Палестина", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", 
//                 "Польша", "Португалия", "Пуэрто-Рико", "Республика Конго", "Республика Корея", "Россия", "Руанда", "Румыния", "Сальвадор", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", 
//                 "Свазиленд", "Сенегал", "Сент-Китс и Невис", "Сент-Люсия", "Сербия", "Сингапур", "Сирия", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Судан", "Суринам", "США", 
//                 "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания", "Того", "Тонга", "Тринидад и Тобаго", "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина", "Уругвай", 
//                 "Фиджи", "Филиппины", "Финляндия", "Франция", "Французская Гвиана", "Хорватия", "Центральноафриканская Республика", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", 
//                 "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "ЮАР", "Ямайка", "Япония"
//                 ];


// let country             = document.getElementById('country');
// let autocomplite_list   = document.getElementById('autocomplite_list');

// country.addEventListener('input', function(){
//     let divs        = autocomplite_list.querySelectorAll('div');

//     for(let div of divs){
//         div.remove();
//     }

//     if(this.value != ''){
//         autocomplite_list.style.display = 'block';
//         let result      = countries.filter(function(elem){
//             return elem.toLowerCase().startsWith((country.value).toLowerCase());
//         });

//         for(let elem of result){
//             let div         = document.createElement('div');
//             div.innerHTML   = elem;
//             autocomplite_list.append(div);

//             div.addEventListener('click', function(){
//                 country.value   = this.innerHTML;
//                 autocomplite_list.style.display = 'none';
//             });
//         }
//     }
// });














// // Игра лесенка
// // Суть - дана таблица с числами, распаложенными в случайном порядке в ячейках таблицы. Числа идут по порядку от 1 до N.
// // Все числа разного размера и цвета. Играющему необходимо по порядку кликать по числам - сначала 1, потом 2 и так далее до N. 
// // Когда он кликает на правильную ячейку - она активируется и делает красный фон (предыдущие правильные ячейки не снимают выделение). 
// // Должен тикать таймер, на игру дается M секунд. Если не успел найти все числа по порядку - проиграл.

// let start       = document.getElementById('start');
// let timer       = document.getElementById('timer');
// let game_table  = document.getElementById('game_table');
// let restart     = document.getElementById('restart');
// let rows        = 5;
// let colls       = 5;
// let curr        = 1;
// let id;

// start.addEventListener('click', function(){
//     timer.innerHTML     = 'Времени осталось ' + 60;
//     start.style.display = 'none';

//     createTable(game_table, rows, colls);
//     timerStart();
// });

// function createTable(selector, rows, colls){
//     let randomNums  = getRandomNumbersForColls();
//     for(let i = 1; i <= rows; i++){
//         let tr      = document.createElement('tr');
//         selector.append(tr);

//         for(let k = 1; k <= colls; k++){
//             let elem            = randomNums.splice(0, 1)[0];
//             let td              = document.createElement('td');
//             td.innerHTML        = elem;
//             td.style.fontSize   = getRandomNum(10, 45) + 'px';
//             td.style.color      = 'rgb(' + getRandomNum(0, 255) + ',' + getRandomNum(0, 255) + ',' + getRandomNum(0, 255) + ')';
//             tr.append(td);

//             td.addEventListener('click', function(){
//                 if(timer.innerHTML != 'Вы проиграли'){
//                     if(this.innerHTML == curr){
//                         this.classList.add('select');
//                         curr++;
//                     }
//                 }else{
//                     restartGame();
//                 }
                
//                 if(checkWin(game_table)){
//                     timer.innerHTML = 'Вы выиграли';
//                     clearInterval(id);
//                     restartGame();
//                 }
//             });
//         }
//     }
// };

// function getRandomNumbersForColls(){
//     let result      = [];

//     let correctArr  = [];
//     for(let i = 1; i <= (rows * colls); i++){
//         correctArr.push(i);
//     }
    
//     while(correctArr.length > 0){
//         let elem        = correctArr.splice(getRandomNum(0, correctArr.length - 1), 1)[0];
//         result.push(elem);
//     }
//     return result;
// };

// function getRandomNum(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// function timerStart(){
//     let curr        = 59;
//     id = setInterval(function(){
//         timer.innerHTML = 'Времени осталось ' + curr;
//         curr--;

//         if(curr == 0){
//             clearInterval(id);
//             timer.innerHTML = 'Вы проиграли';
//         }
//     }, 1000);
// };

// function deleteTable(selector){
//     let trs     = selector.querySelectorAll('tr');

//     for(let tr of trs){
//         tr.remove();
//     }
// };

// function checkWin(selector){
//     let elems       = [...selector.querySelectorAll('td')];

//     return elems.every(function(elem){
//         if(elem.classList.contains('select')){
//             return true;
//         }else{
//             return false;
//         }
//     });
// };

// function restartGame(){
//     restart.style.display   = 'block';

//     restart.addEventListener('click', function(){
//         curr                    = 1;
//         start.style.display     = 'block';
//         restart.style.display   = 'none';
//         timer.innerHTML         = 'Начиная с "1" нажимайте на числа до тех пор, пока не дойдете до последнего';
//         deleteTable(game_table);
//     });
// };














// // Попап при прокрутке страницы
// // Суть: когда пользователь прокручивает страницу вниз на N пикселей - появляется баннер поверх содержимого. Этот баннер можно закрыть на крестик и он пропадет.
// let modalwin    = document.getElementById('modalwin');
// let exit        = document.getElementById('exit');
// let check       = false;
// let param       = 1700;

// window.addEventListener('scroll', function(){
//     if(pageYOffset >= param && !check){
//         modalwin.style.display          = 'block';
//         modalwin.style.top              = '50%';
//         modalwin.style.left             = '50%';
//         check                           = true;
//         document.body.style.overflow    = 'hidden';
//     }
// });

// exit.addEventListener('click', function(){
//     document.body.style.overflow    = '';
//     modalwin.style.display          = 'none';
// });














// // Попап при истечении времени
// // Решите предыдущую задачу, но при условии, что баннер появлятся не по прокрутке, а через N секунд после захода пользователя на страницу.

// let modalwin    = document.getElementById('modalwin');
// let exit        = document.getElementById('exit');
// let timerCurr   = 10;

// function timer(){
//     let id  = setInterval(function(){
//         timerCurr--;

//         if(timerCurr == 0){
//             clearInterval(id);
//             modalwin.style.display          = 'block';
//             modalwin.style.top              = '50%';
//             modalwin.style.left             = '50%';
//             document.body.style.overflow    = 'hidden';
//         }
//     }, 1000);
// };
// timer();

// exit.addEventListener('click', function(){
//     document.body.style.overflow    = '';
//     modalwin.style.display          = 'none';
// });














// // Прямой календарик
// // Реализуйте календарик сдедующего вида: показаны дни текущего месяца (в ряд), слева стрелка 'предыдущий месяц', справа ссылка 'следующий месяц'. Сверху показан год и месяц, который мы смотрим. 
// // Если мы смотрим текущий месяц текущего года - текущий день должен быть как-то выделен.

// let calendar    = document.getElementById('calendar');
// let prev        = document.getElementById('prev');
// let next        = document.getElementById('next');
// let date        = document.getElementById('date');
// let months      = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

// let dateNow     = new Date();
// let year        = dateNow.getFullYear();
// let month       = dateNow.getMonth();
// let day         = dateNow.getDate();

// function startCalendar(){
//     let lastDay     = new Date(year, month + 1, 0).getDate();
    
//     date.innerHTML  = year + ' ' + months[month];
    
//     function createCalendar(selector){
//         for(let i = 1; i <= lastDay; i++){
//             let div         = document.createElement('div');
//             div.innerHTML   = i;
//             if(day == i && month == dateNow.getMonth()){
//                 div.classList.add('today');
//             }
//             div.classList.add('day');
//             selector.append(div);
//         }
//     };
//     createCalendar(calendar);
// };
// startCalendar();

// next.addEventListener('click', function(){
//     month++;
//     if(month == 12){
//         year++;
//         month = 0;
//     }
//     removeCalendar(calendar);
//     startCalendar();
// });

// prev.addEventListener('click', function(){
//     month--;
//     if(month == -1){
//         year--;
//         month = 11;
//     }
//     removeCalendar(calendar);
//     startCalendar();
// });

// function removeCalendar(selector){
//     let divs        = selector.querySelectorAll('div');

//     for(let div of divs){
//         div.remove();
//     }
// };














// Органайзер
// Он представляет собой календарик, нажимая на даты которого можно увидеть список задач, запланированных на этот день.
let organizer   = document.getElementById('organizer');
let date        = document.getElementById('date');
let prev        = document.getElementById('prev');
let next        = document.getElementById('next');
let days        = document.getElementById('days');
let tasks       = document.getElementById('tasks');
let weenks      = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
let years       = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let daysArr     = [];
let dataBase    = {};

let nowDate     = new Date();
let year        = nowDate.getFullYear();
let month       = nowDate.getMonth();

date.innerHTML  = year + ' ' + years[month];
startCalendar();

function startCalendar(){
    function getEmptyElemsBeginArr(){
        let firstDay        = new Date(year, month, 1).getDay();
        let quality         = 0;
    
        if(weenks[firstDay] == 'Пн'){
            quality = 0;
        }else if(weenks[firstDay] == 'Вт'){
            quality = 1;
        }else if(weenks[firstDay] == 'Ср'){
            quality = 2;
        }else if(weenks[firstDay] == 'Чт'){
            quality = 3;
        }else if(weenks[firstDay] == 'Пт'){
            quality = 4;
        }else if(weenks[firstDay] == 'Сб'){
            quality = 5;
        }else if(weenks[firstDay] == 'Вс'){
            quality = 6;
        }
    
        for(let i = 1; i <= quality; i++){
            daysArr.push('');
        }
    };
    getEmptyElemsBeginArr();
    
    function getDaysElemsForArr(){
        let lastDay     = new Date(year, month + 1, 0).getDate();
        
        for(let i = 1; i <= lastDay; i++){
            daysArr.push(i);
        }
    };
    getDaysElemsForArr();
    
    function getEmptyElemsEndArr(){
        let lastDay     = new Date(year, month + 1, 0).getDay();
        let quality     = 0;
    
        if(weenks[lastDay] == 'Пн'){
            quality = 6;
        }else if(weenks[lastDay] == 'Вт'){
            quality = 5;
        }else if(weenks[lastDay] == 'Ср'){
            quality = 4;
        }else if(weenks[lastDay] == 'Чт'){
            quality = 3;
        }else if(weenks[lastDay] == 'Пт'){
            quality = 2;
        }else if(weenks[lastDay] == 'Сб'){
            quality = 1;
        }else if(weenks[lastDay] == 'Вс'){
            quality = 0;
        }
    
        for(let i = 1; i <= quality; i++){
            daysArr.push('');
        }
    };
    getEmptyElemsEndArr();
    
    function createCalendar(selector, arr){
        for(let i = 0; i < arr.length; i++){
            let div         = document.createElement('div');
            div.innerHTML   = arr[i];
            if(div.innerHTML == nowDate.getDate() && month == nowDate.getMonth() && year == nowDate.getFullYear()){
                div.classList.add('today');
            }
            if(arr[i] == ''){
                div.classList.add('other');
            }
            div.classList.add('day');
            selector.append(div);

            div.addEventListener('click', function(){
                removeClasses(days);
                this.classList.add('active');

                if(!this.classList.contains('checkList')){
                    let checklist   = document.getElementById('checklist');
                    if(checklist != null){
                        checklist.remove();
                    }

                    let divGeneral      = document.createElement('div');
                    divGeneral.id       = 'checklist';
                    document.body.append(divGeneral);
    
                    let input           = document.createElement('input');
                    input.type          = 'text';
                    input.id            = 'addItem';
                    input.placeholder   = 'Введите задачу';
                    input.focus();
                    divGeneral.append(input);
    
                    let div             = document.createElement('div');
                    div.id              = 'itemParent';
                    divGeneral.append(div);

                    let buttonSave          = document.createElement('button');
                    buttonSave.id           = 'save';
                    buttonSave.innerHTML    = 'Сохранить изменения в органайзере';
                    divGeneral.appendChild(buttonSave);
    
                    checkList();

                    let self    = this;

                    buttonSave.addEventListener('click', function(){
                        self.classList.add('checkList');
                        let ye          = year;
                        let mo          = month;
                        let d           = self.innerHTML;
                        let checklist   = document.getElementById('checklist');
                        
                        if(dataBase['' + ye] == undefined){
                            dataBase['' + ye] = {};
                        }
                        if(dataBase['' + ye]['' + mo] == undefined){
                            dataBase['' + ye]['' + mo] = {};
                        }
                        if(dataBase['' + ye]['' + mo][d] == undefined){
                            dataBase['' + ye]['' + mo][d] = d;
                        }
                        dataBase['' + ye]['' + mo][d] = checklist;
                        console.log(dataBase);
                    });
                }else{
                    let checklist       = document.getElementById('checklist');
                    if(checklist != null){
                        checklist.remove();
                    }

                    let yeear       = year;
                    let monn        = month;
                    let dayy        = this.innerHTML;

                    if(dataBase['' + yeear]['' + monn][dayy] != undefined){
                        document.body.append(dataBase['' + yeear]['' + monn][dayy]);
                    }
                }
            });
        }
    };
    createCalendar(days, daysArr);

    let allDays     = document.querySelectorAll('.day');
    
    for(let i = 0; i < allDays.length; i++){
        elemInd     = allDays[i];

        if(dataBase['' + year] != undefined && dataBase['' + year]['' + month] != undefined){
            for(let key in dataBase['' + year]['' + month]){
                if(key == elemInd.innerHTML){
                    elemInd.classList.add('checkList');
                }
            }
        }
    }
};

next.addEventListener('click', function(){
    let chklist     = document.getElementById('checklist');
    if(chklist != null){
        chklist.remove();
    }

    deleteCalendar(days);
    month++;
    if(month == 12){
        year++;
        month = 0;
    }
    date.innerHTML  = year + ' ' + years[month];
    daysArr.length  = 0;
    startCalendar();
});

prev.addEventListener('click', function(){
    let chklist     = document.getElementById('checklist');
    if(chklist != null){
        chklist.remove();
    }

    deleteCalendar(days);
    month--;
    if(month == -1){
        year--;
        month = 11;
    }
    date.innerHTML  = year + ' ' + years[month];
    daysArr.length  = 0;
    startCalendar();
});

function deleteCalendar(selector){
    let divs        = selector.querySelectorAll('div');

    for(let div of divs){
        div.remove();
    }
};

function removeClasses(selector){
    let divs        = selector.querySelectorAll('div .active');

    for(let div of divs){
        div.classList.remove('active');
    }
};



// ЧЕКЛИСТ
function checkList(){
    let checklist   = document.getElementById('checklist');
    let addItem     = document.getElementById('addItem');
    let itemParent  = document.getElementById('itemParent');

    addItem.addEventListener('keypress', function(event){
        let code    = event.keyCode;
        
        if(code == 13){
            let generalDiv      = document.createElement('div');
            generalDiv.classList.add('item');
            itemParent.append(generalDiv);

            let input           = document.createElement('input');
            input.type          = 'checkbox';
            input.classList.add('checkbox');
            generalDiv.append(input);

            let textDiv         = document.createElement('div');
            textDiv.classList.add('text');
            textDiv.innerHTML   = addItem.value;
            generalDiv.append(textDiv);

            let correctInput    = document.createElement('input');
            correctInput.type   = 'text';
            correctInput.classList.add('edit');
            generalDiv.append(correctInput);

            let button          = document.createElement('button');
            button.classList.add('remove');
            button.innerHTML    = 'X';
            generalDiv.append(button);

            input.addEventListener('click', function func(){
                generalDiv.classList.add('complete');
                input.removeEventListener('click', func);
            });

            textDiv.addEventListener('dblclick', function(){
                generalDiv.classList.add('edit');
                correctInput.value  = this.innerHTML;

                correctInput.addEventListener('keypress', function(event){
                    let code        = event.keyCode;

                    if(code == 13){
                        generalDiv.classList.remove('edit');
                        textDiv.innerHTML   = this.value;
                    }
                });
            });

            button.addEventListener('click', function(){
                generalDiv.remove();
            });

            addItem.value       = '';
        }
    });
};














// // Вкладки
// // Реализуйте вкладки - нажимая на каждую вкладку мы будем видеть ниже текст, соответствующий этой вкладке

// let tabsItem    = document.querySelectorAll('.tabs__item');
// let tabsText    = document.querySelectorAll('.tabs__text');

// for(let elem of tabsItem){
//     elem.addEventListener('click', function(){
//         removeSelectClass(tabsItem, 'select');
//         this.classList.add('select');
//         removeSelectClass(tabsText, 'select');
        
//         for(let i = 0; i < tabsText.length; i++){
//             if(tabsText[i].id == this.dataset.id){
//                 tabsText[i].classList.add('select');
//             }
//         }
//     });
// }

// function removeSelectClass(elems, className){
//     for(let i = 0; i < elems.length; i++){
//         elems[i].classList.remove(className);
//     }
// };














// // Аккордион

// let tabsText    = document.querySelectorAll('.tabs__text');
// let links       = document.querySelectorAll('h3');

// for(let link of links){
//     link.addEventListener('click', function(){
//         for(let i = 0; i < links.length; i++){
//             links[i].classList.remove('select');
//             links[i].nextElementSibling.style.height = '0px';
//         }
//         this.classList.add('select');
//         this.nextElementSibling.style.height = 'auto';
//     });
// }