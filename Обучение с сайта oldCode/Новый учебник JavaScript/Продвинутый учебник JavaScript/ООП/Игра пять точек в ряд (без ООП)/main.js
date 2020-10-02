// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ БЕЗ ООП (ПРЕПОДАВАТЕЛЯ)

// let game        = document.querySelector('#game');
// let field       = game.querySelector('.field');

// let rowsNum     = 30;
// let collsNum    = 20;
// let gamers      = ['gamer1', 'gamer2'];
// let gamerNum    = 0;

// let rows        = fillField(field, rowsNum, collsNum);
// let cols        = getColumns(rows);
// let diag1       = getFirstDiags(rows);
// let diag2       = getSecondDiags(rows);
// let lines       = rows.concat(cols, diag1, diag2);

// function chechWin(gamer, lines){
//     for(let i = 0; i < lines.length; i++){
//         for(let k = 4; k < lines[i].length; k++){
//             if(
//                 lines[i][k - 4].classList.contains(gamer) &&
//                 lines[i][k - 3].classList.contains(gamer) &&
//                 lines[i][k - 2].classList.contains(gamer) &&
//                 lines[i][k - 1].classList.contains(gamer) &&
//                 lines[i][k].classList.contains(gamer)
//             ){
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// function isWin(gamers, lines){
//     for(let i = 0; i < gamers.length; i++){
//         if(chechWin(gamers[i], lines)){
//             endGame(gamers[i]);
//             break;
//         }
//     }
// };

// function endGame(gamer){
//     alert(gamer);
//     freezeField(field);
// };

// function freezeField(field){
//     let cells   = field.querySelectorAll('td');

//     for(let i = 0; i < cells.length; i++){
//         cells[i].removeEventListener('click', cellClickHandler);
//     }
// };

// function fillField(field, rowsNum, colsNum){
//     let rows    = [];

//     for(let i = 0; i < rowsNum; i++){
//         let tr      = document.createElement('tr');
//         rows[i]     = [];

//         for(let k = 0; k < colsNum; k++){
//             let td      = document.createElement('td');
//             tr.append(td);

//             td.addEventListener('click', cellClickHandler);
//             rows[i][k]  = td;
//         }
//         field.append(tr);
//     }
//     return rows;
// };

// function cellClickHandler(){
//     this.classList.add(gamers[gamerNum]);
//     this.removeEventListener('click', cellClickHandler);

//     isWin(gamers, lines);

//     gamerNum++;
//     if(gamerNum == gamers.length){
//         gamerNum = 0;
//     }
// };

// function getColumns(arr){
//     let result  = [];

//     for(let i = 0; i < arr.length; i++){
//         for(let k = 0; k < arr[i].length; k++){
//             if(result[k] === undefined){
//                 result[k] = [];
//             }

//             result[k][i]  = arr[i][k];
//         }
//     }
//     return result;
// };

// function getFirstDiags(arr){
//     let result  = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let k = 0; k < arr[i].length; k++){
//             if(result[i + k] === undefined){
//                 result[i + k] = [];
//             }

//             result[i + k].push(arr[i][k]);
//         }
//     }
//     return result;
// };

// function getSecondDiags(arr){
//     return getFirstDiags(reverseSubArrs(arr));
// };

// function reverseSubArrs(arr){
//     let result  = [];

//     for(let i = 0; i < arr.length; i++){
//         for(let k = arr[i].length - 1; k >= 0; k--){
//             if(result[i] === undefined){
//                 result[i] = [];
//             }

//             result[i].push(arr[i][k]);
//         }
//     }
//     return result;
// };














// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ БЕЗ ООП (МОЙ ВАРИАНТ)

// let game        = document.getElementById('game');
// let field       = game.querySelector('.field');
// let rowsNum     = 30;
// let collsNum    = 20;
// let gamers      = ['gamer1', 'gamer2'];
// let gamerNum    = 0;

// function createTable(field){
//     for(let i = 1; i <= rowsNum; i++){
//         let tr      = document.createElement('tr');
//         tr.dataset.numRow   = i - 1;
//         field.append(tr);

//         for(let j = 1; j <= collsNum; j++){
//             let td  = document.createElement('td');
//             td.dataset.numColl  = j - 1;
//             tr.append(td);

//             td.addEventListener('click', function eventTds(){
//                 this.classList.add(gamers[gamerNum]);
//                 let className       = this.className;
//                 let numColl         = Number(this.dataset.numColl);
//                 let numRow          = Number(this.parentElement.dataset.numRow);
//                 gamerNum++;
            
//                 if(gamerNum == gamers.length){
//                     gamerNum = 0;
//                 }
//                 this.removeEventListener('click', eventTds);

