// // Поиск ячеек таблицы с помощью атрибута data
// // Задача №1
// // Дана следующая HTML таблица:
// // <table id="table">
// // 	<tr>
// // 		<td data-col="1"></td>
// // 		<td data-col="2"></td>
// // 		<td data-col="3"></td>
// // 	</tr>
// // 	<tr>
// // 		<td data-col="1"></td>
// // 		<td data-col="2"></td>
// // 		<td data-col="3"></td>
// // 	</tr>
// // 	<tr>
// // 		<td data-col="1"></td>
// // 		<td data-col="2"></td>
// // 		<td data-col="3"></td>
// // 	</tr>
// // </table>
// // td {
// // 	width: 50px;
// // 	height: 50px;
// // 	border: 1px solid black;
// // }
// // Сделайте так, чтобы по клику на любую ячейку в красный фон красились все ячейки этой колонки.

// let tds   = document.querySelectorAll('#table td');

// for(let td of tds){
//     td.addEventListener('click', function(){
//         let dataCol     = this.dataset.col;
//         let allElements = document.querySelectorAll('#table td[data-col="' + dataCol + '"]');
        
//         for(let elem of allElements){
//             elem.classList.add('active');
//         }
//     });
// }




// // Задача №2
// // Дана следующая HTML таблица:
// // <table id="table">
// // 	<tr>
// // 		<td data-row="1" data-col="1"></td>
// // 		<td data-row="1" data-col="2"></td>
// // 		<td data-row="1" data-col="3"></td>
// // 	</tr>
// // 	<tr>
// // 		<td data-row="2" data-col="1"></td>
// // 		<td data-row="2" data-col="2"></td>
// // 		<td data-row="2" data-col="3"></td>
// // 	</tr>
// // 	<tr>
// // 		<td data-row="3" data-col="1"></td>
// // 		<td data-row="3" data-col="2"></td>
// // 		<td data-row="3" data-col="3"></td>
// // 	</tr>
// // </table>
// // Даны также две переменные, в которых хранятся номер колонки и номер ряда:
// // let col = 2;
// // let row = 3;
// // Сделайте кнопку, по нажатию на которую в красный фон покрасится та ячейка, номер которой совпадает с номером из переменных.

// let btn         = document.getElementById('btn');
// console.log(table);
// let row         = 3;
// let col         = 1;

// btn.addEventListener('click', function(){
//     let tableRow    = document.querySelectorAll('#table td[data-row="' + row +'"]');
//     let elem        = tableRow[col - 1];
//     elem.classList.add('active');
// });














// // Добавление номера колонки и ряда в таблицу
// // Задача №1
// // Дана HTML таблица с пустыми ячейками, например, вот такая:
// // <table id="table">
// // 	<tr>
// // 		<td></td>
// // 		<td></td>
// // 		<td></td>
// // 	</tr>
// // 	<tr>
// // 		<td></td>
// // 		<td></td>
// // 		<td></td>
// // 	</tr>
// // 	<tr>
// // 		<td></td>
// // 		<td></td>
// // 		<td></td>
// // 	</tr>
// // </table>
// // Напишите скрипт, который добавит в каждую ячейку таблицы атрибут data-col с номером колонки таблицы, в которой находится эта ячейка.

// let table   = document.getElementById('table');
// let trs     = table.querySelectorAll('tr');

// for(let tr of trs){
//     let td      = tr.querySelectorAll('td');
    
//     for(let i = 0; i < td.length; i++){
//         td[i].dataset.col   = (i + 1);
//     }
// }




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы в ячейку добавлялся еще и номер ее ряда, вот так:
// // <table id="table">
// // 	<tr>
// // 		<td data-row="1" data-col="1"></td>
// // 		<td data-row="1" data-col="2"></td>
// // 		<td data-row="1" data-col="3"></td>
// // 	</tr>
// // 	<tr>
// // 		<td data-row="2" data-col="1"></td>
// // 		<td data-row="2" data-col="2"></td>
// // 		<td data-row="2" data-col="3"></td>
// // 	</tr>
// // 	<tr>
// // 		<td data-row="3" data-col="1"></td>
// // 		<td data-row="3" data-col="2"></td>
// // 		<td data-row="3" data-col="3"></td>
// // 	</tr>
// // </table>

// let table   = document.getElementById('table');
// let trs     = table.querySelectorAll('tr');
// let k       = 0;

// for(let tr of trs){
//     let td      = tr.querySelectorAll('td');
//     k++;
    
//     for(let i = 0; i < td.length; i++){
//         td[i].dataset.col   = (i + 1);
//         td[i].dataset.row   = k;
//     }
// }




// // Задача №3
// // Дана некоторая таблица. Сделайте так, чтобы по клику на любую ячейку в ее текст выводился номер ряда и номер колонки этой ячейки.

// let table   = document.getElementById('table');
// let trs     = table.querySelectorAll('tr');
// let k       = 0;

// for(let tr of trs){
//     let td      = tr.querySelectorAll('td');
//     k++;
    
//     for(let i = 0; i < td.length; i++){
//         td[i].dataset.col   = (i + 1);
//         td[i].dataset.row   = k;
//     }
// }

// let tds     = document.querySelectorAll('#table td');

// for(let td of tds){
//     td.addEventListener('click', function(){
//         this.innerHTML  = this.dataset.col + ' : ' + this.dataset.row;
//     });
// }




// // Задача №4
// // Пусть у нас есть некоторая квадратная HTML таблица. В такой таблице есть две диагонали. Назовем главной диагональ, идущую от верхнего левого угла к нижнему правому. 
// // Сделайте так, чтобы по клику на любую ячейку главной диагонали эта ячейка красилась в красный цвет фона, а по клику любую другую ячейку - она красилась в зеленый.

// let table   = document.getElementById('table');
// let trs     = table.querySelectorAll('tr');
// let k       = 0;

// for(let tr of trs){
//     let td      = tr.querySelectorAll('td');
//     k++;
    
//     for(let i = 0; i < td.length; i++){
//         td[i].dataset.col   = (i + 1);
//         td[i].dataset.row   = k;
//     }
// }

// let tds     = document.querySelectorAll('#table td');

// for(let td of tds){
//     td.addEventListener('click', function(){
//         let checkCol    = this.dataset.col;
//         let checkRow    = this.dataset.row;
//         if( (checkCol == 1 && checkRow == 1) || (checkCol == 2 && checkRow == 2) || (checkCol == 3 && checkRow == 3) ){
//             this.classList.add('active');
//         }else{
//             this.classList.add('active2');
//         }
//     });
// }














// // Поиск ячеек таблицы через селектор CSS на JavaScript
// // Задача №1
// // Найдите все ячейки третьего столбца и покрасьте их в красный фон.

// let tds     = document.querySelectorAll('#table td:nth-child(3)');

// for(let td of tds){
//     td.style.backgroundColor    = 'red';
// }




// // Задача №2
// // Найдите третью ячейку первого ряда и покрасьте ее в красный фон.

// let td  = document.querySelector('#table tr:nth-child(1) td:nth-child(3)');
// td.style.backgroundColor    = 'red';




// Задача №3
// Найдите все четные ряды и покрасьте в них все нечетные ячейки.

let tds      = document.querySelectorAll('#table tr:nth-child(even) td:nth-child(odd)');

for(let td of tds){
    td.classList.add('active');
}