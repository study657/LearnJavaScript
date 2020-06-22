// // Получение DOM элемента в JavaScript
// // Задача №1
// // Даны 3 абзаца:
// // <p id="elem1">1</p>
// // <p id="elem2">2</p>
// // <p id="elem3">3</p>
// // Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.

// let elem1   = document.querySelector('#elem1');
// let elem2   = document.getElementById('elem2');
// let elem3   = document.querySelector('#elem3');
// console.log(elem1, elem2, elem3);




// // Более сложные селекторы
// // Задача №2
// // Дан следующий HTML:
// // <div id="block">
// // 	<p>1</p>
// // 	<p>2</p>
// // </div>
// // Получите ссылку на первый абзац из дива с id, равным block.

// let firstElem   = document.querySelector('#block p');
// console.log(firstElem);




// // Задача №3
// // Дан следующий HTML:
// // <div class="block">
// // 	<p>1</p>
// // 	<p>2</p>
// // </div>
// // Получите ссылку на первый абзац из дива с классом block.

// let firstElem   = document.querySelector('.block p');
// console.log(firstElem);




// // Задача №4
// // Дан следующий HTML:
// // <p class="www">text</p>
// // <p class="www">text</p>
// // Получите ссылку на первый абзац с классом www.

// let firstElem   = document.querySelector('.www');
// console.log(firstElem);














// // Привязывание обработчиков событий к элементам
// // Задача №1
// // Даны 3 кнопки:
// // <input id="button1" type="submit">
// // <input id="button2" type="submit">
// // <input id="button3" type="submit">
// // Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');

// button1.addEventListener('click', function(){
//     alert('1');
// });

// button2.addEventListener('click', function(){
//     alert('2');
// });

// button3.addEventListener('click', function(){
//     alert('3');
// });














// // Другие типы событий в JavaScript
// // Задача №1
// // Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение.

// let btn = document.querySelector('#button1');
// btn.addEventListener('dblclick', function(){
//     alert('Вы нажали на кнопку!');
// });




// // Задача №2
// // Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.

// let btn = document.querySelector('#button1');
// btn.addEventListener('mouseover', function(){
//     alert('Вы нажали на кнопку!');
// });




// // Задача №3
// // Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение.

// let btn = document.querySelector('#button1');
// btn.addEventListener('mouseout', function(){
//     alert('Вы нажали на кнопку!');
// });




// // Ловим несколько событий на элементе
// // Задача №4
// // Дана кнопка. По клику на нее выведите число 1, а по двойному клику - число 2.

// let btn = document.querySelector('#button1');
// btn.addEventListener('click', function(){
//     alert('1');
// });

// btn.addEventListener('mouseout', function(){
//     alert('2');
// });














// // Именованные обработчики событий в JavaScript
// // Задача №1
// // Дан следующий HTML код:
// // <input id="button1" type="submit" value="button1">
// // <input id="button2" type="submit" value="button2">
// // Даны следующие функции:
// // function func1() {
// // 	alert(1);
// // }

// // function func2() {
// // 	alert(2);
// // }
// // Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.

// function func1() {
// 	alert(1);
// };

// function func2() {
// 	alert(2);
// };

// let elem1   = document.getElementById('button1');
// let elem2   = document.getElementById('button2');

// elem1.addEventListener('click', func1);
// elem2.addEventListener('click', func2);














// // Привязывание одного обработчика ко многим элементам
// // Задача №1
// // Даны 5 абзацев:
// // <p id="elem1">text</p>
// // <p id="elem2">text</p>
// // <p id="elem3">text</p>
// // <p id="elem4">text</p>
// // <p id="elem5">text</p>
// // Дана следующая функция:
// // function func() {
// // 	alert('message');
// // }
// // Привяжите эту функцию ко всем 5-ти абзацам.

// let elem1   = document.querySelector('#elem1');
// let elem2   = document.querySelector('#elem2');
// let elem3   = document.querySelector('#elem3');
// let elem4   = document.querySelector('#elem4');
// let elem5   = document.querySelector('#elem5');

// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);

// function func() {
// 	alert('message');
// };














// // Несколько обработчиков одного события в JavaScript
// // Задача №1
// // Дан абзац:
// // <p id="elem">text</p>
// // Даны следующие функции:
// // function func1() {
// // 	alert('1');
// // }
// // function func2() {
// // 	alert('2');
// // }
// // function func3() {
// // 	alert('3');
// // }
// // Привяжите все эти функции к нашему абзацу.

// let elem = document.getElementById('elem');
// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);

// function func1() {
// 	alert('1');
// };
// function func2() {
// 	alert('2');
// };
// function func3() {
// 	alert('3');
// };




// // Задача №2
// // Дана кнопка. Привяжите к ней три анонимных обработчика двойного клика по ней. Пусть первый обработчик выводит число 1, второй обработчик - число 2, а третий - число 3.

// let elem = document.getElementById('elem');

// elem.addEventListener('dblclick', function(){
//     alert(1);
// });
// elem.addEventListener('dblclick', function(){
//     alert(2);
// });
// elem.addEventListener('dblclick', function(){
//     alert(3);
// });














// // Работа с текстом тега на JavaScript
// // Задача №1
// // Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.

// let elem1   = document.querySelector('.k1');
// let elem2   = document.querySelector('.k2');
// let btn     = document.querySelector('#button1');

// btn.addEventListener('click', function(){
//     alert(Number(elem1.innerHTML) + Number(elem2.innerHTML));
// });




// // Задача №2
// // Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.

// let elem1   = document.querySelector('.k1');
// let elem2   = document.querySelector('.k2');
// let btn1    = document.querySelector('#button1');
// let btn2    = document.querySelector('#button2');

// btn1.addEventListener('click', function(){
//     alert(elem1.innerHTML);
// });
// btn2.addEventListener('click', function(){
//     alert(elem2.innerHTML);
// });




// // Запись
// // Задача №3
// // Дан абзац и две кнопки. По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.

// let elem1   = document.querySelector('.k1');
// let btn1    = document.querySelector('#button1');
// let btn2    = document.querySelector('#button2');

// btn1.addEventListener('click', function(){
//     elem1.innerHTML = 'Привет';
// });
// btn2.addEventListener('click', function(){
//     elem1.innerHTML = 'Пока';
// });




// // Задача №4
// // Даны 3 абзаца с текстом. По нажатию на первый абзац запишите в его текст число 1, по нажатию на второй абзац запишите в его текст число 2, а по нажатию на третий - запишите в его текст число 3.

// let elem1   = document.querySelector('.elem1');
// let elem2   = document.querySelector('.elem2');
// let elem3   = document.querySelector('.elem3');

// elem1.addEventListener('click', function(){
//     elem1.innerHTML = 1;
// });
// elem2.addEventListener('click', function(){
//     elem2.innerHTML = 2;
// });
// elem3.addEventListener('click', function(){
//     elem3.innerHTML = 3;
// });




// // Задача №5
// // Дан абзац и кнопка. В абзаце записано какое-то число. По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.

// let elem    = document.querySelector('.elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.innerHTML = Math.pow(Number(elem.innerHTML), 2);
// });




// // Задача №6
// // Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.

// let elem    = document.querySelector('.elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.innerHTML = Number(elem.innerHTML) + 1;
// });




// // Задача №7
// // Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

// let elem    = document.querySelector('.elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.innerHTML += '!';
// });




// // Задача №8
// // Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.

// let elem    = document.querySelector('.elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     let arr = elem.innerHTML.split('');
//     arr.splice(0, 0, '!');
//     elem.innerHTML = arr.join('');
// });




// // Запись тегов
// // Задача №9
// // Дан абзац и кнопка. По нажатию на кнопку запишите в абзац текст '<i>hello</i>'.

// let elem    = document.querySelector('.elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.innerHTML = '<i>hello</i>';
// });




// // Задача №10
// // Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст абзаца, оберните этот текст в теги <b> и запишите новый текст обратно в абзац.

