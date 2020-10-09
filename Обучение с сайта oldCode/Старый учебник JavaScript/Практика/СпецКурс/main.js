// Лекция №1
// Комбинации функций
// 1. Проверить, являются ли пары чисел дружественными друг другу или нет? 
// Это когда есть два числа и сумма делителей этих чисел если равняется другому числу, то такая пара является дружественной парой чисел.

// // Вот пример дружественных чисел:
// // 220 284
// // 220: 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110 = 284
// // 284: 1, 2, 4, 71, 142 = 220

// console.log(friendlyNumbers(220, 284));
// function friendlyNumbers(num1, num2){
//     return num1 == getSum(getDividers(num2)) && num2 == getSum(getDividers(num1));
// };

// function getDividers(num){
//     let arr = [];

//     for(let i = 1; i < num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// function getSum(arr){
//     let sum = 0;

//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// };




// // Практика
// // 2. Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, 
// // которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой

// let deff = 'привет, меня зовут путин и я президент!';

// function ucfirst(str){
//     let arr = str.split(' ');
//     let newStr = [];

//     for(let i = 0; i < arr.length; i++){
//         newStr.push(arr[i][0].toUpperCase() + arr[i].substr(1));
//     }

//     return newStr.join(' ');
// };
// console.log(ucfirst(deff));




// // 3. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'

// let deff    = 'var_text_hello';

// function alterText(str){
//     let arr = str.split('_');
//     let newStr = arr[0];

//     for(let i = 1; i < arr.length; i++){
//         newStr += arr[i][0].toUpperCase() + arr[i].substr(1);
//     }
//     return newStr;
// };
// console.log(alterText(deff));




// // 4. Сделайте функцию isSimple, которая параметром будет принимать целое число и возвращать true, если число простое и false - если не простое. 
// // Простое число - это такое число, которое не делится ни на какое другое, кроме кроме себя самого и единицы. Например, число 31 - простое. 
// // То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30

// console.log(isSimple(20));
// function isSimple(num){
//     return getDividers(num).length == 2;
// };

// function getDividers(num){
//     let arr = [];
//     for(let i = 0; i <= num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// };




// // 5. С помощью функцию isSimple из предыдущей задачи выведите на экран все простые числа из промежутка от 1 до 100

// console.log(getSimpleNumbersFromInterval(1, 100));
// function getSimpleNumbersFromInterval(from, to){
//     let arr = [];
//     for(let i = from; i <= to; i++){
//         if(isSimple(i)){
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// function isSimple(num){
//     return getDividers(num).length == 2;
// };

// function getDividers(num){
//     let arr = [];
//     for(let i = 0; i <= num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// };




// // 6. Сделайте функцию, которая возвращает множественное или единственное число существительного. Пример: 1 яблоко, 2 (3, 4) яблока, 5 яблок. 
// // Функция первым параметром принимает число, а следующие 3 параметра — форма для единственного числа, для чисел два, три, четыре и для чисел, больших четырех, например, func(3, 'яблоко', 'яблока', 'яблок')

// console.log(gettingPluralNoun(121, 'яблоко', 'яблока', 'яблок'));
// function gettingPluralNoun(num, singleNumber, pluralFrom2to4, pluralFrom1toMore){
//     if(num >= 10 && num <= 20){
//         return pluralFrom1toMore;
//     }

//     if(checkNum(num) == 1){
//         return singleNumber;
//     }

//     if(checkNum(num) >= 2 && checkNum(num) <= 4){
//         return pluralFrom2to4;
//     }

//     if(checkNum(num) >= 5 && checkNum(num) <= 10){
//         return pluralFrom1toMore;
//     }
// };

// function checkNum(num){
//     let newNum = String(num);
    
//     let arr         = newNum.split('');
//     let lastNumber;

//     if(arr.length > 1){
//         lastNumber = Number(arr[arr.length - 1]);
//     }else{
//         return Number(arr[0]);
//     }
//     return lastNumber;
// };




// // 7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число)

// function getDivisors(num){
//     let arr = [];
//     for(let i = 1; i <= num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// };
// console.log(getDivisors(10));




// // 8. Сделайте функцию getIntersect, которая параметром принимает два массива и возвращает массив элементов, которые есть в обоих массивах

// let arr1 = [1, 2, 4, 6];
// let arr2 = [3, 1, 5, 10, 6, 4];

// function getIntersect(arr1, arr2){
//     let newArr = [];

//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] == arr2[j]){
//                 newArr.push(arr2[j]);
//             }
//         }
//     }
//     return newArr;
// };
// console.log(getIntersect(arr1, arr2));














// // Лекция №2
// // Разминка
// // 1. Дан массив. Выведите его элементы в виде списка ul так, чтобы каждый элемент попал в свою li

// let arr = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5', 'Элемент6', 'Элемент7', 'Элемент8'];

// let ul  = document.createElement('ul');
// document.body.appendChild(ul);

// for(let i = 0; i < arr.length; i++){
//     let li = document.createElement('li');
//     li.innerHTML = arr[i];
//     ul.appendChild(li);
// }




// // 2. Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'

// let arr = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5', 'Элемент6', 'Элемент7', 'Элемент8'];

// let ul  = document.createElement('ul');
// document.body.appendChild(ul);

// for(let i = 0; i < arr.length; i++){
//     let li = document.createElement('li');
//     li.innerHTML = arr[i];
//     ul.appendChild(li);
// }

// ul.addEventListener('click', function(event){
//     let target = event.target;
//     target.innerHTML += '!';
// });




// // 3. Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'

// let arr = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5', 'Элемент6', 'Элемент7', 'Элемент8'];

// let ul  = document.createElement('ul');
// document.body.appendChild(ul);

// for(let i = 0; i < arr.length; i++){
//     let li = document.createElement('li');
//     li.innerHTML = arr[i];
//     ul.appendChild(li);
// }

// let arrLi = ul.children;

// for(let i = 0; i < arrLi.length; i++){
//     arrLi[i].addEventListener('click', addSymbol);

//     function addSymbol(){
//         this.innerHTML += '!';
//         arrLi[i].removeEventListener('click', addSymbol);
//     };
// }




// // Посложнее
// // 4. Дан абзац и инпут. Сделайте так, чтобы по заходу на страницу текст абзаца отображался в инпуте

// let p       = document.getElementsByTagName('p')[0];
// let input   = document.getElementsByTagName('input')[0];

// input.value = p.innerHTML;




// // 5. Модифицируйте предыдущую задачу так, чтобы можно было поредактировать содержимое инпута - и содержимое абзаца также поменялось

// let p       = document.getElementsByTagName('p')[0];
// let input   = document.getElementsByTagName('input')[0];

// input.value = p.innerHTML;

// input.addEventListener('change', function(){
//     p.innerHTML = input.value;
// });




// // 6. Дан абзац с текстом. Сделайте так, чтобы по клику на этот абзац рядом с ним появлялся инпут, с помощью которого можно будет поредактировать текст нашего абзаца. 
// // По потери фокуса инпут должен исчезнуть, а содержимое абзаца поменяться

// let p       = document.getElementsByTagName('p')[0];

// p.addEventListener('click', function(){
//     let input   = document.createElement('input');
//     input.value = p.innerHTML;
//     document.body.appendChild(input);

//     input.addEventListener('blur', function(){
//         p.innerHTML = input.value;
//         input.remove();
//     });
// });




// // 7. Модифицируйте предыдущую задачу так, чтобы инпут появлялся вместо абзаца, а не рядом с ним

// let p       = document.getElementsByTagName('p')[0];

// p.addEventListener('click', function(){
//     let input   = document.createElement('input');
//     input.value = p.innerHTML;
//     document.body.appendChild(input);
//     p.style.display = 'none';

//     input.addEventListener('blur', function(){
//         p.innerHTML = input.value;
//         input.remove();
//         p.style.display = 'block';
//     });
// });














// // Массивы
// // 8. Дан массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Выведите его элементы в виде таблицы table размером 3 на 3

// let arr     = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let table   = document.createElement('table');
// table.border = '1';
// document.body.appendChild(table);


