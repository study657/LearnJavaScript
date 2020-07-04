// // Редактирование отдельного элемента на JavaScript
// // Задача №1
// // Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.

// let parent  = document.getElementById('parent');
// let elem    = document.getElementById('elem');
// let input   = document.getElementById('input');

// elem.innerHTML = input.value;

// // input.addEventListener('blur', function(){
// //     elem.innerHTML = this.value;
// // });

// input.addEventListener('input', function(){
//     elem.innerHTML = this.value;
// });




// // Задача №2
// // Давайте теперь сделаем так, чтобы инпута изначально не было на странице, а он появлялся по клику на абзац.
// // Самостоятельно, не подсматривая в мой код, решите описанную задачу.

// let parent  = document.getElementById('parent');
// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(){
//     let input   = document.createElement('input');
//     input.value = elem.innerHTML;
//     parent.append(input);

//     input.addEventListener('blur', function(){
//         elem.innerHTML = this.value;
//         this.remove();
//     });
// });














// // Прячем текст при редактировании элемента на JavaScript
// // Задача №1
// // Давайте теперь сделаем так, чтобы при редактировании инпут появлялся в самом абзаце - вместо текста этого абзаца. 
// // Пусть затем при окончании редактирования инпут будет убираться, а вместо него опять появляться текст абзаца.
// // Самостоятельно, не подсматривая в мой код, решите описанную задачу.

// let parent  = document.getElementById('parent');
// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(){
//     let input   = document.createElement('input');
//     input.value = elem.innerHTML;
//     parent.append(input);
//     elem.innerHTML = '';

//     input.addEventListener('blur', function(){
//         elem.innerHTML = input.value;
//         this.remove();
//     });
// });














// // Редактирование в группе элементов на JavaScript
// // Задача №1
// // Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.

// let parent  = document.getElementById('parent');
// let elems   = document.querySelectorAll('#parent li');

// for(let elem of elems){
//     elem.addEventListener('click', function func(){
//         let input   = document.createElement('input');
//         input.value = this.innerHTML;
//         this.innerHTML = '';
//         this.append(input);

//         elem.removeEventListener('click', func);

//         input.addEventListener('blur', function(){
//             elem.innerHTML = this.value;
//             elem.addEventListener('click', func);
//         });
//     });
// }




// // Задача №2
// // Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.

// let parent  = document.getElementById('parent');
// let elems   = document.querySelectorAll('#parent td');

// for(let elem of elems){
//     elem.addEventListener('click', function func(){
//         let input   = document.createElement('input');
//         input.value = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);

//         let self    = this;

//         input.addEventListener('blur', function(){
//             elem.innerHTML = this.value;
//             self.addEventListener('click', func);
//         });
//     });
// }














// // Одновременное редактирование и удаление элементов
// // Задача №1
// // Дан следующий HTML код:
// // <div id="parent">
// // 	<p><span>text1</span></p>
// // 	<p><span>text2</span></p>
// // 	<p><span>text3</span></p>
// // </div>
// // Добавьте ссылку на удаление в конец каждого абзаца.
// // Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.

// let parent  = document.getElementById('parent');
// let elems   = document.querySelectorAll('#parent span');

// for(let elem of elems){
//     let remove  = document.createElement('a');
//     remove.href = '#';
//     remove.innerHTML = 'Удалить';
//     elem.parentElement.append(remove);

//     remove.addEventListener('click', function(event){
//         event.preventDefault();
//         this.parentElement.remove();
//     });
// }

// for(let elem of elems){
//     elem.addEventListener('click', function func(){
//         let input   = document.createElement('input');
//         input.value = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);

//         this.removeEventListener('click', func);

//         input.addEventListener('blur', function(){
//             elem.innerHTML = this.value;
//             elem.addEventListener('click', func);
//         });
//     });
// }




// // Задача №2
// // Пусть теперь изначально тегов span нет:
// // <div id="parent">
// // 	<p>text1</p>
// // 	<p>text2</p>
// // 	<p>text3</p>
// // </div>
// // Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.

// let parent  = document.getElementById('parent');
// let elems   = document.querySelectorAll('#parent p');

// for(let elem of elems){
//     let span        = document.createElement('span');
//     span.innerHTML  = elem.innerHTML;
//     elem.innerHTML  = '';
//     elem.append(span);