// let elem    = document.querySelector('.elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// });














// // Работа с атрибутами тегов через свойства элементов
// // Задача №1
// // Дан следующий инпут:
// // <input id="elem" type="email">
// // Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.

// let elem    = document.querySelector('#elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     alert(elem.type);
// });




// // Задача №2
// // Дан следующий инпут:
// // <input id="elem" type="email">
// // Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.

// let elem    = document.querySelector('#elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.type = 'submit';
// });




// // Задача №3
// // Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.

// let elem    = document.querySelector('.elem');
// let link    = document.querySelector('.link');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.innerHTML = link.href;
// });




// // Задача №4
// // Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.

// let link    = document.querySelector('.link');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     link.innerHTML = '(' + link.href + ')';
// });




// // Задача №5
// // Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.

// let pictur  = document.querySelector('.img01');
// let elem    = document.querySelector('.elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.innerHTML = pictur.src;
// });




// // Задача №6
// // Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.

// let pictur  = document.querySelector('.img01');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     pictur.width    = '300';
// });




// // Задача №7
// // Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.

// let pictur  = document.querySelector('.img01');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     pictur.width    = Number(pictur.width) * 2;
// });




// // Задача №8
// // Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.

// let img01   = document.querySelector('.img01');
// let img02   = document.querySelector('.img02');
// let btn01   = document.getElementById('button1');
// let btn02   = document.getElementById('button2');

// btn01.addEventListener('click', function(){
//     img01.src   = 'images/image-07-05-20-09-39-2.jpeg';
// });
// btn02.addEventListener('click', function(){
//     img02.src   = 'images/0Yl4g0mPDC8.jpg';
// });














// // Работа с текстовыми полями в JavaScript
// // Задача №1
// // Дан инпут:
// // <input id="elem" value="text">
// // Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.
// // После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, затем поредактируйте текст в инпуте и еще раз нажмите на кнопку. Убедитесь в том, что выведется новый текст инпута.

// let elem    = document.getElementById('elem');
// let btn     = document.querySelector('#button1');

// btn.addEventListener('click', function(){
//     alert(elem.value);
// });




// // Задача №2
// // Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.

// let elem    = document.getElementById('elem');
// let btn     = document.querySelector('#button1');

// btn.addEventListener('click', function(){
//     elem.value  = 'Привет';
// });




// // Задача №3
// // Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

// let elem    = document.getElementById('elem');
// let add     = document.querySelector('.add');
// let btn     = document.querySelector('#button1');

// btn.addEventListener('click', function(){
//     add.innerHTML = elem.value;
// });




// // Задача №4
// // Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// let elem1    = document.getElementById('elem1');
// let elem2    = document.getElementById('elem2');
// let btn      = document.querySelector('#button1');

// btn.addEventListener('click', function(){
//     elem2.value = Math.pow(Number(elem1.value), 2);
// });




// // Задача №5
// // Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.

// let elem1    = document.getElementById('elem1');
// let elem2    = document.getElementById('elem2');
// let btn      = document.querySelector('#button1');

// btn.addEventListener('click', function(){
//     let save1 = elem1.value;
//     let save2 = elem2.value;

//     elem1.value = save2;
//     elem2.value = save1;
// });




// // Задача №6
// // Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// let elem1    = document.getElementById('elem1');
// let elem2    = document.getElementById('elem2');
// let btn      = document.querySelector('#button1');

// btn.addEventListener('click', function(){
//     elem2.value = Math.pow(Number(elem1.value), 2);
// });




// // Задача №7
// // Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

// let elems    = document.querySelectorAll('#elem');
// let abz      = document.querySelector('.abz');
// let btn      = document.querySelector('#button1');
// console.log(elems);

// btn.addEventListener('click', function(){
//     let sum = 0;
//     for(let elem of elems){
//         sum += Number(elem.value);
//     }
//     abz.innerHTML = sum / elems.length;
// });














// // Фокус текстовых полей в JavaScript
// // Задача №1
// // Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.

