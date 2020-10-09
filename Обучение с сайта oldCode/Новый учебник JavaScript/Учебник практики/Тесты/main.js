// // Тест с вопросами и ответами в HTML коде на JavaScript
// // Задача №1
// // Сделайте так, чтобы ввод ответа в инпут завершался нажатием клавиши Enter. Пусть в этом случае инпут сразу проверяет ответ на правильность.

// let test        = document.getElementById('test');
// let inputs      = test.querySelectorAll('input');

// for(let input of inputs){
//     input.addEventListener('keypress', function(event){
//         let code    = event.keyCode;
//         let ansver  = this.value;

//         if(code == 13){
//             if(this.dataset.right == ansver){
//                 this.classList.add('right');
//             }else{
//                 this.classList.add('wrong');
//             }
//         }
//     });
// }




// // Задача №2
// // Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.

// let test        = document.getElementById('test');
// let inputs      = test.querySelectorAll('input');
// let btn         = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     for(let i = 0; i < inputs.length; i++){
//         if(inputs[i].dataset.right == inputs[i].value){
//             inputs[i].classList.add('right');
//         }else{
//             inputs[i].classList.add('wrong');
//         }
//     }
// });














// // Тест с ответами в массиве на JavaScript
// // Задача №1
// // Сделайте так, чтобы по нажатию на кнопку выполнилась проверка правильности ответов.

// let test        = document.getElementById('test');
// let inputs      = test.querySelectorAll('input');
// let btn         = document.getElementById('button');
// let answers     = [
// 	'ответ 1',
// 	'ответ 2',
// 	'ответ 3',
// ];

// btn.addEventListener('click', function(){
//     for(let i = 0; i < answers.length; i++){
//         if(answers[i] == inputs[i].value){
//             inputs[i].classList.add('right');
//         }else{
//             inputs[i].classList.add('wrong');
//         }
//     }
// });














// // Тест с вопросами и ответами в массиве на JavaScript
// // Пусть перед нами стоит прежняя задача: по нажатию на кнопку выполнить проверку правильности.
// // Очевидно, что наша задача усложнилась: теперь по заходу на страницу нам необходимо перебрать массив вопросов и сформировать HTML код каждого вопроса - родительский див, абзац с текстом и инпут для ответа.
// // Задача №1
// // Реализуйте поставленную задачу.

// let test        = document.getElementById('test');
// let btn         = document.getElementById('button');
// let answers     = [
// 	'ответ 1',
// 	'ответ 2',
// 	'ответ 3',
// ];
// let questions   = [
// 	'вопрос 1?',
// 	'вопрос 2?',
// 	'вопрос 3?'
// ];

// let inputs      = createNewQuestions(test, questions);

// btn.addEventListener('click', function(){
//     for(let i = 0; i < answers.length; i++){
//         if(answers[i] == inputs[i].value){
//             inputs[i].classList.add('right');
//         }else{
//             inputs[i].classList.add('wrong');
//         }
//     }
// });

// function createNewQuestions(selector, arr){
//     let inputs      = [];
//     for(let elem of arr){
//         let div     = document.createElement('div');
//         selector.append(div);

//         let p       = document.createElement('p');
//         p.innerHTML = elem;
//         div.append(p);

//         let input   = document.createElement('input');
//         inputs.push(input);
//         div.append(input);
//     }
//     return inputs;
// };














// // Тест с вопросами и ответами в объекте на JavaScript
// // Задача №1
// // Пусть вопросы и ответы хранятся в таком объекте:
// // let questions = {
// // 	'Вопрос 1?': 'ответ 1',
// // 	'Вопрос 2?': 'ответ 2',
// // 	'Вопрос 3?': 'ответ 3',
// // }
// // Решите задачу создания теста для такого варианта хранения данных


// let test        = document.getElementById('test');
// let btn         = document.getElementById('button');
// let questions   = {
// 	'Вопрос 1?': 'ответ 1',
// 	'Вопрос 2?': 'ответ 2',
// 	'Вопрос 3?': 'ответ 3',
// };
// let inputs      = createQuestion(questions, test);

// btn.addEventListener('click', function(){
//     for(let input of inputs){
//         if(input.dataset.rigth == input.value){
//             input.classList.add('right');
//         }else{
//             input.classList.add('wrong');
//         }
//     }
// });