// for(let i = 0; i < arr.length; i++){
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for(let j = 0; j < arr[i].length; j++){
//         let td = document.createElement('td');
//         td.innerHTML = arr[i][j];
//         tr.appendChild(td);
//     }
// }




// // 9. Дан массив [1, 2, 3, 4, 5, 6, 7, 8, 9]. Выведите его элементы в виде таблицы table размером 3 на 3

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let table   = document.createElement('table');
// table.border = '1';
// document.body.appendChild(table);

// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < arr.length; j++){
        
//     }
//     console.log(arr[i]);
// }

// let table = document.getElementsByTagName('table')[0];
// let table222 = table.getElementsByTagName('tbody')[0];

// console.log(table222.children);

// for(let i = 0; i < table222.children.length; i++){
//     table222.children[i].innerHTML = i;
// }
// ЗАДАЧА НЕ РЕШЕНА!














// // Таблицы
// // 10. Выведите на экран таблицу table размером 5 на 5 так, чтобы в ее ячейках последовательно стояли числа от 1 до 25

// let table   = document.createElement('table');
// table.border = '1';
// document.body.appendChild(table);

// for(let i = 1; i <= 5; i++){
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for(let j = 1; j <= 25; j++){

//     }
// }
// // ЗАДАЧА НЕ РЕШЕНА!














// // Объекты
// // 11. Дан следующий массив с работниками:

// let products = [
//     {name: 'Коля', age: 30},
//     {name: 'Вася', age: 31},
//     {name: 'Петя', age: 32}
// ];

// // Выведите на экран столбец имен в таком формате: 'Коля - возраст 30' и так далее для каждого работника

// for(let i = 0; i < products.length; i++){
//     document.write(products[i].name + ' - возраст ' + products[i].age + '<br>');
// }














// // Таймеры
// // 12. Дан абзац и кнопка. Сделайте так, чтобы по нажатию на кнопку в абзаце начал тикать таймер от 1 до бесконечности. 
// // Чтобы предотвратить повторное нажатие на кнопку она должна переходить в состояние disabled

// let p       = document.getElementsByTagName('p')[0];
// let button  = document.getElementsByTagName('button')[0];

// let t       = Number(p.innerHTML);
// console.log(t);

// button.addEventListener('click', function(){
//     setInterval(function(){
//         p.innerHTML = t + 1;
//         t++;
//     }, 1000);
//     button.setAttribute('disabled', '');
// });




// // 13. Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался

// let p       = document.getElementsByTagName('p')[0];
// let button1 = document.getElementsByTagName('button')[0];
// let button2 = document.getElementsByTagName('button')[1];

// let t       = Number(p.innerHTML);

// button1.addEventListener('click', function(){
//     let id = setInterval(function(){
//         p.innerHTML = t + 1;
//         t++;
//     }, 1000);
//     button1.setAttribute('disabled', '');
//     button2.addEventListener('click', function(){
//         clearTimeout(id);
//         button1.removeAttribute('disabled');
//     });
// });




// // 14. Дан абзац и кнопка. Изначально в абзаце написано какое-то число, например 10. 
// // Сделайте так, чтобы по нажатию на кнопку в абзаце начал тикать обратный отсчет. Как только он дойдет до нуля - он должен закончится и под ним должна вывестись фраза 'отсчет закончен'

// let p       = document.getElementsByTagName('p')[0];
// let button  = document.getElementsByTagName('button')[0];

// let t       = Number(p.innerHTML);

// button.addEventListener('click', function(){
//     let id = setInterval(function(){
//         p.innerHTML = t - 1;
//         t--;
//         if(Number(p.innerHTML) == 0){
//             clearInterval(id);
//             let newP        = document.createElement('p');
//             newP.innerHTML  = 'отсчет закончен';
//             p.appendChild(newP);
//         }
//     }, 1000);
// });














// // Лекция №3
// // Работа с функциями
// // 1. Сделайте функцию setText, которая будет принимать id элемента и текст. Пусть эта функция устанавливает новый текст для элемента с этим id. Пример: пусть у нас даны два абзаца.
// // Давайте первому элементу установим текст 'первый', а второму - 'второй':

// let elem1 = getSelector('elem1');
// setText(elem1, 'первый');

// let elem2 = getSelector('elem2');
// setText(elem2, 'второй');

// function setText(elem, text){
//     elem.innerHTML  = text;
// };

// function getSelector(selector){
//     return document.getElementById(selector);
// };




// // Работа с функциями и DOM
// // 2. Сделайте функцию addText, которая первым параметром будет принимать текст, а вторым - DOM элемент. 
// // Сделайте так, чтобы данная функция добавляла текст в конец этого элемента. Пример: дан следующий элемент

// function addText(text, elem){
//     elem.innerHTML += text;
// };

// let elem    = document.getElementById('elem');
// addText('!', elem);




// // 3. Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции addText, сделанной в предыдущей задаче

// let p       = document.querySelectorAll('p');

// function addText(text, elem){
//     elem.innerHTML += text;
// };

// for(let i = 0; i < p.length; i++){
//     addText('!', p[i]);
// }









// // Работа с функциями и DOM
// // 4. Дан массив. Выведите его элементы в виде списка ul

// let arr = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];

// let ul = document.createElement('ul');
// document.body.appendChild(ul);

// function addElemsArr(arr, elem){
//     for(let i = 0; i < arr.length; i++){
//         let li = document.createElement('li');
//         li.innerHTML = arr[i];
//         elem.appendChild(li);
//     }
// };
// addElemsArr(arr, ul);




// // 5. Сделайте функцию appendElem, которая первым параметром будет принимать текст, а вторым - ссылку DOM объект, в котором лежит тег ul. 
// // Сделайте так, чтобы данная функция добавляла текст в конец этого элемента. Пример: дан следующий элемент

// let ul = document.getElementById('elem');

// function appendElem(text, domElem){
//     let li = document.createElement('li');
//     li.innerHTML = text;
//     domElem.appendChild(li);
// };
// appendElem('1', ul);
// appendElem('2', ul);
// appendElem('3', ul);




// // 6. Дан массив и ul. С помощью функции appendElem, сделанной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul

// let ul  = document.getElementById('elem');
// let arr = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];

// for(let i = 0; i < arr.length; i++){
//     appendElem(arr[i], ul);
// }

// function appendElem(text, domElem){
//     let li = document.createElement('li');
//     li.innerHTML = text;
//     domElem.appendChild(li);
// };














// // Лекция №4
// // 1. Дан абзац. Сделайте так, чтобы по клику на него его текст становился в инпуте, с помощью которого можно будет поредактировать текст этого абзаца. 
// // По потери фокуса инпут должен исчезать, а в абзаце оставаться новый текст

// let elem        = document.getElementById('elem');

// elem.addEventListener('click', function(){
//     let input   = document.createElement('input');
//     input.value = elem.innerHTML;
//     document.body.appendChild(input);
//     elem.style.display = 'none';

//     input.addEventListener('blur', function(){
//         elem.innerHTML = input.value;
//         input.remove();
//         elem.style.display = 'block';
//     });
// });




// // 2. Дан массив. Выведите его элементы в виде списка ul

// let arr = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];
// let ul  = document.createElement('ul');
// document.body.appendChild(ul);

// function getElemsFromArr(elem, arr){
//     for(let i = 0; i < arr.length; i++){
//         let li = document.createElement('li');
//         li.innerHTML = arr[i];
//         elem.appendChild(li);
//     }
// };
// getElemsFromArr(ul, arr);




// // 3. Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать

// let arr     = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];
// let ul      = document.getElementById('ul');
// let items   = addElems(ul, arr);

// for(let i = 0; i < items.length; i++){
//     changeElem(items[i]);
// }

// function changeElem(elem){
//     elem.addEventListener('click', function edit(){
//         let text = this.innerHTML;
//         this.innerHTML = '';

//         let input   = document.createElement('input');
//         input.value = text;
//         this.appendChild(input);
//         this.removeEventListener('click', edit);

//         let self = this;
//         input.addEventListener('blur', function(){
//             self.innerHTML = input.value;
//             self.addEventListener('click', edit);
//         });
//     });
// };

// function addElems(elem, arr){
//     let items = [];
//     for(let i = 0; i < arr.length; i++){
//         let li = document.createElement('li');
//         li.innerHTML = arr[i];
//         elem.appendChild(li);

//         items.push(li);
//     }
//     return items;
// };




// // 4. Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul

// let arr     = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];
// let ul      = document.getElementById('ul');
// let input   = document.getElementById('addElem');

// input.addEventListener('blur', function(){
//     addNewLi(ul, input.value);
//     input.value = '';
// });

// let items   = addNewElemsForUl(ul, arr);
// for(let i = 0; i < items.length; i++){
//     addCorrectionElems(items[i]);
// }

// function addNewLi(ul, text){
//     let li = document.createElement('li');
//         li.innerHTML = text;
//         ul.appendChild(li);

//     return li;
// };

// function addCorrectionElems(elem){
//     elem.addEventListener('click', function edit(){
//         let text = this.innerHTML;
//         this.innerHTML = '';

//         let input = document.createElement('input');
//         input.value = text;
//         this.appendChild(input);
//         this.removeEventListener('click', edit);

//         let self = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML = input.value;
//             self.addEventListener('click', edit);
//         });
//     });
// };

// function addNewElemsForUl(elem, arr){
//     let items = [];
//     for(let i = 0; i < arr.length; i++){
//         let li = addNewLi(elem, arr[i]);
//         items.push(li);
//     }
//     return items;
// }




// // 5. После того, как вы повторите мой код, на его базе сделайте так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul

// let arr     = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];
// let ul      = document.getElementById('ul');
// let addElem = document.getElementById('addElem');
// let items   = addLiForArrAndGetLi(ul, arr);

// function addLi(ul, text){
//     let li = document.createElement('li');
//     li.innerHTML = text;
//     ul.appendChild(li);

//     return li;
// };

// function addEventForAllLiFromArr(arr){
//     for(let i = 0; i < arr.length; i++){
//         addEventForElem(arr[i]);
//     }
// };
// addEventForAllLiFromArr(items);

// function addEventForElem(elem){
//     elem.addEventListener('click', function edit(){
//         let text = this.innerHTML;
//         this.innerHTML = '';

//         let input   = document.createElement('input');
//         input.value = text;
//         this.appendChild(input);
//         this.removeEventListener('click', edit);

//         let self = this;
//         input.addEventListener('blur', function(){
//             self.innerHTML = input.value;
//             self.addEventListener('click', edit);
//         });
//     });
// };


// function addLiForArrAndGetLi(elem, arr){
//     let items   = [];
//     for(let i = 0; i < arr.length; i++){
//         let li = addLi(elem, arr[i]);
//         items.push(li);
//     }
//     return items;
// };

// addElem.addEventListener('blur', function(){
//     let li = addLi(ul, addElem.value);
//     addEventForElem(li);
//     let buttonsFromInput = addLinksOnLi(li);
    
//     removeElems(buttonsFromInput);
// });



// function addLinksOnLi(elem){
//     let btn    = document.createElement('button');
//     btn.innerHTML = 'Удалить';
//     elem.after(btn);

//     return btn;
// };

// function returnButtonForGetEvent(arr){
//     let buttons = [];
//     for(let i = 0; i < arr.length; i++){
//         buttons.push(addLinksOnLi(arr[i]));
//     }
//     return buttons;
// };
// let buttons = returnButtonForGetEvent(items);

// function removeElems(elem){
//     elem.addEventListener('click', function(){
//         elem.previousElementSibling.remove();
//         elem.remove();
//     });
// };

// for(let i = 0; i < buttons.length; i++){
//     removeElems(buttons[i]);
// }














// // Лекция №5
// // 1. Дана таблица. В ней мы будем отображать купленные продукты. 
// // Каждый ряд таблицы - это один продукт, а именно: название продукта, его цена, количество и уплаченная сумма, которая равна цене умноженной на количество. Пусть продукты хранятся в виде объекта вида:
// let products = [
// 	{name: 'product1', price: 100, quantity: 4},
// 	{name: 'product2', price: 200, quantity: 5},
// 	{name: 'product3', price: 300, quantity: 6},
// ];
// // Итак, выведите эти продукты в виде таблицы, в отдельной колонке рассчитав сумму. Под таблицей выведите полную стоимость всех продуктов

// let table       = document.getElementById('table');
// let total       = document.getElementById('total');

// createTableForProducts(table, products);
// setText(total, getSumForProducts(products));

// function setText(select, text){
//     select.innerHTML = text;
// };

// function createTableForProducts(select, arr){
//     for(let i = 0; i < arr.length; i++){
//         let tr  = document.createElement('tr');
    
//         addTdForTr(tr, arr[i]['name']);
//         addTdForTr(tr, arr[i]['price']);
//         addTdForTr(tr, arr[i]['quantity']);
//         addTdForTr(tr, arr[i]['price'] * arr[i]['quantity']);
    
//         select.appendChild(tr);
//     }
// };

// function addTdForTr(select, text){
//     let td          = document.createElement('td');
//     td.innerHTML    = text;
//     select.appendChild(td);
// };

// function getSumForProducts(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += products[i]['price'] * products[i]['quantity'];
//     }
//     return sum;
// };




// // 2. Модифицируйте предыдущую задачу: пусть теперь таблица изначально пуста, зато под ней есть 3 инпута, в которые можно ввести название продукта, цену и количество, 
// // затем нажать на кнопку - и этот продукт добавится в таблицу. 
// // Отдельная колонка полной стоимости продукта также должна рассчитываться, как и полная стоимость всех добавленных продуктов

// let table           = document.getElementById('table');

// let inputName       = document.getElementById('name');
// let inputPrice      = document.getElementById('price');
// let inputQuantity   = document.getElementById('quantity');
// let button          = document.getElementById('button');

// let total           = document.getElementById('total');

// initTable(button, inputName, inputPrice, inputQuantity, total, table);

// function createTable(select, products){
//         let tr  = document.createElement('tr');
    
//         addTrForTable(tr, products['name']);
//         addTrForTable(tr, products['price']);
//         addTrForTable(tr, products['quantity']);
//         addTrForTable(tr, products['price'] * products['quantity'], 'cost');
    
//         select.appendChild(tr);
// };

// function initTable(button, name, price, quantity, total, table){
//     button.addEventListener('click', function(){
//         createTable(table, {
//             name: name.value,
//             price: price.value,
//             quantity: quantity.value
//         });
//         setText(total, getTotalSumFromProducts(table));
//     });
// };

// function addTrForTable(select, text, className){
//     let td  = document.createElement('td');
//     td.innerHTML    = text;
//     select.appendChild(td);

//     if(className != undefined){
//         td.classList.add(className);
//     }
// };

// function getTotalSumFromProducts(select){
//     let tds     = select.querySelectorAll('.cost');
//     let sum = 0;
//     for(let i = 0; i < tds.length; i++){
//         sum += Number(tds[i].innerHTML);
//     }
//     return sum;
// };


// function setText(select, text){
//     select.innerHTML = text;
// };




// // 3. Модифицируйте предыдущую задачу: сделайте также колонку со ссылкой 'удалить', по нажатию на которую будет удаляться соответствующий продукт

// let table           = document.getElementById('table');

// let inputName       = document.getElementById('name');
// let inputPrice      = document.getElementById('price');
// let inputQuantity   = document.getElementById('quantity');
// let button          = document.getElementById('button');

// let total           = document.getElementById('total');

// initTable(button, inputName, inputPrice, inputQuantity, total, table);

// function cteateTableFromInput(select, product){
//     let tr  = document.createElement('tr');

//     addTrForTable(tr, product['name']);
//     addTrForTable(tr, product['price']);
//     addTrForTable(tr, product['quantity']);
//     addTrForTable(tr, product['price'] * product['quantity'], 'cost');
//     deleteTdFromTable(tr, 'Удалить');

//     select.appendChild(tr);
// };

// function addTrForTable(select, text, className){
//     let td      = document.createElement('td');
//     td.innerHTML    = text;
//     select.appendChild(td);

//     if(className != undefined){
//         td.classList.add(className);
//     }
// };

// function deleteTdFromTable(tr, text){
//     let td  = document.createElement('td');

//     let del = document.createElement('a');
//     del.innerHTML   = text;
//     del.href        = '#'
//     td.appendChild(del);

//     tr.appendChild(td);

//     del.addEventListener('click', function(){
//         table.removeChild(tr);
//         setText(total, getSumFromTable(table));
//     });
// };

// function getSumFromTable(select){
//     let tds = select.querySelectorAll('.cost');
//     let sum = 0;
//     for(let i = 0; i < tds.length; i++){
//         sum += Number(tds[i].innerHTML);
//     }
//     return sum;
// };

// function setText(select, text){
//     select.innerHTML = text;
// };

// function initTable(button, name, price, quantity, total, table){
//     button.addEventListener('click', function(){
//         cteateTableFromInput(table, {
//             name: name.value,
//             price: price.value,
//             quantity: quantity.value
//         });
//         setText(total, getSumFromTable(table));
//         name.value      = '';
//         price.value     = '';
//         quantity.value  = '';
//     });
// };




// // 4. Модифицируйте предыдущую задачу: сделайте так, чтобы по нажатию на любую ячейку в ней появлялся инпут, с помощью которого эту ячейку можно будет поредактировать

// let table           = document.getElementById('table');

// let inputName       = document.getElementById('name');
// let inputPrice      = document.getElementById('price');
// let inputQuantity   = document.getElementById('quantity');
// let button          = document.getElementById('button');

// let total           = document.getElementById('total');

// button.addEventListener('click', function(){
//     addTrForTable(table, {
//         name:       inputName.value,
//         price:      inputPrice.value,
//         quantity:   inputQuantity.value
//     });
//     inputName.value     = '';
//     inputPrice.value     = '';
//     inputQuantity.value     = '';

//     setText(total, calculateSum(table));
// });

// function addTrForTable(select, product){
//     let tr          = document.createElement('tr');

//     addTdForTr(tr, product['name'], true, 'name');
//     addTdForTr(tr, product['price'], true, 'price');
//     addTdForTr(tr, product['quantity'], true, 'quantity');
//     addTdForTr(tr, product['price'] * product['quantity'], false, 'cost');
//     addLinkForDeleteTr(tr, 'Удалить');

//     select.appendChild(tr);
// };

// function addTdForTr(select, text, chack, className){
//     let td          = document.createElement('td');
//     td.innerHTML    = text;
//     select.appendChild(td);

//     if(chack){
//         setEventForElem(td);
//     }

//     if(className != undefined){
//         td.classList.add(className);
//     }
// };



// function addLinkForDeleteTr(select, text){
//     let td          = document.createElement('td');

//     let del         = document.createElement('a');
//     del.innerHTML   = text;
//     del.href        = '#';
//     td.appendChild(del);

//     select.appendChild(td);

//     del.addEventListener('click', function(){
//         table.removeChild(select);
//         setText(total, calculateSum(table));
//     });
// };



// function calculateSum(select){
//     let costs   = select.querySelectorAll('.cost');
//     let sum     = 0;
//     for(let i = 0; i < costs.length; i++){
//         sum += Number(costs[i].innerHTML);
//     }
//     return sum;
// };



// function setEventForElem(td){
//     td.addEventListener('click', function edit(){
//         let text        = this.innerHTML;
//         this.innerHTML  = '';

//         let input       = document.createElement('input');
//         input.value     = text;
//         this.appendChild(input);
//         this.removeEventListener('click', edit);

//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', edit);

//             recalculate(td);
//         });
//     });
// };

// function recalculate(td){
//     let tr = td.parentElement;
//     let price       = Number(tr.querySelector('.price').innerHTML);
//     let quantity    = Number(tr.querySelector('.quantity').innerHTML);

//     tr.querySelector('.cost').innerHTML = price * quantity;

//     setText(total, calculateSum(table));
// };




// function setText(select, text){
//     select.innerHTML = text;
// };














// // Лекция №6
// // Экранная клавиатура
// // 1. Реализуйте экранную клавиатуру. На ней должны быть кнопочки со всеми символами клавиатуры компьютера. Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре. 
// // Пусть эта экранная клавиатура будет привязана к какому-нибудь инпуту, то есть кликая по ней, мы будем вводить данные в этот инпут

// let result      = document.getElementById('result');
// let buttons     = document.querySelectorAll('.key');
// let space       = document.querySelector('.row .space');

// let capsLock    = false;
// let shift       = false;

// for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', function(){
//         let key     = buttons[i].firstChild;
//         let static  = result.value;

//         if(key.innerHTML == 'Backspace' || key.innerHTML == 'Tab' || key.innerHTML == 'Caps Lock' || key.innerHTML == 'Shift' || key == null){
//             if(key.innerHTML == 'Backspace'){
//                 let str = static;
//                 result.value = str.substr(0, str.length - 1);
//             }

//             if(key.innerHTML == 'Tab'){
//                 result.value = static + '   ';
//             }

//             if(capsLock){
//                 this.style.color = 'black';
//                 capsLock = false;
//             }else{
//                 this.style.color = 'red';
//                 capsLock = true;
//             }

//             if(shift){
//                 this.style.color = 'black';
//                 shift = false;
//             }else{
//                 this.style.color = 'red';
//                 shift = true;
//             }

//             if(key == null){
//                 key = space;
//                 result.value = static + ' ';
//             }
//         }else{
//             if(capsLock){
//                 result.value    = static + key.innerHTML.toUpperCase();
//             }
//             // if(shift){
//             //     result.value    = static + key.nextSibling.innerHTML;
//             // }
//         }
//     });
// }



// // 2.  Разберите функцию eval
// let code = "let a=10; let b=20; document.write(a+b)";
// eval(code);




// // 3. Дана строка '3+5+6'. С помощью функции eval получите результат сложения чисел из этой строки

// let str = '3+5+6';
// console.log(eval(str));




// // 4. Реализуйте калькулятор. Как он будет работать: у вас будет инпут, а под ним кнопочки с цифрами и знаками операций. 
// // Когда вы будете жать на эти кнопочки, данные будут попадать в инпут. Затем, когда вы нажмете на кнопку '=', вы должны получить результат операций в этом же инпуте

// let display     = document.getElementById('display');
// let button      = document.getElementsByClassName('button');

// for(let i = 0; i < button.length; i++){
//     button[i].addEventListener('click', function(){
//         let key = button[i].getAttribute('data-type');
        
//         if(key == '='){
//             let sum         = display.value;
//             let result      = eval(sum);
//             display.value   = result;
//         }else if(key == 'C'){
//             display.value   = '';
//         }else{
//             display.value   += key;
//         }
//     });
// }














// // Лекция №7
// // 1. С помощью цикла сделайте на экране таблицу table, размером 3 на 3 с пустыми td-шками. Добавьте средствами CSS этим td-шкам границу, а также ширину и высоту 50px

// let table   = document.createElement('table');
// document.body.appendChild(table);

// for(let i = 1; i <= 3; i++){
//     let tr  = document.createElement('tr');
//     for(let j = 1; j <= 3; j++){
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }




// // 2. Модифицируйте предыдущую задачу так, чтобы по нажатию на любую td-шку в ней появлялось число 1

// let table   = document.createElement('table');
// document.body.appendChild(table);

// for(let i = 1; i <= 3; i++){
//     let tr  = document.createElement('tr');
//     for(let j = 1; j <= 3; j++){
//         let td = document.createElement('td');

//         td.addEventListener('click', function(){
//             td.innerHTML = 1;
//         });
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }




// // 3. Модифицируйте предыдущую задачу так, чтобы когда мы жмем на первую td-шку, в ней появлялось число 1, а когда ждем на следующую td-шку - то число 2. 
// // Потом опять число 1, и затем число 2 и так далее. При этом, если в td-шке уже есть число - новое число не должно вставляться

// function start(){
//     let table   = document.createElement('table');
//     document.body.appendChild(table);
    
//     function addTable(){
//         let tds = [];
//         for(let i = 1; i <= 3; i++){
//             let tr  = document.createElement('tr');
//             for(let j = 1; j <= 3; j++){
//                 let td = document.createElement('td');
//                 tr.appendChild(td);
//                 tds.push(td);
//             }
//             table.appendChild(tr);
//         }
//         return tds;
//     };
    
//     let tds = addTable();
//     let curr = 1;
//     for(let i = 0; i < tds.length; i++){
//         tds[i].addEventListener('click', function edit(){
//             if(curr == 1){
//                 curr = 2;
//                 this.innerHTML = 1;
//                 this.removeEventListener('click', edit);
//             }else{
//                 curr = 1;
//                 this.innerHTML = 2;
//                 this.removeEventListener('click', edit);
//             }
//         });
//     }
// };
// start();




// // 4. Реализуйте игру крестики-нолики