// let input   = document.getElementById('elem');

// input.addEventListener('focus', function(){
//     input.value = 1;
// });
// input.addEventListener('blur', function(){
//     input.value = 2;
// });




// // Задача №2
// // Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.

// let input   = document.getElementById('elem');

// input.addEventListener('blur', function(){
//     alert(Math.pow(Number(input.value), 2));
// });




// // Задача №3
// // Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.

// let input   = document.getElementById('elem');

// input.addEventListener('focus', function(){
//     input.value = '';
// });














// // Исключения при работе с атрибутами в JavaScript
// // Задача №1
// // Дан див:
// // <div id="elem" class="content no-gap"></div>
// // Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     alert(elem.className);
// });




// // Задача №2
// // Дан див:
// // <div id="elem"></div>
// // Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.className = 'kl1';
// });




// // Задача №3
// // Дан див с несколькими CSS классами, записанными через пробел:
// // <div id="elem" class="aaa bbb ccc"></div>
// // Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     let arr = elem.className.split(' ');
//     console.log(arr);
// });














// // Объект this в JavaScript
// // Задача №1
// // Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.

// let elem    = document.getElementById('elem');
// elem.addEventListener('focus', function(){
//     this.value = 1;
// });
// elem.addEventListener('blur', function(){
//     this.value = 2;
// });




// // Задача №2
// // Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.

// let btn = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     this.value  = Number(this.value) + 1;
// });




// // Задача №3
// // Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.

// let elems   = document.querySelectorAll('#elem');
// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         this.value += '!';
//     });
// }




// // Задача №4
// // Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.

// let elems   = document.querySelectorAll('#elem');
// for(let elem of elems){
//     elem.addEventListener('blur', function(){
//         this.value  = Math.pow(Number(this.value), 2);
//     });
// }














// // Получение группы элементов
// // Задача №1
// // Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите их циклом и установите текст каждого абзаца в значение text.

// let elems   = document.querySelectorAll('.test');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     for(let elem of elems){
//         elem.innerHTML  = 'text';
//     }
// });




// // Задача №2
// // Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.

// let elems   = document.querySelectorAll('.test');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     for(let i = 0; i < elems.length; i++){
//         elems[i].innerHTML += ' ' + (i + 1);
//     }
// });




// // Задача №3
// // Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.

// let elems   = document.querySelectorAll('#elem');
// let sum     = document.querySelector('.sum');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     let result  = 0;
//     for(let elem of elems){
//         result += Number(elem.value);
//     }
//     sum.innerHTML = result;
// });














// // Добавление обработчиков событий в цикле
// // Задача №1
// // Дана следующая функция:
// // function func() {
// // 	this.value = Number(this.value) + 1;
// // }
// // Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.

// let elems   = document.querySelectorAll('#elem');
// for(let elem of elems){
//     elem.addEventListener('blur', func);
// }

// function func() {
// 	this.value = Number(this.value) + 1;
// };




// // Задача №2
// // Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.

// let elems   = document.querySelectorAll('#elem');
// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         this.value = Math.pow(Number(this.value), 2);
//     });
// }














// // Отвязывание событий через removeEventListener
// // Задача №1
// // Дана ссылка. По нажатию на эту ссылку добавьте в конец ее текста содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// let link    = document.getElementById('link');

// link.addEventListener('click', function func(){
//     this.innerHTML += '(' + this.href + ')';
//     this.removeEventListener('click', func);
// });




// // Задача №2
// // Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. 
// // После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.

// let btn = document.getElementById('button1');

// btn.addEventListener('click', function func(){
//     this.value = Number(this.value) + 1;
//     if(Number(this.value) == 10){
//         this.removeEventListener('click', func);
//     };
// });














// // Отвязывание обработчиков событий в цикле
// // Задача №1
// // Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// let elems   = document.querySelectorAll('.test');

// for(let elem of elems){
//     elem.addEventListener('click', function func(){
//         this.innerHTML += '!';
//         this.removeEventListener('click', func);
//     });
// }