//                 let gorizontalArr       = getArrFromGorizontal(this);
//                 let verticalArr         = getArrFromVertical(game, numColl);
//                 let firstDiagoArr       = getArrFromFirstDiago(numRow, numColl);
//                 let secondDiagoArr      = getArrFromSecondDiago(numRow, numColl);

//                 if(checkWin(gorizontalArr, className) || checkWin(verticalArr, className) || checkWin(firstDiagoArr, className) || checkWin(secondDiagoArr, className)){
//                     alert('Победил игрок: ' + className);
//                 }
//             });
//         }
//     }
// };
// createTable(field);

// function checkWin(arr, className){
//     let str     = arr.join('');
//     let reg     = new RegExp("^\.{1,}" + "(?:" + className + "){5}\.{1,}|(?:" + className + "){5}\.{1,}|\.{1,}(?:" + className + "){5,}$");

//     return reg.test(str);
// };

// function getArrFromGorizontal(elem){
//     let result  = [];
//     let elems   = elem.parentElement.children;
//     for(let i = 0; i < elems.length; i++){
//         if(elems[i].className == ''){
//             result.push('-');
//         }else{
//             result.push(elems[i].className);
//         }
//     }
//     return result;
// };

// function getArrFromVertical(parent, numColl){
//     let result  = [];
//     let elems   = parent.querySelectorAll('tr');

//     for(let i = 0; i < elems.length; i++){
//         if(elems[i].children[numColl].className == ''){
//             result.push('-');
//         }else{
//             result.push(elems[i].children[numColl].className);
//         }
//     }
//     return result;
// };

// function getArrFromFirstDiago(numberRow, numberColl){
//     let arr     = [];
//     let result  = [];

//     for(let i = 0; i <= 20; i++){
//         if(field.querySelectorAll('tr')[numberRow] != undefined && field.querySelectorAll('tr')[numberRow].children[numberColl] != undefined){
//             arr.push(field.querySelectorAll('tr')[numberRow].children[numberColl]);
//             numberRow--;
//             numberColl++;
//         }
//     }

//     let firstElem   = arr[arr.length - 1];
//     let newNumCol   = Number(firstElem.dataset.numColl);
//     let newNumRow   = Number(firstElem.parentElement.dataset.numRow);
    
//     for(let i = 0; i <= 30; i++){
//         if(field.querySelectorAll('tr')[newNumRow] != undefined && field.querySelectorAll('tr')[newNumRow].children[newNumCol] != undefined){
//             if(field.querySelectorAll('tr')[newNumRow].children[newNumCol].className == ''){
//                 result.push('-');
//             }else{
//                 result.push(field.querySelectorAll('tr')[newNumRow].children[newNumCol].className);
//             }

//             newNumRow++;
//             newNumCol--;
//         }
//     }

//     return result;
// };

// function getArrFromSecondDiago(numberRow, numberColl){
//     let arr     = [];
//     let result  = [];
//     for(let i = 0; i <= 20; i++){
//         if(field.querySelectorAll('tr')[numberRow] != undefined && field.querySelectorAll('tr')[numberRow].children[numberColl] != undefined){
//             arr.push(field.querySelectorAll('tr')[numberRow].children[numberColl]);

//             numberRow--;
//             numberColl--;
//         }
//     }

//     let firstElem    = arr[arr.length - 1];
//     let newNumCol2   = Number(firstElem.dataset.numColl);
//     let newNumRow2   = Number(firstElem.parentElement.dataset.numRow);

//     for(let i = 0; i <= 30; i++){
//         if(field.querySelectorAll('tr')[newNumRow2] != undefined && field.querySelectorAll('tr')[newNumRow2].children[newNumCol2] != undefined){
//             if(field.querySelectorAll('tr')[newNumRow2].children[newNumCol2].className == ''){
//                 result.push('-');
//             }else{
//                 result.push(field.querySelectorAll('tr')[newNumRow2].children[newNumCol2].className);
//             }

//             newNumCol2++;
//             newNumRow2++;
//         }
//     }
//     return result;
// };














// ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ С ООП (МОЙ ВАРИАНТ)

let game        = document.getElementById('game');
let field       = game.querySelector('.field');

class Field{
    constructor(game, parent, rowsNum, collsNum){
        this.game       = game;
        this.parent     = parent;
        this.rowsNum    = rowsNum;
        this.collsNum   = collsNum;

        this.gamers     = ['gamer1', 'gamer2'];
        this.gamerNum   = 0;

        this.createTable();

        this.logic      = new LogiсGame();
    };