// startGame();
// function startGame(){
//     let cell        = document.getElementsByClassName('cell');
//     let message     = document.getElementById('message');
//     let restart     = document.getElementById('restart');
//     let win_x       = document.getElementById('win_x');
//     let win_0       = document.getElementById('win_0');
//     let win_draw    = document.getElementById('win_draw');
//     let del         = document.getElementById('delete');
    
//     let paused      = false;
//     let player      = 'X';
//     let moveCounter = 0;
//     let data        = [];
    
//     let wins        = {
//         'X':        0,
//         '0':        0,
//         'draw':     0
//     };
//     let winIndex    = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
    
//     for(let i = 0; i < cell.length; i++){
//         cell[i].addEventListener('click', function(){
//             if(!cell[i].innerHTML && !paused){
//                 cell[i].innerHTML = player;
//                 let id      = cell[i].getAttribute('data-id');
//                 data[id]    = player;
//                 moveCounter++;
    
//                 if(checkWin()){
//                     message.innerHTML = 'Выиграл: ' + player;
//                     paused      = true;
//                     wins[player]++;
//                 }else{
//                     changePlayer();
//                 }
    
//                 if(moveCounter >= 9){
//                     message.innerHTML = 'Ничья';
//                     paused      = true;
//                     moveCounter = 0;
//                     wins['draw']++;
//                 }
//                 updateStatistic();
//             }
//         });
//     }
    
//     function checkWin(){
//         for(let i = 0; i < winIndex.length; i++){
//             let id      = winIndex[i];
//             let check   = data[id[0]] &&
//                           data[id[0]] == data[id[1]] &&
//                           data[id[1]] == data[id[2]];
    
//             if(check){
//                 return true;
//             }
//         }
//         return false;
//     };
    
//     function changePlayer(){
//         if(player == 'X'){
//             player = '0';
//         }else{
//             player = 'X';
//         }
//         message.innerHTML = 'Ходит: ' + player;
//     };
    
//     function updateStatistic(){
//         win_x.innerHTML         = wins['X'];
//         win_0.innerHTML         = wins['0'];
//         win_draw.innerHTML      = wins['draw'];
//     };
    
    
//     restart.addEventListener('click', function(){
//         for(let i = 0; i < cell.length; i++){
//             cell[i].innerHTML = '';
//         }
//         paused      = false;
//         player      = 'X';
//         data        = [];
//         moveCounter = 0;
//         message.innerHTML = 'Ходит: ' + player;
//     });
    
    
//     del.addEventListener('click', function(){
//         for(let key in wins){
//             wins[key] = 0;
//         }
//         updateStatistic();
//     });
// };














// // Лекция №8
// // 1. Сделайте функцию range, которая параметрами будет принимать два целых числа и возвращать массив, заполненный целыми числами в этом промежутке. 
// // Например, range(1, 5) должно вернуть массив [1, 2, 3, 4, 5]

// function range(num1, num2){
//     let arr = [];
//     for(let i = num1; i <= num2; i++){
//         arr.push(i);
//     }
//     return arr;
// };
// console.log(range(1, 5));




// // 2. Сделайте функцию shuffle, которая параметром будет принимать массив, а возвращать этот массив, в котором элементы будут перемешаны в случайном порядке

// function range(num1, num2){
//     let arr = [];
//     for(let i = num1; i <= num2; i++){
//         arr.push(i);
//     }
//     return arr;
// };

// function shuffle(arr){
//     let result  = [];
//     let length  = arr.length;
//     for(let i = 0; i < length; i++){
//         let random  = getRandomIntInclusive(0, arr.length - 1);
//         let elem    = arr.splice(random, 1)[0];
//         result.push(elem);
//     }
//     return result;
// };
// console.log(shuffle(range(1, 10)));

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };




// // 3. Сделайте функцию createTable, которая параметром будет принимать массив и создавать таблицу table, заполненную элементами из этого массива

// function range(from, to){
//     let result = [];
//     for(let i = from; i <= to; i++){
//         result.push(i);
//     }
//     return result;
// };

// let mass = range(1, 6);

// function createTable(arr){
//     let table   = document.createElement('table');
//     document.body.appendChild(table);
//     let tr      = document.createElement('tr');
//     table.appendChild(tr);

//     for(let i = 0; i < arr.length; i++){
//         let td      = document.createElement('td');
//         td.innerHTML    = arr[i];
//         tr.appendChild(td);
//     }
// };
// createTable(mass);




// // 4. С помощью функции range сделайте массив, заполненный числами от 1 до 25. С помощью функции createTable создайте таблицу, заполненную элементами из этого массива

// function range(from, to){
//     let result  = [];
//     for(let i = from; i <= to; i++){
//         result.push(i);
//     }
//     return result;
// };

// function createTable(arr){
//     let table   = document.createElement('table');
//     document.body.appendChild(table);

//     let tr      = document.createElement('tr');
//     table.appendChild(tr);

//     for(let i = 0; i < arr.length; i++){
//         let td  = document.createElement('td');
//         td.innerHTML = arr[i];
//         tr.appendChild(td);
//     }
// };
// createTable(range(1, 25));




// // 5. Модифицируйте предыдущую задачу так, чтобы таблица заполнялась числами от 1 до 25 в случайном порядке. Для этого, после того, как вы сделаете массив функцией range, обработайте его функцией shuffle

// function range(from, to){
//     let result = [];
//     for(let i = from; i <= to; i++){
//         result.push(i);
//     }
//     return result;
// };

// function shuffle(arr){
//     let result  = [];
//     let length  = arr.length;
//     for(let i = 0; i < length; i++){
//         let random  = getRandomIntInclusive(0, arr.length - 1);
//         let elem    = arr.splice(random, 1)[0];
//         result.push(elem);
//     }
//     return result;
// };

// function createTable(arr){
//     let table   = document.createElement('table');
//     document.body.appendChild(table);

//     let tr      = document.createElement('tr');
//     table.appendChild(tr);

//     for(let i = 0; i < arr.length; i++){
//         let td  = document.createElement('td');
//         td.innerHTML = arr[i];
//         tr.appendChild(td);
//     }
// };
// createTable(shuffle(range(1, 25)));

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };




// // 6. Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку она активировалась - это значит становилась красного фона

// function range(from, to){
//     let result = [];
//     for(let i = from; i <= to; i++){
//         result.push(i);
//     }
//     return result;
// };

// function shuffle(arr){
//     let result  = [];
//     let length  = arr.length;
//     for(let i = 0; i < length; i++){
//         let random  = getRandomIntInclusive(0, arr.length - 1);
//         let elem    = arr.splice(random, 1)[0];
//         result.push(elem);
//     }
//     return result;
// };

// function createTable(arr){
//     let result = [];
//     let table   = document.createElement('table');
//     document.body.appendChild(table);

//     let tr      = document.createElement('tr');
//     table.appendChild(tr);

//     for(let i = 0; i < arr.length; i++){
//         let td  = document.createElement('td');
//         td.innerHTML = arr[i];
//         tr.appendChild(td);
//         result.push(td);
//     }
//     return result;
// };

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// let tds  = createTable(shuffle(range(1, 25)));