//     let remove  = document.createElement('a');
//     remove.href = '#';
//     remove.innerHTML = 'Удалить!';
//     span.parentElement.append(remove);

//     remove.addEventListener('click', function(){
//         span.parentElement.remove();
//     });

//     span.addEventListener('click', function func(){
//         let input   = document.createElement('input');
//         input.value = this.innerHTML;
//         this.innerHTML = '';
//         this.append(input);
//         this.removeEventListener('click', func);
        
//         let self    = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML = this.value;
//             self.addEventListener('click', func);
//         });
//     });
// }














// // Стилизация элементов на JavaScript
// // Задача №1
// // Дан следующий HTML код:
// // <p>text1</p>
// // <p>text2</p>
// // <p>text3</p>
// // Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).

// let elems   = document.querySelectorAll('p');

// for(let elem of elems){
//     let span        = document.createElement('span');
//     span.innerHTML  = elem.innerHTML;
//     elem.innerHTML  = '';
//     elem.append(span);

//     let links   = document.createElement('a');
//     links.href  = '#';
//     links.innerHTML = 'Перечеркнуть текст!';
//     elem.append(links);

//     links.addEventListener('click', function func(){
//         links.previousElementSibling.classList.add('active');
//     });
// }




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).

// let elems   = document.querySelectorAll('p');

// for(let elem of elems){
//     let span        = document.createElement('span');
//     span.innerHTML  = elem.innerHTML;
//     elem.innerHTML  = '';
//     elem.append(span);

//     let links   = document.createElement('a');
//     links.href  = '#';
//     links.innerHTML = 'Перечеркнуть текст!';
//     elem.append(links);

//     links.addEventListener('click', function(){
//         links.previousElementSibling.classList.add('active1');
//         this.remove();
//     });
// }




// // Задача №3
// // Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.

// let parent  = document.getElementById('parent');
// let elems   = document.querySelectorAll('#parent tr');

// for(let elem of elems){
//     let td          = document.createElement('td');
//     elem.append(td);

//     let links       = document.createElement('a');
//     links.href      = '#';
//     links.innerHTML = 'Покрасить ряд!';
//     td.append(links);

//     links.addEventListener('click', function(){
//         let parentElement = links.parentElement.parentElement;
//         parentElement.classList.add('active2');
//     });
// }




// // Задача №4
// // Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.

// let parent  = document.getElementById('parent');
// let elems   = document.querySelectorAll('#parent tr');

// for(let elem of elems){
//     let td          = document.createElement('td');
//     elem.append(td);

//     let links       = document.createElement('a');
//     links.href      = '#';
//     links.innerHTML = 'Покрасить ряд!';
//     td.append(links);

//     links.addEventListener('click', function(event){
//         event.preventDefault();
//         let parentElement = links.parentElement.parentElement;
//         parentElement.classList.toggle('active2');
//     });
// }














// // Кнопки для скрытия и показа элемента на JavaScript
// // Задача №1
// // Давайте теперь сделаем так, чтобы по клику на одну кнопку наш абзац скрывался, а на другую - показывался
// // Модифицируйте мой код так, чтобы была только одна кнопка. Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается.

// let elem    = document.getElementById('elem');
// let show    = document.getElementById('show');

// // show.addEventListener('click', function(){
// //     elem.classList.add('hide');
// // });

// // hide.addEventListener('click', function(){
// //     elem.classList.remove('hide');
// // });

// show.addEventListener('click', function(){
//     elem.classList.toggle('hide');
// });














// // Много элементов с кнопками показа на JavaScript
// // Задача №1
// // Первый способ
// // Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.

// // let btns    = document.getElementsByTagName('button');

// // for(let button of btns){
// //     button.addEventListener('click', function(){
// //         let elem = document.querySelector('#' + this.dataset.elem);
// //         elem.classList.toggle('hide');
// //     });
// // }


// // // Второй способ
// // let btns    = document.getElementsByTagName('button');
// // let elem    = document.getElementsByTagName('p');

// // for(let i = 0; i < btns.length; i++){
// //     btns[i].addEventListener('click', function(){
// //         elem[i].classList.toggle('hide');
// //     });
// // }


// // Третий способ
// let btns    = document.getElementsByTagName('button');