    createTable(){
        for(let i = 1; i <= this.rowsNum; i++){
            let tr      = document.createElement('tr');
            tr.dataset.numRow   = i - 1;
            this.parent.append(tr);

            for(let j = 1; j <= this.collsNum; j++){
                let td  = document.createElement('td');
                td.dataset.numColl  = j - 1;
                tr.append(td);

                let self       = this;

                td.addEventListener('click', function eventTds(){
                    td.classList.add(self.gamers[self.gamerNum]);
                    let className       = this.className;
                    let numColl         = Number(this.dataset.numColl);
                    let numRow          = Number(this.parentElement.dataset.numRow);
                    self.gamerNum++;
                
                    if(self.gamerNum == self.gamers.length){
                        self.gamerNum = 0;
                    }
                    this.removeEventListener('click', eventTds);

                    this.gorizontalArr      = self.logic.getArrFromGorizontal(this);
                    this.verticalArr        = self.logic.getArrFromVertical(self.game, numColl);
                    this.firstDiagoArr      = self.logic.getArrFromFirstDiago(numRow, numColl);
                    this.secondDiagoArr     = self.logic.getArrFromSecondDiago(numRow, numColl);

                    if(self.logic.checkWin(this.gorizontalArr, className) || self.logic.checkWin(this.verticalArr, className) || self.logic.checkWin(this.firstDiagoArr, className) || self.logic.checkWin(this.secondDiagoArr, className)){
                        alert('Победил игрок: ' + className);
                    }
                });
            }
        }
    };
};

class LogiсGame{
    checkWin(arr, className){
        let str     = arr.join('');
        let reg     = new RegExp("^\.{1,}" + "(?:" + className + "){5}\.{1,}|(?:" + className + "){5}\.{1,}|\.{1,}(?:" + className + "){5,}$");

        return reg.test(str);
    };

    getArrFromGorizontal(elem){
        let result  = [];
        let elems   = elem.parentElement.children;
        for(let i = 0; i < elems.length; i++){
            if(elems[i].className == ''){
                result.push('-');
            }else{
                result.push(elems[i].className);
            }
        }
        return result;
    };

    getArrFromVertical(parent, numColl){
        let result  = [];
        let elems   = parent.querySelectorAll('tr');

        for(let i = 0; i < elems.length; i++){
            if(elems[i].children[numColl].className == ''){
                result.push('-');
            }else{
                result.push(elems[i].children[numColl].className);
            }
        }
        return result;
    };

    getArrFromFirstDiago(numberRow, numberColl){
        let arr     = [];
        let result  = [];

        for(let i = 0; i <= 20; i++){
            if(field.querySelectorAll('tr')[numberRow] != undefined && field.querySelectorAll('tr')[numberRow].children[numberColl] != undefined){
                arr.push(field.querySelectorAll('tr')[numberRow].children[numberColl]);
                numberRow--;
                numberColl++;
            }
        }

        let firstElem   = arr[arr.length - 1];
        let newNumCol   = Number(firstElem.dataset.numColl);
        let newNumRow   = Number(firstElem.parentElement.dataset.numRow);
        
        for(let i = 0; i <= 30; i++){
            if(field.querySelectorAll('tr')[newNumRow] != undefined && field.querySelectorAll('tr')[newNumRow].children[newNumCol] != undefined){
                if(field.querySelectorAll('tr')[newNumRow].children[newNumCol].className == ''){
                    result.push('-');
                }else{
                    result.push(field.querySelectorAll('tr')[newNumRow].children[newNumCol].className);
                }

                newNumRow++;
                newNumCol--;
            }
        }

        return result;
    };

    getArrFromSecondDiago(numberRow, numberColl){
        let arr     = [];
        let result  = [];
        for(let i = 0; i <= 20; i++){
            if(field.querySelectorAll('tr')[numberRow] != undefined && field.querySelectorAll('tr')[numberRow].children[numberColl] != undefined){
                arr.push(field.querySelectorAll('tr')[numberRow].children[numberColl]);

                numberRow--;
                numberColl--;
            }
        }

        let firstElem    = arr[arr.length - 1];
        let newNumCol2   = Number(firstElem.dataset.numColl);
        let newNumRow2   = Number(firstElem.parentElement.dataset.numRow);

        for(let i = 0; i <= 30; i++){
            if(field.querySelectorAll('tr')[newNumRow2] != undefined && field.querySelectorAll('tr')[newNumRow2].children[newNumCol2] != undefined){
                if(field.querySelectorAll('tr')[newNumRow2].children[newNumCol2].className == ''){
                    result.push('-');
                }else{
                    result.push(field.querySelectorAll('tr')[newNumRow2].children[newNumCol2].className);
                }

                newNumCol2++;
                newNumRow2++;
            }
        }
        return result;
    };
};

new Field(game, field, 30, 20);