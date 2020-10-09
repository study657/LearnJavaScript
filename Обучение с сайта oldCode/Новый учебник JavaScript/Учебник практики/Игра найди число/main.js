let btn         = document.getElementById('btn');
let info        = document.getElementById('info');
let timer       = document.querySelector('.timer');
let question    = document.getElementById('question');
let level       = document.getElementById('level');
let option      = document.querySelectorAll('#level option');
let gameTimer   = document.getElementById('gameTimer');
let currTimer   = 0;
let currGenTim  = 3;
    
btn.addEventListener('click', function(){
    for(let i = 0; i < option.length; i++){
        if(option[i].selected){
            currTimer   = Number(option[i].value);
        }
    }

    timer.classList.remove('close');
    btn.classList.add('close');
    info.classList.add('close');
    level.classList.add('close');
    question.classList.add('close');

    
    let id = setInterval(function(){
    timer.innerHTML = currGenTim;
    
        if(currGenTim == 0){
            clearInterval(id);
            timer.classList.add('close');
            currGenTim = 3;
            startGameFindNums();
        }
        currGenTim--;
    }, 1000);
});

function startGameFindNums(){
    let parent      = document.getElementById('parent');
    let field       = document.querySelector('#field');
    let pause       = false;
    let rows        = 2;
    let colls       = 2;
    let currMovies  = 0;
    let tds         = createTable(field, rows, colls);
    let randomNums  = createRandomArrWithNumbers(tds.length);
    setNumbersForTds(tds, randomNums);
    setEventForTds();
    timerGame(gameTimer, currTimer, parent);
    
    function createTable(select, rows, colls){
        let tds     = [];
    
        for(let i = 1; i <= rows; i++){
            let tr      = document.createElement('tr');
        
            for(let k = 1; k <= colls; k++){
                let td  = document.createElement('td');
                tds.push(td);
                tr.append(td);
            }
            select.append(tr);
        }
        return tds;
    };
    
    function setEventForTds(){
        let curr    = 0;
    
        for(let td of tds){
            td.addEventListener('click', function(){
                if(!pause){
                    let newSortArr  = sortArr(randomNums);
        
                    if(this.innerHTML == '' + newSortArr[curr]){
                        this.classList.add('active');
                        curr++;
                        currMovies++;
                    }
                    
                    if(checkWins(tds)){
                        removeTrsFromTable(field);
                        rows++;
                        colls++;
                        tds         = createTable(field, rows, colls);
                        randomNums  = createRandomArrWithNumbers(tds.length);
                        setNumbersForTds(tds, randomNums);
                        setEventForTds();
                    }
                }
            });
        }
    };

    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    function createRandomArrWithNumbers(elemsTds){
        let arr     = [];
        for(let i = 1; i <= elemsTds; i++){
            let num     = getRandomNum(1, elemsTds);
            let index   = arr.indexOf(num);
            if(index == -1){
                arr.push(num);
            }else{
                i = i - 1;
            }
        }
        return arr;
    };
    
    function setNumbersForTds(tds, randomNums){
        for(let i = 0; i < randomNums.length; i++){
            tds[i].innerHTML    = randomNums[i];
        }
    };
    
    function sortArr(arr){
        arr.sort(function(a, b){
            return a - b;
        });
        return arr;
    };
    
    function checkWins(tds){
        return check   = tds.every(function(elem){
            if(elem.getAttribute('class') == 'active'){
                return true;
            }else{
                return false;
            }
        });
    };
    
    function removeTrsFromTable(table){
        let trs     = table.querySelectorAll('tr');
    
        for(let tr of trs){
            tr.remove();
        }
    };

    function timerGame(timerI, curr, parent){
        let id  = setInterval(function(){
            timerI.innerHTML = 'Осталось: ' + curr + ' секунд';
    
            if(curr == 0){
                clearInterval(id);
                pause           = true;

                let infoPerson        = document.createElement('p');
                infoPerson.innerHTML  = 'Поздравляем, Вы успешно нажали ' + currMovies + ' ячеек и успешно дошли до ' + (rows - 1) + ' уровня!';
                parent.append(infoPerson);

                let btnReset         = document.createElement('button');
                btnReset.innerHTML   = 'Начать игру сначала';
                parent.append(btnReset);

                btnReset.addEventListener('click', function(){
                    removeTrsFromTable(field);
                    pause       = false;
                    rows        = 2;
                    colls       = 2;
                    currMovies  = 0;

                    infoPerson.innerHTML        = '';
                    gameTimer.innerHTML         = '';

                    btn.classList.remove('close');
                    info.classList.remove('close');
                    level.classList.remove('close');
                    question.classList.remove('close');
                    timer.innerHTML = 3;
                    btnReset.remove();
                });
                alert('Таймер истек, смотрите свои результаты ниже:)');
            }
            curr--;
        }, 1000);
    };
};