// for(let button of btns){
//     button.addEventListener('click', function(){
//         this.previousElementSibling.classList.toggle('hide');
//     });
// }














// // Активация элементов на JavaScript
// // Задача №1
// // Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.

// let elems  = document.querySelectorAll('#parent li');

// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         this.classList.toggle('active3');
//     });
// }




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.

// let elems  = document.querySelectorAll('#parent li');

// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         this.classList.toggle('active3');
//     });
// }














// // Чередование стилей активации на JavaScript
// // Задача №1
// // Давайте теперь сделаем так, чтобы происходило чередование цветов: пусть первая ячейка красится в красный, вторая - в зеленый, третья - опять в красный и так далее
// // Разберите мой код, а затем самостоятельно повторите решение этой задачи.

// let tds     = document.querySelectorAll('#parent td');

// for(let td of tds){
//     let color   = 'active4';
//     td.addEventListener('click', function(){
//         if(color == 'active4'){
//             color = 'active5';
//         }else{
//             color = 'active4';
//         }
//         this.classList.toggle(color);
//     });
// }




// // Чередование многих цветов из массива
// // Задача №2
// // Пусть теперь мы хотим чередовать не два цвета, а произвольное количество. Давайте для этого будем хранить массив CSS классов:

// let colors  = ['color1', 'color2', 'color3'];
// let tds     = document.querySelectorAll('#parent td');
// let i       = 0;

// for(let td of tds){
//     td.addEventListener('click', function(){
//         this.classList.toggle(colors[i]);
//         i++;

//         if(i == colors.length){
//             i = 0;
//         }
//     });
// }














// // Активация ограниченного количества элементов
// // Задача №1
// // Объясните, как работает приведенный мною код.

// let tds = document.querySelectorAll('#table td');

// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		let activeTds = document.querySelectorAll('#table td.active');
		
// 		if (activeTds.length < 2) {
// 			this.classList.add('active');
// 		}
// 	});
// }




// // Задача №2
// // Сделайте так, чтобы в одном ряду таблице можно было активировать не более 5-ти ячеек.

// let trs     = document.querySelectorAll('#table tr');

// for(let i = 0; i < trs.length; i++){
//     let tds = trs[i].querySelectorAll('td');
    
//     for(let td of tds){
//         td.addEventListener('click', function(){
//             let activeTds  = trs[i].querySelectorAll('td.active');
//             console.log(activeTds);

//             if(activeTds.length < 5){
//                 this.classList.add('active');
//             }
//         });
//     }
// }




// // Задача №3
// // Сделайте так, чтобы в для активированной ячейки нельзя было активировать ее соседей слева и справа.

// let tds   = document.querySelectorAll('#table td');

// for(let td of tds){
//     td.addEventListener('click', function(){
//         let previous        = this.previousElementSibling;
//         let next            = this.nextElementSibling;
        
//         if(previous == null){
//             let check   = next.classList.contains('active');
//             if(!check){
//                 this.classList.add('active');
//             }
//         }

//         if(next == null){
//             let check   = previous.classList.contains('active');
//             if(!check){
//                 this.classList.add('active');
//             }
//         }

//         if(previous != null && next != null){
//             let checkPrevious   = previous.classList.contains('active');
//             let checkNext       = next.classList.contains('active');

//             if(!checkPrevious && !checkNext){
//                 this.classList.add('active');
//             }
//         }
//     });
// }




// // Задача №4
// // Сделайте так, чтобы в для активированной ячейки нельзя было активировать ее соседей сверху и снизу.

// let trs   = document.querySelectorAll('#table tr');

// for(let i = 0; i < trs.length; i++){
//     let tds = trs[i].querySelectorAll('td');
    
//     for(let td of tds){
//         td.addEventListener('click', function(){
//             let nomber  = Number(this.dataset.nomber);
//             let previous        = this.parentElement.previousElementSibling;
//             let next            = this.parentElement.nextElementSibling;
            
//             if(previous == null){
//                 let check   = next.querySelectorAll('td')[nomber].classList.contains('active');

//                 if(!check){
//                     this.classList.add('active');
//                 }
//             }

//             if(next == null){
//                 let check   = previous.querySelectorAll('td')[nomber].classList.contains('active');

