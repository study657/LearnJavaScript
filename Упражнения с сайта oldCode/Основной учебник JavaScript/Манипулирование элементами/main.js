// // Задача №1
// // Дан ol:
// // <ol id="elem"></ol>
// // Вставьте ему в конец li с текстом 'пункт'.

// let elem    = document.getElementById('elem');
// let newLi   = document.createElement('li');
// newLi.innerHTML = 'Пункт';
// elem.appendChild(newLi);




// // Задача №2
// // Дан ol и кнопка:
// // <ol id="elem"></ol>
// // <button id="button">click me</button>
// // Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'пункт'.

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = 'Пункт';
//     elem.appendChild(newLi);
// });














// // Привязывание событий при вставке элементов
// // Задача №1
// // Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.

// let parent  = document.getElementById('parent');
// let btn     = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = 'Текст';
//     parent.appendChild(newLi);

//     newLi.addEventListener('click', function(){
//         this.innerHTML += '!';
//     });
// });














// // Создание элементов в цикле на JavaScript
// // Задача №1
// // Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.

// let parent  = document.getElementById('parent');

// for(let i = 1; i <= 10; i++){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = i;
//     parent.appendChild(newLi);
// }














// // Навешивание обработчиков в цикле на JavaScript
// // Задача №1
// // Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.

// let parent  = document.getElementById('parent');
// let elem    = document.getElementById('elem');

// for(let i = 1; i <= 5; i++){
//     let newInput    = document.createElement('input');

//     newInput.addEventListener('blur', function(){
//         elem.innerHTML = newInput.value;
//     });
//     parent.appendChild(newInput);
// }














// // Создание элементов из массива на JavaScript
// // Задача №1
// // Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.

// let arr = [1, 2, 3, 4, 5];
// let parent  = document.getElementById('parent');

// for(let elem of arr){
//     let newP    = document.createElement('p');
//     newP.innerHTML = elem;

//     newP.addEventListener('click', function(){
//         this.innerHTML = Number(this.innerHTML) + 1;
//     });
//     parent.appendChild(newP);
// }














// // Практика на создание списков ul на JavaScript
// // Задача №1
// // Дан массив. Выведите его элементы в виде списка ul так, чтобы каждый элемент попал в свою li.

// let arr     = [1, 2, 3, 4, 5];
// let parent  = document.getElementById('parent');

// for(let elem of arr){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = elem;
//     parent.appendChild(newLi);
// }




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.

// let arr     = [1, 2, 3, 4, 5];
// let parent  = document.getElementById('parent');

// for(let elem of arr){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = elem;

//     newLi.addEventListener('click', function(){
//         this.innerHTML += '!';
//     });

//     parent.appendChild(newLi);
// }




// // Задача №3
// // Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.

// let arr     = [1, 2, 3, 4, 5];
// let parent  = document.getElementById('parent');

// for(let elem of arr){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = elem;

//     newLi.addEventListener('click', function func(){
//         this.innerHTML += '!';

//         newLi.removeEventListener('click', func);
//     });

//     parent.appendChild(newLi);
// }




// // Задача №4
// // Дан ul:
// // <ul id="elem"></ul>
// // Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

// let parent      = document.getElementById('parent');
// let arr         = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];

// for(let elem of arr){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = elem;
//     parent.appendChild(newLi);
// }




// // Задача №5
// // Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.

// let parent      = document.getElementById('parent');
// let arr         = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];

// for(let elem of arr){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = elem;

//     newLi.addEventListener('click', function(){
//         console.log(this.innerHTML);
//     });

//     parent.appendChild(newLi);
// }




// // Задача №6
// // Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.

// let parent      = document.getElementById('parent');
// let arr         = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];

// for(let elem of arr){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = elem;

//     newLi.addEventListener('click', function(){
//         console.log(this.innerHTML);
//         this.innerHTML += '!';
//     });

//     parent.appendChild(newLi);
// }




// // Задача №7
// // Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.

// let parent      = document.getElementById('parent');
// let arr         = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];

// for(let elem of arr){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = elem;

//     newLi.addEventListener('click', function func(){
//         console.log(this.innerHTML);
//         this.innerHTML += '!';

//         this.removeEventListener('click', func);
//     });

//     parent.appendChild(newLi);
// }














// // Создание HTML таблиц на JavaScript
// // Задача №1
// // Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.

// let table   = document.getElementById('table');