// function addEventForTdBackgroundColor(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i].addEventListener('click', function(){
//             this.style.backgroundColor  = 'red';
//         });
//     }
// };
// addEventForTdBackgroundColor(tds);














// // Лекция №9
// // 1. Дан абзац и кнопка. Пусть по умолчанию этот абзац скрыт. Сделайте так, чтобы по нажатию на кнопку абзац показался на экране

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     elem.style.display  = 'block';
// });




// // 2. Модифицируйте предыдущую задачу так, чтобы по первому нажатию абзац показывался на экране, а по второму - скрывался

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     let check   = elem.style.display;
//     if(check == ''){
//         elem.style.display  = 'block';
//     }else if(check == 'none'){
//         elem.style.display  = 'block';
//     }else{
//         elem.style.display  = 'none';
//     }
// });




// // 3. Сделайте функцию hideElem, которая параметром будет принимать id элемента и скрывать этот элемент

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('btn');

// function hideElem(id, btn){
//     btn.addEventListener('click', function(){
//         let check   = id.style.display;
//         if(check == ''){
//             id.style.display  = 'block';
//         }else if(check == 'none'){
//             id.style.display  = 'block';
//         }else{
//             id.style.display  = 'none';
//         }
//     });
// };
// hideElem(elem, btn);




// // 4. Даны абзацы. У каждого абзаца свой уникальный id. Даны также инпут и кнопка. В инпут вводится id какого-либо абзаца и делается клик на кнопку. 
// // С помощью функции hideElem из предыдущей задачи сделайте так, чтобы абзац с таким id исчез с экрана

// let input   = document.getElementById('input');
// let btn     = document.getElementById('btn');

// function hideElem(id){
//     let elem    = document.getElementById(id);
//     elem.style.display  = 'none';
// };

// btn.addEventListener('click', function(){
//     hideElem(input.value);
// });




// // 5. Даны абзацы со своим уникальным id. К каждому абзацу привязана кнопка. По умолчанию абзацы видны на экране. Сделайте так, чтобы по нажатию на любую кнопку, скрывался привязанный к ней абзац

// let btn     = document.getElementsByTagName('button');

// for(let i = 0; i < btn.length; i++){
//     btn[i].addEventListener('click', function(event){
//         let target = event.target;
        
//         target.parentElement.style.display = 'none';
//     });
// }














// // Лекция №10
// // 1. Дан массив. Выведите его элементы в виде списка ul

// let mass = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4', 'Элемент 5', 'Элемент 6', 'Элемент 7', 'Элемент 8'];

// function creatList(arr){
//     let ul  = document.createElement('ul');
//     document.body.appendChild(ul);

//     for(let i = 0; i < arr.length; i++){
//         let li  = document.createElement('li');
//         li.innerHTML = arr[i];
//         ul.appendChild(li);
//     }
// };
// creatList(mass);




// // 2. Дан массив с юзерами

// let products = [
// 	{name: 'Коля', age: 30},
// 	{name: 'Вася', age: 40},
// 	{name: 'Петя', age: 50}
// ];




// // 3. Выведите его элементы в виде списка ul. В каждой li будет имя и возраст юзера

// let products = [
// 	{name: 'Коля', age: 30},
// 	{name: 'Вася', age: 40},
// 	{name: 'Петя', age: 50}
// ];

// function createList(arr){
//     let ul = document.createElement('ul');
//     document.body.appendChild(ul);
    
//     for(let i = 0; i < arr.length; i++){
//         let li  = document.createElement('li');
//         li.innerHTML = arr[i]['name'] + ' - ' + arr[i]['age'];
//         ul.appendChild(li);
//     }
// };
// createList(products);




// // 4. Модифицируйте предыдущую задачу так, чтобы в конце каждой li появилась ссылка 'редактировать'. 
// // По нажатию на эту ссылку под ul должны появится кнопка и два инпута, в которых будет имя и возраст пользователя. По нажатию на кнопку данные должны поредактироваться, а инпуты и кнопка спрятаться

// let products = [
// 	{name: 'Коля', age: 30},
// 	{name: 'Вася', age: 40},
// 	{name: 'Петя', age: 50}
// ];

// function createList(arr){
//     let ul = document.createElement('ul');
//     document.body.appendChild(ul);
//     let links   = [];
    
//     for(let i = 0; i < arr.length; i++){
//         let li  = document.createElement('li');
//         li.innerHTML = arr[i]['name'] + ' - ' + arr[i]['age'];
//         ul.appendChild(li);

//         let link = document.createElement('a');
//         link.href = '#';
//         link.innerHTML = ' Редактировать';
//         li.appendChild(link);
//         links.push(link);
//     }
//     return links;
// };
// let links   = createList(products);

// function createLinksForCorrectionProducts(links){
//     for(let i = 0; i < links.length; i++){
//         links[i].addEventListener('click', function(){
//             let button          = document.createElement('button');
//             button.innerHTML    = 'Сохранить изменения!';
//             document.body.appendChild(button);
    
//             let inputName   = getInput(document.body, 'Имя');
//             let inputAge    = getInput(document.body, 'Возраст');
    
//             let self        = this;
    
//             button.addEventListener('click', function(){
//                 let textName    = inputName.value;
//                 let ageName     = inputAge.value;
    
//                 if(textName == ''){
//                     self.parentElement.firstChild.textContent = 'Вы не задали имя!' + ' - ' + ageName;
//                 }else if(ageName == ''){
//                     self.parentElement.firstChild.textContent = textName + ' - ' + 'Вы не задали возраст!';
//                 }else{
//                     self.parentElement.firstChild.textContent = textName + ' - ' + ageName;
//                 }
//                 button.remove();
//                 inputName.remove();
//                 inputAge.remove();
//             });
//         });
//     }
// };
// createLinksForCorrectionProducts(links);

// function getInput(select, text){
//     let input           = document.createElement('input');
//     input.placeholder   = text;
//     select.appendChild(input);

//     return input;
// };




// // 5. Дан чекбокс и абзац. Сделайте так, что если чекбокс отмечен - абзац есть на экране, а если не отмечен - то абзаца нет

// let check       = document.getElementById('check');
// let elem        = document.getElementById('elem');

// check.addEventListener('change', function(){
//     if(check.checked == false){
//         elem.style.display = 'none';
//     }else{
//         elem.style.display = 'block';
//     }
// });




// // 6. Дан массив, заполненный значениями true и false. Выведите на экран столько чекбоксов, сколько элементов в массиве. 
// // Причем, если значение элемента равно true - пусть чекбокс будет отмечен, а если false - не отмечен

// let arr = [true, false, false, true, false, true, true, false];

// for(let i = 0; i < arr.length; i++){
//     let input   = document.createElement('input');
//     input.type  = 'checkbox';
//     input.value = arr[i];
//     document.body.appendChild(input);

//     if(arr[i] == true){
//         input.checked = true;
//     }else{
//         input.checked = false;
//     }
// }




// 7. Дан массив с юзерами

// let products = [
// 	{name: 'Коля', active: true},
// 	{name: 'Вася', active: true},
// 	{name: 'Петя', active: false},
// ];




// // 8. Выведите его элементы в виде списка ul. Если юзер активный (поле active равно true), выведите его зеленым цветом, а если не активный - красным

// let products = [
// 	{name: 'Коля', active: true},
// 	{name: 'Вася', active: true},
// 	{name: 'Петя', active: false},
// ];

// let ul  = document.createElement('ul');
// document.body.appendChild(ul);

// for(let i = 0; i < products.length; i++){
//     let li          = document.createElement('li');
//     li.innerHTML    = products[i]['name'];
//     ul.appendChild(li);

//     if(products[i]['active'] == true){
//         li.style.color = 'green';
//     }else{
//         li.style.color = 'red';
//     }
// }














// // Лекция №11
// // 1. Даны 5 инпутов и кнопка. В каждый инпут пользователь должен вбить правильное число. В каждом инпуте число, которое пользователь должен вбить в него, записано в атрибуте data-number. 
// // Сделайте так, чтобы по нажатию на кнопку инпуты проверили правильность ввода и, если число было введено правильно, покрасили свою границу в зеленый цвет, а если не правильно - в красный

// let correctionNumbers   = [1, 7, 23, 55, 100];
// let input       = document.getElementsByTagName('input');
// let btn         = document.getElementById('btn');

// for(let i = 0; i < input.length; i++){
//     input[i].setAttribute('data-number', correctionNumbers[i]);
//     console.log(input[i]);
// }

// btn.addEventListener('click', function(){
//     for(let i = 0; i < input.length; i++){
//         let check = input[i].getAttribute('data-number');
//         console.log(check);

//         if(check == input[i].value){
//             input[i].style.backgroundColor = 'green';
//         }else{
//             input[i].style.backgroundColor = 'red';
//         }
//     }
// });




// // 2. Пусть теперь дан массив чисел. Модифицируйте предыдущую задачу так, чтобы инпуты формировались в цикле, а содержимое их атрибута data-number бралось из массива

// let arr = [1, 3, 6, 11, 23, 100, 245, 777];

// function createInput(arr){
//     let items   = [];
//     for(let i = 0; i < arr.length; i++){
//         let input   = document.createElement('input');
//         input.setAttribute('data-number', arr[i]);
//         document.body.appendChild(input);
//         items.push(input);
//     }
//     return items;
// }
// let inputs  = createInput(arr);

// let btn = document.createElement('button');
// btn.innerHTML = 'Нажмите';
// document.body.appendChild(btn);

// btn.addEventListener('click', function(){
//     for(let i = 0; i < inputs.length; i++){
//         let check   = inputs[i].getAttribute('data-number');

//         if(check == inputs[i].value){
//             inputs[i].style.backgroundColor = 'green';
//         }else{
//             inputs[i].style.backgroundColor = 'red';
//         }
//     }
// });




// // 3. Даны 5 инпутов и кнопка. Над каждым инпутом написан вопрос, ответ на который должен дать пользователь. Правильный ответ хранится в каждом инпуте в атрибуте data-right-answer. 
// // Сделайте так, чтобы по нажатию на кнопку, все инпуты проверили правильность введенных ответов и каждый неправильный ответ выделили красным цветом и рядом написали правильный

