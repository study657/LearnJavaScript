// function start(){
//     setInterval(timer, 1000);
// };

// function timer(){
//     let test = document.getElementById('test');
//     test.value = Number(test.value) + 1;
// };




// function start(){
//     timerId  = setInterval(timer, 1000);
// };

// function stop(){
//     clearInterval(timerId);
// };

// function timer(){
//     let test = document.getElementById('test');
//     test.value = Number(test.value) + 1;
// };




// let elem        = document.getElementById('elem');
// let buttonStart = document.getElementById('button-start');
// let buttonStop  = document.getElementById('button-stop');

// buttonStart.addEventListener('click', start);
// buttonStop.addEventListener('click', stop);

// let id;
// function start(){
//     id = setInterval(function(){
//         elem.innerHTML = Number(elem.innerHTML) + 1;
//     }, 1000);
    
//     this.disabled = true;
//     buttonStop.disabled = false;
// };

// function stop(){
//     clearInterval(id);

//     this.disabled = true;
//     buttonStart.disabled = false;
// };




// let elem    = document.getElementById('elem');
// let button  = document.getElementById('button');
// let id;

// button.addEventListener('click', start);

// function start(){
//     id = setInterval(function(){
//         elem.innerHTML = Number(elem.innerHTML) + 1;
//     }, 1000);

//     button.removeEventListener('click', start);
//     button.addEventListener('click', stop);

//     this.innerHTML = 'stop';
// };


// function stop(){
//     clearInterval(id);

//     button.removeEventListener('click', stop);
//     button.addEventListener('click', start);

//     button.innerHTML = 'start';
// };





// // Метод setTimeout и рекурсия

// let test    = document.getElementById('test');

// function timer(){
//     test.value = Number(test.value) + 1;


//     if(test.value < 10){
//         setTimeout(timer, 1000);
//     }
// };




// // Легкий слайдер текста рандомно

// let texts   = ['text1', 'text2', 'text3', 'text4', 'text5'];
// let elem    = document.querySelector('#elem');
// let i       = 1;

// elem.innerHTML = texts[0];
// setInterval(function(){
//     elem.innerHTML = texts[i];
//     i++;

//     if(i == texts.length){
//         i = 0;
//     }
// }, 1000);





// // Легкий слайдер текста по кнопкам

// let elem    = document.querySelector('#elem');
// let prev    = document.querySelector('#prev');
// let next    = document.querySelector('#next');
// let texts   = ['text1', 'text2', 'text3', 'text4', 'text5'];
// let i       = 0;

// elem.innerHTML = texts[i];

// next.addEventListener('click', function(){
//     i++;
//     if(i == texts.length){
//         i = 0;
//     }
//     elem.innerHTML = texts[i];
// });
// prev.addEventListener('click', function(){
//     i--;
//     if(i == -1){
//         i = texts.length - 1;
//     }
//     elem.innerHTML = texts[i];
// });




// // Легкий слайдер текста по кнопкам улучшенная модель, чтобы не засорять переменными глобально в коде

// initSlider(['text1', 'text2', 'text3', 'text4', 'text5'], '#slider1');
// initSlider(['text6', 'text7', 'text8', 'text9', 'text10'], '#slider2');

// function initSlider(texts, selector){
//     let parrent = document.querySelector(selector);
//     let elem    = parrent.querySelector('.elem');
//     let prev    = parrent.querySelector('.prev');
//     let next    = parrent.querySelector('.next');
//     let i       = 0;

//     elem.innerHTML = texts[i];

//     next.addEventListener('click', function(){
//         i++;
//         if(i == texts.length){
//             i = 0;
//         }
//         elem.innerHTML = texts[i];
//     });
//     prev.addEventListener('click', function(){
//         i--;
//         if(i == -1){
//             i = texts.length - 1;
//         }
//         elem.innerHTML = texts[i];
//     });
// };















































// // 1. Создайте отсчет от 0 до бесконечности:

// function go(){
//     let text    = document.querySelector('#text');
//     let i = 2;