//                 if(!check){
//                     this.classList.add('active');
//                 }
//             }

//             if(previous != null && next != null){
//                 let checkPrevious   = previous.querySelectorAll('td')[nomber].classList.contains('active');
//                 let checkNext       = next.querySelectorAll('td')[nomber].classList.contains('active');

//                 if(!checkPrevious && !checkNext){
//                     this.classList.add('active');
//                 }
//             }
//         });
//     }
// }














// // Практика на изменение элементов на JavaScript
// // Задача №1
// // Дан массив. Выведите его элементы в виде списка ul.

// let arr     = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];
// let parent  = document.querySelector('#parent');

// for(let elem of arr){
//     let li          = document.createElement('li');
//     li.innerHTML    = elem;
//     parent.append(li);
// }




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.

// let arr     = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];
// let parent  = document.querySelector('#parent');

// for(let elem of arr){
//     let li          = document.createElement('li');
//     li.innerHTML    = elem;
//     parent.append(li);

//     li.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = li.innerHTML;
//         li.innerHTML    = '';
//         li.append(input);
//         this.removeEventListener('click', func);
//         let self    = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });
// }




// // Задача №3
// // Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.

// let arr     = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];
// let parent  = document.querySelector('#parent');
// let elem    = document.getElementById('elem');

// for(let elem of arr){
//     let li          = document.createElement('li');
//     li.innerHTML    = elem;
//     parent.append(li);

//     li.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = li.innerHTML;
//         li.innerHTML    = '';
//         li.append(input);
//         this.removeEventListener('click', func);
//         let self    = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });
// }

// elem.addEventListener('blur', function(){
//     let newLi       = document.createElement('li');
//     newLi.innerHTML = this.value;
//     parent.append(newLi);

//     newLi.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = newLi.innerHTML;
//         newLi.innerHTML    = '';
//         newLi.append(input);
//         this.removeEventListener('click', func);
//         let self    = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });
// });




// // Задача №4
// // Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.

// let arr     = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];
// let parent  = document.querySelector('#parent');
// let elem    = document.getElementById('elem');

// for(let elem of arr){
//     let li          = document.createElement('li');
//     li.innerHTML    = elem;
//     let span        = document.createElement('span');
//     span.append(li);
//     parent.append(span);

//     let delet       = document.createElement('a');
//     delet.href      = '#';
//     delet.innerHTML = 'Удалить!';
//     span.append(delet);

//     li.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = li.innerHTML;
//         li.innerHTML    = '';
//         li.append(input);
//         this.removeEventListener('click', func);
//         let self    = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });

//     delet.addEventListener('click', function(event){
//         event.preventDefault();
//         this.parentElement.remove();
//     });
// }

// elem.addEventListener('blur', function(){
//     let newLi       = document.createElement('li');
//     newLi.innerHTML = this.value;
//     let span        = document.createElement('span');
//     span.append(newLi);
//     parent.append(span);

//     let delet       = document.createElement('a');
//     delet.href      = '#';
//     delet.innerHTML = 'Удалить!';
//     span.append(delet);

//     newLi.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = newLi.innerHTML;
//         newLi.innerHTML    = '';
//         newLi.append(input);
//         this.removeEventListener('click', func);
//         let self    = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });

//     delet.addEventListener('click', function(event){
//         event.preventDefault();
//         this.parentElement.remove();
//     });
// });




// // Задача №5
// // Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.

// let arr     = ['Элемент1', 'Элемент2', 'Элемент3', 'Элемент4', 'Элемент5'];
// let parent  = document.querySelector('#parent');
// let elem    = document.getElementById('elem');

// for(let elem of arr){
//     let li          = document.createElement('li');
//     li.innerHTML    = elem;
//     let span        = document.createElement('span');
//     span.append(li);
//     parent.append(span);

//     let delet       = document.createElement('a');
//     delet.href      = '#';
//     delet.innerHTML = 'Удалить!';
//     span.append(delet);

//     let inlin       = document.createElement('a');
//     inlin.href      = '#';
//     inlin.innerHTML = ' Перечеркнуть';
//     span.append(inlin);

//     li.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = li.innerHTML;
//         li.innerHTML    = '';
//         li.append(input);
//         this.removeEventListener('click', func);
//         let self    = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });

//     delet.addEventListener('click', function(event){
//         event.preventDefault();
//         this.parentElement.remove();
//     });

//     inlin.addEventListener('click', function(){
//         let elem    = this.previousElementSibling.previousElementSibling;
//         elem.classList.add('active1');
//     });
// }

// elem.addEventListener('blur', function(){
//     let newLi       = document.createElement('li');
//     newLi.innerHTML = this.value;
//     let span        = document.createElement('span');
//     span.append(newLi);
//     parent.append(span);

//     let delet       = document.createElement('a');
//     delet.href      = '#';
//     delet.innerHTML = 'Удалить!';
//     span.append(delet);

//     let inlin       = document.createElement('a');
//     inlin.href      = '#';
//     inlin.innerHTML = ' Перечеркнуть';
//     span.append(inlin);

//     newLi.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = newLi.innerHTML;
//         newLi.innerHTML    = '';
//         newLi.append(input);
//         this.removeEventListener('click', func);
//         let self    = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });

//     delet.addEventListener('click', function(event){
//         event.preventDefault();
//         this.parentElement.remove();
//     });

//     inlin.addEventListener('click', function(){
//         let elem    = this.previousElementSibling.previousElementSibling;
//         elem.classList.add('active1');
//     });
// });




// // Массив объектов и таблица
// // Задача №6
// // Дан следующий массив с работниками:
// // let employees = [
// // 	{name: 'employee1', age: 30, salary: 400},
// // 	{name: 'employee2', age: 31, salary: 500},
// // 	{name: 'employee3', age: 32, salary: 600},
// // ];
// // Выведите этих работников в HTML таблице.

// let parent      = document.getElementById('parent');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for(let elem of employees){
//     let tr  = document.createElement('tr');
//     parent.append(tr);

//     let td1         = document.createElement('td');
//     td1.innerHTML   = elem['name'];
//     tr.append(td1);

//     let td2         = document.createElement('td');
//     td2.innerHTML   = elem['age'];
//     tr.append(td2);

//     let td3         = document.createElement('td');
//     td3.innerHTML   = elem['salary'];
//     tr.append(td3);
// }




// // Задача №2
// // Добавьте ячейкам созданной таблицы возможность редактирования.

// let parent      = document.getElementById('parent');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for(let elem of employees){
//     let tr      = document.createElement('tr');
//     parent.append(tr);

//     let td1         = document.createElement('td');
//     td1.innerHTML   = elem['name'];
//     tr.append(td1);

//     let td2         = document.createElement('td');
//     td2.innerHTML   = elem['age'];
//     tr.append(td2);

//     let td3         = document.createElement('td');
//     td3.innerHTML   = elem['salary'];
//     tr.append(td3);

//     td1.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     td2.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     td3.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });
// }




// // Задача №8
// // Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.

// let parent      = document.getElementById('parent');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for(let elem of employees){
//     let tr      = document.createElement('tr');
//     parent.append(tr);

//     let td1         = document.createElement('td');
//     td1.innerHTML   = elem['name'];
//     tr.append(td1);

//     let td2         = document.createElement('td');
//     td2.innerHTML   = elem['age'];
//     tr.append(td2);

//     let td3         = document.createElement('td');
//     td3.innerHTML   = elem['salary'];
//     tr.append(td3);

//     td1.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     td2.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     td3.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     let delTd           = document.createElement('td');
//     tr.appendChild(delTd);

//     let delet           = document.createElement('a');
//     delet.href          = '#';
//     delet.innerHTML     = 'Удалить!';
//     delTd.appendChild(delet);

//     delet.addEventListener('click', function(event){
//         let elem    = this.parentElement.parentElement;
//         elem.remove();
//     });
// }




// // Задача №9
// // Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. 
// // Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников.

// let parent          = document.getElementById('parent');
// let namePerson      = document.getElementById('namePerson');
// let agePerson       = document.getElementById('agePerson');
// let salaryPerson    = document.getElementById('salaryPerson');
// let btn             = document.getElementById('btn');
// let employees       = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for(let elem of employees){
//     let tr      = document.createElement('tr');
//     parent.append(tr);

//     let td1         = document.createElement('td');
//     td1.innerHTML   = elem['name'];
//     tr.append(td1);