// // Работа с атрибутами через методы в JavaScript
// // Получение
// // getAttribute
// // Задача №1
// // Дан элемент:
// // <input id="elem" value="text">
// // Получите значение его атрибута value.

// let elem    = document.getElementById('elem');
// let value   = elem.getAttribute('value');
// console.log(value);




// // Задача №2
// // Дан элемент:
// // <input id="elem" class="www zzz">
// // Получите значение его атрибута class.

// let elem        = document.getElementById('elem');
// let className   = elem.getAttribute('class');
// console.log(className);




// // Установка
// // setAttribute
// // Задача №3
// // Дан элемент:
// // <input id="elem">
// // Установите его атрибут value в значение 'text'.

// let elem    = document.getElementById('elem');
// elem.setAttribute('value', 'text');




// // Задача №4
// // Дан элемент:
// // <input id="elem">
// // Установите ему атрибут class в значение 'valid'.

// let elem    = document.getElementById('elem');
// elem.setAttribute('class', 'valid');




// // Удаление
// // removeAttribute
// // Задача №5
// // Дан элемент:
// // <input id="elem" value="text">
// // Удалите у него атрибут value.

// let elem    = document.getElementById('elem');
// elem.removeAttribute('value');




// // Проверка
// // hasAttribute
// // Задача №6
// // Дан элемент:
// // <input id="elem" value="text">
// // Проверьте наличие у него атрибута value.

// let elem    = document.getElementById('elem');
// console.log(elem.hasAttribute('value'));