// function createQuestion(obj, select){
//     let inputs  = [];
//     for(let key in obj){
//         let div     = document.createElement('div');
//         select.append(div);

//         let p       = document.createElement('p');
//         p.innerHTML = key;
//         div.append(p);

//         let input   = document.createElement('input');
//         input.dataset.rigth = obj[key];
//         inputs.push(input);
//         div.append(input);
//     }
//     return inputs;
// };




// // Задача №2
// // Пусть вопросы и ответы хранятся в таком объекте:
// // let questions = [
// // 	{
// // 		text:  'вопрос 1?',
// // 		right: 'ответ 1',
// // 	},
// // 	{
// // 		text:  'вопрос 2?',
// // 		right: 'ответ 2',
// // 	},
// // 	{
// // 		text:  'вопрос 2?',
// // 		right: 'ответ 2',
// // 	},
// // ];
// // Решите задачу создания теста для такого варианта хранения данных

// let test        = document.getElementById('test');
// let btn         = document.getElementById('button');
// let questions   = [
// 	{
// 		text:  'вопрос 1?',
// 		right: 'ответ 1',
// 	},
// 	{
// 		text:  'вопрос 2?',
// 		right: 'ответ 2',
// 	},
// 	{
// 		text:  'вопрос 3?',
// 		right: 'ответ 3',
// 	},
// ];
// let inputs      = createQuetions(questions, test);

// btn.addEventListener('click', function(){
//     for(let input of inputs){
//         if(input.dataset.right == input.value){
//             input.classList.add('right');
//         }else{
//             input.classList.add('wrong');
//         }
//     }
// });

// function createQuetions(arr, select){
//     let inputs      = [];

//     for(let elem of arr){
//         let div     = document.createElement('div');
//         select.append(div);

//         let p       = document.createElement('p');
//         p.innerHTML = elem['text'];
//         div.append(p);

//         let input   = document.createElement('input');
//         input.dataset.right = elem['right'];
//         inputs.push(input);
//         div.append(input);
//     }
//     return inputs;
// };














// // Тест с вариантами ответов в HTML коде на JavaScript
// // В предыдущих уроках ответы на вопросы теста должны были вбиваться в инпуты. В жизни, однако, часто бывают также тексты, в которых можно выбрать один вариант ответа из предложенных. 
// // Давайте научимся создавать такие тесты.
// // Давайте опять начнем с простого варианта, когда вопросы и ответы хранятся в HTML коде, а затем будем постепенно усложнять.
// // Задача №1
// // Сделайте так, чтобы при выборе одного из ответов вопроса этот ответ сразу проверялся на правильность.

// let test    = document.getElementById('test');
// let divs    = test.querySelectorAll('div');

// for(let i = 0; i < divs.length; i++){
//     let inputs  = divs[i].querySelectorAll('input');
    
//     for(let k = 0; k < inputs.length; k++){
//         inputs[k].addEventListener('click', function(){
//             if(inputs[k].hasAttribute('data-right')){
//                 this.parentElement.classList.add('right');
//             }else{
//                 this.parentElement.classList.add('wrong');
//             }

//             for(let j = 0; j < inputs.length; j++){
//                 inputs[j].disabled = true;
//             }
//         });
//     }
// }




// // Задача №2
// // Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.

// let test    = document.getElementById('test');
// let divs    = test.querySelectorAll('div');
// let btn     = document.getElementById('btn');

// for(let div of divs){
//     let inputs  = div.querySelectorAll('input');

//     for(let input of inputs){
//         input.addEventListener('click', function(){
//             deleteCheckedAtribute(inputs);
//             this.setAttribute('checked', '');
//         });
//     }
// }

// function deleteCheckedAtribute(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i].removeAttribute('checked');
//     }
// };

// btn.addEventListener('click', function(){
//     for(let div of divs){
//         let inputs  = div.querySelectorAll('input');

//         for(let i = 0; i < inputs.length; i++){
//             if(inputs[i].hasAttribute('checked')){
//                 if(inputs[i].hasAttribute('data-right')){
//                     inputs[i].parentElement.classList.add('right');
//                 }else{
//                     inputs[i].parentElement.classList.add('wrong');
//                 }
//             }
//             inputs[i].disabled  = true;
//         }
//     }
// });