//     let td2         = document.createElement('td');
//     td2.innerHTML   = elem['age'];
//     tr.append(td2);

//     let td3         = document.createElement('td');
//     td3.innerHTML   = elem['salary'];
//     tr.append(td3);

//     td1.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     td2.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     td3.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     let delTd           = document.createElement('td');
//     tr.appendChild(delTd);

//     let delet           = document.createElement('a');
//     delet.href          = '#';
//     delet.innerHTML     = 'Удалить!';
//     delTd.appendChild(delet);

//     delet.addEventListener('click', function(event){
//         let elem    = this.parentElement.parentElement;
//         elem.remove();
//     });
// }

// btn.addEventListener('click', function(){
//     let tr          = document.createElement('tr');
//     parent.append(tr);
    
//     let td1         = document.createElement('td');
//     td1.innerHTML   = namePerson.value;
//     tr.appendChild(td1);

//     let td2         = document.createElement('td');
//     td2.innerHTML   = agePerson.value;
//     tr.appendChild(td2);

//     let td3         = document.createElement('td');
//     td3.innerHTML   = salaryPerson.value;
//     tr.appendChild(td3);

//     td1.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     td2.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     td3.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.append(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = input.value;
//             self.addEventListener('click', func);
//         });
//     });

//     let delTd           = document.createElement('td');
//     tr.appendChild(delTd);

//     let delet           = document.createElement('a');
//     delet.href          = '#';
//     delet.innerHTML     = 'Удалить!';
//     delTd.appendChild(delet);

//     delet.addEventListener('click', function(event){
//         let elem    = this.parentElement.parentElement;
//         elem.remove();
//     });
// });




// // Массив объектов и список
// // Задача №10
// // Дан следующий массив с работниками:
// // let employees = [
// // 	{name: 'employee1', age: 30, salary: 400},
// // 	{name: 'employee2', age: 31, salary: 500},
// // 	{name: 'employee3', age: 32, salary: 600},
// // ];
// // Выведите на экран каждого работника в своем теге li тега ul.

// let employees   = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for(let elem of employees){
//     let ul              = document.createElement('ul');
//     document.body.append(ul);

//     let liOne           = document.createElement('li');
//     liOne.innerHTML     = elem['name'];
//     ul.append(liOne);

//     let liTwo           = document.createElement('li');
//     liTwo.innerHTML     = elem['age'];
//     ul.append(liTwo);

//     let liThree         = document.createElement('li');
//     liThree.innerHTML   = elem['salary'];
//     ul.append(liThree);
// }




// // Задача №11
// // Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля.

// let employees   = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for(let elem of employees){
//     let ul              = document.createElement('ul');
//     document.body.append(ul);

//     let liOne           = document.createElement('li');
//     liOne.innerHTML     = elem['name'];
//     ul.append(liOne);

//     let liTwo           = document.createElement('li');
//     liTwo.innerHTML     = elem['age'];
//     ul.append(liTwo);

//     let liThree         = document.createElement('li');
//     liThree.innerHTML   = elem['salary'];
//     ul.append(liThree);

//     liOne.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.appendChild(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });

//     liTwo.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.appendChild(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });

//     liThree.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.appendChild(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });
// }




// // Задача №12
// // Добавьте в конец каждого тега li ссылку на удаление этого li из списка.

// let employees   = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for(let elem of employees){
//     let ul              = document.createElement('ul');
//     document.body.append(ul);

//     let liOne           = document.createElement('li');
//     liOne.innerHTML     = elem['name'];
//     ul.append(liOne);

//     let liTwo           = document.createElement('li');
//     liTwo.innerHTML     = elem['age'];
//     ul.append(liTwo);

//     let liThree         = document.createElement('li');
//     liThree.innerHTML   = elem['salary'];
//     ul.append(liThree);

//     liOne.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.appendChild(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });

//     liTwo.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.appendChild(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });

//     liThree.addEventListener('click', function func(){
//         let input       = document.createElement('input');
//         input.value     = this.innerHTML;
//         this.innerHTML  = '';
//         this.appendChild(input);
//         this.removeEventListener('click', func);
//         let self        = this;

//         input.addEventListener('blur', function(){
//             self.innerHTML  = this.value;
//             self.addEventListener('click', func);
//         });
//     });

