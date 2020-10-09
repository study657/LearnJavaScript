// // Перетягиваемый элемент
// // Задача №1
// // Дан див для перетягивания. Сделайте так, чтобы в момент начала перетягивания его граница красилась в красный цвет.

// let elem        = document.getElementById('elem');
// elem.draggable  = true;

// elem.addEventListener('dragstart', function(){
//     elem.style.border   = '1px solid red';
// });




// // Задача №2
// // Дан див для перетягивания. Сделайте так, чтобы в момент окончания перетягивания его граница красилась в зеленый цвет.

// let elem        = document.getElementById('elem');
// elem.draggable  = true;

// elem.addEventListener('dragend', function(){
//     elem.style.border   = '1px solid green';
// });




// // Задача №3
// // Дан див для перетягивания. Сделайте так, чтобы в процессе перетягивания в консоль выводился '!' (каждый раз при срабатывании события).

// let elem        = document.getElementById('elem');
// elem.draggable  = true;

// elem.addEventListener('drag', function(){
//     console.log('!');
// });














// // Принимающий элемент
// // Задача №4
// // Дан элемент для перетягивания и принимающий див. Сделайте так, чтобы по дропу граница принимающего дива красилась в красный цвет.

// let elem        = document.getElementById('elem');
// let parent      = document.getElementById('parent');
// elem.draggable  = true;

// elem.addEventListener('drag', function(){

// });

// parent.addEventListener('dragover', function(event){
//     event.preventDefault();
// });

// parent.addEventListener('drop', function(){
//     this.style.border       = '2px solid green';
// });




// // Задача №5
// // Дан элемент для перетягивания и принимающий див. Сделайте так, чтобы при движении элемента над принимающем дивом граница принимающего дива в виде точечек.

// let elem        = document.getElementById('elem');
// let parent      = document.getElementById('parent');
// elem.draggable  = true;

// elem.addEventListener('dragstart', function(){
//     parent.style.border = '2px dotted green';
// });




// // Задача №6
// // Дан элемент для перетягивания и принимающий див. Сделайте так, чтобы при вхождении элемента в границы принимающего дива в текст принимающего дива записывался '!', а при уходе - этот текст убирался.

// let elem        = document.getElementById('elem');
// let parent      = document.getElementById('parent');
// elem.draggable  = true;

// elem.addEventListener('dragstart', function(){
    
// });

// parent.addEventListener('dragenter', function(){
//     parent.innerHTML    = '!';
// });

// parent.addEventListener('dragleave', function(){
//     parent.innerHTML    = '';
// });




// // Практика
// // Задача №7
// // Дан див для перетягивания и принимающий див. Сделайте так, чтобы в процессе перетягивания граница принимающего становилась не сплошной, а в виде точечек.

// let elem        = document.getElementById('elem');
// let parent      = document.getElementById('parent');
// elem.draggable  = true;

// elem.addEventListener('dragstart', function(){
//     parent.style.border     = '2px dotted green';
// });

// elem.addEventListener('dragend', function(){
//     parent.style.border     = '2px solid black';
// });




// Задача №8
// Перемещение элемента мышкой
// Давайте сделаем так, чтобы можно было перемещать элемент мышкой по окну браузера

let elem        = document.getElementById('elem');
elem.draggable  = true;
let correctionX = 0;
let correctionY = 0;

elem.addEventListener('dragstart', function(event){
    correctionX = event.offsetX;
    correctionY = event.offsetY;
});

elem.addEventListener('dragend', function(event){
    this.style.left     = (event.pageX - correctionX) + 'px';
    this.style.top      = (event.pageY - correctionY) + 'px';
});