// // Тест с вариантами ответов в массиве на JavaScript
// // Пусть теперь у нас есть массив, в котором написаны номера правильных ответов для каждого вопроса:
// // let answers = [0, 1, 2];
// // То есть в первом элементе этого массива лежит номер правильного ответа первого вопроса, во втором элементе - для второго вопроса и так далее.
// // Задача №1
// // Модифицируйте код предыдущего урока с учетом описанного.

// let test    = document.getElementById('test');
// let divs    = test.querySelectorAll('div');
// let btn     = document.getElementById('btn');
// let answers = [0, 1, 2];

// for(let i = 0; i < divs.length; i++){
//     let inputs  = divs[i].querySelectorAll('input');

//     for(let k = 0; k < answers.length; k++){
//         if(i == k){
//             inputs[i].setAttribute('data-right', '');
//         }
//     }
// }

// for(let div of divs){
//     let inputs  = div.querySelectorAll('input');

//     for(let input of inputs){
//         input.addEventListener('click', function(){
//             deleteCheckedAtribute(inputs);
//             this.setAttribute('checked', '');
//         });
//     }
// }

// function deleteCheckedAtribute(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i].removeAttribute('checked');
//     }
// };

// btn.addEventListener('click', function(){
//     for(let div of divs){
//         let inputs  = div.querySelectorAll('input');

//         for(let i = 0; i < inputs.length; i++){
//             if(inputs[i].hasAttribute('checked')){
//                 if(inputs[i].hasAttribute('data-right')){
//                     inputs[i].parentElement.classList.add('right');
//                 }else{
//                     inputs[i].parentElement.classList.add('wrong');
//                 }
//             }
//             inputs[i].disabled  = true;
//         }
//     }
// });














// Тест с вопросами и вариантами ответов в объекте на JavaScript
// Пусть теперь вопросы, варианты ответов и номера правильных ответов хранятся в одном объекте:
// let questions = [
// 	{
// 		text: 'вопрос 1?',
// 		right: 0,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 2?',
// 		right: 1,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 3?',
// 		right: 2,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// ];
// Теперь по заходу на страницу вам придется перебрать циклом наш объект и сформировать HTML код вопросов.
// Задача №1
// Реализуйте поставленную задачу.

let test        = document.getElementById('test');
let btn         = document.getElementById('button');
let questions   = [
	{
		text: 'Сколько ног имеет корова?',
		right: 0,
		variants: [
			'4',
			'3',
			'5'
		]
	},
	{
		text: 'Когда началась вторая мировая война?',
		right: 1,
		variants: [
			'В 1942',
			'В 1941',
			'В 1940'
		]
	},
	{
		text: 'Что такое бриллиант?',
		right: 2,
		variants: [
			'Это овощь',
			'Это стекло',
			'Это драгоценный камень'
		]
    }
];
let divs        = createQuestions(questions, test);

for(let i = 0; i < divs.length; i++){
    let inputs  = divs[i].querySelectorAll('input');

    for(let k = 0; k < questions.length; k++){
        if(i == questions[k]['right']){
            inputs[i].setAttribute('data-rigth', '');
        }
    }
}

for(let div of divs){
    let inputs  = div.querySelectorAll('input');

    for(let input of inputs){
        input.addEventListener('click', function(){
            deleteCheckedAtribute(inputs);
            this.setAttribute('checked', '');
        });
    }
}

btn.addEventListener('click', function(){
    for(let div of divs){
        let inputs      = div.querySelectorAll('input');

        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].hasAttribute('checked')){
                if(inputs[i].hasAttribute('data-rigth')){
                    inputs[i].parentElement.classList.add('right');
                }else{
                    inputs[i].parentElement.classList.add('wrong');
                }
            }
            inputs[i].disabled  = true;
        }
    }
});

function createQuestions(arr, select){
    let divs        = [];
    for(let i = 0; i < arr.length; i++){
        let div     = document.createElement('div');
        select.append(div);

        let p       = document.createElement('p');
        p.innerHTML = arr[i]['text'];
        div.append(p);

        for(let k = 0; k < arr[i]['variants'].length; k++){
            let label   = document.createElement('label');
            div.append(label);

            let input   = document.createElement('input');
            input.type  = 'radio';
            input.name  = i;
            label.append(input);

            let span        = document.createElement('span');
            span.innerHTML  = arr[i]['variants'][k];
            label.append(span);
        }

        divs.push(div);
    }
    return divs;
};

function deleteCheckedAtribute(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].removeAttribute('checked');
    }
};