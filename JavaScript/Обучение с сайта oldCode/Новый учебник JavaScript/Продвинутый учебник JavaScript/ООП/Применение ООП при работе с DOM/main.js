// // Работа с элементами
// // 1. Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции. Класс должен работать следующим образом:

// // var elem = new Elem('селектор');

// // elem.html('!'); //запишет в текст элемента '!'
// // elem.append('!'); //запишет в начало элемента '!'
// // elem.prepend('!'); //запишет в конец элемента '!'
// // elem.attr('class', 'www'); //запишет в атрибут class значение www

// // //Должны работать цепочки методов:
// // elem.html('hello').append('!').prepend('!');
// // elem.attr('class', 'www').attr('title', 'hello');

// class Elem{
//     constructor(selector){
//         this.elem   = document.querySelector(selector);
//     };

//     html(text){
//         this.elem.innerHTML = text;
//         return this;
//     };

//     append(text){
//         this.elem.innerHTML = text + this.elem.innerHTML;
//         return this;
//     };

//     prepend(text){
//         this.elem.innerHTML = this.elem.innerHTML + text;
//         return this;
//     };

//     attr(name, value){
//         this.elem.setAttribute(name, value);
//         return this;
//     };
// };

// let elem    = new Elem('#elem');
// // elem.html('Привет'); //запишет в текст элемента '!'
// // elem.append('!'); //запишет в начало элемента '!'
// // elem.prepend('!'); //запишет в конец элемента '!'
// // elem.attr('class', 'www'); //запишет в атрибут class значение www
// elem.html('hello').append('!').prepend('!');
// elem.attr('class', 'www').attr('title', 'hello');




// // 2. Модифицируйте класс Elem из предыдущей задачи так, чтобы он мог работать не только с одним элементом, но и одновременно с группой, как это сделано в jQuery. 
// // Кроме того: реализуйте еще и метод each, который будет работать также, как и each из jQuery.

// class Elem{
//     constructor(selector){
//         this.elem   = document.querySelectorAll(selector);
//     };

//     html(text){
//         for(let i = 0; i < this.elem.length; i++){
//             this.elem[i].innerHTML = text;
//         }
//         return this;
//     };

//     append(text){
//         for(let i = 0; i < this.elem.length; i++){
//             this.elem[i].innerHTML = text + this.elem[i].innerHTML;
//         }
//         return this;
//     };

//     prepend(text){
//         for(let i = 0; i < this.elem.length; i++){
//             this.elem[i].innerHTML = this.elem[i].innerHTML + text;
//         }
//         return this;
//     };

//     attr(name, value){
//         for(let i = 0; i < this.elem.length; i++){
//             this.elem[i].setAttribute(name, value);
//         }
//         return this;
//     };

//     each(func){
//         this.elem.forEach(func);
//         return this;
//     };
// };

// let elem    = new Elem('#elem');

// // elem.html('Привет'); //запишет в текст элемента '!'
// // elem.append('!'); //запишет в начало элемента '!'
// // elem.prepend('!'); //запишет в конец элемента '!'
// // elem.attr('class', 'www'); //запишет в атрибут class значение www
// elem.html('hello').append('!').prepend('!');
// elem.attr('class', 'www').attr('title', 'hello');
// elem.each(function(elem){
//     alert(elem.classList.contains('www'));
// });




// Практика
// 3. Реализуйте класс Rectangle, о котором я рассказываю в видео в теоретической части урока. У него должны быть следующие свойства: ширина width, высота height. 
// Также у него должны быть следующие методы: получить ширину getWidth, установить ширину setWidth, получить высоту getHeight, установить высоту setHeight.

class Rectangle{
    constructor(width, height){
        this.elem   = document.createElement('div');

        this.setWidth(width);
        this.setHeight(height);
        this.elem.style.border      = '3px solid red';

        document.body.append(this.elem);
    };

    setWidth(width){
        this.elem.style.width       = width + 'px';
    };

    setHeight(height){
        this.elem.style.height       = height + 'px';
    };

    getWidth(){
        return parseInt(this.elem.style.width);
    };

    getHeight(){
        return parseInt(this.elem.style.height);
    };
};

let elem1       = new Rectangle(100, 100);
let elem2       = new Rectangle(200, 400);
elem2.setWidth(300);
console.log(elem2.getHeight());
console.log(elem2.getWidth());