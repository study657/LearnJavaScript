// // Получение координат у элемента
// let elem    = document.getElementById('elem');

// elem.addEventListener('mousemove', function(event){
//     let x = event.clientX;
//     let y = event.clientY;

//     elem.innerHTML = x + ':' + y;
// });












// // 1. Получение координат у окна браузера

// window.addEventListener('mousemove', function(event){
//     let coordinats  = document.getElementById('coordinats');
//     let coordinatX  = event.clientX;
//     let coordinatY  = event.clientY;

//     coordinats.innerHTML = 'X: ' + coordinatX + ' Y: ' + coordinatY;
// });




// // 2. Повторите поведение страницы по данному образцу:

// window.addEventListener('click', function(event){
//     let show        = document.getElementById('show');
//     let coordinatX  = event.clientX;
//     let coordinatY  = event.clientY;

//     show.style.left = coordinatX + 'px';
//     show.style.top  = coordinatY + 'px';
// });




// // 3. Повторите поведение страницы по данному образцу:

// window.addEventListener('click', function(event){
//     let show        = document.getElementById('show');
//     let coordinatX  = event.clientX;
//     let coordinatY  = event.clientY;
//     let style       = getComputedStyle(show);
//     let width       = style.width;
//     let height      = style.height;

//     show.style.left = coordinatX - (parseInt(width) / 2) + 'px';
//     show.style.top  = coordinatY - (parseInt(height) / 2) + 'px';
// });




// // На клавиши
// // 4. Повторите поведение страницы по данному образцу:

// let simbol  = document.getElementById('simbol');

// simbol.addEventListener('keypress', function(event){
//     let show    = document.getElementById('show');
//     let code    = event.keyCode;

//     show.innerHTML = code;
// });




// // 5. Повторите поведение страницы по данному образцу:

// let simbol  = document.getElementById('simbol');

// simbol.addEventListener('keypress', function(event){
//     let show    = document.getElementById('show');
//     let code    = event.keyCode;
//     let key     = String.fromCharCode(code);

//     show.innerHTML = key;
// });




// // 6. Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl

// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(event){
//     let pressCtrl = event.ctrlKey;

//     if(pressCtrl == true){
//         elem.style.color = 'red';
//     }
// });




// // 7. Дан элемент. 
// // Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'

// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(event){
//     let ctrlPress   = event.ctrlKey;
//     let altPress    = event.altKey;
//     let shiftPress  = event.shiftKey;

//     if(ctrlPress == true){
//         elem.innerHTML = 1;
//     }else if(altPress == true){
//         elem.innerHTML = 2;
//     }else if(shiftPress == true){
//         elem.innerHTML = 3;
//     }
// });




// 8. Дан инпут. В него вводится текст и нажимается клавиша Enter (ее код имеет номер 13). 
// Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось

let enter       = document.getElementById('enter');
let soderzimoe  = document.getElementById('soderzimoe');

enter.addEventListener('keypress', function(event){
    let enterCode  = event.keyCode;
    
    if(enterCode == 13){
        soderzimoe.innerHTML = enter.value;
        enter.value = '';
    }
});