// let input       = document.getElementsByTagName('input');
// let btn         = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     for(let i = 0; i < input.length; i++){
//         let checkAnswer     = input[i].getAttribute('data-right-answer');

//         if(checkAnswer == correctionAnsver(input[i])){
//             input[i].style.backgroundColor = 'green';
//         }else{
//             input[i].style.backgroundColor = 'red';

//             let correctAnswer   = document.createElement('span');
//             correctAnswer.innerHTML = input[i].getAttribute('data-right-answer');
//             input[i].after(correctAnswer);
//         }
//     }
// });

// function correctionAnsver(select){
//     let str = select.value;
//     let correct = str.toLowerCase();
    
//     return correct;
// };




// // 4. Даны 5 инпутов и кнопка. Пользователь вбивает данные в инпуты и нажимает на кнопку. По нажатию на кнопку сформируйте массив данных, вбитых пользователем

// let btn     = document.getElementById('btn');
// let inputs  = document.getElementsByTagName('input');

// function getArrFromAnswerPerson(elems){
//     let result  = [];
//     for(let i = 0; i < elems.length; i++){
//         result.push(elems[i].value);
//     }
//     return result;
// };

// btn.addEventListener('click', function(){
//     let answersPerson = getArrFromAnswerPerson(inputs);
// });




// // 5. Дан инпут и кнопка. Пользователь вбивает данные в инпут и нажимает на кнопку. После каждого нажатия инпут очищается, а его содержимое добавляется в массив. 
// // Таким образом мы получаем массив данных, которые пользователь вбивал по очереди в наш инпут

// let input       = document.getElementById('input');
// let btn         = document.getElementById('btn');

// let result = [];
// btn.addEventListener('click', function(){
//     result.push(input.value);
//     input.value = '';
// });




// // 6. Модифицируйте предыдущую задачу. Пусть пользователь вбивает в инпут числа. Сформируйте массив этих чисел. Сделайте еще одну кнопку, по нажатию на которую на экран выведется сумма введенных чисел

// let input                  = document.getElementById('input');
// let getInfoFromPerson      = document.getElementById('getArr');
// let getSum                 = document.getElementById('setSum');
// let sums                   = document.getElementById('containerSum');
// let mass                   = [];

// getInfoFromPerson.addEventListener('click', function(){
//     mass.push(Number(input.value));
//     input.value = '';
// });

// getSum.addEventListener('click', function(){
//     let sum = 0;
//     for(let i = 0; i < mass.length; i++){
//         sum += mass[i];
//     }
//     sums.innerHTML = sum;
//     mass.length = 0;
// });




// // 7. Дан массив со строками. Покажите пользователю первый элемент массива, а под ним сделайте ссылку, по нажатию на которую будет показываться следующий элемент массива. 
// // Как только все элементы закончатся - покажите сообщение об этом, а также заблокируйте кнопку

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('btn');
// let arr     = ['Строка1', 'Строка2', 'Строка3', 'Строка4', 'Строка5', 'Строка6', 'Строка7', 'Строка8'];

// elem.innerHTML = arr[0];

// let curr    = 0;
// btn.addEventListener('click', function(){
//     curr++;
//     elem.innerHTML = arr[curr];
//     if(curr == arr.length){
//         console.log('Все элементы кончились!');
//         btn.setAttribute('disabled', '');
//     }
// });




// // 8. Модифицируйте предыдущую задачу так, чтобы, когда все элементы будут показаны, показ начинался опять с первого элемента

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('btn');
// let arr     = ['Строка1', 'Строка2', 'Строка3', 'Строка4', 'Строка5', 'Строка6', 'Строка7', 'Строка8'];

// elem.innerHTML = arr[0];

// let curr    = 0;
// btn.addEventListener('click', function(){
//     curr++;
//     elem.innerHTML = arr[curr];
//     if(curr == arr.length){
//         elem.innerHTML = arr[0];
//         curr = 0;
//     }
// });




// // 9. Модифицируйте предыдущую задачу так, чтобы стало две кнопки: вперед и назад

// let elem    = document.getElementById('elem');
// let prev    = document.getElementById('prev');
// let next    = document.getElementById('next');
// let arr     = ['Строка1', 'Строка2', 'Строка3', 'Строка4', 'Строка5', 'Строка6', 'Строка7', 'Строка8'];

// elem.innerHTML = arr[0];

// let curr = 0;
// next.addEventListener('click', function(){
//     curr++;
//     elem.innerHTML = arr[curr];
//     if(curr == arr.length){
//         elem.innerHTML = arr[0];
//         curr = 0;
//     }
// });
// prev.addEventListener('click', function(){
//     curr--;
//     elem.innerHTML = arr[curr];
//     if(curr == -1){
//         elem.innerHTML = arr[arr.length - 1];
//         curr = arr.length - 1;

//     }
// });




// // 10. Модифицируйте предыдущую задачу так, чтобы кнопка назад была неактивной, если сейчас показывается первый элемент, а кнопка вперед была неактивной, если сейчас показывается последний элемент

// let elem    = document.getElementById('elem');
// let prev    = document.getElementById('prev');
// let next    = document.getElementById('next');
// let arr     = ['Строка1', 'Строка2', 'Строка3', 'Строка4', 'Строка5', 'Строка6', 'Строка7', 'Строка8'];

// elem.innerHTML = arr[0];

// let curr    = 0;
// prev.setAttribute('disabled', '');
// next.addEventListener('click', function(){
//     curr++;
//     elem.innerHTML = arr[curr];
//     prev.removeAttribute('disabled');
//     if(curr == arr.length - 1){
//         next.setAttribute('disabled', '');
//     }
// });

// prev.addEventListener('click', function(){
//     curr--;
//     elem.innerHTML = arr[curr];
//     next.removeAttribute('disabled');
//     if(curr == 0){
//         prev.setAttribute('disabled', '');
//     }
// });














// // Лекция №12
// // 1. Выведите на экран текущий день, месяц, год. Например, '31 января 2025 года'

// let date    = new Date();
// let month   = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
// document.write(date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года');




// // 2. Выведите на экран текущий день недели

// let days    = ['Воскресенье', 'Понедельник', 'Вторник', 'Среды', 'Четверг', 'Пятница', 'Суббота'];
// let date    = new Date();
// document.write(days[date.getDay()]);




// // 3. Выведите на экран последний день текущего месяца

// let nowDate = new Date();
// let month   = nowDate.getMonth();
// let date    = new Date(2020, month + 1, 0);
// document.write(date.getDate());




// // 4. Выведите на экран ul, заполненный числами от 1 до 31

// let ul  = document.createElement('ul');
// document.body.appendChild(ul);

// fillUlNumbersFromArr(createIntervalNumbers(1, 31));
// function fillUlNumbersFromArr(arr){
//     for(let i = 0; i < arr.length; i++){
//         let li  = document.createElement('li');
//         li.innerHTML = arr[i];
//         ul.appendChild(li);
//     }
// };

// function createIntervalNumbers(from, to){
//     let arr     = [];
//     for(let i = from; i <= to; i++){
//         arr.push(i);
//     }
//     return arr;
// };




// // 5. Выведите на экран ul, заполненный числами от 1 до последнего дня текущего месяца

// let nowDate = new Date();
// let month   = nowDate.getMonth();
// let date    = new Date(2020, month + 1, 0);
// let lastDay = date.getDate();

// let ul      = document.createElement('ul');
// document.body.appendChild(ul);

// for(let i = 1; i <= lastDay; i++){
//     let li  = document.createElement('li');
//     li.innerHTML = i;
//     ul.appendChild(li);
// }




// // 6. Модифицируйте предыдущую задачу так, чтобы номер текущего дня выделялся зеленым цветом

// let nowDate = new Date();
// let month   = nowDate.getMonth();
// let date    = new Date(2020, month + 1, 0);
// let lastDay = date.getDate();
// let nowDay  = nowDate.getDate();

// let ul      = document.createElement('ul');
// document.body.appendChild(ul);

// for(let i = 1; i <= lastDay; i++){
//     let li  = document.createElement('li');
//     li.innerHTML = i;
//     ul.appendChild(li);

//     if(i == nowDay){
//         li.style.color = 'green';
//     }
// }




// // 7. Модифицируйте предыдущую задачу так, чтобы все выходные дни выделялись красным цветом

// let nowDate = new Date();
// let month   = nowDate.getMonth();
// let date    = new Date(2020, month + 1, 0);
// let lastDay = date.getDate();
// let nowDay  = nowDate.getDate();
// let weeks   = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// let ul      = document.createElement('ul');
// document.body.appendChild(ul);

// for(let i = 1; i <= lastDay; i++){
//     let li  = document.createElement('li');
//     li.innerHTML = i;
//     ul.appendChild(li);

//     if(i == nowDay){
//         li.style.color = 'green';
//     }

//     let param = weeks[new Date(2020, month, i).getDay()];
//     if(param == 'Суббота' || param == 'Воскресенье'){
//         li.style.color = 'red';
//     }
// }




// // 8. Выведите на экран текущий месяц и год, например, 'январь 2025'. 
// // Под этой датой выведите стрелочку, по нажатию на которую месяц будет перематываться вперед. То есть первое нажатие выведет 'февраль 2025', второе 'март 2025' и так далее. 
// // Когда месяцы текущего года закончатся, необходимо увеличить год на единицу и продолжить дальше по аналогии

// let elem    = document.getElementById('elem');
// let next    = document.getElementById('next');
// let months  = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

// let nowYear     = 2020;
// let newMonth    = 0;
// let date        = new Date(nowYear, newMonth);
// let year        = date.getFullYear();
// let month       = date.getMonth();

// elem.innerHTML = months[newMonth] + ' ' + nowYear;

// next.addEventListener('click', function(){
//     newMonth++;
//     let date        = new Date(nowYear, newMonth);
//     let year        = date.getFullYear();
//     let month       = date.getMonth();

