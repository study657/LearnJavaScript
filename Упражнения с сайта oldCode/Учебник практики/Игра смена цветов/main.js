let clicks      = document.getElementById('clicks');
let field       = document.getElementById('field');
let info        = document.getElementById('info');
let sumMovies   = document.getElementById('sumMovies');
let rows        = 3;
let cols        = 3;
let curr        = 0;
let colors      = ['red', 'green', 'blue'];
let tds         = createTable(field, rows, cols);
let objColors   = getSumAllColors(getMassColors(tds));
let pause       = false;
gameStart();

function createTable(select, rows, cols){
    let tds     = [];
    for(let i = 1; i <= rows; i++){
        let tr      = document.createElement('tr');
        select.append(tr);
    
        for(let k = 1; k <= cols; k++){
            let td      = document.createElement('td');
            td.classList.add(colors[getRandomNum(0, colors.length - 1)]);
            tds.push(td);
            tr.append(td);
        }
    }
    return tds;
};

function gameStart(){
    for(let td of tds){
        td.addEventListener('click', function(){
            if(!pause){
                setNextColorFromColors(colors, td);
                let arrColors       = getMassColors(tds);
                curr++;
                clicks.innerHTML    = 'Количество Ваших кликов = ' + curr;
        
                if(checkWin(arrColors)){
                    if(returnMinSumMovies(objColors) == curr){
                        info.innerHTML      = 'Поздравляем, Вы победили!';
                        sumMovies.innerHTML = 'Количество минимальных ходов, которые нужны были для победы: ' + returnMinSumMovies(objColors);
                    }else{
                        sumMovies.innerHTML = 'К сожалению Вы проиграли, т.к. минимальное количество минимальных ходов, которые нужны были для победы: ' + returnMinSumMovies(objColors);
                    }
                    pause               = true;
    
                    let btn             = document.createElement('button');
                    btn.innerHTML       = 'Начать игру сначала';
                    document.body.append(btn);
    
                    btn.addEventListener('click', function(){
                        pause               = false;
                        info.innerHTML      = '';
                        clicks.innerHTML    = '';
                        sumMovies.innerHTML = '';
                        curr                = 0;
                        removeTable(field);
                        tds                 = createTable(field, rows, cols);
                        objColors           = getSumAllColors(getMassColors(tds));
                        btn.remove();
                        gameStart();
                    });
                }
            }
        });
    }
};

function getMassColors(tds){
    let allColors  = [];
    for(let i = 0; i < tds.length; i++){
        allColors.push(tds[i].getAttribute('class'));
    }
    return allColors;
};

function checkWin(arr){
    let index   = arr.splice(0, 1)[0];

    let check   = arr.every(function(elem){
        if(elem == index){
            return true;
        }else{
            return false;
        }
    });
    return check;
};

function setNextColorFromColors(colors, td){
    let color   = td.getAttribute('class');
    let index   = colors.indexOf(color);
    
    td.classList.remove(color);

    if(index == colors.length - 1){
        index = 0;
        td.classList.add(colors[index]);
        return colors[index];
    }else{
        td.classList.add(colors[index + 1]);
        return colors[index + 1];
    }
};

function removeTable(select){
    let trs     = select.querySelectorAll('tr');

    for(let elem of trs){
        elem.remove();
    }
};

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function getSumAllColors(allColors){
    let obj     = {
        'red'       : 0,
        'green'     : 0,
        'blue'      : 0
    };

    for(let i = 0; i < allColors.length; i++){
        if(allColors[i] == 'red'){
            obj['red']++;
        }else if(allColors[i] == 'green'){
            obj['green']++;
        }else{
            obj['blue']++;
        }
    }
    return obj;
};

function returnMinSumMovies(objColors){
    let curr        = 0;
    let reds        = objColors['red'];
    let greens      = objColors['green'];
    let blues       = objColors['blue'];
    let max         = Math.max(reds, greens, blues);

    if(max == reds){
        curr = (greens * 2) + (blues * 1);
    }else if(max == greens){
        curr = (blues * 2) + (reds * 1);
    }else{
        curr = (reds * 2) + (greens * 1);
    }
    return curr;
};