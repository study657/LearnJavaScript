// // Урок №1 
// // 1. Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут

// let task    = document.getElementById('task');
// let cls     = document.getElementsByClassName('cls');
// let sum     = document.getElementById('sum');
// console.log(sum.value);

// task.addEventListener('click', function(){
//     let result = 0;
//     for(let i = 0; i < cls.length; i++){
//         result += Number(cls[i].value);
//     }
//     sum.value = result;
// });




// // 2. Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result"

// let task    = document.getElementById('task');

// task.addEventListener('click', function(){
//     let num     = document.querySelectorAll('.num');
//     let result  = document.getElementById('result');
//     let sum = 0;

//     for(let i = 0; i < num.length; i++){
//         sum += Number(num[i].value);
//     }
//     result.innerHTML = sum;
// });




// // 3. Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа

// let num     = document.getElementById('num');
// let result  = document.getElementById('result');

// // // РЕШЕНИЕ ПОД ПОИСК СУММЫ ЦИФР САМОГО ВВЕДЕННОГО ЧИСЛА, Т.Е. НАПИСАЛИ 5, ЗНАЧИТ СЧИТАТЬ БУДЕТ ТАК: 1+2+3+4+5
// // num.addEventListener('mouseout', function(){
// //     let number = Number(this.value);
// //     let sum    = 0;

// //     for(let i = 0; i <= number; i++){
// //         sum += i;
// //     }
// //     result.innerHTML = sum;
// // });


// // // РЕШЕНИЕ ПОД ПОИСК СУММЫ ЦИФР ВВЕДЕННОГО ЧИСЛА, Т.Е. НАПИСАЛИ 567, ЗНАЧИТ СЧИТАТЬ БУДЕТ ТАК: 5+6+7
// num.addEventListener('mouseout', function(){
//     let str = num.value;
//     let arr = str.split('');
//     let sum = 0;
    
//     for(let i = 0; i < arr.length; i++){
//         sum += Number(arr[i]);
//     }
//     result.innerHTML = sum;
// });




// // 4. Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество)

// let num     = document.getElementById('num');
// let result  = document.getElementById('result');

// function getArithmeticMean(){
//     let str = num.value;
//     let arr = str.split(',');
//     let sum = 0;
    
//     for(let i = 0; i < arr.length; i++){
//         sum += Number(arr[i]);
//     }
//     result.innerHTML = sum / arr.length;
// };




// // 5. Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты

// let input   = document.getElementById('input');
// let name    = document.querySelectorAll('.name');
// let arr;

