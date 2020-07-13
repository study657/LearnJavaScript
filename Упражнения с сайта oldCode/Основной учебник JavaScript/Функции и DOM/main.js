// // Функции для работы с DOM элементом на JavaScript
// // Задача №1
// // Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор.

// function setText(selector, text){
//     let elem        = document.querySelector(selector);
//     elem.innerHTML  = text;
// };
// setText('#elem1', 'text1');
// setText('.elem2', 'text2');




// // Задача №2
// // Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.

// function setAttr(selector, nameAttr, newAttr){
//     let elem    = document.querySelector(selector);
//     elem.setAttribute(nameAttr, newAttr);
// };
// setAttr('#elem1', 'disabled', '');
// setAttr('#elem1', 'class', 'new');














// // Функции для работы с группой DOM элементов
// // Задача №1
// // Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.

// function appendText(selector, text){
//     let elems   = document.querySelectorAll(selector);

//     for(let elem of elems){
//         elem.innerHTML  += text;
//     }
// };
// appendText('.elem', '!');














// // Передача коллбэка для работы с DOM на JavaScript
// // Задача №1
// // Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак.

// function forEach(selector, func){
//     let elems   = document.querySelectorAll(selector);

//     for(let elem of elems){
//         func(elem);
//     }
// };
// forEach('.elem', function(elem){
//     elem.innerHTML  += '?';
// });














// // Передача порядкового номера в коллбэк на JavaScript
// // Задача №1
// // добавить в начало порядк номер Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте ему в начало его порядковый номер.

// function forEach(selector, func){
//     let elems   = document.querySelectorAll(selector);

//     for(let i = 0; i < elems.length; i++){
//         func(elems[i], i);
//     }
// };
// forEach('.elem', function(elem, i){
//     elem.innerHTML  += i + 1;
// });














// // Передача DOM элемента параметром функции
// // Задача №1
// // Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.

// let elem1   = document.querySelectorAll('.elem')[0];

// function appendText(elem, text){
//     elem.innerHTML  += text;
// };
// appendText(elem1, '!');




// // Задача №2
// // Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.

// let elems   = document.querySelectorAll('.elem');

// for(let elem of elems){
//     appendText(elem, '!');
// }

// function appendText(elem, text){
//     elem.innerHTML  += text;
// };




// // Задача №3
// // Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.

// let elem    = document.querySelector('#elem');

// function setValue(elem, text){
//     elem.value  = text;
// };
// setValue(elem, 'text');














// // Передача DOM группы элементов параметрами функций
// // Задача №1
// // Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.

// let elems   = document.querySelectorAll('.elem');

// function appendText(elems, text){
//     for(let elem of elems){
//         elem.innerHTML  += text;
//     }
// };
// appendText(elems, '!');




// // Задача №2
// // Сделайте функцию appendElem, которая первым параметром будет принимать ссылку DOM объект, в котором лежит тег ul, а вторым - текст.
// // Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.

// let elem    = document.getElementById('elem');

// function appendElem(elem, text){
//     let newLi       = document.createElement('li');
//     newLi.innerHTML = text;
//     elem.append(newLi);
// };
// appendElem(elem, 'text');




// // Задача №2
// // Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.

// let arr     = ['Элемент1', 'Элемент2', 'Элемент3'];
// let elem    = document.getElementById('elem');

// function appendElem(elem, text){
//     let newLi       = document.createElement('li');
//     newLi.innerHTML = text;
//     elem.append(newLi);
// };

// for(let elemArr of arr){
//     appendElem(elem, elemArr);
// }














// // Функция для создания HTML таблиц на JavaScript
// // Задача №1
// // Давайте теперь сделаем функцию createTable, которая будет будет создавать таблицу заданного размера и добавлять ее в конец заданного элемента.
// // Вот заготовка описанной функции:
// // function createTable(rows, cols, parent) {
// // 	let table = document.createElement('table');
	
// // 	// тут создадим таблицу с rows рядами и cols колонками
// // 	for () {
// // 		for () {
			
// // 		}
// // 	}
	
// // 	parent.appendChild(table);
// // }
// // Допишите код представленной выше заготовки функции. Потестируйте работу готовой функции.

// let elem    = document.getElementById('elem');

// function createTable(rows, cols, parent) {
// 	let table = document.createElement('table');
	
// 	// тут создадим таблицу с rows рядами и cols колонками
// 	for (let i = 1; i <= rows; i++) {
//         let newTr   = document.createElement('tr');
//         table.append(newTr);
// 		for (let k = 1; k <= cols; k++) {
//             let newTd   = document.createElement('td');
//             newTr.append(newTd);
// 		}
// 	}
	
// 	parent.appendChild(table);
// };
// createTable(5, 5, elem);














// // Возврат таблицы из функции на JavaScript
// // Задача №1
// // В предыдущем уроке мы с вами сделали функцию createTable. Давайте модифицируем эту функцию так, чтобы она не добавляла таблицу в какой-то элемент, а просто возвращала ее через return.
// // Переделайте вашу функцию createTable в соответствии с описанным в теории.

// let elem    = document.getElementById('elem');

// function createTable(rows, cols) {
// 	let table = document.createElement('table');
	
