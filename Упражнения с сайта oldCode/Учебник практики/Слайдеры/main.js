// // Слайдер текста на JavaScript
// // В данном разделе мы с вами займемся созданием слайдеров. Начнем с самых простых и будем постепенно усложнять.
// // Для начала сделаем слайдер текста. Этот слайдер будет представлять собой див, в котором каждую секунду будет меняться текст:
// // <div id="slider"></div>
// // Тексты для слайдера мы будем хранить в массиве:
// // let texts = ['text1', 'text2', 'text3'];
// // Алгоритм решения будет следующий: нужно запустить таймер, который каждую секунду будет вставлять в наш див новый элемент массива - сначала первый, потом второй, потом третий, 
// // а потом снова первый и так далее по кругу.
// // Задача №1
// // Реализуйте описанный слайдер.

// let slider      = document.getElementById('slider');
// let texts       = ['text1', 'text2', 'text3'];
// let curr        = 0;

// setInterval(function(){
//     slider.innerHTML    = texts[curr];
//     curr++;
//     if(curr == texts.length){
//         curr = 0;
//     }
// }, 1000);














// // Слайдер текста со стрелками на JavaScript
// // Задача №1
// // Реализуйте описанный слайдер. Сделайте так, чтобы тексты ходили по кругу.

// let slider      = document.getElementById('slider');
// let left        = document.getElementById('left');
// let right       = document.getElementById('right');
// let texts       = ['text1', 'text2', 'text3'];
// let curr        = 0;

// slider.innerHTML    = texts[curr];
// left.addEventListener('click', function(){
//     curr--;
//     if(curr == -1){
//         curr = texts.length - 1;
//     }
//     slider.innerHTML    = texts[curr];
// });

// right.addEventListener('click', function(){
//     curr++;
//     if(curr == texts.length){
//         curr = 0;
//     }
//     slider.innerHTML    = texts[curr];
// });




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы тексты не ходили по кругу, а просто не прокручивались дальше по достижению крайнего правого или левого положения.

// let slider      = document.getElementById('slider');
// let left        = document.getElementById('left');
// let right       = document.getElementById('right');
// let texts       = ['text1', 'text2', 'text3'];
// let curr        = 0;

// slider.innerHTML    = texts[curr];
// left.addEventListener('click', leftButton);
// right.addEventListener('click', rightButton);

// function rightButton(){
//     if(curr == texts.length - 1){
//         right.removeEventListener('click', rightButton);
//     }else{
//         curr++;
//         slider.innerHTML    = texts[curr];
//         left.addEventListener('click', leftButton);
//     }
// };

// function leftButton(){
//     if(curr == 0){
//         left.removeEventListener('click', leftButton);
//     }else{
//         curr--;
//         slider.innerHTML    = texts[curr];
//         right.addEventListener('click', rightButton);
//     }
// };














// // Слайдер картинок через массив на JavaScript
// // Давайте теперь сделаем слайдер картинок. Пусть в HTML коде у нас дан тег img:
// // <img id="slider" src="">
// // Пусть также у нас дан массив картинок:
// // let texts = ['1.png', '2.png', '3.png'];
// // Давайте сделаем так, чтобы каждую секунду в теге img появлялась новая картинка из нашего массива.
// // Задача №1
// // Реализуйте описанный слайдер. Сделайте так, чтобы картинки ходили по кругу.

// let slider      = document.getElementById('slider');
// let pictures    = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
// let curr        = 1;

// setInterval(function(){
//     slider.src  = 'images/' + pictures[curr];
//     curr++;
//     if(curr == pictures.length){
//         curr = 0;
//     }
// }, 2000);




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы над картинкой также появились стрелки вперед и назад. То есть слайдер будет сам проматываться таймером, но при желании юзер также сможет промотать его ссылками.

// let slider      = document.getElementById('slider');
// let left        = document.getElementById('left');
// let right       = document.getElementById('right');
// let pictures    = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
// let curr        = 1;

// setInterval(function(){
//     slider.src  = 'images/' + pictures[curr];
//     curr++;
//     if(curr == pictures.length){
//         curr = 0;
//     }
// }, 2000);

// right.addEventListener('click', rightButton);
// left.addEventListener('click', leftButton);

// function rightButton(){
//     curr++;
//     slider.src  = 'images/' + pictures[curr];
//     if(curr == pictures.length){
//         curr = 0;
//     }
// };

// function leftButton(){
//     curr--;
//     slider.src  = 'images/' + pictures[curr];
//     if(curr == -1){
//         curr = pictures.length - 1;
//     }
// };














// Слайдер картинок через HTML на JavaScript
// Давайте сделаем так, чтобы по заходу на страницу показывалась первая картинка, затем через секунду - вторая, и так далее по кругу.
// Задача №1
// Реализуйте описанный слайдер.

let slider      = document.querySelectorAll('#slider img');
let curr        = 1;
slider[0].classList.remove('active');

setInterval(function(){
    for(let i = 0; i < slider.length; i++){
        slider[i].classList.add('active');
    }
    slider[curr].classList.remove('active');
    curr++;

    if(curr == slider.length){
        curr = 0;
    }
}, 2000);