// input.addEventListener('mouseout', function(){
//     arr = input.value.split(' ');
    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j <= name.length; j++){
//             name[i].value = arr[i];
//         }
//     }
// });




// // 6. Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. 
// // Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте)

// // ПЕРВЫЙ СПОСОБ РЕШЕНИЯ
// // let elem    = document.getElementById('input');
// // let arr;

// // elem.addEventListener('blur', function(){
// //     arr = elem.value.split(' ');

// //     let surname     = arr[0][0].substr(0, 1).toUpperCase() + arr[0].substr(1);
// //     let name        = arr[1][0].substr(0, 1).toUpperCase() + arr[1].substr(1);
// //     let middleName  = arr[2][0].substr(0, 1).toUpperCase() + arr[2].substr(1);

// //     elem.value = surname + ' ' + name + ' ' + middleName;
// // });


// // ВТОРОЙ СПОСОБ РЕШЕНИЯ
// let elem    = document.getElementById('input');

// function bigFirstLetter(str){
//     let arr = str.split(' ');

//     for(let i = 0; i < arr.length; i++){
//         arr[i]      = arr[i].split('');
//         arr[i][0]   = arr[i][0].toUpperCase();
//         arr[i]      = arr[i].join('');
//     }
//     str = arr.join(' ');
//     return str;
// };

// elem.addEventListener('blur', function(){
//     elem.value = bigFirstLetter(elem.value);
// });




// // 7. Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте

// let num     = document.getElementById('num');
// let result  = document.getElementById('result');

// num.addEventListener('blur', function(){
//     let arr = num.value.split(' ');
    
//     result.innerHTML = arr.length;
// });




// // 8. Дан инпут. В него вводится текст. По потери фокуса узнайте количество символов в самом длинном слове в этом тексте

// let elem    = document.getElementById('num');
// let result  = document.getElementById('result');

// num.addEventListener('blur', function(){
//     let max     = 0;
//     let arr     = elem.value.split(' ');
//     let arr2    = [];

//     for(let i = 0; i < arr.length; i++){
//         let num     = 0;
//             arr2    = arr[i].split('');
//         for(let j = 0; j < arr2.length; j++){
//             num += 1;
//             if(num > max){
//                 max = num;
//             }
//         }
//     }
//     result.innerHTML = max;
// });




// // 9. Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31

// let elem    = document.getElementById('num');

// elem.addEventListener('blur', function(){
//     let arr = elem.value.split('.').reverse().join('-');
//     elem.value = arr;
// });




// // 10. Дан инпут. В него вводится год рождения пользователя. По нажатию на кнопку выведите в абзац ниже сколько пользователю лет

// let num     = document.getElementById('num');
// let btn     = document.getElementById('btn');
// let result  = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let date        = new Date();
//     let nowDate     = date.getTime();

//     let personBirthDay = num.value.split('.').reverse().join('-');

//     let datePersonMiliec    = Date.parse('' + personBirthDay);
//     let diffMillisec        = nowDate - datePersonMiliec;
//     let yearsPerson         = Math.floor(diffMillisec / (1000 * 60 * 60 * 24 * 365));
   
//     result.innerHTML = 'Ваш возраст: ' + yearsPerson;
// });




// // 11. Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату

// let num     = document.getElementById('num');
// let text    = document.getElementById('text');

// num.addEventListener('blur', function(){
//     let Weekdays    = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     let setDate     = num.value.split('.').reverse().join(',');
//     let date        = new Date(setDate);
//     let day         = date.getDay();

//     text.innerHTML = Weekdays[day];
// });




// // 12. Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам)

// let num     = document.getElementById('num');
// let btn     = document.getElementById('but');

// btn.addEventListener('click', function(){
//     let arr1     = num.value.split('');
//     let arr2     = num.value.split('').reverse();
//     let flag     = false;

//     for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] == arr2[i]){
//             flag = true;
//         }
//     }
//     if(flag == true){
//         console.log('Слово читается с конца и с начала одинаково!');
//     }else{
//         console.log('Слово читается с конца и с начала поразному!');
//     }
// });




// // 13. Дан инпут. В него вводится число. Проверьте по вводу, что это число содержит внутри себя цифру 3

// let num     = document.getElementById('num');

// // // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ ПО ВВОДУ!
// // num.addEventListener('keydown', function(event){
// //     let code = event.keyCode;

// //     if(code == 51){
// //         console.log('Это число будет содержать внутри себя цифру 3');
// //     }
// // });


// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ

// num.addEventListener('click', function(){
//     let arr     = num.value.split('');
//     let flag    = false;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == '3'){
//             flag = true;
//             break;
//         }
//     }
//     if(flag == true){
//         alert('Число содержит в себе цифру 3');
//     }else{
//         alert('Число НЕ содержит в себе цифру 3');
//     }
// });




// // 14. Даны N абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер

// let p       = document.getElementsByTagName('p');
// let btn     = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     for(let i = 0; i < p.length; i++){
//         p[i].innerHTML += ' ' + (i + 1);
//     }
// });




// // 15. Даны N абзацев с числами. По нажатию на кнопку выведите эти числа в инпут через запятую в порядке возрастания

// let p       = document.getElementsByTagName('p');
// let btn     = document.getElementById('btn');
// let num     = document.getElementById('num');

// btn.addEventListener('click', function(){
//     let arr = [];
//     for(let i = 0; i < p.length; i++){
//         arr.push(Number(p[i].innerHTML));
//     }
    
//     arr.sort(checkNumbers);
//     function checkNumbers(a, b){
//         if(a > b){
//             return 1;
//         }
//         if(a <= b){
//             return -1;
//         }
//     };
//     num.value = arr.join(',');
// });




// // 16. Даны ссылки. По загрузке страницы добавьте в конец каждой ссылки ее href в круглых скобках

// let links = document.getElementsByTagName('a');

// for(let i = 0; i < links.length; i++){
//     links[i].innerHTML += '(' + links[i].href + ')';
// }




// // 17. Даны ссылки. По загрузке страницы, если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;)

// let links   = document.getElementsByTagName('a');

// for(let i = 0; i < links.length; i++){

//     if(links[i].href.indexOf('http://') == 0){
//         links[i].innerHTML = '&rarr;' + links[i].innerHTML;
//     }
// }




// // 18. Даны N абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится

// let p   = document.getElementsByTagName('p');

// for(let i = 0; i < p.length; i++){
//     p[i].addEventListener('click', square);
// }

// function square(){
//     this.innerHTML = Math.pow(this.innerHTML, 2);
// };




// // 19. Даны картинки. По нажатию на любую картинку увеличьте ее в 2 раза

// let img     = document.querySelectorAll('#img');

// for(let i = 0; i < img.length; i++){
//     img[i].addEventListener('click', enlargingImage);
// }

// function enlargingImage(){
//     this.height   = this.height * 2;
// };




// // 20. Даны картинки. По первому нажатию на любую картинку увеличьте ее в 2 раза. По второму нажатию - уменьшите обратно

// let img     = document.querySelectorAll('#img');

// for(let i = 0; i < img.length; i++){
//     img[i].addEventListener('click', enlargingImage);
// }

// function enlargingImage(){
//     this.height = this.height * 2;
//     this.removeEventListener('click', enlargingImage);
//     this.addEventListener('click', reducingImage);
// };

// function reducingImage(){
//     this.height = this.height / 2;
//     this.removeEventListener('click', reducingImage);
// };




// // 21. Даны N картинок размера 30px. По нажатию на картинку под ними эта картинка появляется размером в 50px

// let img     = document.querySelectorAll('#img');
// let task    = document.getElementById('task');

// for(let i = 0; i < img.length; i++){
//     img[i].addEventListener('click', showPictures);
// }

// function showPictures(){
//     task.src = this.src;
// };




// // 22. Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля

// let num     = document.getElementById('num');
// let cls     = document.querySelectorAll('.cls');

// cls[0].addEventListener('click', addPlus);

// function addPlus(){
//     num.value = Number(num.value) + 1;
// };

// cls[1].addEventListener('click', addMinus);

// function addMinus(){
//     num.value = Number(num.value) - 1;

//     if(num.value <= 0){
//         num.value = 0;
//     }
// };









// // Урок №2
// // 23. Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. 
// // Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный

// let input   = document.getElementsByTagName('input')[0];

// input.addEventListener('blur', function(){
//     if(input.value >= 1 && input.value <= 100){
//         input.style.color = 'green';
//     }else{
//         input.style.color = 'red';
//     }
// });




// // 24. Дан инпут. Выделите любой текст на странице. По окончанию выделения этот текст должен записаться в этот инпут

// let input   = document.querySelector('input');
// let p       = document.querySelector('p');

// p.addEventListener('mouseup', function(){
//     let selection   = window.getSelection().toString();
//     input.value     = selection;
// });




// // 25. Даны абзацы с числами. По нажатию на кнопку найдите абзац, в котором хранится максимальное число, и сделайте его красного цвета

// let p       = document.getElementsByTagName('p');
// let btn     = document.querySelector('button');

// btn.addEventListener('click', function(){
//     let arr     = [];
//     let nums    = [];
//     let maxNumber;
//     for(let i = 0; i < p.length; i++){
//         arr.push(p[i].innerHTML);
//     }
    
//     for(let i = 0; i < arr.length; i++){
//         nums.push(Number(arr[i].substr(5)));
//     }
    
//     nums.sort(sortNumss);
//     function sortNumss(a, b){
//         if(a > b){
//             return 1;
//         }
//         if(a <= b){
//             return -1;
//         }
//     }

//     for(let i = 0; i < nums.length; i++){
//         maxNumber = nums[i];
//     }
    
//     for(let i = 0; i < p.length; i++){
//         if(Number(arr[i].substr(5)) == maxNumber){
//             p[i].style.color = 'red';
//         }
//     }
// });




// // 26. Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам

// let p       = document.getElementsByTagName('p');
// let result  = document.getElementById('result');

// for(let i = 0; i < p.length; i++){
//     p[i].addEventListener('click', function(event){
//         let target = event.target;
//         let b = 1;

//         if(Boolean(target) == true){
//             result.value = Number(result.value) + b;
//         }
//     });
// }




// // 27. Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано

// let result      = document.getElementById('result');

// function start(){
//     setInterval(timer, 1000);

//     function timer(){
//         result.value = Math.pow(Number(result.value), 2);
//     };
// };




// // 28. Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут

// let input       = document.getElementsByTagName('input')[0];
// let button      = document.getElementsByTagName('button')[0];

// button.addEventListener('click', function(){
//     let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm';
//     let str     = '';
//     for(let i = 1; i <= 8; i++){
//         str += symbols.charAt(Math.floor(Math.random() * symbols.length));
//         input.value = str;
//     }
// });




// // 29. Модифицируйте предыдущую задачу так, чтобы был еще один инпут, в котором задается длина случайной строки

// let input       = document.getElementById('task');
// let button      = document.getElementById('btn');
// let lengthInp   = document.getElementById('length');


// button.addEventListener('click', function(){
//     let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm';
//     let str     = '';
//     for(let i = 1; i <= Number(lengthInp.value); i++){
//         str += symbols.charAt(Math.floor(Math.random() * symbols.length));
//         input.value = str;
//     }
// });




// // 30. Модифицируйте предыдущую задачу так, чтобы был еще один инпут, в котором задаются символы, из которых формируется эта случайна строка. 
// // Символы задаются без всяких разделитетей, в одну строку

// let task        = document.getElementById('task');
// let lengthInp   = document.getElementById('length');
// let symbols     = document.getElementById('symbols');
// let btn         = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     let str = '';
//     let symbl = symbols.value;
    
//     for(let i = 1; i <= Number(lengthInp.value); i++){
//         str += symbl.charAt(Math.floor(Math.random() * symbl.length));
//         task.value = str;
//     }
// });




// // 31. Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. 
// // Когда отсчет дойдет до нуля - он должен закончится

// let task    = document.getElementById('task');

// function func(){
//     let intId       = setInterval(timer, 1000);

//     let newP        = document.createElement('p');   
//     newP.innerHTML  = task.value;
//     document.body.appendChild(newP);

//     function timer(){
//         if(isNaN(task.value) == false){
//             newP.innerHTML = Number(newP.innerHTML) - 1;
//             if(newP.innerHTML == 0){
//                 clearInterval(intId);
//             }
//         }else{
//             alert('Вы ввели НЕ ЧИСЛО!');
//             clearInterval(intId);
//         }
//     };
// };




// // 32. Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот

// let text    = document.getElementById('text');

// setInterval(timerChangeColor, 1000);

// function timerChangeColor(){
//     if(text.classList.contains('notactive')){
//         text.classList.add('active');
//         text.classList.remove('notactive');
//     }else{
//         text.classList.add('notactive');
//         text.classList.remove('active');
//     }
// };




// // 33. Дан абзац. Дан массив цветов ['red', 'green', 'blue']. 
// // Сделайте так, чтобы каждую секунду абзац менял свой цвет на определенное значение их массива: сначала 'red', потом 'green' и так далее. 
// // Как только цвета в массиве закончатся - все начнется сначала. Количество цветов в массиве может быть любым

// let text    = document.getElementById('text');
// let arr     = ['red', 'green', 'blue', 'yellow'];
// let i       = 0;

// setInterval(timerChangeColor, 1000);

// function timerChangeColor(){
//     text.style.color = arr[i];
//     i++;

//     if(i >= arr.length){
//         i = 0;
//     }
// };




// // 34. Дан абзац. Дан массив строк ['один', 'два', 'три']. Под абзацем ссылка 'следующая строка'.
// // По заходу на страницу в абзаце должен стоять нулевой элемент этого массива, а по нажатию на ссылку - вставлятся следующий элемент

// let text        = document.getElementById('text');
// let next        = document.getElementById('next');
// let arr         = ['один', 'два', 'три'];
// let i           = 1;

// function start(){
//     text.innerHTML = arr[0];
// };

// function func(){
//     text.innerHTML = arr[i];
//     i++;

//     if(i >= arr.length){
//         i = 0;
//     }
// };




// // 35. Даны инпуты с числами. Произвольное количетсво, пусть три. В первый инпут запишите 1, через секунду во второй инпут запишите 2, 
// // еще через секунду в третий инпут 3, потом через секунду в первый инпут запишите 4, во второй 5 и так далее до бесконечности

// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ (МОЙ ВАРИАНТ С РЕКУРСИЕЙ ПЛОХОЙ КОД)
// // let input       = document.getElementsByTagName('input');
// // let i           = 1;

// // function startTimer(){
// //     let id_1 = setInterval(timerChangeNumbers_1, 1000);
// //     function timerChangeNumbers_1(){
// //         input[0].value = i++;
// //         clearInterval(id_1);
    
// //         let id_2 = setInterval(timerChangeNumbers_2, 1000);
// //         function timerChangeNumbers_2(){
// //             input[1].value = i++;
// //             clearInterval(id_2);

// //             let id_3 = setInterval(timerChangeNumbers_3, 1000);
// //             function timerChangeNumbers_3(){
// //                 input[2].value = i++;
// //                 clearInterval(id_3);
// //                 startTimer();
// //             };
// //         };
// //     };
// // };
// // startTimer();



// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ (ОТ ПРЕПОДАВАТЕЛЯ, ХОРОШИЙ КОД)
// let inp     = document.getElementsByTagName('input');
// let num     = 1;
// let i       = 0;

// setInterval(func, 1000);
// function func() {
// 	inp[i].value = num;
// 	num++;
//     i++;
    
// 	if ( i >= inp.length) {
// 		i = 0;
//  	}
// };









// // Урок №3
// // 36. Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот

// let text        = document.getElementById('text');

// function func(){
//     if(text.hasAttribute('checked') == true){
//         text.removeAttribute('checked');
//     }else{
//         text.setAttribute('checked', '');
//     }
// };




// // 37. Даны чекбокс. Дана кнопка. По нажатию на кнопку сделайте все чекбоксы отмеченными

// let input       = document.getElementsByTagName('input');

// function func(){
//     for(let i = 0; i < input.length; i++){
//         input[i].checked = true;
//     }
// };




// // 38. Спросите у пользователя какой язык (html, css, js, php) он знает с помощью радио кнопочек. Выведите этот язык в абзац

// let input       = document.getElementsByTagName('input');
// let text        = document.getElementById('text');

// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener('change', change);
// }

// function change(){
//     if(this.checked){
//         text.innerHTML = this.value;
//     }
// };




// // 39. Спросите у пользователя какие языки (html, css, js, php) он знает с помощью чекбоксов. Выбранные языки должны выводится в абзац ниже через запятую

// let input       = document.getElementsByTagName('input');
// let text        = document.getElementById('text');
// let arr         = [];
// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener('change', func);
// }

// function func(){
//     if(this.checked){
//         arr.push(this.value);
//         text.innerHTML = arr;
//     }
// };




// // 40. Дан чекбокс. Дан инпут. Сделайте так, что если чекбокс отмечен - инпут видимый, если не отмечен - не видимый

// let test            = document.getElementById('test');
// let text            = document.getElementById('text');

// function func(){
//     if(test.checked == false){
//         text.style.display = 'none';
//     }else{
//         text.style.display = 'inline';
//     }
// };




// // 41. Даны чекбоксы. Под каждым чекбоксом размещен абзац. Сделайте так, что если чекбокс отмечен - соответствующий абзац видимый, а если не отмечен - не видимый

// let input       = document.getElementsByTagName('input');
// let p           = document.getElementsByTagName('p');


// function func(){
//     for(let i = 0; i < input.length; i++){
//         if(input[i].checked == false){
//             p[i].style.display = 'none';
//         }else{
//             p[i].style.display = 'inline';
//         }
//     }
// };




// // 42. Дан инпут. Даны li. В инпут пишется номер. Сделайте так, чтобы по вводу числа, li с заданным номером покрасился в красный цвет

// let text        = document.getElementById('text');
// let li          = document.getElementsByTagName('li');

// text.addEventListener('blur', func);

// function func(){
//     for(let i = 0; i < li.length; i++){
//         if(text.value == (i + 1)){
//             li[i].style.color = 'red';
//         }
//     }
// };




// // 43. Дан абзац. Даны чекбоксы 'перечеркнуть', 'сделать жирным', 'сделать красным'. 
// // Если соответствующий чекбокс отмечен - заданное действие происходит с абзацем (становится красным, например). Если чекбоксу снять отметку - действие отменяется

// let text        = document.getElementById('text');
// let input       = document.getElementsByTagName('input');


// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener('change', changeParamrsCss);
// }

// function changeParamrsCss(){
//     if(this.checked){
//         text.style.cssText = '' + this.value;
//     }else{
//         text.style.cssText = 'none';
//     }
// };




// // 44. Дан блок с кнопкой 'закрыть блок'. По нажатию на эту кнопку блок должен исчезнуть. 
// // Кнопка размещается внутри блока и должна исчезнуть вместе с ним. Блоков может быть любое количество, каждый из них закрывает своя кнопка

// let task    = document.getElementsByTagName('button');

// for(let i = 0; i < task.length; i++){
//     task[i].addEventListener('click', function(){
//         this.parentNode.style.display = 'none';
//     });
// }









// // Урок №4
// // 45. В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны записались в ul под инпутом (каждая страна отдельный li)

// let input       = document.getElementsByTagName('input')[0];
// let button      = document.getElementsByTagName('button')[0];
// let ul          = document.getElementsByTagName('ul')[0];

// button.addEventListener('click', function(){
//     let arr         = input.value.split(',');

//     for(let i = 0; i < arr.length; i++){
//         let newLi   = document.createElement('li');
//         newLi.innerHTML = arr[i];
//         ul.appendChild(newLi);
//     }
// });




// // 46. В инпут вводится страна и нажимается Enter. По нажатию на Enter сделайте так, чтобы введенные страны записывались в абзац под инпутом через запятую. 
// // То есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны

// let input       = document.getElementsByTagName('input')[0];
// let p           = document.getElementsByTagName('p')[0];

// input.addEventListener('keydown', function(event){
//     let code    = event.keyCode;

//     if(code == 13){
//         let arr = input.value.split(',');
//         for(let i = 0; i < arr.length; i++){
//             p.innerHTML += arr[i] + ', ';
//             input.value = '';
//         }
//     }
// });




// // 47. На странице есть дивы. В них есть текст. 
// // Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста

// let div     = document.getElementsByTagName('div');
// let button  = document.getElementsByTagName('button')[0];

// button.addEventListener('click', function(){
//     for(let i = 0; i < div.length; i++){
//         div[i].innerHTML = div[i].innerHTML.substr(0, 12) + '...';  
//     }
// });




// // 48. Дана таблица с числами. По нажатию на кнопку найдите ячейку, в которой хранится максимальное число, и сделайте ее фон красным

// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ (МОЙ ВАРИАНТ, НО СЛОЖНЫЙ С ТОЧКИ ЗРЕНИЯ НАГРАМАЖДЕНИЯ КОДА)
// // let td      = document.getElementsByTagName('td');
// // let btn     = document.getElementsByTagName('button')[0];
// // let arr     = [];

// // btn.addEventListener('click', function(){
// //     for(let i = 0; i < td.length; i++){
// //         arr.push(Number(td[i].innerHTML));
// //     }
    
// //     arr.sort(sotrir);
// //     function sotrir(a, b){
// //         if(a > b){
// //             return 1;
// //         }
// //         if(a <= b){
// //             return -1;
// //         }
// //     };
    
// //     for(let i = 0; i < arr.length; i++){
// //         if(td[i].innerHTML == arr[arr.length - 1]){
// //             td[i].style.background = 'red';
// //         }
// //     }
// // });



// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ (ВАРИАНТ ОТ ПРЕПОДАВАТЕЛЯ, ПРАВИЛЬНЕЕ КОД И МЕНЬШЕ)

// let td      = document.getElementsByTagName('td');
// let btn     = document.getElementsByTagName('button')[0];
// let max     = '';
// let b       = 0;

// btn.addEventListener('click', function(){
//     for(let i = 0; i < td.length; i++){
//         if(Number(td[i].innerHTML) > max){
//             max = td[i].innerHTML;
//             b   = i;
//         }
//     }

//     td[b].style.background = 'red';
// });




// // 49. Дана таблица с числами. По нажатию на кнопку в инпут под таблицей выведите эти числа через запятую в порядке возрастания

// let cells       = document.getElementsByTagName('td');
// let input       = document.querySelector('input');
// let button      = document.querySelector('button');
// let arr         = [];

// button.addEventListener('click', function(){
//     for(let i = 0; i < cells.length; i++){
//         arr.push(Number(cells[i].innerHTML));
//     }
    
//     arr.sort(function(a, b){
//         if(a > b){
//             return 1;
//         }
//         if(a <= b){
//             return -1;
//         }
//     });
//     input.value = arr;
// });




// // 50. Дана таблица с числами. 
// // По нажатию на кнопку в последний ряд таблицы в каждую ячейку запишите сумму чисел в столбце таблицы, расположенном над определенной ячейкой

// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ (МОЙ ВАРИАНТ, С КОРЯВЫМ КОДОМ, НО РАБОТАЕТ)
// // let td      = document.getElementsByTagName('td');
// // let button  = document.getElementsByTagName('button')[0];

// // button.addEventListener('click', function(){
// //     let result1 = 0;
// //     let result2 = 0;
// //     let result3 = 0;
// //     let lastElem;

// //     for(let i = 0; i < td.length; i += 3){
// //         result1 += Number(td[i].innerHTML);
// //     }

// //     for(let i = 1; i < td.length; i += 3){
// //         result2 += Number(td[i].innerHTML);
// //     }

// //     for(let i = 2; i < td.length; i += 3){
// //         result3 += Number(td[i].innerHTML);
// //     }

// //     for(let i = 0; i < td.length; i++){
// //         lastElem = td[i];
// //     }

// //     let firstElem   = lastElem.previousElementSibling;
// //     let secondElem  = firstElem.previousElementSibling;

// //     lastElem.innerHTML      = result3;
// //     firstElem.innerHTML     = result2;
// //     secondElem.innerHTML    = result1;
// // });



// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ ОТ ПРЕПОДАВАТЕЛЯ (ХОРОШИЙ КОД, ПРАВИЛЬНЫЙ)
// let tr      = document.getElementsByTagName('tr');
// let button  = document.getElementsByTagName('button')[0];

// button.addEventListener('click', function(){
//     let arr = [];
//     for(let i = 0; i < tr.length - 1; i++){
//         for(let j = 0; j < tr[i].children.length; j++){
//             if(arr[j] == undefined){
//                 arr[j] = 0;
//             }
//             arr[j] += Number(tr[i].children[j].innerHTML);
//         }
//     }

//     for(let k = 0; k < tr[tr.length - 1].children.length; k++){
//         tr[tr.length - 1].children[k].innerHTML = arr[k];
//     }
// });




// // 51. Дана таблица с числами. По нажатию на ячейку она активируется и становится красного цвета. Активировать можно много ячеек. Под таблицей кнопка. 
// // По нажатию по этой кнопке в абзац ниже выведите сумма активированных ячеек. Реализуйте кнопку 'сбросить активированные ячейки'

// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ (МОЙ ВАРИАНТ, ВСЕ РАБОТАЕ, НО МНОГО КОДА)
// // let td          = document.getElementsByTagName('td');
// // let btnStart    = document.getElementById('go');
// // let btnClear    = document.getElementById('clear');
// // let arrActive   = [];
// // let result      = 0;

// // for(let i = 0; i < td.length; i++){
// //     td[i].addEventListener('click', function(){
// //         td[i].style.background = 'red';
// //         arrActive.push(Number(td[i].innerHTML));
// //     });
// // }

// // btnClear.addEventListener('click', function(){
// //     for(let i = 0; i < td.length; i++){
// //         td[i].style.background = 'white';
// //     }
// //     arrActive.length = 0;
// //     result = 0;
// // });

// // btnStart.addEventListener('click', function(){
// //     for(let i = 0; i < arrActive.length; i++){
// //         result += arrActive[i];
// //     }
// //     let newP    = document.createElement('p');
// //     newP.innerHTML = 'Сумма активных ячеек = ' + result;
// //     document.body.appendChild(newP);
// //     result = 0;
// // });



// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ (БОЛЕЕ ПРАВИЛЬНЫЙ С МЕНЬШИМ КОЛ-ВОМ КОДА ОТ ПРЕПОДАВАТЕЛЯ)
// window.onload = function(){
//     let td      = document.getElementsByTagName('td');
//     for(let i = 0; i < td.length; i++){
//         td[i].addEventListener('click', function(){
//             td[i].classList.add('activeNew');
//         });
//     }

//     document.getElementById('go').addEventListener('click', function(){
//         let elems   = document.querySelectorAll('.activeNew');
//         let result  = 0;

//         for(let i = 0; i < elems.length; i++){
//             result += Number(elems[i].innerHTML);
//         }
//         let newP = document.createElement('p');
//         newP.innerHTML = 'Сумма активных ячеек = ' + result;
//         document.body.appendChild(newP);
//     });

//     document.getElementById('clear').addEventListener('click', function(){
//         for(let i = 0; i < td.length; i++){
//             td[i].classList = [];
//         }
//     });
// };




// // 52. Дана таблица. По нажатию на ячейку в ней появляется инпут с содержимым этой ячейки и кнопка сохранить. 
// // Можно поредактировать текст в инпуте, сохранить - и текст ячейки поменяется

// // // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ (МОЙ ВАРИАНТ, ВСЕ РАБОТАЕТ)
// // let td      = document.getElementsByTagName('td');

// // for(let i = 0; i < td.length; i++){
// //     td[i].addEventListener('click', function(){
// //         let valueTd = this.innerHTML;
// //         td[i].classList.add('blockTd');
// //         td[i].insertAdjacentHTML('afterEnd', '<input type="text" id="changedValue" value="">');
// //         let changedValue    = document.getElementById('changedValue');
// //         changedValue.value = valueTd;

// //         changedValue.addEventListener('change', function(){
// //             let corValue = Number(changedValue.value);
// //             if(isNaN(corValue) == true){
// //                 alert('Вы ввели НЕ число!');
// //             }else{
// //                 td[i].innerHTML = corValue;
// //                 td[i].classList.remove('blockTd');
// //                 changedValue.remove();
// //             }
// //         });
// //     });
// // }


// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ (БОЛЕЕ ПРАВИЛЬНЫЙ С МЕНЬШИМ КОЛ-ВОМ КОДА ОТ ПРЕПОДАВАТЕЛЯ)
// window.onload = function () {
// 	var tdelements = document.querySelectorAll('td');
// 	for (var i = 0; i < tdelements.length; i++) {
// 		tdelements[i].addEventListener('click', function () {
//  		var val = this.innerHTML;
// 		this.style.display = "none";
// 		var inp = document.createElement('input');
// 		inp.value = val;
// 		inp.addEventListener('change', function () {
// 			this.previousElementSibling.innerHTML = this.value;
// 			this.previousElementSibling.style.display = "";
// 			this.parentNode.removeChild(this);
// 		});
// 		this.parentNode.insertBefore(inp, this.nextSibling);
//    		});
// 	}
// }




// // 53. Реализуйте раскрывающийся список. По умолчанию есть список стран (ul), по нажатию на страну внутри li со страной появляется список городов

// let p  = document.getElementsByTagName('p');

// for(let i = 0; i < p.length; i++){
//     p[i].addEventListener('click', showCountries);
//     function showCountries(){
//         let ul  = this.nextElementSibling;
//         ul.removeAttribute('hidden');
//         this.removeEventListener('click', showCountries);

//         p[i].addEventListener('click', hideCountries);
//         function hideCountries(){
//             ul.setAttribute('hidden', '');
//             this.addEventListener('click', showCountries);
//         };
//     };
// }









// // Урок №5
// // 54. Даны два селекта. В первом находятся страны, во втором - города. 
// // Сделайте так, чтобы когда выбирается определенная страна - в другом селекте появлялись города этой страны. 
// // В абзац ниже пишите выбранную страну и город через запятую

// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ, КОГДА У НАС ЕСТЬ ИЗНАЧАЛЬНО СПИСОК СТРАН (МОЙ ВАРИАНТ РЕШЕНИЯ)
// // let countrySelect       = document.getElementById('country');
// // let citiesSelect        = document.getElementById('cities');
// // let p                   = document.getElementsByTagName('p')[0];
// // let data                = {
// //     aus:    ['Балларат', 'Бендиго', 'Бродфорд'],
// //     jap:    ['Тоёхаси', 'Окадзаки', 'Итиномия'],
// //     sar:    ['Кейптаун', 'Дурбан', 'Соуэто']
// // };

// // let defaulCities    = data[Object.keys(data)[0]];
// // addNewOptions(citiesSelect, defaulCities);
// // p.innerHTML = 'Вы выбрали страну: ' + countrySelect[0].text +  '; Город: ' + citiesSelect[0].text;

// // countrySelect.addEventListener('change', function(){
// //     let cities = data[this.value];
// //     citiesSelect.length = 0;

// //     addNewOptions(citiesSelect, cities);
// //     p.innerHTML = 'Вы выбрали страну: ' + countrySelect[countrySelect.selectedIndex].text +  '; Город: ' + citiesSelect[0].text;

// //     citiesSelect.addEventListener('change', function(){
// //         p.innerHTML = 'Вы выбрали страну: ' + countrySelect[countrySelect.selectedIndex].text +  '; Город: ' + citiesSelect[citiesSelect.selectedIndex].text;
// //     });
// // });

// // function addNewOptions(select, arr){
// //     for(let i = 0; i < arr.length; i++){
// //         select.add(new Option(arr[i]));
// //     }
// // };


// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ, ТЕПЕРЬ КОГДА ИЗНАЧАЛЬНО СПИСОК СТРАН В SELECTe ПУСТ (МОЙ ВАРИАНТ РЕШЕНИЯ)
// let countrySelect       = document.getElementById('country');
// let citiesSelect        = document.getElementById('cities');
// let p                   = document.getElementsByTagName('p')[0];
// let data                = {
//     Австралия:      ['Балларат', 'Бендиго', 'Бродфорд'],
//     Япония:         ['Тоёхаси', 'Окадзаки', 'Итиномия'],
//     ЮАР:            ['Кейптаун', 'Дурбан', 'Соуэто']
// };

// let countries   = Object.keys(data);
// addNewOptions(countrySelect, countries);

// let defaulCities    = data[Object.keys(data)[0]];
// addNewOptions(citiesSelect, defaulCities);
// p.innerHTML = 'Вы выбрали страну: ' + countrySelect[0].text +  '; Город: ' + citiesSelect[0].text;

// countrySelect.addEventListener('change', function(){
//     let cities = data[this.value];
//     citiesSelect.length = 0;

//     addNewOptions(citiesSelect, cities);
//     p.innerHTML = 'Вы выбрали страну: ' + countrySelect[countrySelect.selectedIndex].text +  '; Город: ' + citiesSelect[0].text;

//     citiesSelect.addEventListener('change', function(){
//         p.innerHTML = 'Вы выбрали страну: ' + countrySelect[countrySelect.selectedIndex].text +  '; Город: ' + citiesSelect[citiesSelect.selectedIndex].text;
//     });
// });

// function addNewOptions(select, arr){
//     for(let i = 0; i < arr.length; i++){
//         select.add(new Option(arr[i]));
//     }
// };




// // 55. Сделайте селекты день, мес, год. 
// // Сделайте так, чтобы не корректную дату нельзя было выбрать (например, 30 февраля нельзя, а 30 марта можно или 29 февраля можно, но только в високосный год)

// let monthSelect     = document.getElementById('month');
// let yearSelect      = document.getElementById('year');
// let dateSelect      = document.getElementById('date');

// let data            = new Date();
// let nowYear         = data.getFullYear();
// let nowMonth        = data.getMonth();
// let nowDay          = data.getDate();

// addNewOptions(yearSelect, rangeNumbers(1990, 2020));
// addNewOptions(dateSelect, rangeNumbers(1, 31));

// yearSelect.value    = nowYear;
// monthSelect.value   = nowMonth;
// dateSelect.value    = nowDay;

// monthSelect.addEventListener('change', chackingCorrectionDate);
// yearSelect.addEventListener('change', chackingCorrectionDate);
// dateSelect.addEventListener('change', chackingCorrectionDate);

// monthSelect.addEventListener('click', getPreviouDate);
// yearSelect.addEventListener('click', getPreviouDate);
// dateSelect.addEventListener('click', getPreviouDate);

// function getPreviouDate(){
//     this.dataset.default = this.value;
// };

// function chackingCorrectionDate(){
//     if(checkCorrectDate(yearSelect.value, Number(monthSelect.value), dateSelect.value) == false){
//         alert('Вы ввели не корректную дату, пожалуйста исправьте ее!');
//         this.value = this.dataset.default;
//     }
// };

// function addNewOptions(select, arr){
//     for(let i = 0; i < arr.length; i++){
//         select.add(new Option(arr[i]));
//     }
// };

// function rangeNumbers(from, to){
//     let arr = [];
//     for(let i = from; i <= to; i++){
//         arr.push(i);
//     }
//     return arr;
// };

// function checkCorrectDate(year, month, day){
//     let date = new Date(year, month, day);
//     return date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
// };




// // 56. Реализуйте калькулятор валют. 
// // Есть два селекта - селект с исходной валюты, селект с той валютой, в которую мы хотим перевести деньги, инпут, в который вводится сумма для обмена. 
// // Курсы валют храните в массиве. Сделайте так, чтобы в селектах нельзя было выбрать две одинаковых валюты

// // // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ (ПОЛНАЯ ЕРУНДА, МОЙ КОД)
// // let first_curr      = document.getElementById('first_curr');
// // let second_curr     = document.getElementById('second_curr');
// // let num             = document.getElementById('num');
// // let result          = document.getElementById('result');

// // let exchangeRateRur = [0.013, 0.012];
// // let exchangeRateUsd = [77.87, 0.91];
// // let exchangeRateEur = [85.43, 1.1];

// // num.addEventListener('change', function(){
// //     first_curr.addEventListener('change', sdfadgda);
// //     second_curr.addEventListener('change', sdfadgda);

// //     function sdfadgda(){
// //         if(first_curr.value == second_curr.value){
// //             alert('Пожалуйста, выберите другую валюту, а не одинаковые!');
// //         }
// //         if(first_curr.value == 'rur' && second_curr.value == 'usd'){
// //             result.innerHTML = Number(num.value) * exchangeRateRur[0];
// //         }
// //         if(first_curr.value == 'rur' && second_curr.value == 'eur'){
// //             result.innerHTML = Number(num.value) * exchangeRateRur[1];
// //         }
    
// //         if(first_curr.value == 'usd' && second_curr.value == 'rur'){
// //             result.innerHTML = Number(num.value) * exchangeRateUsd[0];
// //         }
// //         if(first_curr.value == 'usd' && second_curr.value == 'eur'){
// //             result.innerHTML = Number(num.value) * exchangeRateUsd[1];
// //         }
    
// //         if(first_curr.value == 'eur' && second_curr.value == 'rur'){
// //             result.innerHTML = Number(num.value) * exchangeRateEur[0];
// //         }
// //         if(first_curr.value == 'eur' && second_curr.value == 'usd'){
// //             result.innerHTML = Number(num.value) * exchangeRateEur[1];
// //         }
// //     };    
// // });


// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ (ХОРОШИЙ КОД ОТ ПРЕПОДАВАТЕЛЯ)
// let first_curr      = document.getElementById('first_curr');
// let second_curr     = document.getElementById('second_curr');
// let num             = document.getElementById('num');
// let result          = document.getElementById('result');

// let ansver          = 0;

// let exchangeRate    = {
//     rur: 1.00,
//     usd: 77.73,
//     eur: 85.64
// };


// num.addEventListener('keyup', takeChangeVal);
// first_curr.addEventListener('change', takeChangeVal);
// second_curr.addEventListener('change', takeChangeVal);

// function takeChangeVal(){
//     if(first_curr.value != second_curr.value){
//         result.innerHTML = '';
//         ansver = exchangeRate[first_curr.value] / exchangeRate[second_curr.value] * Number(num.value);
//         result.innerHTML = ansver.toFixed(2) + addSimbolVal();
//     }else{
//         alert('Выберите другую валюту!');
//     }

//     function addSimbolVal(){
//         if(second_curr.value == 'rur'){
//             return '₽';
//         }
//         if(second_curr.value == 'usd'){
//             return '$';
//         }
//         if(second_curr.value == 'eur'){
//             return '€';
//         }
//     };
// };




// // 57. Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек)

// let rows_num        = document.getElementById('rows_num');
// let cols_num        = document.getElementById('cols_num');
// let button          = document.getElementsByTagName('button')[0];

// button.addEventListener('click', function(){
//     let newTable    = document.createElement('table');
//     newTable.border = '2px solid grey';
//     document.body.appendChild(newTable);

//     for(let i = 1; i <= Number(rows_num.value); i++){
//         let newTr = document.createElement('tr');
//         newTable.appendChild(newTr);
//         for(let j = 1; j <= Number(cols_num.value); j++){
//             let newTd = document.createElement('td');
//             newTr.appendChild(newTd);
//         }
//     }
// });




// // 58. Дан список и кнопка. По нажатию на кнопку посортируйте пункты списка по возрастанию

// let li      = document.getElementsByTagName('li');
// let button  = document.getElementsByTagName('button')[0];
// let arr     = [];

// button.addEventListener('click', function(){
//     for(let i = 0; i < li.length; i++){
//         arr.push(Number(li[i].innerHTML));
//     }
    
//     arr.sort(function(a, b){
//         if(a > b){
//             return 1;
//         }
//         if(a <= b){
//             return -1;
//         }
//     });
    
//     for(let i = 0; i < li.length; i++){
//         li[i].innerHTML = arr[i];
//     }
// });




// 59. Дан ряд ссылок. Сделайте так, чтобы по нажатию на ссылку она становилась с красным фоном. 
// По нажатию на другую ссылку выделение первой ссылки снимается и выделяется та, на которую мы нажали. 
// В абзац ниже пишите текст активной ссылки

let links       = document.getElementsByTagName('a');
let p           = document.getElementsByTagName('p')[0];

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', addColorLinks);

    function addColorLinks(){
        for(let j = 0; j < links.length; j++){
            links[j].style.backgroundColor = '';
        }
        this.style.backgroundColor = 'red';
        p.innerHTML = this.innerHTML;
    };
}