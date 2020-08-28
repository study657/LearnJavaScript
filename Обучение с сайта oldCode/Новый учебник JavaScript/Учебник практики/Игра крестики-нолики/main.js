// let cells = document.querySelectorAll('#field td');
// start(cells);

// function start(cells){
//     let curr   = 0; // Начальное значение счетчика ходов

//     for(let i = 0; i < cells.length; i++){
//         cells[i].addEventListener('click', function func(){
//             this.innerHTML  = ['X', '0'][curr % 2];
//             this.removeEventListener('click', func);

//             if(isVictory(cells)){
//                 alert('Победил: ' + this.innerHTML);
//             }
//             if(curr == 8){
//                 alert('Ничья!');
//             }
//             curr++;
//         });
//     }
// };

// function isVictory(cells){
//     let combs = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     for(let comb of combs){
//         if(
//             cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
//             cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
//             cells[comb[0]].innerHTML != ''
//         ){
//             return true;
//         }
//     }
//     return false;
// };









let cells       = document.querySelectorAll('.cell');
let message     = document.getElementById('message');
let restart     = document.getElementById('restart');
let win_x       = document.getElementById('win_x');
let win_0       = document.getElementById('win_0');
let win_draw    = document.getElementById('win_draw');
let resetStat   = document.getElementById('resetStat');
let pause       = false;
let player      = 'X';
let movies      = 0;
let wins        = {
    'X'     : 0,
    '0'     : 0,
    'draw'  : 0
};

for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', function(){
        if(!cells[i].innerHTML && !pause){
            this.innerHTML      = player;
            message.innerHTML   = 'Ходит: ' + changeMovies();
            movies++;

            if(checkWin(cells)){
                pause               = true;
                message.innerHTML   = 'Победил: ' + changeMovies();
                wins[player]++;
            }else if(movies == 9){
                pause               = true;
                message.innerHTML   = 'Ничья';
                wins['draw']++;
            }
        }
        updateStatistic(wins);
    });
}

restart.addEventListener('click', function(){
    pause               = false;
    player              = 'X';
    movies              = 0;
    message.innerHTML   = 'Ходит: X';

    for(let cell of cells){
        cell.innerHTML  = '';
    }
});

resetStat.addEventListener('click', function(){
    wins['0']       = 0;
    wins['X']       = 0;
    wins['draw']    = 0;
    updateStatistic(wins);
});

function changeMovies(){
    if(player == 'X'){
        player = '0';
    }else{
        player = 'X';
    }
    return player;
};

function checkWin(cells){
    let winIndex = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i = 0; i < winIndex.length; i++){
        if(
            cells[winIndex[i][0]].innerHTML == cells[winIndex[i][1]].innerHTML &&
            cells[winIndex[i][1]].innerHTML == cells[winIndex[i][2]].innerHTML &&
            cells[winIndex[i][0]].innerHTML != ''
        ){
            return true;
        }
    }
    return false;
};

function updateStatistic(wins){
    win_x.innerHTML     = wins['X'];
    win_0.innerHTML     = wins['0'];
    win_draw.innerHTML  = wins['draw'];
};