//     text.innerHTML = 1;
//     setInterval(function(){
//         text.innerHTML = i++;
//     }, 1000);
// };




// // 2. Создайте отсчет с кнопкой остановки:

// let text            = document.querySelector('#text');
// let startButton     = document.querySelector('#start-button');
// let stopButton      = document.querySelector('#stop-button');
// let i               = 1;
// let id;

// text.innerHTML = 0;
// function start(){
//     id = setInterval(function(){
//         text.innerHTML = i++;
//     }, 1000);

//     startButton.disabled = true;
//     stopButton.disabled  = false;
// };

// function stop(){
//     clearInterval(id);

//     startButton.disabled = false;
//     stopButton.disabled  = true;
// };




// // 3. Создайте тикающие часики:

// let clock   = document.querySelector('#clock');

// function start(){
//     let date = new Date();
//     clock.innerHTML = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());

//     function addZero(num){
//         if(num <= 9){
//             num = '0' + num;
//         }
//         return num;
//     };

//     setTimeout(start, 1000);
// };




// // 4. Создайте таймер обратного отсчета:

// let text    = document.querySelector('#text');
// let stop    = document.querySelector('#stop');
// let input   = document.querySelector('#go');

// function go(){
//     text.innerHTML =  text.innerHTML - 1;
//     input.disabled = true;

//     if(text.innerHTML > 0){
//         setTimeout(go, 1000);
//     }else if(text.innerHTML == 0){
//         stop.innerHTML = 'Обратный отсчет завершен.';
//     }
// };




// // 5. Создайте простой слайдер:

// let images = ['images/1.png', 'images/2.png', 'images/3.png'];
// let img    = document.querySelector('#img');
// let i      = 1;

// setInterval(function(){
//     img.src = images[i];
//     i++;

//     if(i == images.length){
//         i = 0;
//     }
// }, 3000);




// // 6. Создайте карусель:

// let img1    = document.getElementById('img1');
// let img2    = document.getElementById('img2');
// let img3    = document.getElementById('img3');
// let button  = document.getElementById('go');

// function go(){
//     setInterval(function(){
//         let tmp = img1.src;

//         img1.src = img2.src;
//         img2.src = img3.src;
//         img3.src = tmp;
//     }, 1000);

//     button.disabled = true;
// };




// // 7. Создайте карусель:

// let img1            = document.getElementById('img1');
// let img2            = document.getElementById('img2');
// let img3            = document.getElementById('img3');
// let img4            = document.getElementById('img4');
// let img5            = document.getElementById('img5');
// let img6            = document.getElementById('img6');
// let startButton     = document.getElementById('start-button');
// let stopButton      = document.getElementById('stop-button');
// let id;

// function start(){
//     id = setInterval(function(){
//         let tmp = img1.src;

//         img1.src = img2.src;
//         img2.src = img3.src;
//         img3.src = img4.src;
//         img4.src = img5.src;
//         img5.src = img6.src;
//         img6.src = tmp;
//     }, 1000);

//     startButton.disabled = true;
//     stopButton.disabled = false;
// };

// function stop(){
//     clearInterval(id);

//     startButton.disabled = false;
//     stopButton.disabled = true;
// };




// 8. Создайте отсчет до полуночи:

function start(){
    let hours       = document.getElementById('hours');
    let minutes     = document.getElementById('minutes');
    let seconds     = document.getElementById('seconds');
    
    let date        = new Date();
    let futureDate  = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1,
        0,
        0,
        0
    );
    
    let diffDate    = Math.ceil((futureDate.getTime() - date.getTime()) / 1000);
    let hourses     = Math.floor(diffDate / (60 * 60));
    let diffHourses = diffDate % (60 * 60);
    let minuteses   = Math.floor(diffHourses / 60);
    let secondses   = diffHourses % 60;

    function addZero(num){
        if(num <= 9){
            num = '0' + num;
        }
        return num;
    };
    
    hours.innerHTML   = addZero(hourses);
    minutes.innerHTML = addZero(minuteses);
    seconds.innerHTML = addZero(secondses);

    setTimeout(start, 1000);
};
start();