// 	// тут создадим таблицу с rows рядами и cols колонками
// 	for (let i = 1; i <= rows; i++) {
//         let newTr   = document.createElement('tr');
//         table.append(newTr);
// 		for (let k = 1; k <= cols; k++) {
//             let newTd   = document.createElement('td');
//             newTr.append(newTd);
// 		}
// 	}
	
// 	return table;
// };
// elem.appendChild(createTable(3, 4));




// // Задача №2
// // Пусть у нас есть вот такой див с абзацами:
// // <div id="elem">
// // 	<p>1</p>
// // 	<p>2</p>
// // 	<p>3</p>
// // </div>
// // С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива с абзацами.

// let elem    = document.getElementById('elem');

// function createTable(rows, cols){
//     let table   = document.createElement('table');

//     for(let i = 1; i <= rows; i++){
//         let newTr   = document.createElement('tr');
//         table.appendChild(newTr);

//         for(let k = 1; k <= cols; k++){
//             let newTd   = document.createElement('td');
//             newTr.appendChild(newTd);
//         }
//     }
//     return table;
// };
// elem.appendChild(createTable(5, 3));














// // Функция для создания таблицы из двухмерного массива
// // В предыдущих уроках мы с вами сделали функцию createTable, которая создает таблицу заданного размера. 
// // Давайте теперь сделаем функцию createTableByArr, которая параметром будет принимать двухмерный массив и строить на его основе таблицу.
// // Задача №1
// // Реализуйте описанную функцию. Проверьте ее работу.

// let elem    = document.querySelector('.elem');
// let arr     = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// function createTable(arr){
//     let table   = document.createElement('table');

//     for(let sumElem of arr){
//         let tr  = document.createElement('tr');
//         table.appendChild(tr);

//         for(let elem of sumElem){
//             let td          = document.createElement('td');
//             td.innerHTML    = elem;
//             tr.appendChild(td);
//         }
//     }
//     return table;
// };
// elem.appendChild(createTable(arr));














// // Создание HTML таблицы из одномерного массива на JavaScript
// // Задача №1
// // Давайте сделаем еще и функцию convertArr, которая будет брать одномерный массив и преобразовывать его в двухмерный
// // Реализуйте описанную функцию convertArr. Потестируйте ее работу.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function convertArr(arr, cols){
//     let result  = [];
//     while(arr.length > 0){
//         result.push(arr.splice(0, cols));
//     }
//     return result;
// };
// console.log(convertArr(arr, 4));




// // Задача №2
// // Дан следующий массив:
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // С помощью комбинаций функций createTableByArr и convertArr создайте из приведенного массива таблицу размером 4 колонки. Добавьте созданную таблицу в какой-нибудь див.

// let elem    = document.querySelector('.elem');
// let arr     = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function convertArr(mass, cols){
//     let result  = [];
//     while(mass.length > 0){
//         result.push(mass.splice(0, cols));
//     }
//     return result;
// };

// function createTableByArr(mass){
//     let table   = document.createElement('table');

//     for(let subElem of mass){
//         let tr  = document.createElement('tr');
//         table.appendChild(tr);

//         for(let elem of subElem){
//             let td  = document.createElement('td');
//             td.innerHTML    = elem;
//             tr.appendChild(td);
//         }
//     }
//     return table;
// };
// elem.appendChild(createTableByArr(convertArr(arr, 3)));














// // Нехватка элементов в массиве при создании таблицы
// // Задача №1
// // Для решения проблемы сделаем функцию normalizeArr, которая первый параметром будет принимать двухмерный массив, вторым параметром - количество элементов в подмассиве, а третьим - заполнитель.
// // Реализуйте описанную функцию normalizeArr. Потестируйте ее работу.

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// function normalizeArr(arr, cols, zapolnitel){
//     let ost = cols - arr[arr.length - 1].length;
    
//     for(let i = 1; i <= ost; i++){
//         arr[arr.length - 1].push(zapolnitel);
//     }
//     return arr;
// };
// console.log(normalizeArr(arr, 3, '-'));




// Задача №2
// Дан следующий массив:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// С помощью комбинаций функций createTableByArr, normalizeArr и convertArr создайте из приведенного массива таблицу размером 5 колонок. Добавьте созданную таблицу в какой-нибудь див.

let elem    = document.querySelector('.elem');
let arr     = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function createTableByArr(mass){
    let table   = document.createElement('table');

    for(let subArr of mass){
        let tr  = document.createElement('tr');
        table.appendChild(tr);

        for(let elem of subArr){
            let td          = document.createElement('td');
            td.innerHTML    = elem;
            tr.appendChild(td);
        }
    }
    return table;
};

function convertArr(mass, cols){
    let result  = [];
    while(mass.length > 0){
        result.push(mass.splice(0, cols));
    }
    return result;
};

function normalizeArr(mass, cols, zapolnitel){
    let ost = cols - mass[mass.length - 1].length;

    for(let i = 1; i <= ost; i++){
        mass[mass.length - 1].push(zapolnitel);
    }
    return mass;
};
elem.appendChild(createTableByArr(normalizeArr(convertArr(arr, 5), 5, '-')));