//     elem.innerHTML = months[month] + ' ' + year;
// });




// // 9. Модифицируйте предыдущую задачу так, чтобы появилась также стрелка, по нажатию на которую можно будет проматывать месяцы назад

// let elem    = document.getElementById('elem');
// let next    = document.getElementById('next');
// let prev    = document.getElementById('prev');
// let months  = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

// let nowYear     = 2020;
// let newMonth    = 0;
// let date        = new Date(nowYear, newMonth);
// let year        = date.getFullYear();
// let month       = date.getMonth();

// elem.innerHTML = months[newMonth] + ' ' + nowYear;

// next.addEventListener('click', function(){
//     newMonth++;
//     let date        = new Date(nowYear, newMonth);
//     let year        = date.getFullYear();
//     let month       = date.getMonth();

//     elem.innerHTML = months[month] + ' ' + year;
// });

// prev.addEventListener('click', function(){
//     newMonth--;
//     let date        = new Date(nowYear, newMonth);
//     let year        = date.getFullYear();
//     let month       = date.getMonth();

//     elem.innerHTML = months[month] + ' ' + year;
// });




// // 10. Реализуйте календарик следующего вида: показаны дни текущего месяца (в ряд), слева стрелка 'предыдущий месяц', справа ссылка 'следующий месяц'. 
// // Сверху показан год и месяц, который мы смотрим. Если мы смотрим текущий месяц текущего года - текущий день должен быть как-то выделен

// let prev        = document.getElementById('prev');
// let next        = document.getElementById('next');
// let dateElem    = document.getElementById('date');
// let calendar    = document.getElementById('calendar');
// let months      = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

// let currYear    = 2020;
// let currMonth   = new Date().getMonth();
// let date        = new Date(currYear, currMonth);
// let year        = date.getFullYear();
// let month       = date.getMonth();

// let firstDay    = new Date(currYear, currMonth, 1).getDate();
// let lastDay     = new Date(currYear, currMonth + 1, 0).getDate();

// dateElem.innerHTML = months[currMonth] + ' ' + currYear;

// let divs = createElement(firstDay, lastDay, 'day', calendar);

// getCorrectNowDay();

// next.addEventListener('click', function(){
//     removeElems('.day');

//     currMonth++;
//     let date        = new Date(currYear, currMonth);
//     let year        = date.getFullYear();
//     let month       = date.getMonth();
    
//     dateElem.innerHTML = months[month] + ' ' + year;

//     let firstDay    = new Date(currYear, currMonth, 1).getDate();
//     let lastDay     = new Date(currYear, currMonth + 1, 0).getDate();

//     createElement(firstDay, lastDay, 'day', calendar);
//     getCorrectNowDay();
// });

// prev.addEventListener('click', function(){
//     removeElems('.day');

//     currMonth--;
//     let date        = new Date(currYear, currMonth);
//     let year        = date.getFullYear();
//     let month       = date.getMonth();
    
//     dateElem.innerHTML = months[month] + ' ' + year;

//     let firstDay    = new Date(currYear, currMonth, 1).getDate();
//     let lastDay     = new Date(currYear, currMonth + 1, 0).getDate();

//     createElement(firstDay, lastDay, 'day', calendar);
//     getCorrectNowDay();
// });

// function createElement(from, to, className, select){
//     let divs    = [];
//     for(let i = from; i <= to; i++){
//         let div         = document.createElement('div');
//         div.innerHTML   = i;
//         div.classList.add(className);
//         select.appendChild(div);
//         divs.push(div);
//     }
//     return divs;
// };

// function removeElems(selector){
//     let arr = document.querySelectorAll(selector);
//     for(let i = 0; i < arr.length; i++){
//         arr[i].remove();
//     }
// };

// function getCorrectNowDay(){
//     let nowDay      = new Date().getDate();
//     let nowMonth    = new Date().getMonth();
//     if(months[nowMonth] + ' ' +  currYear == dateElem.innerHTML){
//         let elem    = document.querySelectorAll('.day')[nowDay - 1];
//         elem.style.backgroundColor = 'green';
//     }
// };




// // 11. Определите день недели первого дня текущего месяца

// let days        = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// let date        = new Date();
// let year        = date.getFullYear();
// let month       = date.getMonth();
// let nowDay      = new Date(year, month).getDay();
// console.log(days[nowDay]);




// // 12. Определите день недели первого дня текущего месяца. Узнайте, сколько дней назад от этой даты был понедельник

// let days        = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// let date        = new Date();
// let year        = date.getFullYear();
// let month       = date.getMonth();
// let firstDay    = new Date(year, month).getDay();

// function getMonday(num){
//     if(num == 0){
//         num = 6;
//     }else{
//         num = num - 1;
//     }
//     return num;
// };
// console.log('Прошло дней с понедельника: ' + getMonday(firstDay));




// // 13. Определите день недели последнего дня текущего месяца. Узнайте, через сколько дней от этой даты будет воскресенье

// let days        = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// let date        = new Date();
// let year        = date.getFullYear();
// let month       = date.getMonth();
// let lastDay     = new Date(year, month + 1, 0).getDay();

// function getSunday(num){
//     if(num){
//         num = 7 - num;
//     }
//     return num;
// };
// console.log(getSunday(lastDay));




// // 14. Выведите на экран ul, заполненный числами от 1 до последнего дня текущего месяца

// let ul      = document.createElement('ul');
// document.body.appendChild(ul);

// function showDaysCurrentMonth(){
//     let date            = new Date();
//     let year            = date.getFullYear();
//     let month           = date.getMonth();
//     let firstDayInMonth = new Date(year, month).getDate();
//     let lastDayInMonth  = new Date(year, month + 1, 0).getDate();
    
//     for(let i = firstDayInMonth; i <= lastDayInMonth; i++){
//         let li          = document.createElement('li');
//         li.innerHTML    = i;
//         ul.appendChild(li);
//     }
// };
// showDaysCurrentMonth();




// // 15. Модифицируйте предыдущую задачу так, чтобы под каждым числом был написан также и день недели

// let days        = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// let ul      = document.createElement('ul');
// document.body.appendChild(ul);

// let date            = new Date();
// let year            = date.getFullYear();
// let month           = date.getMonth();

// function showDaysCurrentMonth(){
//     let result          = [];
//     let firstDayInMonth = new Date(year, month).getDate();
//     let lastDayInMonth  = new Date(year, month + 1, 0).getDate();
    
//     for(let i = firstDayInMonth; i <= lastDayInMonth; i++){
//         let li          = document.createElement('li');
//         li.innerHTML    = i;
//         ul.appendChild(li);
//         result.push(li);
//     }
//     return result;
// };
// let li      = showDaysCurrentMonth();

// function getWeekday(arr){
//     for(let i = 0; i < arr.length; i++){
//         let day     = new Date(year, month, i + 1).getDay();
//         let p       = document.createElement('p');
//         p.innerHTML = days[day];
//         li[i].appendChild(p);
//     }
// };
// getWeekday(li);




// // 16. Модифицируйте предыдущую задачу так, чтобы перед первым числом текущего месяца были написаны еще и последние числа предыдущего месяца так, чтобы начало нашего списка приходилось на понедельник

// let days        = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// let ul      = document.createElement('ul');
// document.body.appendChild(ul);

// let date            = new Date();
// let year            = date.getFullYear();
// let month           = date.getMonth();
// let firstDay        = new Date(year, month).getDay();

// function showDaysCurrentMonth(){
//     let result          = [];
//     let firstDayInMonth = new Date(year, month).getDate();
//     let lastDayInMonth  = new Date(year, month + 1, 0).getDate();
    
//     for(let i = firstDayInMonth; i <= lastDayInMonth; i++){
//         let li          = document.createElement('li');
//         li.innerHTML    = i;
//         ul.appendChild(li);
//         result.push(li);
//     }
//     return result;
// };
// let li      = showDaysCurrentMonth();

// function getWeekday(arr){
//     for(let i = 0; i < arr.length; i++){
//         let day     = new Date(year, month, i + 1).getDay();
//         let p       = document.createElement('p');
//         p.innerHTML = days[day];
//         li[i].appendChild(p);
//     }
// };
// getWeekday(li);

// function getMonday(num){
//     if(num == 0){
//         num = 6;
//     }else{
//         num = num - 1;
//     }
//     return num - 1;
// };

// function getDays(){
//     let arr = [];
//     let date                = new Date();
//     let year                = date.getFullYear();
//     let month               = date.getMonth();
//     let mondayDay           = new Date(year, month, -getMonday(firstDay)).getDate();
//     let lastDayPrevMonth    = new Date(year, month, 0).getDate();
    
//     for(let i = mondayDay; i <= lastDayPrevMonth; i++){
//         arr.push(i);
//     }
//     return arr;
// };
// let daysPrevMonth   = getDays();

// let ul1      = document.createElement('ul');
// ul.before(ul1);

// function drawMissingCells(arr){
//     let result  = [];
//     for(let i = 0; i < arr.length; i++){
//         let li          = document.createElement('li');
//         li.innerHTML    = arr[i];
//         li.style.color  = 'grey';
//         ul1.appendChild(li);
//         result.push(li);
//     }
//     return result;
// };
// let liForPrevMont = drawMissingCells(daysPrevMonth);

// function getWeekdayPrev(arr){
//     for(let i = 0; i < arr.length; i++){
//         let day     = new Date(year, month - 1, daysPrevMonth[i]).getDay();
//         let p       = document.createElement('p');
//         p.innerHTML = days[day];
//         liForPrevMont[i].appendChild(p);
//     }
// };
// getWeekdayPrev(daysPrevMonth);




// // 17. Модифицируйте предыдущую задачу так, чтобы после последнего числа текущего месяца были написаны еще и первые числа следующего месяца так, чтобы конец нашего списка приходился на воскресенье

// let days        = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// let ul      = document.createElement('ul');
// document.body.appendChild(ul);

// let date            = new Date();
// let year            = date.getFullYear();
// let month           = date.getMonth();
// let firstDay        = new Date(year, month).getDay();
// let lastDay     = new Date(year, month + 1, 0).getDay();

