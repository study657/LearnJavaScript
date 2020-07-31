// Игра в города на JavaScript
// Постановка задачи
// Существует игра в города. Ее правила: в города играют двое и более человек, в которой каждый участник в свою очередь называет реально существующий город любой страны, 
// название которого начинается на ту букву, которой оканчивается название предыдущего участника.
// Давайте реализуем эту игру. Пусть играют два человека за одним компьютером. Ходят по очереди. Города вводятся в один инпут и отправляются по нажатию клавиши Enter. 
// Браузер должен запоминать города, которые уже были, и не принимать такие города.
// Давайте сразу сделаем простую верстку нашего проекта. У нас будет инпут для ввода городов и див для вывода сообщений со стороны браузера:
// Задача №1
// Распишите текстом подзадачи, которые нужно решить для реализации данного проекта.

// Решение: 
// 1) При вводе текста в инпут и нажатие клавиши enter наш город должен записаться в массив, чтобы сохранять города.
// 2) Далее, когда второй игрок вводит город, мы должны проверить, чтобы его город начинался с последней буквы предыдущего города, 
// а так же, чтобы он не повторялся с теми городами, которые есть уже в массиве. 
// 3) Запускаем цикл по массиву с городами и проверяем на соответствие. Если все хорошо, то тогда добавляем очередной город в массив, если что-то из условий не выполняется, то не добавляем город в массив
// и выводим сообщение, чтобы игрок придумал новый город!




// // Реализация игры в города на JavaScript
// // Давайте обсудим, как мы будем реализовывать наш проект.
// // Я бы начал с того, что сделал бы массив, в который будут записываться города, которые вводят наши игроки:
// // let cities = [];
// // Пусть у нас начало игры и ходит первый игрок. Он вбивает город и нажимает Enter. Очевидно, что этот город мы сразу можем внести в наш массив с городами.
// // Теперь будет ходить второй игрок. Так как наш массив уже не пуст, то этот второй ход будет описываться тем же алгоритмом, что и все последующие ходы.
// // Что это за алгоритм? Во-первых, нужно проверить то, что первая буква введенного города совпадает с последней буковой предыдущего города. 
// // Во-вторых, нужно проверить то, что такого города еще не было в этой игре.
// // Если оба этих условия выполняются, то введенный город записывается в наш массив и ход переходит к следующему игроку. Если же какое-то условие не выполняется, то нужно вывести сообщение об этом.
// // Задача №2
// // Реализуйте игру в соответствии с описанным алгоритмом.

// let field       = document.getElementById('field');
// let message     = document.getElementById('message');
// let cities      = [];

// field.addEventListener('keypress', function(event){
//     let code    = event.keyCode;

//     if(code == 13){
//         if(cities.length == 0){
//             let siti    = (field.value).split('');
//             let correctsiti = '';
//             for(let key of siti){
//                 correctsiti += key.toLowerCase();
//             }

//             cities.push(correctsiti);
//             field.value = '';
//             changeCourse();
//         }else{
//             let lastCities      = chechLastSymbol(cities[cities.length - 1]);
//             let lastSymbol      = lastCities[lastCities.length - 1];
//             let newCiti         = (field.value).split('');
//             let firstSymbol     = newCiti[0].toLowerCase();
//             let correctNewSiti  = '';

//             for(let key of newCiti){
//                 correctNewSiti += key.toLowerCase();
//             }
            
//             if((lastSymbol == firstSymbol) && cities.indexOf(correctNewSiti) == -1){
//                 cities.push(correctNewSiti);
//                 changeCourse();
//             }else{
//                 alert('Вы не верно написали город! Либо этого город уже был, либо первая буква не соответствует последней букве предыдущего города!');
//             }
//             field.value = '';
//             console.log(cities);
//         }
//     }
// });

// function chechLastSymbol(string){
//     if(string[string.length - 1] == 'ь'){
//         return string[string.length - 2];
//     }else{
//         return string[string.length - 1];
//     }
// };

// function changeCourse(){
//     if(message.innerHTML == 'Ходит игрок №1'){
//         message.innerHTML = 'Ходит игрок №2';
//     }else{
//         message.innerHTML = 'Ходит игрок №1';
//     }
// };




// Игра в города против робота на JavaScript
// Давайте теперь модифицируем нашу игру так, чтобы игра велась против робота, то есть программы, а не другого человека.
// Пусть у нашего робота будет массив всех разрешенных городов:
// let allCities = [];
// Когда человек будет вбивать в инпут свой город, робот должен будет проверять наличие этого города в своем массиве.
// В таком случае в каждом ходе игрока возможны следующие проблемные ситуации: игрок ввел город, который уже был; игрок ввел город не на ту букву, на которую заканчивается предыдущий город; 
// игрок ввел город, которого нет в списке робота.
// В свой ход робот должен брать один из разрешенных городов так, чтобы этого города еще не было в игре. При этом выбранный город должен начинаться с буквы, на которую закончился предыдущий город.