// for(let i = 1; i <= 5; i++){
//     let tr = document.createElement('tr');

//     for(let j = 1; j <= 5; j++){
//         let td  = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.

// let table   = document.getElementById('table');

// for(let i = 1; i <= 10; i++){
//     let tr = document.createElement('tr');

//     for(let j = 1; j <= 5; j++){
//         let td  = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }




// // Задача №3
// // Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.

// let table   = document.getElementById('table');

// for(let i = 1; i <= 10; i++){
//     let tr = document.createElement('tr');

//     for(let j = 1; j <= 5; j++){
//         let td  = document.createElement('td');
//         td.innerHTML = 'x';
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }




// // Задача №4
// // Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).

// let widthTable  = document.getElementById('widthTable');
// let heigthTable = document.getElementById('heigthTable');
// let table       = document.getElementById('table');
// let btn         = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     for(let i = 1; i <= Number(heigthTable.value); i++){
//         let tr = document.createElement('tr');

//         for(let j = 1; j <= Number(widthTable.value); j++){
//             let td  = document.createElement('td');
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// });














// // Последовательное заполнение HTML таблиц
// // Задача №1
// // Выведите на экран таблицу table размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.

// let table   = document.getElementById('table');
// let k       = 1;

// for(let i = 1; i <= 5; i++){
//     let tr  = document.createElement('tr');

//     for(let j = 1; j <= 5; j++){
//         let td  = document.createElement('td');
//         td.innerHTML = k;
//         k++;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.

// let table   = document.getElementById('table');
// let k       = 2;

// for(let i = 1; i <= 5; i++){
//     let tr  = document.createElement('tr');

//     for(let j = 1; j <= 5; j++){
//         let td  = document.createElement('td');
//         td.innerHTML = k;
//         k += 2;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }














// // Создание HTML таблицы из массива на JavaScript
// // Задача №1
// // Дан массив:
// // let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// // Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table   = document.getElementById('table');

// for(let elem of arr){
//     let tr  = document.createElement('tr');

//     for(let elemArr of elem){
//         let td  = document.createElement('td');
//         td.innerHTML = elemArr;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table   = document.getElementById('table');

// for(let elem of arr){
//     let tr  = document.createElement('tr');

//     for(let elemArr of elem){
//         let td  = document.createElement('td');
//         td.innerHTML = Math.pow(elemArr, 2);
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }














// // Создание HTML таблицы из массива объектов
// // Задача №1
// // Дан следующий массив с работниками:
// // let employees = [
// // 	{name: 'employee1', age: 30, salary: 400},
// // 	{name: 'employee2', age: 31, salary: 500},
// // 	{name: 'employee3', age: 32, salary: 600},
// // ];
// // Выведите элементы этого массива в виде HTML таблицы.

// let table   = document.getElementById('table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for(let elem of employees){
//     let tr  = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.innerHTML   = elem['name'];
//     tr.appendChild(td1);

//     let td2 = document.createElement('td');
//     td2.innerHTML   = elem['age'];
//     tr.appendChild(td2);

//     let td3 = document.createElement('td');
//     td3.innerHTML   = elem['salary'];
//     tr.appendChild(td3);

//     table.appendChild(tr);
// }




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.

// let table   = document.getElementById('table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for(let elem of employees){
//     let tr  = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.innerHTML   = elem['name'];
//     tr.appendChild(td1);

//     let td2 = document.createElement('td');
//     td2.innerHTML   = elem['age'];
//     td2.addEventListener('click', function(){
//         this.innerHTML = Number(this.innerHTML) + 1;
//     });
//     tr.appendChild(td2);

//     let td3 = document.createElement('td');
//     td3.innerHTML   = elem['salary'];
//     tr.appendChild(td3);

//     table.appendChild(tr);
// }




// // Задача №3
// // Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.

// let table   = document.getElementById('table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for(let elem of employees){
//     let tr  = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.innerHTML   = elem['name'];
//     tr.appendChild(td1);

//     let td2 = document.createElement('td');
//     td2.innerHTML   = elem['age'];
//     td2.addEventListener('click', function(){
//         this.innerHTML = Number(this.innerHTML) + 1;
//     });
//     tr.appendChild(td2);

//     let td3 = document.createElement('td');
//     td3.innerHTML   = elem['salary'];
//     td3.addEventListener('click', function(){
//         this.innerHTML = Number(this.innerHTML) + (Number(this.innerHTML) * 10 / 100);
//     });
//     tr.appendChild(td3);

