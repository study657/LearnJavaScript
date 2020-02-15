// На величину границы
// // 1. Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(elem.clientTop);
// });




// // 2. Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(elem.clientLeft);
// });




// // На полный размер элемента
// // 3. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(elem.offsetWidth);
// });




// // 4. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(elem.offsetHeight);
// });




// // На размер элемента без границ, но с padding
// // 5. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(elem.clientWidth);
// });




// // 6. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(elem.clientHeight);
// });




// // Работа с getComputedStyle
// // 7. Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     let style = getComputedStyle(elem);
//     console.log(style.width);
//     console.log(style.height);
// });




// // Прокрутка элемента
// // 8. Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен сверху

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(elem.scrollTop);
// });




// // 9. Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен слева

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(elem.scrollLeft);
// });




// // 10. Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px сверху

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     elem.scrollTop = 100;
//     console.log(elem.scrollTop);
// });




// // 11. Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его на 100px вниз от текущего положения

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     elem.scrollTop += 100;
//     console.log(elem.scrollTop);
// });




// // Прокрутка элемента
// // 12. Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(elem.scrollHeight);
// });




// // 13. Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(elem.scrollWidth);
// });




// // 14. Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     let total_height = elem.scrollHeight;
//     let neded_heigth = total_height - 100;
//     elem.scrollTop   = neded_heigth;
// });




// // Прокрутка страницы
// // 15. Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по вертикали

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(pageYOffset);
// });




// // 16. Дана страница с горизонтальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     console.log(pageXOffset);
// });




// // Прокрутка страницы
// // 17. Дана страница с горизонтальной и вертикальной полосами прокрутки. По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     elem.scrollTo(300, 500);
// });




// // 18. Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите на 300px вниз от текущего положения

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     elem.scrollTo(0, 500);
// });









// // Практика
// // 19. По нажатию на кнопку прокрутите страницу до самого низа

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     elem.scrollTo(0, elem.clientHeight);
// });




// // 20. По нажатию на кнопку прокрутите страницу на 400px от текущего положения

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     elem.scrollBy(0, 400);
// });




// // 21. По нажатию на кнопку проверьте, прокручена ли страница до самого низа. Если это так - прокрутите ее в положение 100px от верхнего края

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// btn.addEventListener('click', function(){
//     let niz = elem.clientHeight;
    
//     if(niz == 660){
//         elem.scrollTo(0, 100);
//     }
// });




// 22. Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза

let elem    = document.getElementById('elem');
let btn     = document.getElementById('button');

btn.addEventListener('click', function(){
    let width   = elem.offsetWidth;
    let height  = elem.offsetHeight;

    elem.style.width = width * 2 + 'px';
    elem.style.height = height * 2 + 'px';
});