let field           = document.getElementById('field');
let message         = document.getElementById('message');
let citiesComp      = document.getElementById('citiesComp');
let citiesPerson    = document.getElementById('citiesPerson');
let allCities       = ['москва', 'амстердам', 'могилев', 'вологда', 'азербайджан', 'норильск', 'коломна', 'америка', 'азия', 'япония', 'ямайка', 'алушта', 'афганистан', 'новгород', 'дубь', 'балашиха',
                      'афины', 'барселона', 'берлин', 'варшава', 'гагра', 'дубай', 'евпатория', 'екатеринбург', 'женева', 'загреб', 'ижевск', 'иркутск', 'казань', 'киев', 'лондон', 'ЛосАнджелес',
                      'мадрид', 'минск', 'неаполь', 'новосибирск', 'одесса', 'омск', 'париж', 'пекин', 'рим', 'севастополь', 'сочи', 'таллин', 'тбилиси', 'уфа', 'ульяновск', 'филадельфия', 'флоренция',
                      'ханой', 'харьков', 'цюрих', 'чебоксары', 'эйндховен', 'юрмала'];
let cities          = [];

let citiPers        = [];
let citiCom         = [];

field.addEventListener('keypress', function(event){
    let code    = event.keyCode;
    
    if(code == 13){
        if(cities.length == 0){
            let citi        = (field.value).split('');
            let correctSiti = '';

            for(let key of citi){
                correctSiti += key.toLowerCase();
            }
            cities.push(correctSiti);
            citiPers.push(correctSiti);

            if(allCities.indexOf(correctSiti) != -1){
                let indexDelete    = allCities.indexOf(correctSiti);
                allCities.splice(indexDelete, 1);
            }

            field.value = '';
            citiesPerson.innerHTML  = 'Ваши города: ' + citiPers;
            field.placeholder   = 'Просто нажмите enter, чтобы компьютер сделал ход:)';
            changeCourse();
        }else if(message.innerHTML == 'Ходит компьютер'){
            let lastCiti    = cities[cities.length - 1];
            let lastSymbol  = getCorrectSymbol(lastCiti);
            let result      = [];
            for(let i = 0; i < allCities.length; i++){
                if(allCities[i][0] == lastSymbol){
                    result.push(allCities[i]);
                }
            }
            if(result.length > 0){
                let siti        = result[0];
                let indexDelete = allCities.indexOf(siti);
                allCities.splice(indexDelete, 1);
                cities.push(siti);
                citiCom.push(siti);
            }else{
                field.disabled  = true;
                let btn   = document.createElement('button');
                btn.innerHTML   = 'Начать игру сначала';
                document.body.appendChild(btn);

                alert('Я проиграл, у меня больше нет городов:(');

                btn.addEventListener('click', function(){
                    allCities       = ['москва', 'амстердам', 'могилев', 'вологда', 'азербайджан', 'норильск', 'коломна', 'америка', 'азия', 'япония', 'ямайка', 'алушта', 'афганистан', 'новгород', 'дубь', 'балашиха',
                      'афины', 'барселона', 'берлин', 'варшава', 'гагра', 'дубай', 'евпатория', 'екатеринбург', 'женева', 'загреб', 'ижевск', 'иркутск', 'казань', 'киев', 'лондон', 'ЛосАнджелес',
                      'мадрид', 'минск', 'неаполь', 'новосибирск', 'одесса', 'омск', 'париж', 'пекин', 'рим', 'севастополь', 'сочи', 'таллин', 'тбилиси', 'уфа', 'ульяновск', 'филадельфия', 'флоренция',
                      'ханой', 'харьков', 'цюрих', 'чебоксары', 'эйндховен', 'юрмала'];
                    cities.length   = 0;
                    citiPers.length = 0;
                    citiCom.length  = 0;
                    field.placeholder   = 'Введите Ваш город';
                    document.body.removeChild(btn);
                    field.disabled  = false;
                    citiesPerson.innerHTML  = '';
                    citiesComp.innerHTML    = '';
                });
            }

            field.value = '';
            citiesComp.innerHTML  = 'Города компьютера: ' + citiCom;
            field.placeholder     = 'Введите Ваш город';
            changeCourse();
        }else{
            let personCiti  = (field.value).split('');
            let firstSymbol = personCiti[0].toLowerCase();
            let lastSiti    = cities[cities.length - 1];
            let lastSymbol  = getCorrectSymbol(lastSiti);
            let correctCiti = '';

            for(let key of personCiti){
                correctCiti += key.toLowerCase();
            }

            if( (firstSymbol == lastSymbol) && (cities.indexOf(correctCiti) == -1) ){
                cities.push(correctCiti);
                citiPers.push(correctCiti);

                if(allCities.indexOf(correctCiti) != -1){
                    let indexDelete    = allCities.indexOf(correctCiti);
                    allCities.splice(indexDelete, 1);
                }
                console.log(allCities);
                citiesPerson.innerHTML  = 'Ваши города: ' + citiPers;
                field.value = '';
                field.placeholder   = 'Просто нажмите enter, чтобы компьютер сделал ход:)';
                changeCourse();
            }else{
                alert('Вы не верно написали город! Либо этого город уже был, либо первая буква не соответствует последней букве предыдущего города!');
            }
        }
    }
});

function getCorrectSymbol(string){
    if(string[string.length - 1] == 'ь'){
        return string[string.length - 2];
    }else{
        return string[string.length - 1];
    }
};

function changeCourse(){
    if(message.innerHTML == 'Ваш ход'){
        message.innerHTML = 'Ходит компьютер';
    }else{
        message.innerHTML = 'Ваш ход';
    }
};