//     table.appendChild(tr);
// }














// // Добавление рядов и колонок в HTML таблицу
// // Задача №1
// // Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.

// let table   = document.getElementById('table');
// let btn     = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     let tr  = document.createElement('tr');
//     tr.innerHTML = 'x';
//     table.appendChild(tr);
// });




// // Задача №2
// // Дана таблица размером 2 на 2:
// // <table id="table">
// // 	<tr>
// // 		<td></td>
// // 		<td></td>
// // 	</tr>
// // 	<tr>
// // 		<td></td>
// // 		<td></td>
// // 	</tr>
// // </table>
// // td {
// // 	width: 50px;
// // 	height: 50px;
// // 	border: 1px solid black;
// // }
// // Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.

// let table   = document.getElementById('table');
// let btn     = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     let trs = document.querySelectorAll('#table tr');

//     for(let tr of trs){
//         let td  = document.createElement('td');
//         tr.appendChild(td);
//     }

//     let newTr  = document.createElement('tr');
//     table.appendChild(newTr);
//     let allTrs  = document.querySelectorAll('#table tr');

//     for(let i = 1; i <= allTrs.length; i++){
//         let td  = document.createElement('td');
//         allTrs[allTrs.length - 1].appendChild(td);
//     }
// });














// // Изменение ячеек HTML таблицы на JavaScript
// // Задача №1
// // Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.

// let tds     = document.querySelectorAll('#table td');
// let btn     = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     for(let td of tds){
//         td.innerHTML = Number(td.innerHTML) * 2;
//     }
// });














// // Порядковый номер ячейки таблицы на JavaScript
// // Задача №1
// // Дана HTML таблица. Запишите в каждую ячейку ее порядковый номер с конца. То есть последней ячейке запишите 1, предпоследней - 2, и так далее.

// let tds     = document.querySelectorAll('#table td');
// let btn     = document.getElementById('btn');
// let k       = 1;

// btn.addEventListener('click', function(){
//     for(let i = tds.length; i >= 1; i--){
//         tds[i - 1].innerHTML = k;
//         k++;
//     }
// });














// // Номер колонки и ряда таблицы на JavaScript
// // Задача №1
// // Дана HTML таблица. Запишите в каждую ячейку ее порядковый номер в ряду.

// let trs = document.querySelectorAll('#table tr');

// for (let i = 0; i < trs.length; i++) {
// 	let tr = trs[i];
// 	let tds = tr.querySelectorAll('td');
	
// 	for (let j = 0; j < tds.length; j++) {
// 		let td = tds[j];
// 		td.innerHTML = (i + 1) + ' - ' + (j + 1);
// 	}
// }














// // Порядковый номер ячейки по клику на JavaScript
// // Задача №1
// // Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в эту ячейку записывался порядковый номер этой ячейки с конца таблицы.

// let tds     = document.querySelectorAll('#table td');
// let curr    = tds.length;

// for(let i = 0; i < tds.length; i++){
//     tds[i].addEventListener('click', function(){
//         this.innerHTML  = curr - i;
//     });
// }














// // Порядковый номер клика в ячейке HTML таблицы
// // Задача №1
// // Давайте теперь по клику на ячейку будем записывать в нее порядковый номер клика.
// // Модифицируйте код теоретической части урока так, чтобы повторное нажатие по ячейке не приводило к увеличению счетчика.

// let tds     = document.querySelectorAll('#table td');
// let k       = 1;

// for(let td of tds){
//     td.addEventListener('click', function func(){
//         this.innerHTML  = k;
//         k++;

//         this.removeEventListener('click', func);
//     });
// }




// Задача  №2
// Давайте теперь сделаем так, чтобы при кликах на ячейку попеременно вставлялось то 1, то 2. То есть при первом клике должно вставиться 1, при втором клике - 2, при третьем - опять 1 и так далее.
// Модифицируйте описанную в теоретической части урока задачу так, чтобы при кликах на ячейки чередовались числа 1, 2 и 3.

let tds     = document.querySelectorAll('#table td');
let i       = 1;

for(let td of tds){
    td.addEventListener('click', function func(){
        this.innerHTML = i;

        if(i == 1){
            i = 2;
        }else if(i == 2){
            i = 3;
        }else{
            i = 1;
        }

        this.removeEventListener('click', func);
    });
}