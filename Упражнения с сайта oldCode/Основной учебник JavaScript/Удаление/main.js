// // Удаление элементов на JavaScript
// // Задача №1
// // Дан следующий код:
// // <ul id="parent">
// // 	<li>1</li>
// // 	<li id="elem">2</li>
// // 	<li>3</li>
// // </ul>
// // <input type="submit" id="button">
// // Сделайте так, чтобы по нажатию на кнопку удалялся элемент #elem.

// let parent  = document.getElementById('parent');
// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     // elem.remove();
//     parent.removeChild(elem);
// });




// // Задача №2
// // Дан следующий код:
// // <ul id="parent">
// // 	<li>1</li>
// // 	<li>2</li>
// // 	<li>3</li>
// // </ul>
// // <input type="submit" id="button">
// // Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.

// let parent  = document.getElementById('parent');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     // parent.lastElementChild.remove();
//     parent.removeChild(parent.lastElementChild);
// });




// // Задача №3
// // Дан следующий код:
// // <ul>
// // 	<li>1</li>
// // 	<li id="elem">2</li>
// // 	<li>3</li>
// // </ul>
// // Сделайте так, чтобы по нажатию на #elem этот элемент удалился.

// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(){
//     // elem.remove();
//     elem.parentElement.removeChild(elem);
// });














// // Самоудаление элементов на JavaScript
// // Задача №1
// // Дан следующий код:
// // <ul id="parent">
// // 	<li>1</li>
// // 	<li>2</li>
// // 	<li>3</li>
// // </ul>
// // Сделайте так, чтобы любая li удалялась по клику на нее.

// let parent  = document.getElementById('parent');
// let elems   = document.querySelectorAll('#parent li');

// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         // this.remove();
//         parent.removeChild(this);
//     });
// }














// // Самоудаление новых элементов на JavaScript
// // Задача №1
// // Дан следующий код:
// // <ul id="parent">
// // 	<li>1</li>
// // 	<li>2</li>
// // 	<li>3</li>
// // </ul>
// // <input type="submit" id="button">
// // Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. 
// // Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.

// let parent  = document.getElementById('parent');
// let btn     = document.getElementById('button');
// let elems = document.querySelectorAll('#parent li');

// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         this.remove();
//     });
// }

// btn.addEventListener('click', function(){
//     let newLi   = document.createElement('li');
//     newLi.innerHTML = 'Следующий пункт';
//     parent.append(newLi);

//     newLi.addEventListener('click', function(){
//         newLi.remove();
//     });
// });














// // Ссылка на удаление элемента на JavaScript
// // Задача №1
// // Самостоятельно, не подсматривая в мой код, решите описанную задачу.

// let parent  = document.getElementById('parent');
// let elem    = document.getElementById('elem');
// let remove  = document.getElementById('remove');

// remove.addEventListener('click', function(event){
//     event.preventDefault();
//     parent.removeChild(elem);
// });














// // Создание ссылок для удаление элементов на JavaScript
// // Задача №1
// // Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.

// let parent  = document.getElementById('parent');
// let elems   = document.querySelectorAll('#parent li');

// for(let elem of elems){
//     let remove  = document.createElement('a');
//     remove.href = '#';
//     remove.innerHTML = ' Удалить';

//     elem.appendChild(remove);

//     remove.addEventListener('click', function func(event){
//         event.preventDefault();
//         this.parentElement.remove();
//     });
// }




// Задача №2
// Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.

let parent  = document.getElementById('parent');
let trs     = document.querySelectorAll('#parent tr');

for(let tr of trs){
    let remove          = document.createElement('a');
    remove.href         = '#';
    remove.innerHTML    = 'Удалить';
    tr.append(remove);

    remove.addEventListener('click', function(event){
        event.preventDefault();
        this.parentElement.remove();
    });
}