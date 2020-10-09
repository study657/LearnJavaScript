// // Урок №1
// // 1. Реализуйте калькулятор. Должны быть кнопки цифр и операций. По нажатию на кнопку '=' должен посчитаться результат. Совет: используйте фунцию eval

// let calc        = document.getElementById('calc');
// let display     = document.getElementById('display');
// let buttons     = document.getElementsByClassName('button');

// for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', function(){
//         let atribute    = buttons[i].getAttribute('data-type');
        
//         if(atribute == 'C'){
//             display.value   = '';
//         }else if(atribute == '='){
//             let sum = 0;
//             sum = eval(display.value);
//             display.value = sum;
//         }else{
//             display.value += atribute;
//         }
//     });
// }




// // Урок №2
// // 2. Реализуйте игру крестики-нолики. Играет два человека, на одном поле по очереди

// function startGame(){
//     let cell            = document.getElementsByClassName('cell');
//     let message         = document.getElementById('message');
//     let restart         = document.getElementById('restart');

//     let win_x           = document.getElementById('win_x');
//     let win_0           = document.getElementById('win_0');
//     let win_draw        = document.getElementById('win_draw');
//     let del             = document.getElementById('del');

//     let paused          = false;
//     let player          = 'X';
//     let data            = [];
//     let stepMoves       = 0;

//     let winIndex        = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     wins                = {
//         'X':        0,
//         '0':        0,
//         'draw':     0
//     };


//     for(let i = 0; i < cell.length; i++){
//         cell[i].addEventListener('click', function(){
//             if(!cell[i].innerHTML && !paused){
//                 cell[i].innerHTML   = player;
//                 let id              = cell[i].getAttribute('data-id');
//                 data[id]            = player;
//                 stepMoves++;

//                 if(checkWin()){
//                     message.innerHTML   = 'Выиграл: ' + player;
//                     paused              = true;
//                     wins[player]++;
//                 }else{
//                     changePlayerMove();
//                 }

//                 if(stepMoves >= 9){
//                     message.innerHTML   = 'Ничья';
//                     paused      = true;
//                     stepMoves   = 0;
//                     wins['draw']++;
//                 }
//                 updateStatistics();
//             }
//         });
//     }

//     function checkWin(){
//         for(let i = 0; i < winIndex.length; i++){
//             let id      = winIndex[i];
//             let check   = data[id[0]] &&
//                         data[id[0]] == data[id[1]] &&
//                         data[id[1]] == data[id[2]];

//             if(check){
//                 return true;
//             }
//         }
//         return false;
//     };

//     function changePlayerMove(){
//         if(player == 'X'){
//             player = '0';
//         }else{
//             player = 'X';
//         }
//         message.innerHTML   = 'Ходит: ' + player;
//     };

//     function updateStatistics(){
//         win_x.innerHTML     = wins['X'];
//         win_0.innerHTML     = wins['0'];
//         win_draw.innerHTML  = wins['draw'];
//     };

//     restart.addEventListener('click', function(){
//         for(let i = 0; i < cell.length; i++){
//             cell[i].innerHTML   = '';
//         }
//         paused          = false;
//         player          = 'X';
//         data            = [];
//         stepMoves       = 0;
//         message.innerHTML   = 'Ходит: ' + player;
//     });

//     del.addEventListener('click', function(){
//         for(let key in wins){
//             wins[key]   = 0;
//         }
//         updateStatistics();
//     });
// };
// startGame();




// Урок №3
// 3. Реализуйте тест с вопросами. В каждом вопросе есть 5 вариантов ответов (один из них правильный) - это будет 5 радио кнопочек. 
// После того, как человек ответит на все вопросы - покажите ему результат - на какие вопросы он ответил верно, не верно, не дал ответ. 
// Покажите также процент правильно отвеченных вопросов

var checkEl = document.getElementById('check');
var questionsEl = document.getElementsByClassName('question');
var result = [];

checkEl.addEventListener('click', checkAnswers);
function checkAnswers() {
    for (var i = 0; i < questionsEl.length; i++) {
        var answers = questionsEl[i].querySelectorAll('input[type=radio]');
        result.push( checkOneAnswer(answers) );
    }
    printResult();
    result = [];
}

function checkOneAnswer(answers) {
    var result = null;
    var noAnswer = true;
    for (var i = 0; i < answers.length; i++) {
        var isTrue = (answers[i].getAttribute('data-true') !== null);
        if (answers[i].checked) {
            noAnswer = false;
            if (isTrue) {
                result = true;
            } else {
                result = false;
            }
        } else {
            if (isTrue) {
                result = false;
            }
        }
    }
    if (noAnswer) {
        result = null;
    }
    return result;
}
function printResult() {
    var trueAnswers = 0;
    var falseAnswers = 0;
    var noAnswers = 0;
    for (var i = 0; i < result.length; i++) {
        if (result[i] === true) {
            trueAnswers++;
        } else if (result[i] === false) {
            falseAnswers++;
        } else if (result[i] === null) {
            noAnswers++;
        }
    }
    var all = trueAnswers + falseAnswers + noAnswers;
    var percent = Math.round((trueAnswers/all) * 100);
    var msg = 'Правильных ответов: ' + trueAnswers + ' (' + percent + '%)\n'
        + 'Неправильных ответов: ' + falseAnswers + '\n'
        + 'Без ответов: ' + noAnswers + '\n';
    alert(msg);
}