// // Разница между способами получения атрибутов
// // Задача №1
// // Дан инпут с каким-то начальным значением. Дана также кнопка. По нажатию на кнопку определите, было ли изменено пользователем начальное значение инпута.

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     if(elem.getAttribute('value') != elem.value){
//         console.log('Начальное значение импута было изменено!');
//     }else{
//         console.log('Начальное значение импута НЕ было изменено!');
//     }
// });




// // Изменение атрибута
// // Задача №2
// // Дан инпут с каким-то начальным значением. Пусть пользователь меняет это значение. Сделайте рядом с инпутом кнопку, по нажатию на которую value инпута вернется в изначальное значение.

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.value  = elem.getAttribute('value');
// });














// // Манипулирование CSS классами в JavaScript
// // Массив классов
// // classList
// // Задача №1
// // Дан элемент:
// // <p id="elem" class="www ggg zzz"></p>
// // Узнайте количество его классов.

// let elem    = document.getElementById('elem');
// console.log(elem.classList.length);




// // Задача №2
// // Дан элемент:
// // <p id="elem" class="www ggg zzz"></p>
// // Переберите в цикле его классы.

// let elem        = document.getElementById('elem');
// let classNames  = elem.classList;
// for(let className of classNames){
//     console.log(className);
// }




// // Добавление классов
// // classList.add
// // Задача №3
// // Дан элемент:
// // <p id="elem" class="www ggg zzz"></p>
// // Добавьте ему класс xxx.

// let elem        = document.getElementById('elem');
// elem.classList.add('xxx');
// console.log(elem);




// // Удаление классов
// // classList.remove
// // Задача №4
// // Дан элемент:
// // <p id="elem" class="www ggg zzz"></p>
// // Удалите у него класс www и класс zzz.

// let elem        = document.getElementById('elem');
// elem.classList.remove('www', 'zzz');
// console.log(elem);




// // Проверка классов
// // classList.contains
// // Задача №5
// // Дан элемент:
// // <p id="elem" class="www ggg zzz"></p>
// // Проверьте наличие у него класса ggg.

// let elem        = document.getElementById('elem');
// console.log(elem.classList.contains('ggg'));




// // Чередование классов
// // classList.toggle
// // Задача №6
// // Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.

// let elem        = document.getElementById('elem');
// elem.classList.toggle('www');
// console.log(elem);














// // Стилизация элементов через атрибут style в JavaScript
// // Задача №1
// // Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.style.border = '1px solid black';
//     elem.style.margin = '10px';
// });




// // Свойства с дефисом
// // Задача №2
// // Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.style.fontSize         = '20px';
//     elem.style.borderTop        = '1px solid black';
//     elem.style.backgroundColor  = 'red';
// });




// // Задача №3
// // Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.

// let elems   = document.querySelectorAll('li');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     for(let elem of elems){
//         elem.style.cssFloat = 'left';
//     }
// });














// // Стилизация с помощью CSS классов на JavaScript
// // Задача №1
// // Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).

// let elem    = document.getElementById('elem');
// let btn1    = document.getElementById('button1');
// let btn2    = document.getElementById('button2');
// let btn3    = document.getElementById('button3');

// btn1.addEventListener('click', function(){
//     elem.innerHTML = '<s>' + elem.innerHTML + '</s>';
// });
// btn2.addEventListener('click', function(){
//     elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// });
// btn3.addEventListener('click', function(){
//     elem.classList.add('colored');
// });




// // Дополнительное преимущество
// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки.

// let elem    = document.getElementById('elem');
// let btn1    = document.getElementById('button1');
// let btn2    = document.getElementById('button2');
// let btn3    = document.getElementById('button3');

// btn1.addEventListener('click', function(){
//     elem.innerHTML = '<s>' + elem.innerHTML + '</s>';
// });
// btn2.addEventListener('click', function(){
//     elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// });
// btn3.addEventListener('click', function(){
//     elem.classList.toggle('colored');
// });














// // Отработка изученного материала на работу с DOM
// // Задача №1
// // Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

// let input   = document.getElementById('input');
// let elem    = document.getElementById('elem');

// input.addEventListener('blur', function(){
//     elem.innerHTML += input.value;
// });




// // Задача №2
// // Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.

// let elems   = document.querySelectorAll('#input');
// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     let sum = 0;
//     for(let inps of elems){
//         sum += Number(inps.value);
//     }
//     elem.innerHTML = sum;
// });




// // Задача №3
// // Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

// let input   = document.getElementById('input');
// let elem    = document.getElementById('elem');

// input.addEventListener('blur', function(){
//     let arr = input.value.split('');
//     let sum = 0;
    
//     for(let elem of arr){
//         sum += Number(elem);
//     }
//     elem.innerHTML = sum;
// });




// // Задача №4
// // Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

// let input   = document.getElementById('input');
// let elem    = document.getElementById('elem');

// input.addEventListener('blur', function(){
//     let arr = input.value.split('');
//     let sum = 0;

//     for(let elem of arr){
//         sum += Number(elem);
//     }
//     elem.innerHTML = sum / arr.length;
// });




// // Задача №5
// // Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.

// let settings    = document.getElementById('settings');
// let surname     = document.getElementById('surname');
// let name        = document.getElementById('name');
// let postName    = document.getElementById('postName');

// settings.addEventListener('blur', function(){
//     let arr = settings.value.split(' ');

//     surname.value   = arr[0];
//     name.value      = arr[1];
//     postName.value  = arr[2];
// });




// // Задача №6
// // Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. 
// // Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

// let elem    = document.getElementById('input');

// elem.addEventListener('blur', function(){
//     let arr = elem.value.split(' ');
//     let str = '';
    
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] != ''){
//             str += arr[i][0].toUpperCase() + arr[i].substr(1) + ' ';
//         }
//     }
//     let mass = str.split(' ').join(' ');
//     elem.value = mass;
// });




// // Задача №7
// // Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

// let elem    = document.getElementById('input');

// elem.addEventListener('blur', function(){
//     let arr = elem.value.split(' ');
//     console.log(arr.length);
// });




// // Задача №8
// // Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

// let elem    = document.getElementById('input');

// elem.addEventListener('blur', function(){
//     let arr     = elem.value.split('.');
//     let result  = arr.reverse().join('-');
//     elem.value  = result;
// });




// // Задача №9
// // Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).

// let elem    = document.getElementById('input');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     let arr1 = elem.value.split('');
//     let arr2 = elem.value.split('').reverse();
    
//     console.log(isSuch(arr1, arr2));
// });

// function isSuch(arr1, arr2){
//     for(let i = 0; i < arr1.length; i++){
//         return arr1[i] == arr2[i];
//     }
// };




// // Задача №10
// // Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

// let elem    = document.getElementById('input');

// elem.addEventListener('blur', function(){
//     console.log(isContain(elem.value));
// });

// function isContain(str){
//     return str.split('').indexOf('3') != -1;
// };




// // Задача №11
// // Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

// let elems   = document.querySelectorAll('#elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     for(let i = 0; i < elems.length; i++){
//         elems[i].innerHTML += ' ' + (i + 1);
//     }
// });




// // Задача №12
// // Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.

// let links   = document.querySelectorAll('#link');

// for(let elem of links){
//     elem.innerHTML += '(' + elem.href + ')';
// }




// // Задача №13
// // Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).

// let links   = document.querySelectorAll('#link');

// for(let i = 0; i < links.length; i++){
//     if(check(links[i].href)){
//         links[i].innerHTML += '&rarr;';
//     }
// }

// function check(str){
//     let check = str.substr(0, 7);

//     return check == 'http://';
// };




// // Задача №14
// // Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.

// let elems   = document.getElementsByTagName('p');

// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         this.innerHTML = Math.pow(Number(this.innerHTML), 2);
//     });
// }




// // Задача №15
// // Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.

// let input   = document.getElementById('input');
// let elem    = document.getElementById('elem');
// let days    = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// input.addEventListener('blur', function(){
//     let correctDate   = input.value.split('.').reverse().join(', ');
//     let date        = new Date(correctDate);

//     elem.innerHTML = days[date.getDay()];
// });




// // Задача №16
// // Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.

// let input   = document.getElementById('input');
// let btn1    = document.getElementById('button1');
// let btn2    = document.getElementById('button2');

// btn1.addEventListener('click', function(){
//     input.value = Number(input.value) - 1;
//     if(Number(input.value) == 0){
//         btn1.setAttribute('disabled', '');
//     }
// });
// btn2.addEventListener('click', function(){
//     if(input.value == 0){
//         btn1.removeAttribute('disabled');
//     }
//     input.value = Number(input.value) + 1;
// });




// // Задача №17
// // Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.

// let input   = document.getElementById('input');
// let elems   = document.getElementsByTagName('p');

// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         input.value = Number(input.value) + 1;
//     });
// }




// // Задача №18
// // В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны записались в ul под инпутом (каждая страна отдельный li).

// let input   = document.getElementById('input');
// let ul      = document.querySelector('.ul');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     let arr = input.value.split(',');
//     for(let elem of arr){
//         let li  = document.createElement('li');
//         li.innerHTML    = elem;
//         ul.appendChild(li);
//     }
// });




// // Задача №19
// // В инпут вводится страна и нажимается Enter. По нажатию на Enter сделайте так, чтобы введенные страны записывались в абзац под инпутом через запятую. 
// // То есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны.

// let input   = document.getElementById('input');
// let elem    = document.getElementById('elem');

// input.addEventListener('keypress', function(event){
//     let code    = event.keyCode;
    
//     if(code == 13){
//         let country = input.value;
//         elem.innerHTML += setСomma(elem.innerHTML) + country;
//     }
// });

// function setСomma(str){
//     if(str != ''){
//         return ', ';
//     }else{
//         return '';
//     }
// };




// // Задача №20
// // На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста

// let elems   = document.getElementsByTagName('div');

// for(let elem of elems){
//     if(elem.innerHTML.length >= 10){
//         elem.innerHTML = elem.innerHTML.substr(0, 10) + '...';
//     }
// }




// // Задача №21
// // Дан массив с числами. Выведите каждый элемент этого массива в своем инпуте. Сделайте так, чтобы под всеми инпутами вывелась сумма элементов нашего массива.

// let elem    = document.getElementById('elem');
// let arr     = [1, 2, 3, 5, 7, 10];
// let sum     = 0;

// function createElments(arr){
//     for(let i = 0; i < arr.length; i++){
//         let input   = document.createElement('input');
//         input.value = arr[i];
//         document.body.before(input);
//     }
// };
// createElments(arr);

// function getSumElements(){
//     let inputs  = document.getElementsByTagName('input');
//     for(let elem of inputs){
//         sum += Number(elem.value);
//     }
//     elem.innerHTML = sum;
// };
// getSumElements();




// // Задача №22
// // Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.

// let elem    = document.querySelector('#input');

// elem.addEventListener('blur', function(){
//     let check   = Number(elem.value);
//     if(check >= 1 && check <= 100){
//         elem.style.backgroundColor    = 'green';
//     }else{
//         elem.style.backgroundColor    = 'red';
//     }
// });




// // Задача №23
// // Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.

// let input   = document.getElementById('input');
// let btn     = document.getElementById('button1');
// let arr     = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н'
//               , 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ъ', 'ы', 'ь', 'э', 'ю'
//               , 'я'];

// btn.addEventListener('click', function(){
//     input.value = getRandomStr(8);
// });

// function getRandomNumber(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// function getRandomStr(curr){
//     let str = '';
//     for(let i = 1; i <= curr; i++){
//         let random = arr[getRandomNumber(0, arr.length - 1)];
//         str += random;
//     }
//     return str;
// };




// // Задача №24
// // Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.

// let input   = document.getElementById('input');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     let arr     = input.value.split('');
//     input.value = getRandomStr(arr);
// });

// function getRandomStr(arr){
//     let str = '';
//     while(arr.length > 0){
//         let random  = getRandomNumber(0, arr.length - 1);
//         str += arr.splice(random, 1)[0];
//     }
//     return str;
// };

// function getRandomNumber(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };




// // Задача №25
// // Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.

// let link    = document.querySelector('.link');
// let input   = document.getElementById('check');

// link.addEventListener('click', function(){
//     let check   = input.hasAttribute('checked');
    
//     if(check){
//         input.removeAttribute('checked');
//     }else{
//         input.setAttribute('checked', '');
//     }
// });




// // Задача №26
// // Дан инпут. В него вводится температура в градусах Фарингейта. Сделайте так, чтобы автоматически по мере ввода в абзац под инпутом эта температура выводилась в градусах Цельсия.

// let input   = document.getElementById('input');
// let elem    = document.querySelector('.elem');

// function getGradus(num){
//     return Number((5/9 * (num - 32)).toFixed(2));
// };

// input.addEventListener('keyup', function(){
//     elem.innerHTML = getGradus(Number(input.value));
// });




// // Задача №27
// // Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.

// let input   = document.getElementById('input');
// let elem    = document.querySelector('.elem');
// let btn     = document.getElementById('button1');

// btn.addEventListener('click', function(){
//     elem.innerHTML = getFactorial(Number(input.value));
// });

// function getFactorial(num){
//     let result = 1;
//     for(let i = 1; i <= num; i++){
//         result *= i;
//     }
//     return result;
// };




// Задача №28
// Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.

let inputs  = document.querySelectorAll('#input');
let btn     = document.getElementById('button1');
let elem    = document.querySelector('.elem');

btn.addEventListener('click', function(){
    let result      = getNumsFromInputs(inputs);
    elem.innerHTML  = getResult(...result);
});

function getNumsFromInputs(inputs){
    let result  = [];
    for(let elem of inputs){
        result.push(Number(elem.value));
    }
    return result;
};

function getResult(num1, num2, num3){
    let discriment = (num2 * num2) - (4 * num1 * num3);
    if(discriment > 0){
        let res1 = (-num2 + Math.sqrt(discriment)) / (2 * num1);
        let res2 = (-num2 - Math.sqrt(discriment)) / (2 * num1);
        return 'x1 = ' + res1 + '; ' + 'x2 = ' + res2;
    }else{
        return 'Дискриминант D < 0, следовательно уравнение не имеет действительных корней';
    }
};