// function showDaysCurrentMonth(){
//     let result          = [];
//     let firstDayInMonth = new Date(year, month).getDate();
//     let lastDayInMonth  = new Date(year, month + 1, 0).getDate();
    
//     for(let i = firstDayInMonth; i <= lastDayInMonth; i++){
//         let li          = document.createElement('li');
//         li.innerHTML    = i;
//         ul.appendChild(li);
//         result.push(li);
//     }
//     return result;
// };
// let li      = showDaysCurrentMonth();

// function getWeekday(arr){
//     for(let i = 0; i < arr.length; i++){
//         let day     = new Date(year, month, i + 1).getDay();
//         let p       = document.createElement('p');
//         p.innerHTML = days[day];
//         li[i].appendChild(p);
//     }
// };
// getWeekday(li);

// function getMonday(num){
//     if(num == 0){
//         num = 6;
//     }else{
//         num = num - 1;
//     }
//     return num - 1;
// };

// function getPrevDays(){
//     let arr = [];
//     let date                = new Date();
//     let year                = date.getFullYear();
//     let month               = date.getMonth();
//     let mondayDay           = new Date(year, month, -getMonday(firstDay)).getDate();
//     let lastDayPrevMonth    = new Date(year, month, 0).getDate();
    
//     for(let i = mondayDay; i <= lastDayPrevMonth; i++){
//         arr.push(i);
//     }
//     return arr;
// };
// let daysPrevMonth   = getPrevDays();

// let ul1      = document.createElement('ul');
// ul.before(ul1);

// function drawMissingCells(arr, select){
//     let result  = [];
//     for(let i = 0; i < arr.length; i++){
//         let li          = document.createElement('li');
//         li.innerHTML    = arr[i];
//         li.style.color  = 'grey';
//         select.appendChild(li);
//         result.push(li);
//     }
//     return result;
// };
// let liForPrevMont = drawMissingCells(daysPrevMonth, ul1);

// function getWeekdayPrev(arr){
//     for(let i = 0; i < arr.length; i++){
//         let day     = new Date(year, month - 1, daysPrevMonth[i]).getDay();
//         let p       = document.createElement('p');
//         p.innerHTML = days[day];
//         liForPrevMont[i].appendChild(p);
//     }
// };
// getWeekdayPrev(daysPrevMonth);

// // В мае 31 день выпадает на воскресенье, значит делать не буду!




// // 18. Реализуйте квадратный календарик, который будет показывать даты и дни недели за текущий месяц

// let calendar    = document.querySelector('#calendar');
// let dates       = calendar.querySelector('.dates');
// let info        = calendar.querySelector('.info');

// let prev        = calendar.querySelector('.prev');
// let next        = calendar.querySelector('.next');

// let date        = new Date();
// let year        = date.getFullYear();
// let month       = date.getMonth();

// function drawCalendar(year, month, dates){
//     let arr                 = [];
//     let from                = 1;
//     let to                  = getLastDayMonth(year, month);                                                                 // Данная функция вернет последнее число месяца
//     arr                     = findOutNumberDaysInMonth(from, to);                                                           // Данная функция возвращает массив с числами месяца, параметрами, принимая 1 число месяца и последнее
//     let deviatePrevMonth    = getNumberDaysRetreatFromBeginningMonth(year, month);                                          // Данная функция возвращает число, которое указывает сколько дней в начале месяца необходимо отступить!
//     arr                     = pushElemsInBeginning(deviatePrevMonth, arr);                                                  // Данная функция добавляет необходимое кол-во элементов в начало массива
//     let deviateNextMonth    = getNumberDaysRetreatFromAfterMonth(year, month);                                              // Данная функция возвращает число, которое указывает сколько дней в конце месяца необходимо отступить!
//     arr                     = pushElemsInAfter(deviateNextMonth, arr);                                                      // Данная функция добавляет необходимое кол-во элементов в конец массива
//     let chunk               = chunkArr(7, arr);                                                                             // Данная функция порежет наш массив на подмассивы вот такого вида: [['', '', 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12] и так далее]; И вернет этот массив

//     createTable(chunk, dates);                                                                                              // Данная функция рисует таблицу, а параметрами принимает массив с числами месяца и селектор, куда все это вставлять
// };
// drawCalendar(year, month, dates);

// function getLastDayMonth(year, month){
//     let lastDay     = new Date(year, month + 1, 0).getDate();
//     return lastDay;
// };

// function findOutNumberDaysInMonth(from, to){
//     let result      = [];
//     for(let i = from; i <= to; i++){
//         result.push(i);
//     }
//     return result;
// };

// function getNumberDaysRetreatFromBeginningMonth(year, month){
//     let firstDay    = new Date(year, month).getDay();

//     return getMonday(firstDay);
// };

// function getMonday(num){
//     if(num == 0){
//         num = 7;
//     }else{
//         num = num - 1;
//     }
//     return num;
// };

// function pushElemsInBeginning(num, arr){
//     for(let i = 0; i < num; i++){
//         arr.unshift('');
//     }
//     return arr;
// };

// function getNumberDaysRetreatFromAfterMonth(year, month){
// let lastDay     = new Date(year, month + 1, 0).getDay();

// return getSunday(lastDay);
// };

// function getSunday(num){
//     if(num){
//         num = 7 - num;
//     }
//     return num;
// };

// function pushElemsInAfter(num, arr){
//     for(let i = 0; i < num; i++){
//         arr.push('');
//     }
//     return arr;
// };

// function chunkArr(num, arr){
//     let result  = [];
//     let chunk   = [];
//     let currNum = arr.length / num;
//     for(let i = 0; i < currNum; i++){
//         result = arr.splice(0, num);
//         chunk.push(result);
//     }
//     return chunk;
// };

// function createTable(arr, selector){
//     for(let i = 0; i < arr.length; i++){
//         let tr      = document.createElement('tr');
//         for(let j = 0; j < arr[i].length; j++){
//             let td  = document.createElement('td');
//             td.innerHTML    = arr[i][j];
//             tr.appendChild(td);
//         }
//         selector.appendChild(tr);
//     }
// };




// 19. Модифицируйте предыдущую задачу так, чтобы сверху над календариком появились стрелки вперед и назад, с помощью которых можно будет менять просматриваемый месяц

let calendar    = document.querySelector('#calendar');
let dates       = calendar.querySelector('.dates');
let info        = calendar.querySelector('.info');

let prev        = calendar.querySelector('.prev');
let next        = calendar.querySelector('.next');

let date        = new Date();
let year        = date.getFullYear();
let month       = date.getMonth();

function drawCalendar(year, month, dates){
    let arr                 = [];
    let from                = 1;
    let to                  = getLastDayMonth(year, month);                                       // Данная функция вернет последнее число месяца
    arr                     = findOutNumberDaysInMonth(from, to);                                 // Данная функция возвращает массив с числами месяца, параметрами, принимая 1 число месяца и последнее
    let deviatePrevMonth    = getNumberDaysRetreatFromBeginningMonth(year, month);                // Данная функция возвращает число, которое указывает сколько дней в начале месяца необходимо отступить!
    arr                     = pushElemsInBeginning(deviatePrevMonth, arr);                        // Данная функция добавляет необходимое кол-во элементов в начало массива
    let deviateNextMonth    = getNumberDaysRetreatFromAfterMonth(year, month);                    // Данная функция возвращает число, которое указывает сколько дней в конце месяца необходимо отступить!
    arr                     = pushElemsInAfter(deviateNextMonth, arr);                            // Данная функция добавляет необходимое кол-во элементов в конец массива
    let chunk               = chunkArr(7, arr);                                                   // Данная функция порежет наш массив на подмассивы вот такого вида: [['', '', 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12] и так далее]; И вернет этот массив

    createTable(chunk, dates);                                                                    // Данная функция рисует таблицу, а параметрами принимает массив с числами месяца и селектор, куда все это вставлять
};
drawCalendar(year, month, dates);

function getLastDayMonth(year, month){
    let lastDay     = new Date(year, month + 1, 0).getDate();
    return lastDay;
};

function findOutNumberDaysInMonth(from, to){
    let result      = [];
    for(let i = from; i <= to; i++){
        result.push(i);
    }
    return result;
};

function getNumberDaysRetreatFromBeginningMonth(year, month){
    let firstDay    = new Date(year, month).getDay();

    return getMonday(firstDay);
};

function getMonday(num){
    if(num == 0){
        num = 7;
    }else{
        num = num - 1;
    }
    return num;
};

function pushElemsInBeginning(num, arr){
    for(let i = 0; i < num; i++){
        arr.unshift('');
    }
    return arr;
};

function getNumberDaysRetreatFromAfterMonth(year, month){
let lastDay     = new Date(year, month + 1, 0).getDay();

return getSunday(lastDay);
};

function getSunday(num){
    if(num){
        num = 7 - num;
    }
    return num;
};

function pushElemsInAfter(num, arr){
    for(let i = 0; i < num; i++){
        arr.push('');
    }
    return arr;
};

function chunkArr(num, arr){
    let result  = [];
    let chunk   = [];
    let currNum = arr.length / num;
    for(let i = 0; i < currNum; i++){
        result = arr.splice(0, num);
        chunk.push(result);
    }
    return chunk;
};

function createTable(arr, selector){
    for(let i = 0; i < arr.length; i++){
        let tr      = document.createElement('tr');
        for(let j = 0; j < arr[i].length; j++){
            let td  = document.createElement('td');
            td.innerHTML    = arr[i][j];
            tr.appendChild(td);
        }
        selector.appendChild(tr);
    }
};

prev.addEventListener('click', function(){
    dates.innerHTML = '';
    month--;
    drawCalendar(year, month, dates);
    getInfoDate(year, month, info);
});

next.addEventListener('click', function(){
    dates.innerHTML = '';
    month++;
    drawCalendar(year, month, dates);
    getInfoDate(year, month, info);
});

function getInfoDate(year, month, selector){
    let months   = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    selector.innerHTML = months[month] + ' ' +  year;
};