//     let delet           = document.createElement('a');
//     delet.href          = '#';
//     delet.innerHTML     = 'Удалить!';
//     ul.appendChild(delet);

//     delet.addEventListener('click', function(event){
//         event.preventDefault();
//         this.parentElement.remove();
//     });
// }




// Задача №13
// Под списком сделайте форму для добавление нового работника.

let employees       = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let namePerson      = document.getElementById('namePerson');
let agePerson       = document.getElementById('agePerson');
let salaryPerson    = document.getElementById('salaryPerson');
let btn             = document.getElementById('btn');

for(let elem of employees){
    let ul              = document.createElement('ul');
    namePerson.before(ul);

    let liOne           = document.createElement('li');
    liOne.innerHTML     = elem['name'];
    ul.append(liOne);

    let liTwo           = document.createElement('li');
    liTwo.innerHTML     = elem['age'];
    ul.append(liTwo);

    let liThree         = document.createElement('li');
    liThree.innerHTML   = elem['salary'];
    ul.append(liThree);

    liOne.addEventListener('click', function func(){
        let input       = document.createElement('input');
        input.value     = this.innerHTML;
        this.innerHTML  = '';
        this.appendChild(input);
        this.removeEventListener('click', func);
        let self        = this;

        input.addEventListener('blur', function(){
            self.innerHTML  = this.value;
            self.addEventListener('click', func);
        });
    });

    liTwo.addEventListener('click', function func(){
        let input       = document.createElement('input');
        input.value     = this.innerHTML;
        this.innerHTML  = '';
        this.appendChild(input);
        this.removeEventListener('click', func);
        let self        = this;

        input.addEventListener('blur', function(){
            self.innerHTML  = this.value;
            self.addEventListener('click', func);
        });
    });

    liThree.addEventListener('click', function func(){
        let input       = document.createElement('input');
        input.value     = this.innerHTML;
        this.innerHTML  = '';
        this.appendChild(input);
        this.removeEventListener('click', func);
        let self        = this;

        input.addEventListener('blur', function(){
            self.innerHTML  = this.value;
            self.addEventListener('click', func);
        });
    });

    let delet           = document.createElement('a');
    delet.href          = '#';
    delet.innerHTML     = 'Удалить!';
    ul.appendChild(delet);

    delet.addEventListener('click', function(event){
        event.preventDefault();
        this.parentElement.remove();
    });
}

btn.addEventListener('click', function(){
    let ul      = document.createElement('ul');
    namePerson.before(ul);

    let liOne           = document.createElement('li');
    liOne.innerHTML     = namePerson.value;
    ul.appendChild(liOne);

    let liTwo           = document.createElement('li');
    liTwo.innerHTML     = agePerson.value;
    ul.appendChild(liTwo);

    let liThree         = document.createElement('li');
    liThree.innerHTML   = salaryPerson.value;
    ul.appendChild(liThree);

    liOne.addEventListener('click', function func(){
        let input       = document.createElement('input');
        input.value     = this.innerHTML;
        this.innerHTML  = '';
        this.appendChild(input);
        this.removeEventListener('click', func);
        let self        = this;

        input.addEventListener('blur', function(){
            self.innerHTML  = this.value;
            self.addEventListener('click', func);
        });
    });

    liTwo.addEventListener('click', function func(){
        let input       = document.createElement('input');
        input.value     = this.innerHTML;
        this.innerHTML  = '';
        this.appendChild(input);
        this.removeEventListener('click', func);
        let self        = this;

        input.addEventListener('blur', function(){
            self.innerHTML  = this.value;
            self.addEventListener('click', func);
        });
    });

    liThree.addEventListener('click', function func(){
        let input       = document.createElement('input');
        input.value     = this.innerHTML;
        this.innerHTML  = '';
        this.appendChild(input);
        this.removeEventListener('click', func);
        let self        = this;

        input.addEventListener('blur', function(){
            self.innerHTML  = this.value;
            self.addEventListener('click', func);
        });
    });

    let delet           = document.createElement('a');
    delet.href          = '#';
    delet.innerHTML     = 'Удалить!';
    ul.appendChild(delet);

    delet.addEventListener('click', function(event){
        event.preventDefault();
        this.parentElement.remove();
    });
});