// // Нахождение элементов по родственным связям
// // Потомки элементов
// // firstElementChild lastElementChild children
// // Задача №1
// // Дан элемент #elem:
// // <ul id="elem">
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // </ul>
// // Найдите первого потомка этого элемента и сделайте его текст красного цвета.

// let elem        = document.querySelector('#elem');
// let firstElem   = elem.firstElementChild;
// firstElem.style.color   = 'red';




// // Задача №2
// // Дан элемент #elem:
// // <ul id="elem">
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // </ul>
// // Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

// let elem        = document.querySelector('#elem');
// let lastElem    = elem.lastElementChild;
// lastElem.style.color    = 'red';




// // Задача №3
// // Дан элемент #elem:
// // <ul id="elem">
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // </ul>
// // Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

// let elem        = document.querySelector('#elem');
// let elems       = elem.children;
// for(let elem of elems){
//     elem.innerHTML += '!';
// }




// // Родители элементов
// // parentElement
// // Задача №4
// // Дан элемент #elem:
// // <div>
// // 	<ul>
// // 		<li>text</li>
// // 		<li>text</li>
// // 		<li id="elem">text</li>
// // 		<li>text</li>
// // 		<li>text</li>
// // 	</ul>
// // </div>
// // Найдите его родителя и задайте ему красную границу.

// let elem    = document.getElementById('elem');
// let parent  = elem.parentElement;
// parent.style.border = '1px solid red';




// // Задача №5
// // Дан элемент #elem:
// // <div>
// // 	<ul>
// // 		<li>text</li>
// // 		<li>text</li>
// // 		<li id="elem">text</li>
// // 		<li>text</li>
// // 		<li>text</li>
// // 	</ul>
// // </div>
// // Найдите его родителя его родителя и задайте ему красную границу.

// let elem    = document.getElementById('elem');
// let parent1 = elem.parentElement;
// let parent2 = parent1.parentElement;
// parent2.style.border = '3px solid red';




// // Поиск всех родителей
// // closest
// // Задача №6
// // Дан элемент:
// // <header>
// // 	<div>
// // 		<p>
// // 			<span id="elem"></span>
// // 		</p>
// // 	</div>
// // </header>
// // Найдите ближайшего родителя этого элемента, являющегося тегом div.

// let elem    = document.getElementById('elem');
// let div     = elem.closest('div');
// console.log(div);




// // Задача №7
// // Дан элемент:
// // <header>
// // 	<div class="www">
// // 		<p class="www">
// // 			<span id="elem"></span>
// // 		</p>
// // 	</div>
// // </header>
// // Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.

// let elem    = document.getElementById('elem');
// let p       = elem.closest('.www');
// console.log(p);




// // Поиск соседей
// // previousElementSibling nextElementSibling
// // Задача №8
// // Дан элемент #elem:
// // <ul>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li id="elem">text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // </ul>
// // Найдите его соседа сверху и добавьте ему в конец текст '!'.

// let elem    = document.getElementById('elem');
// let sibling = elem.previousElementSibling;
// sibling.innerHTML += '!';




// // Задача №9
// // Дан элемент #elem:
// // <ul>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li id="elem">text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // </ul>
// // Найдите его соседа снизу и добавьте ему в конец текст '!'.

// let elem    = document.getElementById('elem');
// let sibling = elem.nextElementSibling;
// sibling.innerHTML += '!';




// // Задача №10
// // Дан элемент #elem:
// // <ul>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li id="elem">text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // </ul>
// // Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.

// let elem    = document.getElementById('elem');
// let sibling = elem.nextElementSibling.nextElementSibling;
// sibling.innerHTML += '!';




// // Задача №11
// // Дан элемент #elem:
// // <ul>
// // 	<li>text1</li>
// // 	<li>text2</li>
// // 	<li id="elem">text3</li>
// // 	<li>text4</li>
// // 	<li>text5</li>
// // </ul>
// // Поменяйте местами текст его соседа сверху и текст его соседа снизу.

// let elem            = document.getElementById('elem');
// let previousElem    = elem.previousElementSibling;
// let nextElem        = elem.nextElementSibling;
// let text            = previousElem.innerHTML;
// previousElem.innerHTML = nextElem.innerHTML;
// nextElem.innerHTML     = text;














// // Другие полезные методы для поиска элементов
// // Получение по id
// // getElementById
// // Задача №1
// // Дан элемент #elem:
// // <div id="elem"></div>
// // Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.

// let elem            = document.getElementById('elem');
// elem.innerHTML      = 'Какой-нибудь текст';




// // Получение по имени тега
// // getElementsByTagName
// // Задача №2
// // Дан список:
// // <ul>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // </ul>
// // Получите все теги li по имени тега и сделайте их текст красного цвета.

// let elems   = document.getElementsByTagName('li');

// for(let elem of elems){
//     elem.style.color = 'red';
// }




// // Получение по имени класса
// // getElementsByClassName
// // Задача №3
// // Даны элементы:
// // <p class="www">elem 1</p>
// // <p class="www">elem 2</p>
// // <p class="www">elem 3</p>
// // Получите эти элементы по имени класса и сделайте их текст красного цвета.

// let elems   = document.getElementsByClassName('www');

// for(let elem of elems){
//     elem.style.color = 'red';
// }














// // Поиск элементов внутри другого элемента
// // Задача №1
// // Дан элемент #parent:
// // <div id="parent">
// // 	<p class="www">text</p>
// // 	<p class="www">text</p>
// // 	<p class="www">text</p>
// // 	<p class="ggg">text</p>
// // 	<p class="ggg">text</p>
// // 	<p class="ggg">text</p>
// // </div>
// // let parent = document.querySelector('#parent');
// // Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.

// let parent  = document.querySelector('#parent');
// let elems1  = parent.getElementsByClassName('www');
// let elems2  = parent.getElementsByClassName('ggg');
// console.log(elems1);
// console.log(elems2);