// // Калькуляторы фигур на JavaScript
// // Задача №1
// // Сделайте калькулятор, который будет находить площадь и периметр квадрата.

// let input   = document.getElementById('input');
// let btn     = document.getElementById('btn');
// let result  = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let areaOfSquare        = Math.pow(Number(input.value), 2);
//     let perimeterOfSquare   = Number(input.value) * 4;
//     result.innerHTML        = 'Площадь квадрата: ' + areaOfSquare + 'см' + '<sup>2</sup>' + '<br>' + 'Периметр квадрата: ' + perimeterOfSquare + 'см';
// });




// // Задача №2
// // Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

// let inputS  = document.getElementById('inputS');
// let inputH  = document.getElementById('inputH');
// let btn     = document.getElementById('btn');
// let result  = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let areaOfTriangle      = 0.5 * Number(inputS.value) * Number(inputH.value);
//     let perimeterOfTriangle = Number(inputS.value) * 3;

//     result.innerHTML    = 'Площадь треугольника: ' + areaOfTriangle + 'см' + '<sup>2</sup>' + '<br>' +
//                           'Периметр треугольника: ' + perimeterOfTriangle + 'см';
// });




// // Задача №3
// // Сделайте калькулятор, который будет находить площадь круга и длину окружности.

// let input   = document.getElementById('input');
// let btn     = document.getElementById('btn');
// let result  = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let areaOfCircle    = (3.14 * Math.pow(Number(input.value), 2)).toFixed(2);
//     let lengthOfCircle  = (2 * 3.14 * Number(input.value)).toFixed(2);

//     result.innerHTML    = 'Площадь круга: ' + areaOfCircle + 'см' + '<sup>2</sup>' + '<br>' + 
//                           'Периметр круга: ' + lengthOfCircle + 'см';
// });




// // Задача №4
// // Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.

// let inputA      = document.getElementById('inputA');
// let inputB      = document.getElementById('inputB');
// let inputC      = document.getElementById('inputC');
// let btn         = document.getElementById('btn');
// let result      = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let halfMeterOfTriangle = (Number(inputA.value) + Number(inputB.value) + Number(inputC.value)) / 2;
//     let areaOfTriangle      = (Math.sqrt((halfMeterOfTriangle * (halfMeterOfTriangle - Number(inputA.value)) * (halfMeterOfTriangle - Number(inputB.value)) * (halfMeterOfTriangle  - Number(inputC.value))))).toFixed(2);

//     result.innerHTML        = 'Площадь треугольника: ' + areaOfTriangle + 'см' + '<sup>2</sup>';
// });














// // Математические калькуляторы на JavaScript
// // Задача №1
// // Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.

// let inputA      = document.getElementById('inputA');
// let inputB      = document.getElementById('inputB');
// let inputC      = document.getElementById('inputC');
// let btn         = document.getElementById('btn');
// let result      = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let discriminant    = Math.pow(Number(inputB.value), 2) - (4 * Number(inputA.value) * Number(inputC.value));
//     let x1              = (-Number(inputB.value) + Math.sqrt(discriminant)) / (2 * Number(inputA.value));
//     let x2              = (-Number(inputB.value) - Math.sqrt(discriminant)) / (2 * Number(inputA.value));
//     console.log(-Number(inputB.value));

//     if(discriminant < 0){
//         result.innerHTML    = 'Дискрименант = ' + discriminant + '<br>' +
//                               'Так как дискриминант меньше нуля, то уравнение не имеет действительных решений.';
//     }else{
//         result.innerHTML    = 'Дискрименант = ' + discriminant + '<br>' +
//                               'Так как дискриминант больше нуля то, квадратное уравнение имеет два действительных корня:' + '<br>' + 
//                               'X1 = ' + x1 + '<br>' + 
//                               'X2 = ' + x2;
//     }
// });




// // Задача №2
// // Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.

// let inputA      = document.getElementById('inputA');
// let inputB      = document.getElementById('inputB');
// let inputC      = document.getElementById('inputC');
// let btn         = document.getElementById('btn');
// let result      = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let arr         = getArrFromInputs();
//     let maxNum      = isMax(...arr);
//     let sumNum      = sumOtherNum(arr);

//     function isMax(num1, num2, num3){
//         return Math.max(Number(num1), Number(num2), Number(num3));
//     };
    
//     function getArrFromInputs(){
//         let arr = [];
//         arr[0]  = Number(inputA.value);
//         arr[1]  = Number(inputB.value);
//         arr[2]  = Number(inputC.value);
//         return arr;
//     };
    
//     function sumOtherNum(arr){
//         let sum         = 0;
//         let maxNum      = isMax(...arr);
//         let indexMaxNum = arr.indexOf(maxNum);
//         arr.splice(indexMaxNum, 1);
    
//         for(let elem of arr){
//             sum += Math.pow(elem, 2);
//         }
//         return sum;
//     };

//     function isThreeOfPythagoras(maxNum, sumNum){
//         let kvadratMaxNum   = Math.pow(maxNum, 2);
//         if(kvadratMaxNum == sumNum){
//             return true;
//         }else{
//             return false;
//         }
//     };


//     if(isThreeOfPythagoras(maxNum, sumNum)){
//         result.innerHTML    = 'Данная комбинация чисел является Пифагоровой тройкой!';
//     }else{
//         result.innerHTML    = 'Данная комбинация чисел НЕ является Пифагоровой тройкой!';
//     }
// });




// // Задача №3
// // Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.

// let input   = document.getElementById('input');
// let btn     = document.getElementById('btn');
// let result  = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let arr     = [];
//     let num     = Number(input.value);

//     for(let i = 1; i <= num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     result.innerHTML    = 'Делители данного числа следующие: ' + arr;
// });




// // Задача №4
// // Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.

// let input1  = document.getElementById('input1');
// let input2  = document.getElementById('input2');
// let btn     = document.getElementById('btn');
// let result  = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let resultArr           = [];
//     let delisionsFirstNum   = getDelisionsNum(Number(input1.value));
//     let delisionsSecondNum  = getDelisionsNum(Number(input2.value));
//     console.log(delisionsFirstNum);
//     console.log(delisionsSecondNum);
    
//     for(let num1 of delisionsFirstNum){
//         for(let num2 of delisionsSecondNum){
//             if(num1 == num2){
//                 resultArr.push(num1);
//             }
//         }
//     }

//     function getDelisionsNum(num){
//         let arr = [];

//         for(let i = 1; i <= num; i++){
//             if(num % i == 0){
//                 arr.push(i);
//             }
//         }
//         return arr;
//     };

//     result.innerHTML    = 'Общие делители данных чисел следующие: ' + resultArr;
// });




// // Задача №5
// // Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.

// let input1  = document.getElementById('input1');
// let input2  = document.getElementById('input2');
// let btn     = document.getElementById('btn');
// let result  = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let devisorsFirstNum    = getDivisors(Number(input1.value));
//     let devisorsSecondNum   = getDivisors(Number(input2.value));
//     let generalDevisors     = getGeneralDevisors(devisorsFirstNum, devisorsSecondNum);
//     let nod                 = Math.max(...generalDevisors);

//     function getDivisors(num){
//         let result  = [];

//         for(let i = 1; i <= num; i++){
//             if(num % i == 0){
//                 result.push(i);
//             }
//         }
//         return result;
//     };

//     function getGeneralDevisors(arr1, arr2){
//         let result  = [];

//         for(let num1 of arr1){
//             for(let num2 of arr2){
//                 if(num1 == num2){
//                     result.push(num1);
//                 }
//             }
//         }
//         return result;
//     };
//     result.innerHTML    = 'Наибольший общий делитель этих чисел следующий: ' + nod;
// });




// // Задача №6
// // Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел после 1.

// let input1  = document.getElementById('input1');
// let input2  = document.getElementById('input2');
// let btn     = document.getElementById('btn');
// let result  = document.getElementById('result');

// btn.addEventListener('click', function(){
//     let divisorsFirstNum    = getDivisors(Number(input1.value));
//     let divisorsSecondNum   = getDivisors(Number(input2.value));
//     let generalDevisors     = getGeneralDivisors(divisorsFirstNum, divisorsSecondNum);
//     let num                 = Math.min(...generalDevisors);

//     function getDivisors(num){
//         let result  = [];

//         for(let i = 2; i <= num; i++){
//             if(num % i == 0){
//                 result.push(i);
//             }
//         }
//         return result;
//     };

//     function getGeneralDivisors(arr1, arr2){
//         let result  = [];

//         for(let num1 of arr1){
//             for(let num2 of arr2){
//                 if(num1 == num2){
//                     result.push(num1);
//                 }
//             }
//         }
//         return result;
//     };
//     if(num == Infinity){
//         result.innerHTML = 'У чисел нет общих делителей';
//     }else{
//         result.innerHTML = 'Наименьшее число, которое делится и на одно и на второе число будет следующее: ' + num;
//     }
// });














// // Анализатор текста на JavaScript
// // Задача №1
// // Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.

// let text    = document.getElementById('text');

// text.addEventListener('blur', function(){
//     let arr         = (text.value).split(' ');
//     let amountWords = arr.length;
//     alert('Количество слов в данном инпуте составляет ' + amountWords);
// });




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов.

// let text    = document.getElementById('text');

// text.addEventListener('blur', function(){
//     let arr1            = (text.value).split(' ');
//     let arr2            = (text.value).split('');
//     let amountWords     = arr1.length;
//     let amountSymbols   = arr2.length;
//     alert('Количество слов в данном инпуте составляет ' + amountWords + '\n' + 'Количество символов в данном инпуте составляет: ' + amountSymbols);
// });




// // Задача №3
// // Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.

// let text    = document.getElementById('text');

// text.addEventListener('blur', function(){
//     let curr                        = 0;
//     let arr1                        = (text.value).split(' ');
//     let arr2                        = (text.value).split('');
//     let amountWords                 = arr1.length;
//     let amountSymbols               = arr2.length;
    
//     for(let elem of arr2){
//         if(elem == ' '){
//             curr++;
//         }
//     }
//     let amountSymbolsWithoutProb    = amountSymbols - curr;

//     alert('Количество слов в данном инпуте составляет ' + amountWords + '\n' + 'Количество символов в данном инпуте составляет: ' + amountSymbols +
//           '\n' + 'Количество символов в данном инпуте без пробелов составляет: ' + amountSymbolsWithoutProb);
// });




// // Задача №4
// // Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о процентном содержании каждого символа в тексте.

// let text    = document.getElementById('text');

// text.addEventListener('blur', function(){
//     let curr                        = 0;
//     let arr1                        = (text.value).split(' ');
//     let arr2                        = (text.value).split('');
//     let amountWords                 = arr1.length;
//     let amountSymbols               = arr2.length;
//     let obj                         = {};
//     let sumObj                      = 0;
    
//     for(let elem of arr2){
//         if(elem == ' '){
//             curr++;
//         }
//     }
//     let amountSymbolsWithoutProb    = amountSymbols - curr;

//     for(let elem of arr2){
//         obj[elem] = 0;
        
//         for(let el of arr2){
//             if(elem == el){
//                 obj[elem]++;
//             }
//         }
//     }

//     for(let key in obj){
//         sumObj += obj[key];
//     }

//     for(let key in obj){
//         console.log('Процентное соотношение символа ' + getWorld(key) + ' в тексте составляет: ' + ((100 * obj[key]) / sumObj).toFixed(2) + '%');
//     }

//     function getWorld(text){
//         if(text == ' '){
//             return 'пробела';
//         }else{
//             return text;
//         }
//     };

//     alert('Количество слов в данном инпуте составляет ' + amountWords + '\n' + 'Количество символов в данном инпуте составляет: ' + amountSymbols +
//           '\n' + 'Количество символов в данном инпуте без пробелов составляет: ' + amountSymbolsWithoutProb);
// });




// // Задача №5
// // В предыдущих задачах мы сделали так, что для нашего текста выводятся 4 параметра. Сделайте 4 чекбокса, которые будут регулировать, какие именно параметры показывать.

// let text            = document.getElementById('text');
// let worlds          = document.getElementById('worlds');
// let symbols         = document.getElementById('symbols');
// let symbolsWithout  = document.getElementById('symbolsWithout');
// let procentsSymbols = document.getElementById('procentsSymbols');
// let result          = document.getElementById('result');

// text.addEventListener('blur', function(){
//     let curr                        = 0;
//     let arr1                        = (text.value).split(' ');
//     let arr2                        = (text.value).split('');
//     let amountWords                 = arr1.length;
//     let amountSymbols               = arr2.length;
//     let obj                         = {};
//     let sumObj                      = 0;
    

//     if(worlds.checked){
//         result.innerHTML    = 'Количество слов в данном инпуте составляет: ' + amountWords;
//     }

//     if(symbols.checked){
//         result.innerHTML    += '<br>' + 'Количество символов в данном инпуте составляет: ' + amountSymbols;
//     }
//     for(let elem of arr2){
//         if(elem == ' '){
//             curr++;
//         }
//     }
//     let amountSymbolsWithoutProb    = amountSymbols - curr;

//     if(symbolsWithout.checked){
//         result.innerHTML    += '<br>' + 'Количество символов в данном инпуте без пробелов составляет: ' + amountSymbolsWithoutProb;
//     }

//     for(let elem of arr2){
//         obj[elem] = 0;
        
//         for(let el of arr2){
//             if(elem == el){
//                 obj[elem]++;
//             }
//         }
//     }

//     for(let key in obj){
//         sumObj += obj[key];
//     }

//     if(procentsSymbols.checked){
//         for(let key in obj){
//             result.innerHTML    += '<br>' + 'Процентное соотношение символа ' + getWorld(key) + ' в тексте составляет: ' + ((100 * obj[key]) / sumObj).toFixed(2) + '%';
//         }
//     }

//     function getWorld(text){
//         if(text == ' '){
//             return 'пробела';
//         }else{
//             return text;
//         }
//     };
// });














// // Транслит на JavaScript
// // Задача №1
// // Пусть даны два textarea. Пусть в первый текстареа вводится текст на русском языке. Сделайте так, чтобы по потери фокуса этот текст преобразовался в транслит и вывелся во втором текстареа.

// let ru      = document.getElementById('ru');
// let eng     = document.getElementById('eng');

// ru.addEventListener('blur', function(){
//     let translate   = {
//         'й' : 'q',
//         'ц' : 'w',
//         'у' : 'e',
//         'к' : 'r',
//         'е' : 't',
//         'н' : 'y',
//         'г' : 'u',
//         'ш' : 'i',
//         'щ' : 'o',
//         'з' : 'p',
//         'х' : '[',
//         'ъ' : ']',
//         'ф' : 'a',
//         'ы' : 's',
//         'в' : 'd',
//         'а' : 'f',
//         'п' : 'g',
//         'р' : 'h',
//         'о' : 'j',
//         'л' : 'k',
//         'д' : 'l',
//         'ж' : ';',
//         'э' : '""',
//         'я' : 'z',
//         'ч' : 'x',
//         'с' : 'c',
//         'м' : 'v',
//         'и' : 'b',
//         'т' : 'n',
//         'ь' : 'm',
//         'б' : ',',
//         'ю' : '.',
//         ' ' : ' '
//     };
//     let arr     = massTakeToLowerCase((ru.value).split(''));
//     let result  = [];

//     for(let elem of arr){
//         for(let key in translate){
//             if(elem == key){
//                 result.push(translate[key]);
//             }
//         }
//     }

//     function massTakeToLowerCase(arr){
//         let result  = [];

//         for(let elem of arr){
//             result.push(elem.toLowerCase());
//         }
//         return result;
//     };

//     eng.value   = result.join('');
// });




// // Задача №2
// // Сделайте так, чтобы при вводе во второй текстареа транслита текста, по потери фокуса этот текст преобразовывался в русский и выводился в первом текстареа.

// let ru      = document.getElementById('ru');
// let eng     = document.getElementById('eng');

// ru.addEventListener('blur', function(){
//     let translate   = {
//         'й' : 'q',
//         'ц' : 'w',
//         'у' : 'e',
//         'к' : 'r',
//         'е' : 't',
//         'н' : 'y',
//         'г' : 'u',
//         'ш' : 'i',
//         'щ' : 'o',
//         'з' : 'p',
//         'х' : '[',
//         'ъ' : ']',
//         'ф' : 'a',
//         'ы' : 's',
//         'в' : 'd',
//         'а' : 'f',
//         'п' : 'g',
//         'р' : 'h',
//         'о' : 'j',
//         'л' : 'k',
//         'д' : 'l',
//         'ж' : ';',
//         'э' : '""',
//         'я' : 'z',
//         'ч' : 'x',
//         'с' : 'c',
//         'м' : 'v',
//         'и' : 'b',
//         'т' : 'n',
//         'ь' : 'm',
//         'б' : ',',
//         'ю' : '.',
//         ' ' : ' '
//     };
//     let arr     = massTakeToLowerCase((ru.value).split(''));
//     let result  = [];

//     for(let elem of arr){
//         for(let key in translate){
//             if(elem == key){
//                 result.push(translate[key]);
//             }
//         }
//     }

//     function massTakeToLowerCase(arr){
//         let result  = [];

//         for(let elem of arr){
//             result.push(elem.toLowerCase());
//         }
//         return result;
//     };

//     eng.value   = result.join('');
// });

// eng.addEventListener('blur', function(){
//     let translate   = {
//         'й' : 'q',
//         'ц' : 'w',
//         'у' : 'e',
//         'к' : 'r',
//         'е' : 't',
//         'н' : 'y',
//         'г' : 'u',
//         'ш' : 'i',
//         'щ' : 'o',
//         'з' : 'p',
//         'х' : '[',
//         'ъ' : ']',
//         'ф' : 'a',
//         'ы' : 's',
//         'в' : 'd',
//         'а' : 'f',
//         'п' : 'g',
//         'р' : 'h',
//         'о' : 'j',
//         'л' : 'k',
//         'д' : 'l',
//         'ж' : ';',
//         'э' : '""',
//         'я' : 'z',
//         'ч' : 'x',
//         'с' : 'c',
//         'м' : 'v',
//         'и' : 'b',
//         'т' : 'n',
//         'ь' : 'm',
//         'б' : ',',
//         'ю' : '.',
//         ' ' : ' ',
//         ',' : '?',
//         '.' : '/',
//         '!' : '!'
//     };
//     let arr     = massTakeToLowerCase((eng.value).split(''));
//     let result  = [];

//     for(let elem of arr){
//         for(let key in translate){
//             if(elem == translate[key]){
//                 result.push(key);
//             }
//         }
//     }

//     function massTakeToLowerCase(arr){
//         let result  = [];

//         for(let elem of arr){
//             result.push(elem.toLowerCase());
//         }
//         return result;
//     };

//     ru.value   = result.join('');
// });




// // Задача №3
// // Модифицируйте вашу задачу так, чтобы был один текстареа, чекбокс и див. 
// // Если чекбокс отмечен, то пусть в див по потери фокуса выводится транслит текста, а если не отмечен - то текст текстареа пусть преобразуется из транслита в русский текст.

// let text        = document.getElementById('text');
// let translit    = document.getElementById('translit');
// let resultText  = document.getElementById('result');

// text.addEventListener('blur', function(){
//         let translate   = {
//         'й' : 'q',
//         'ц' : 'w',
//         'у' : 'e',
//         'к' : 'r',
//         'е' : 't',
//         'н' : 'y',
//         'г' : 'u',
//         'ш' : 'i',
//         'щ' : 'o',
//         'з' : 'p',
//         'х' : '[',
//         'ъ' : ']',
//         'ф' : 'a',
//         'ы' : 's',
//         'в' : 'd',
//         'а' : 'f',
//         'п' : 'g',
//         'р' : 'h',
//         'о' : 'j',
//         'л' : 'k',
//         'д' : 'l',
//         'ж' : ';',
//         'э' : '""',
//         'я' : 'z',
//         'ч' : 'x',
//         'с' : 'c',
//         'м' : 'v',
//         'и' : 'b',
//         'т' : 'n',
//         'ь' : 'm',
//         'б' : ',',
//         'ю' : '.',
//         ' ' : ' '
//     };

//     if(translit.checked){
//         let arr     = massTakeToLowerCase((text.value).split(''));
//         let result  = [];

//         for(let elem of arr){
//             for(let key in translate){
//                 if(elem == key){
//                     result.push(translate[key]);
//                 }
//             }
//         }

//         function massTakeToLowerCase(arr){
//             let result  = [];

//             for(let elem of arr){
//                 result.push(elem.toLowerCase());
//             }
//             return result;
//         };

//         resultText.innerHTML   = result.join('');
//     }else{
//         let arr     = massTakeToLowerCase((text.value).split(''));
//         let result  = [];

//         for(let elem of arr){
//             for(let key in translate){
//                 if(elem == translate[key]){
//                     result.push(key);
//                 }
//             }
//         }

//         function massTakeToLowerCase(arr){
//             let result  = [];

//             for(let elem of arr){
//                 result.push(elem.toLowerCase());
//             }
//             return result;
//         };

//         resultText.innerHTML   = result.join('');
//     }
// });




// // Задача №4
// // Модифицируйте предыдущую задачу так, чтобы текст в диве появлялся не по потери фокуса, а по мере ввода текста в текстареа.

// let text        = document.getElementById('text');
// let translit    = document.getElementById('translit');
// let resultText  = document.getElementById('result');

// text.addEventListener('keyup', function(){
//         let translate   = {
//         'й' : 'q',
//         'ц' : 'w',
//         'у' : 'e',
//         'к' : 'r',
//         'е' : 't',
//         'н' : 'y',
//         'г' : 'u',
//         'ш' : 'i',
//         'щ' : 'o',
//         'з' : 'p',
//         'х' : '[',
//         'ъ' : ']',
//         'ф' : 'a',
//         'ы' : 's',
//         'в' : 'd',
//         'а' : 'f',
//         'п' : 'g',
//         'р' : 'h',
//         'о' : 'j',
//         'л' : 'k',
//         'д' : 'l',
//         'ж' : ';',
//         'э' : '""',
//         'я' : 'z',
//         'ч' : 'x',
//         'с' : 'c',
//         'м' : 'v',
//         'и' : 'b',
//         'т' : 'n',
//         'ь' : 'm',
//         'б' : ',',
//         'ю' : '.',
//         ' ' : ' '
//     };

//     if(translit.checked){
//         let arr     = massTakeToLowerCase((text.value).split(''));
//         let result  = [];

//         for(let elem of arr){
//             for(let key in translate){
//                 if(elem == key){
//                     result.push(translate[key]);
//                 }
//             }
//         }

//         function massTakeToLowerCase(arr){
//             let result  = [];

//             for(let elem of arr){
//                 result.push(elem.toLowerCase());
//             }
//             return result;
//         };

//         resultText.innerHTML   = result.join('');
//     }else{
//         let arr     = massTakeToLowerCase((text.value).split(''));
//         let result  = [];

//         for(let elem of arr){
//             for(let key in translate){
//                 if(elem == translate[key]){
//                     result.push(key);
//                 }
//             }
//         }

//         function massTakeToLowerCase(arr){
//             let result  = [];

//             for(let elem of arr){
//                 result.push(elem.toLowerCase());
//             }
//             return result;
//         };

//         resultText.innerHTML   = result.join('');
//     }
// });














// // Игра угадай число на JavaScript
// // Задача №1
// // Реализуйте описанную игру.
// // Сейчас мы с вами реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.
// // Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше', а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.

// let input       = document.getElementById('input');
// let result      = document.getElementById('result');
// let randomNum   = getRandomNum(1, 100);

// function getRandomNum(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// input.addEventListener('keyup', function(event){
//     let keyCode     = event.keyCode;
    
//     if(keyCode == 13){
//             if(Number(input.value) > randomNum){
//                 result.innerHTML    = 'Мое число меньше!';
//             }else if(Number(input.value) < randomNum){
//                 result.innerHTML    = 'Мое число больше!';
//             }else{
//                 result.innerHTML    = 'Поздравляем, вы угадали число!';
//                 randomNum   = getRandomNum(1, 100);
//             }
//         }
// });














// // Игра угадай ячейку на JavaScript
// // Задача №1
// // Реализуйте описанную игру.
// // Давайте теперь реализуем игру угадай ячейку. 
// // В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

// let personSettings      = document.getElementById('personSettings');
// let startGame           = document.getElementById('startGame');
// let info                = document.querySelector('.info');
// let restartGame         = document.querySelector('.restartGame');
// start();


// function start(){
//     startGame.addEventListener('click', function(){
//         let randomCellsFromComp = Number(personSettings.value);
//         personSettings.value    = '';
//         personSettings.classList.add('hiddenElems');
//         startGame.classList.add('hiddenElems');
    
//         let table   = createTable(10, 10);
//         let tds     = table.querySelectorAll('td');
//         fillCellsWithNums(tds);
    
//         let tdsLength           = tds.length;
//         let randomTds           = getRandomNumsForColls(tds, randomCellsFromComp, tdsLength);
//         console.log(randomTds);
    
//         activeColls(randomTds, tds);
    
    
//         // Вешаем обработчики события на tds, чтобы изменять ячейки
//         for(let td of tds){
//             td.addEventListener('click', function func(){
//                 if(getActiveClasses(tds) !== 0){
//                     if(this.classList.contains('active')){
//                         this.classList.remove('active');
//                         this.classList.add('active1');
//                         this.removeEventListener('click', func);
//                     }else{
//                         this.classList.add('active2');
//                     }
//                 }else{
//                     td.removeEventListener('click', func);
//                 }
//                 if(getActiveClasses(tds) == 0){
//                     info.classList.remove('hiddenElems');
//                     info.innerHTML = 'Поздравляем, вы нашли все ячейки, которые загадал компьютер!';
//                     restartGame.classList.remove('hiddenElems');
//                 }
//             });
//         }
//     });
    
//     function createTable(rows, colls){
//         let table   = document.createElement('table');
//         document.body.prepend(table);
        
//         for(let i = 1; i <= rows; i++){
//             let tr      = document.createElement('tr');
//             table.appendChild(tr);
    
//             for(let k = 1; k <= colls; k++){
//                 let td  = document.createElement('td');
//                 tr.appendChild(td);
//             }
//         }
//         return table;
//     };
    
//     function fillCellsWithNums(arr){
//         for(let i = 0; i < arr.length; i++){
//             arr[i].innerHTML = i + 1;
//         }
//     };
    
//     function getRandomNum(min, max){
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     };
    
//     // Получаем нужные колонки, которые задает компьютер под номерами
//     function getRandomNumsForColls(tds, randomCellsFromComp, length){
//         let result  = [];
    
//         for(let i = 1; i <= randomCellsFromComp; i++){
//             let num = tds[getRandomNum(1, length) - 1].innerHTML;
    
//             if(result.indexOf(num) == -1){
//                 result.push(num);
//             }else{
//                 result.length = 0;
//                 i = 0;
//             }
//         }
//         return result;
//     };
    
//     // Задаем для выбранных колонок класс active
//     function activeColls(arr, tds){
//         for(let i = 0; i < arr.length; i++){
//             tds[Number(arr[i]) - 1].classList.add('active');
//         }
//     };
    
//     // Проверяется количество классов active у колонок
//     function getActiveClasses(tds){
//         let curr = 0;
    
//         for(let i = 0; i < tds.length; i++){
//             if(tds[i].classList.contains('active')){
//                 curr++;
//             }
//         }
//         return curr;
//     };
// };

// restartGame.addEventListener('click', function(){
//     let table   = document.querySelector('table');

//     document.body.removeChild(table);
//     personSettings.classList.remove('hiddenElems');
//     startGame.classList.remove('hiddenElems');

//     info.innerHTML = '';
//     info.classList.add('hiddenElems');
//     restartGame.classList.add('hiddenElems');
// });




// // Задача №2
// // Модифицируйте предыдущую задачу, добавив таймер обратного отсчета. Если игрок не успеет угадать числа за отведенное время - он проиграл.

// let personSettings      = document.getElementById('personSettings');
// let startGame           = document.getElementById('startGame');
// let info                = document.querySelector('.info');
// let restartGame         = document.querySelector('.restartGame');
// let generalTimer        = document.querySelector('.generalTimer');
// let timer               = document.querySelector('.timer');
// let correctTimer        = document.getElementById('correctTimer');
// let timerInfo           = document.querySelector('.timerInfo');
// let currForTimer        = 70;
// let id;
// start();

// function start(){
//     startGame.addEventListener('click', function(){
//         let randomCellsFromComp = Number(personSettings.value);

//         if(typeof(randomCellsFromComp) == 'number' && randomCellsFromComp > 0 && randomCellsFromComp <= 10){
//             personSettings.value    = '';
//             personSettings.classList.add('hiddenElems');
//             startGame.classList.add('hiddenElems');
//             generalTimer.classList.remove('hiddenElems');
    
//             generalTimer.classList.remove('hiddenElems');
//             startTimer(timer, currForTimer);
        
//             let table   = createTable(10, 10);
//             let tds     = table.querySelectorAll('td');
//             fillCellsWithNums(tds);
        
//             let tdsLength           = tds.length;
//             let randomTds           = getRandomNumsForColls(tds, randomCellsFromComp, tdsLength);
//             console.log(randomTds);
        
//             activeColls(randomTds, tds);
       
        
//             // Вешаем обработчики события на tds, чтобы изменять ячейки
//             for(let td of tds){
//                 td.addEventListener('click', function func(){
//                     if(getActiveClasses(tds) !== 0 && correctTimer.innerHTML !== '0'){
//                         if(this.classList.contains('active')){
//                             this.classList.remove('active');
//                             this.classList.add('active1');
//                             this.removeEventListener('click', func);
//                         }else{
//                             this.classList.add('active2');
//                         }
//                     }else{
//                         td.removeEventListener('click', func);
//                     }
    
//                     if(getActiveClasses(tds) == 0){
//                         clearInterval(id);
//                         info.classList.remove('hiddenElems');
//                         info.innerHTML = 'Поздравляем, вы нашли все ячейки, которые загадал компьютер!';
//                         restartGame.classList.remove('hiddenElems');
//                         generalTimer.classList.add('hiddenElems');
//                     }
    
//                     if(correctTimer.innerHTML == '0'){
//                         timerInfo.classList.remove('hiddenElems');
//                         restartGame.classList.remove('hiddenElems');
//                         generalTimer.classList.add('hiddenElems');
//                     }
//                 });
//             }
//         }else{
//             alert('Вы ввели НЕ число в инпут, пожалуйста, исправьте это недоразумение:)');
//         }
//     });
    
//     // Создаем таблицу (рисуем)
//     function createTable(rows, colls){
//         let table   = document.createElement('table');
//         document.body.prepend(table);
        
//         for(let i = 1; i <= rows; i++){
//             let tr      = document.createElement('tr');
//             table.appendChild(tr);
    
//             for(let k = 1; k <= colls; k++){
//                 let td  = document.createElement('td');
//                 tr.appendChild(td);
//             }
//         }
//         return table;
//     };
    
//     // Заполняем таблицу числами от 1 до 100
//     function fillCellsWithNums(arr){
//         for(let i = 0; i < arr.length; i++){
//             arr[i].innerHTML = i + 1;
//         }
//     };
    
//     function getRandomNum(min, max){
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     };
    
//     // Получаем нужные колонки, которые задает компьютер под номерами
//     function getRandomNumsForColls(tds, randomCellsFromComp, length){
//         let result  = [];
    
//         for(let i = 1; i <= randomCellsFromComp; i++){
//             let num = tds[getRandomNum(1, length) - 1].innerHTML;
    
//             if(result.indexOf(num) == -1){
//                 result.push(num);
//             }else{
//                 result.length = 0;
//                 i = 0;
//             }
//         }
//         return result;
//     };
    
//     // Задаем для выбранных колонок класс active
//     function activeColls(arr, tds){
//         for(let i = 0; i < arr.length; i++){
//             tds[Number(arr[i]) - 1].classList.add('active');
//         }
//     };
    
//     // Проверяется количество классов active у колонок
//     function getActiveClasses(tds){
//         let curr = 0;
    
//         for(let i = 0; i < tds.length; i++){
//             if(tds[i].classList.contains('active')){
//                 curr++;
//             }
//         }
//         return curr;
//     };

//     // Запускаем таймер обратного отсчета
//     function startTimer(timer, currForTimer){
//         id = setInterval(function(){
//             timer.innerHTML         = 'Успейте отгадать ячейки пока тикает таймер: ';
//             correctTimer.innerHTML  = currForTimer - 1;
//             currForTimer--;

//             if(currForTimer == 0){
//                 clearInterval(id);
//             }
//         }, 1000);
//     };
// };

// restartGame.addEventListener('click', function(){
//     let table   = document.querySelector('table');

//     document.body.removeChild(table);
//     generalTimer.classList.add('hiddenElems');
//     timerInfo.classList.add('hiddenElems');
//     personSettings.classList.remove('hiddenElems');
//     startGame.classList.remove('hiddenElems');

//     info.innerHTML = '';
//     info.classList.add('hiddenElems');
//     restartGame.classList.add('hiddenElems');
//     correctTimer.innerHTML  = currForTimer;
// });














// // Экранная клавиатура на JavaScript
// // Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера. 
// // Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.
// // Задача №1
// // Реализуйте описанную клавиатуру. Пусть эта клавиатура будет привязана к какому-нибудь инпуту, то есть кликая по ней, мы будем вводить данные в этот инпут.

// let result  = document.getElementById('result');
// let buttons = document.querySelectorAll('.row .key');
// result.focus();

// for(let button of buttons){
//     button.addEventListener('click', function(){
//         result.focus();
//         result.value += this.firstElementChild.innerHTML;
//     });
// }




// // Задача №2
// // Сделайте на вашей клавиатуре кнопку Caps Lock, которая будет делать так, чтобы все буквы переводились в верхний регистр.

// let result      = document.getElementById('result');
// let buttons     = document.querySelectorAll('.row .key');

// let capsLock    = false;
// let shift       = false;
// result.focus();

// for(let button of buttons){
//     button.addEventListener('click', function(){
//         result.focus();
//         let elem    = this.firstElementChild.innerHTML;

//         if(elem == 'Backspace' || elem == 'Caps Lock' || elem == 'Tab' || elem == 'Shift'){
//             if(elem == 'Backspace'){
//                 let arr = (result.value).split('');
//                 arr.pop();
//                 result.value = arr.join('');
//             }

//             if(elem == 'Tab'){
//                 let text    = result.value;
//                 result.value += '    ';
//             }



//             if(elem == 'Caps Lock'){
//                 if(capsLock == false){
//                     capsLock = true;
//                     this.firstElementChild.classList.add('active');
//                 }else{
//                     capsLock = false;
//                     this.firstElementChild.classList.remove('active');
//                 }
//             }

//             if(elem == 'Shift'){
//                 if(shift == false){
//                     shift = true;
//                     this.firstElementChild.classList.add('active');
//                 }else{
//                     shift = false;
//                     this.firstElementChild.classList.remove('active');
//                 }
//             }
//         }else{
//             if(capsLock){
//                 result.value += elem.toUpperCase();
//             }else if(shift){
//                 if(this.firstElementChild.nextSibling != null){
//                     result.value += this.firstElementChild.nextSibling.innerHTML;
//                 }else{
//                     result.value += elem;
//                 }
//             }else{
//                 result.value += elem;
//             }
//         }
//     });
// }














// // Калькулятор на JavaScript
// // Давайте реализуем калькулятор. Он будет работать как обычный классический калькулятор: у вас будет инпут, а под ним кнопочки с цифрами и знаками операций. 
// // По нажатию на цифры они должны появляться в инпуте. По нажатию на знак операции число из инпута должно исчезать. 
// // После этого при вводе следующего числа в инпут и нажатия на знак равно в инпуте должен появится результат операции.
// // Задача №1
// // Реализуйте описанный калькулятор.

// // // Способ решения №1
// // let display         = document.querySelector('#calc #display');
// // let buttons         = document.querySelectorAll('.button');

// // for(btn of buttons){
// //     btn.addEventListener('click', function(){
// //         let sum = '';

// //         if(this.dataset.type == 'C'){
// //             display.value = '';
// //         }else if(this.dataset.type != '='){
// //             display.value += this.dataset.type;
// //         }else{
// //             sum = display.value;
// //             display.value = eval(sum);
// //         }
// //     });
// // }


// // Способ решения №2
// let display         = document.querySelector('#calc #display');
// let buttons         = document.querySelectorAll('.button');

// let num1            = '';
// let num2            = '';
// let num3            = '';

// for(btn of buttons){
//     btn.addEventListener('click', function(){
//         if(this.dataset.type != '/' && this.dataset.type != '*' && this.dataset.type != '-' && this.dataset.type != '+'){
//             display.value += this.dataset.type;
//         }else{
//             num1    = display.value;
//             display.value   = '';
//             num2    = this.dataset.type;
//         }

//         if(this.dataset.type == '='){
//             num3    = parseFloat(display.value);
//             display.value = eval(num1 + num2 + num3);
//         }
//     });
// }




// // Задача №2
// // Сделайте так, чтобы над инпутом выводились введенные числа и между ними знак операции.

// let display         = document.querySelector('#calc #display');
// let buttons         = document.querySelectorAll('.button');
// let result          = document.getElementById('result');

// let num1            = '';
// let num2            = '';
// let num3            = '';

// for(btn of buttons){
//     btn.addEventListener('click', function(){
//         if(this.dataset.type != '/' && this.dataset.type != '*' && this.dataset.type != '-' && this.dataset.type != '+'){
//             display.value += this.dataset.type;
//         }else{
//             num1    = display.value;
//             display.value   = '';
//             num2    = this.dataset.type;
//         }

//         if(this.dataset.type == '='){
//             num3    = parseFloat(display.value);
//             display.value = eval(num1 + num2 + num3);
//         }

//         result.innerHTML    = num1 + num2 + num3;
//     });
// }




// // Задача №3
// // Сделайте кнопку сброса, которая будет очищать инпут для ввода, а также отменять операцию, если ранее была нажата кнопка операции.

// let display         = document.querySelector('#calc #display');
// let buttons         = document.querySelectorAll('.button');
// let result          = document.getElementById('result');

// let num1            = '';
// let num2            = '';
// let num3            = '';

// for(btn of buttons){
//     btn.addEventListener('click', function(){
//         if(this.dataset.type == 'C'){
//             result.innerHTML    = '';
//             display.value       = '';
//         }else if(this.dataset.type != '/' && this.dataset.type != '*' && this.dataset.type != '-' && this.dataset.type != '+'){
//             display.value += this.dataset.type;
//         }else{
//             num1    = display.value;
//             result.innerHTML    = num1;
//             display.value   = '';
//             num2    = this.dataset.type;
//             result.innerHTML    += num2;
//         }

//         if(this.dataset.type == '='){
//             num3    = parseFloat(display.value);
//             result.innerHTML    += num3;
//             display.value = eval(num1 + num2 + num3);
//         }
//     });
// }




// // Задача №4
// // Сделайте кнопку для памяти. Пусть она запоминает результат какой-нибудь операции. Сделайте кнопку для вставки в инпут результата из памяти.

// let display         = document.querySelector('#calc #display');
// let buttons         = document.querySelectorAll('.button');
// let result          = document.getElementById('result');
// let history         = document.getElementById('history');

// let num1            = '';
// let num2            = '';
// let num3            = '';
// let primeRes        = [];

// for(btn of buttons){
//     btn.addEventListener('click', function(){
//         if(this.dataset.type == 'C'){
//             result.innerHTML    = '';
//             display.value       = '';
//         }else if(this.dataset.type != '/' && this.dataset.type != '*' && this.dataset.type != '-' && this.dataset.type != '+'){
//             display.value += this.dataset.type;
//         }else{
//             num1    = display.value;
//             result.innerHTML    = num1;
//             display.value   = '';
//             num2    = this.dataset.type;
//             result.innerHTML    += num2;
//         }

//         if(this.dataset.type == '='){
//             num3    = parseFloat(display.value);
//             result.innerHTML    += num3;
//             display.value = eval(num1 + num2 + num3);
//             primeRes.push(num1 + num2 + num3);
//         }
//     });
// }

// history.addEventListener('click', function(){
//     let divs    = document.querySelectorAll('.history');
//     for(div of divs){
//         div.remove();
//     }

//     for(let i = 0; i < primeRes.length; i++){
//         let div     = document.createElement('div');
//         div.classList.add('history');
//         document.body.appendChild(div);
    
//         let p       = document.createElement('p');
//         p.innerHTML = '<span>' + primeRes[i] + '</span>';
//         div.appendChild(p);

//         let link        = document.createElement('a');
//         link.href       = '#';
//         link.innerHTML  = ' Вставить эту операцию';
//         p.appendChild(link);

//         link.addEventListener('click', function(event){
//             event.preventDefault();

//             display.value = this.previousSibling.innerHTML;
//         });
//     }

//     let clear               = document.querySelector('.clear');
//     if(clear == undefined){
//         let clearHitory         = document.createElement('button');
//         clearHitory.innerHTML   = 'Очистить историю';
//         clearHitory.classList.add('clear');
//         document.body.appendChild(clearHitory);
    
//         clearHitory.addEventListener('click', function(){
//             let divs    = document.querySelectorAll('.history');
//             for(let div of divs){
//                 div.remove();
//             }
//             clearHitory.remove();
//             primeRes.length = 0;
//         });
//     }
// });














// // Линейный календарь на JavaScript
// // Задача №1
// // Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд.

// let calendarDiv      = document.createElement('div');
// calendarDiv.setAttribute('id', 'calendar');
// document.body.appendChild(calendarDiv);

// let date            = new Date();
// let lastDayMonth    = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// for(let i = 1; i <= lastDayMonth; i++){
//     let div  = document.createElement('div');
//     div.setAttribute('class', 'day');
//     div.innerHTML   = i;
//     calendarDiv.appendChild(div);
// }




// // Задача №2
// // Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.

// let calendarDiv      = document.createElement('div');
// calendarDiv.setAttribute('id', 'calendar');
// document.body.appendChild(calendarDiv);

// let date            = new Date();
// let lastDayMonth    = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// let currentDay      = date.getDate();

// for(let i = 1; i <= lastDayMonth; i++){
//     let div  = document.createElement('div');
//     div.classList.add('day');
//     div.innerHTML   = i;
//     calendarDiv.appendChild(div);

//     if(Number(div.innerHTML) == currentDay){
//         div.classList.add('today');
//     }
// }




// // Задача №3
// // Сделайте так, чтобы над списком было написано название текущего месяца по-русски и номер года.

// let date            = new Date();
// let lastDayMonth    = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// let currentDay      = date.getDate();
// let months          = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

// let divControll     = document.createElement('div');
// divControll.setAttribute('class', 'controls');
// document.body.appendChild(divControll);

// let divDate         = document.createElement('div');
// divDate.setAttribute('id', 'date');
// divDate.innerHTML   = date.getFullYear() + ' ' + months[date.getMonth()];
// divControll.appendChild(divDate);

// let calendarDiv     = document.createElement('div');
// calendarDiv.setAttribute('id', 'calendar');
// document.body.appendChild(calendarDiv);

// for(let i = 1; i <= lastDayMonth; i++){
//     let div  = document.createElement('div');
//     div.classList.add('day');
//     div.innerHTML   = i;
//     calendarDiv.appendChild(div);

//     if(Number(div.innerHTML) == currentDay){
//         div.classList.add('today');
//     }
// }




// // Задача №4
// // Сделайте так, чтобы над календарем появились ссылки вперед и назад, позволяющие менять месяц. Месяц и год, выводимые над календарем, должны соответствовать отображаемому месяцу.

// let controls        = document.querySelector('.controls');
// let prev            = document.getElementById('prev');
// let next            = document.getElementById('next');
// let dateControls    = document.getElementById('date');
// let date            = new Date();
// let lastDayMonth    = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// let currentDay      = date.getDate();
// let months          = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

// let calendarDiv     = document.createElement('div');
// calendarDiv.setAttribute('id', 'calendar');
// document.body.appendChild(calendarDiv);

// for(let i = 1; i <= lastDayMonth; i++){
//     let div  = document.createElement('div');
//     div.classList.add('day');
//     div.innerHTML   = i;
//     calendarDiv.appendChild(div);

//     if(Number(div.innerHTML) == currentDay){
//         div.classList.add('today');
//     }
// }
// dateControls.innerHTML  = date.getFullYear() + ' ' + months[date.getMonth()];

// let currMonth       = date.getMonth();
// let currYear        = date.getFullYear();
// function createCalendar(currYear, currMonth){
//     let lastDayMonth    = new Date(currYear, currMonth + 1, 0).getDate();

//     let calendarDiv     = document.createElement('div');
//     calendarDiv.setAttribute('id', 'calendar');
//     document.body.appendChild(calendarDiv);
    
//     for(let i = 1; i <= lastDayMonth; i++){
//         let div  = document.createElement('div');
//         div.classList.add('day');
//         div.innerHTML   = i;
//         calendarDiv.appendChild(div);
//     }

//     if(currMonth == date.getMonth() && currYear == date.getFullYear()){
//         let date            = new Date();
//         let currentDay      = date.getDate();
        
//         let divs            = document.querySelectorAll('.day');
//         divs[currentDay - 1].classList.add('today');
//     }
// };

// next.addEventListener('click', function(){
//     let div     = document.getElementById('calendar');
//     div.remove();
//     currMonth++;
//     createCalendar(currYear, currMonth);
//     dateControls.innerHTML  = currYear + ' ' + months[currMonth];
    
//     if(currMonth == 11){
//         currYear++;
//         currMonth   = -1;
//     }
// });

// prev.addEventListener('click', function(){
//     let div     = document.getElementById('calendar');
//     div.remove();
//     currMonth--;
//     createCalendar(currYear, currMonth);
//     dateControls.innerHTML  = currYear + ' ' + months[currMonth];

//     if(currMonth == 0){
//         currYear--;
//         currMonth   = 12;
//     }
// });














// // Поиск тегов на JavaScript
// // Сейчас мы с вами сделаем сайт, который будет помогать определить значение HTML тега. 
// // Пусть в этом скрипте будет инпут, в который пользователь будет вводить имя тега. После этого по нажатию на Enter под инпутом пусть выдается описание этого тега.
// // Задача №1
// // Продумайте, как удобнее всего хранить имена тегов и их описания в соответствии с поставленной задачей.

// let input   = document.getElementById('input');
// let elem    = document.getElementById('elem');
// let tags    = {
//     'br'        : 'Перенос текста на новую строчку',
//     'span'      : 'Создает новый текстовый узел',
//     'p'         : 'Создает новый параграф',
//     'input'     : 'Создает новый инпут, в который пользователь может что-то ввести',
//     'button'    : 'Создает кнопочку, на которую может нажать пользователь'
// };

// input.addEventListener('keypress', function(event){
//     let code    = event.keyCode;
//     let flag    = false;

//     if(code == 13){
//         for(let key in tags){
//             if(key == input.value){
//                 elem.innerHTML  = tags[input.value];
//                 flag            = true;
//                 break;
//             }
//         }

//         if(!flag){
//             elem.innerHTML = 'Такого тега нет в базе данных:(';
//         }
//     }
// });














// // Поиск исторических событий на JavaScript
// // Пусть мы хотим написать сайт, показывающий таблицу исторических событий за определенный год. Пусть год будет вводится в инпут. По нажатию Enter давайте выведем таблицу событий, случившихся в этот год. 
// // Пусть в качестве информации о событии мы хотим видеть дату, название и описание события. 
// // Давайте я покажу вам образец того, что должно получится (для простоты я сделал события за 2000, 2001 и 2002 годы):
// // Задача №1
// // Реализуйте описанный сайт.

// let input       = document.getElementById('input');
// let table       = document.getElementById('table');
// let info        = document.getElementById('info');
// let options     = {
//     '2019'  : 
//     [
//         {
//             'date'              : '01.01',
//             'nameEvent'         : 'Событие №1',
//             'descriptionEvent'  : 'Описание события №1'
//         },
//         {
//             'date'              : '02.01',
//             'nameEvent'         : 'Событие №2',
//             'descriptionEvent'  : 'Описание события №2'
//         },
//         {
//             'date'              : '03.01',
//             'nameEvent'         : 'Событие №3',
//             'descriptionEvent'  : 'Описание события №3'
//         },
//     ],
//     '2020'  : 
//     [
//         {
//             'date'              : '01.02',
//             'nameEvent'         : 'Событие №4',
//             'descriptionEvent'  : 'Описание события №4'
//         },
//         {
//             'date'              : '02.02',
//             'nameEvent'         : 'Событие №5',
//             'descriptionEvent'  : 'Описание события №5'
//         },
//         {
//             'date'              : '03.02',
//             'nameEvent'         : 'Событие №6',
//             'descriptionEvent'  : 'Описание события №6'
//         },
//     ],
// };

// input.addEventListener('keypress', function(event){
//     let code            = event.keyCode;
//     let infoFromInput   = input.value;
//     let flag            = false;

//     if(code == 13){
//         for(let key in options){
//             if(key == infoFromInput){
//                 info.innerHTML  = '';
//                 clearTable(table);
//                 createTable(options[infoFromInput], table);
//                 flag = true;
//                 break;
//             }
//         }

//         if(!flag){
//             clearTable(table);
//             info.innerHTML  = 'К сожалению событий за этот год нет:(';
//         }
//     }
// });


// function createTable(arr, selector){
//     for(let i = 0; i < arr.length; i++){
//         let tr  = document.createElement('tr');
//         selector.append(tr);

//         for(let key in arr[i]){
//             let td          = document.createElement('td');
//             td.innerHTML    = arr[i][key];
//             tr.appendChild(td);
//         }
//     }
// };

// function clearTable(table){
//     let trs = table.querySelectorAll('tr');

//     for(tr of trs){
//         tr.remove();
//     }
// };














// // Гороскоп на JavaScript
// // Сейчас мы с вами реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня. Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения. 
// // Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.

// // Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра. Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день. 
// // Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор.
// // Задача №1
// // Реализуйте описанную задачу.

// let input           = document.getElementById('input');
// let select          = document.getElementById('select');
// let info            = document.getElementById('info');
// let goroskopInfo    = document.getElementById('goroskopInfo');
// let goroskop        = {
//     'Водолеев'  : {
//         'Сегодня'       : 'В этот день Водолеев ждет большой сюрприз',
//         'Завтра'        : 'Завтра Водолеев ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Водолеев будет веселый день, который будет давать большие плоды'
//     },
//     'Рыб'       : {
//         'Сегодня'       : 'В этот день Рыб ждет большой сюрприз',
//         'Завтра'        : 'Завтра Рыб ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Рыб будет веселый день, который будет давать большие плоды'
//     },
//     'Овна'      : {
//         'Сегодня'       : 'В этот день Овна ждет большой сюрприз',
//         'Завтра'        : 'Завтра Овна ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Овна будет веселый день, который будет давать большие плоды'
//     },
//     'Тельцов'   : {
//         'Сегодня'       : 'В этот день Тельцов ждет большой сюрприз',
//         'Завтра'        : 'Завтра Тельцов ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Тельцов будет веселый день, который будет давать большие плоды'
//     },
//     'Близнецов' : {
//         'Сегодня'       : 'В этот день Близнецов ждет большой сюрприз',
//         'Завтра'        : 'Завтра Близнецов ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Близнецов будет веселый день, который будет давать большие плоды'
//     },
//     'Раков'     : {
//         'Сегодня'       : 'В этот день Раков ждет большой сюрприз',
//         'Завтра'        : 'Завтра Раков ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Раков будет веселый день, который будет давать большие плоды'
//     },
//     'Львов'     : {
//         'Сегодня'       : 'В этот день Львов ждет большой сюрприз',
//         'Завтра'        : 'Завтра Львов ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Львов будет веселый день, который будет давать большие плоды'
//     },
//     'Дев'       : {
//         'Сегодня'       : 'В этот день Дев ждет большой сюрприз',
//         'Завтра'        : 'Завтра Дев ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Дев будет веселый день, который будет давать большие плоды'
//     },
//     'Весов'     : {
//         'Сегодня'       : 'В этот день Весов ждет большой сюрприз',
//         'Завтра'        : 'Завтра Весов ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Весов будет веселый день, который будет давать большие плоды'
//     },
//     'Скорпионов': {
//         'Сегодня'       : 'В этот день Скорпионов ждет большой сюрприз',
//         'Завтра'        : 'Завтра Скорпионов ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Скорпионов будет веселый день, который будет давать большие плоды'
//     },
//     'Стрельцов' : {
//         'Сегодня'       : 'В этот день Стрельцов ждет большой сюрприз',
//         'Завтра'        : 'Завтра Стрельцов ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Стрельцов будет веселый день, который будет давать большие плоды'
//     },
//     'Козерогов' : {
//         'Сегодня'       : 'В этот день Козерогов ждет большой сюрприз',
//         'Завтра'        : 'Завтра Козерогов ожидает богатсов, которое свалится на голову',
//         'Послезавтра'   : 'Послезавтра у Козерогов будет веселый день, который будет давать большие плоды'
//     }
// };

// input.addEventListener('keypress', function(event){
//     let code        = event.keyCode;

//     if(code == 13){
//         let infoPerson          = getZnakZodiakaForGoroskop(input.value);
        
//         if(infoPerson != undefined){
//             let chooseDay           = select[select.selectedIndex].innerHTML;
//             info.innerHTML          = 'Гороскоп ' + infoPerson + ' на ' + chooseDay;
//             goroskopInfo.innerHTML  = goroskop[infoPerson][chooseDay];
//         }else{
//             alert('Извините, но Вы ввели некоректную дату, пожалуйста, введите ее в таком формате: день.месяц.год, например: 12.06.1994');
//         }
//     }
// });

// function getZnakZodiakaForGoroskop(data){
//     let month   = getMonthFromDate(data);
//     let day     = getDayFromDate(data);

//     if((month == 0 && day >= 21) || (month == 1 && day <= 19)){
//         return 'Водолеев';
//     }

//     if((month == 1 && day >= 20) || (month == 2 && day <= 20)){
//         return 'Рыб';
//     }

//     if((month == 2 && day >= 21) || (month == 3 && day <= 20)){
//         return 'Овна';
//     }

//     if((month == 3 && day >= 21) || (month == 4 && day <= 21)){
//         return 'Тельцов';
//     }

//     if((month == 4 && day >= 22) || (month == 5 && day <= 21)){
//         return 'Близнецов';
//     }

//     if((month == 5 && day >= 22) || (month == 6 && day <= 22)){
//         return 'Раков';
//     }

//     if((month == 6 && day >= 23) || (month == 7 && day <= 23)){
//         return 'Львов';
//     }

//     if((month == 7 && day >= 24) || (month == 8 && day <= 22)){
//         return 'Дев';
//     }

//     if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
//         return 'Весов';
//     }

//     if((month == 9 && day >= 23) || (month == 10 && day <= 22)){
//         return 'Скорпионов';
//     }

//     if((month == 10 && day >= 22) || (month == 11 && day <= 21)){
//         return 'Стрельцов';
//     }

//     if((month == 11 && day >= 22) || (month == 0 && day <= 20)){
//         return 'Козерогов';
//     }
// };

// function getMonthFromDate(data){
//     let arr         = data.split('.');
//     let controlDate = new Date(1998, Number(arr[1] - 1), Number(arr[0]));

//     return controlDate.getMonth();
// };

// function getDayFromDate(data){
//     let arr         = data.split('.');
//     let controlDate = new Date(1998, Number(arr[1] - 1), Number(arr[0]));

//     return controlDate.getDate();
// };














// // // Сайт предсказаний на JavaScript
// // // Сейчас мы с вами сделаем сайт, который будет выдавать предсказания. 
// // // Пусть на этом сайте будет кнопка, по нажатию на которую будет запускаться таймер, который будет каждые 0.1 секунд выводить в в какой-нибудь див случайное число от 1 до некоторого максимального.

// // // Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта может остановить таймер и зафиксировать некоторое число в диве. 
// // // Это число будет номером предсказания. После этого покажите пользователю предсказание с этим номером, а все лишние кнопки уберите с экрана, чтобы пользователь не мог получить еще одно предсказание. 
// // // То есть на один заход на сайт - одно предсказание. Сделайте так, чтобы предсказания были двух видов: хорошие и плохие. Сделайте так, чтобы плохие красились в красный цвет, а хорошие - в зеленый.
// // Задача №1
// // Реализуйте описанный сайт.

// let timer           = document.getElementById('timer');
// let text            = document.getElementById('text');
// let start           = document.getElementById('start');
// let stop            = document.getElementById('stop');
// let restart         = document.getElementById('restart');
// startPredict();

// function startPredict(){
//     let options         = {
//         'Хорошие'       : {
//             '1'         : 'Сегодня Вас ждет успех!',
//             '2'         : 'Вы будете очень счастливы',
//             '3'         : 'Сегодня вас ожидает крупная сделка',
//             '4'         : 'Сегодня вы получите миллион долларов',
//             '5'         : 'Вы встретите свою любовь',
//             '6'         : 'Еще одно предсказание'
//         },
    
//         'Плохие'        : {
//             '7'         : 'Сегодня вы проиграете в свою игру в телефоне',
//             '8'         : 'Сегодня вас обрызгает проезжающий автомобиль',
//             '9'         : 'Сегодня вам никто не будет звонить',
//             '10'         : 'Сегодня вы потеряете ключи и будете их искать 10 минут',
//             '11'        : 'Сегодня вы уроните вилку, когда будете кушать',
//             '12'         : 'Еще одно предсказание'
//         }
//     };
    
//     let maxPredictions  = 0;
    
//     for(let key1 in options){
//         for(let key2 in options[key1]){
//             maxPredictions = Number(key2);
//         }
//     }
    
//     let goodPredictions = maxPredictions / 2;
    
//     start.addEventListener('click', function(){
//         let id  = setInterval(function(){
//             timer.innerHTML = getRandomNumber(1, maxPredictions);
//         }, 100);
//         this.classList.remove('active');
//         stop.classList.add('active');
    
//         stop.addEventListener('click', function(){
//             clearInterval(id);
//             this.classList.remove('active');
//             restart.classList.add('active');

//             if(Number(timer.innerHTML) <= goodPredictions){
//                 text.innerHTML  = options['Хорошие'][timer.innerHTML];
//                 text.style.color    = 'green';
//             }else{
//                 text.innerHTML  = options['Плохие'][timer.innerHTML];
//                 text.style.color    = 'red';
//             }
//         });
//     });
    
//     function getRandomNumber(min, max){
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     };
// };

// restart.addEventListener('click', function(){
//     this.classList.remove('active');
//     timer.innerHTML = '?';
//     text.innerHTML  = '';
//     start.classList.add('active');
//     startPredict();
// });














// // Автодополнение на JavaScript
// // Сейчас мы с вами реализуем автодополнение. Под этим термином понимается выпадающая подсказка при вводе текста в инпут. Давайте посмотрим на примере. 
// // Ниже я сделал инпут, в который можно ввести название страны. 
// // При этом, если ввести какие-то буквы, то под инпутом появится список стран, которые начинаются на введенную строку.

// // При желании можно, чтобы не вводить целиком имя страны, кликнуть мышкой на любую страну и она появится в инпуте. Для этого, в общем-то, автодополнение и нужно. 
// // В примере для простоты я сделал только три страны: Belarus, Belgium и Bulgaria. Введите в приведенный ниже инпут сначала символ 'В' английское, а потом 'e' и посмотрите, что будет:
// // Задача №1
// // Реализуйте задачу автодополнение согласно описанному алгоритму.

// let input   = document.getElementById('input');
// let ul      = document.getElementById('list');
// let arr     = ['Россия', 'Румыния', 'Греция', 'Грузия', 'Беларусь', 'Бельгия', 'Балгария'];

// input.addEventListener('input', function(){
//     let lis     = ul.querySelectorAll('li');
//     for(let li of lis){
//         li.remove();
//     }

//     if(input.value != ''){
//         let result  = arr.filter(function(elem){
//             return elem.startsWith(input.value);
//         });

//         for(let elem of result){
//             let li          = document.createElement('li');
//             li.innerHTML    = elem;
//             ul.appendChild(li);

//             li.addEventListener('click', function(){
//                 input.value = this.innerHTML;
//             });
//         }
//     }
// });














// // Спойлер на JavaScript
// // Сейчас мы с вами научимся делать спойлеры. Под спойлерами я понимаю блоки, которые можно развернуть, либо свернуть с помощью специальной ссылки.

// // В следующем примере кода абзац с классом spoiler является спойлером, а ссылка с классом toggle должна по клику показывать или скрывать этот спойлер:
// // Очевидно, что ссылку для разворачивания и сам спойлер надо как-то связать. Можно придумать различные варианты, но в данном случае я предлагаю сделать по местоположению: 
// // скажем, что ссылка с классом toggle открывает или закрывает элемент с классом spoiler, расположенный сразу под родителем этой ссылки.

// // Пусть спойлер по умолчанию будет скрыт, а если мы хотим его показать - будем давать ему класс active. Напишем соответствующий CSS код:
// // Задача №1
// // Скопируйте себе приведенный HTML и CSS коды. Реализуйте описанную работу спойлеров.

// let link1       = document.querySelector('.toggle');
// let link2       = document.querySelector('.toggler');

// link1.addEventListener('click', function(){
//     this.parentElement.nextElementSibling.classList.toggle('active');
// });

// link2.addEventListener('click', function(){
//     this.parentElement.nextElementSibling.classList.toggle('active');
// });














// // // Вкладки на JavaScript
// // // Обсуждение
// // // Давайте теперь обсудим то, как решать эту задачу. Очевидно, что нужно как-то связать ссылки с соответствующими им вкладками. 
// // // В данном уроке из теоретического учебника мы уже разбирали возможные варианты.
// // // В данном случае я предлагаю связать ссылки и вкладки просто по позиции: первая ссылка будет открывать первую вкладку, вторая ссылка - вторую вкладку и так далее.
// // // Общий алгоритм будет выглядеть так: по нажатию на кнопку мы должны найти ссылку с классом и убрать ей этот класс. Аналогичным образом мы должны найти вкладку с этим классом и тоже убрать ей этот класс.
// // // Затем мы должны взять ссылку, на которую был клик и активировать ее. Затем мы должны взять вкладку, которая имеет такой же номер, как и наша ссылка - и тоже активировать ее.
// // // Задача №1 ВАРИАНТ1
// // // Скопируйте себе приведенный HTML и CSS коды. Реализуйте вкладки согласно описанному алгоритму.

// // let menu    = document.querySelector('.menu').children;
// // let tabs    = document.querySelector('.tabs').children;

// // for(let link of menu){
// //     link.addEventListener('click', function(){
// //         let arr         = [...menu];
// //         let currElem    = arr.indexOf(this);

// //         for(let i = 0; i < menu.length; i++){
// //             if(menu[i].classList.contains('active')){
// //                 menu[i].classList.remove('active');
// //                 this.classList.add('active');
// //                 tabs[i].classList.remove('active');
// //                 tabs[currElem].classList.add('active');
// //             }
// //         }
// //     });
// // }




// // Задача №2 ВАРИАНТ2
// let tabsList    = document.querySelector('.tabs__list').children;
// let tabsText    = document.querySelectorAll('.tabs__text');

// for(let tabList of tabsList){
//     tabList.addEventListener('click', function(){
//         let arr     = [...tabsList];
//         let index   = arr.indexOf(this);
        
//         for(let i = 0; i < tabsList.length; i++){
//             if(tabsList[i].classList.contains('select')){
//                 tabsList[i].classList.remove('select');
//                 this.classList.add('select');
//                 tabsText[i].classList.remove('select');
//                 tabsText[index].classList.add('select');
//             }
//         }
//     });
// }














// // Аккордион на JavaScript
// // Давайте теперь реализуем аккордион. Он похож на вкладки, перевернутые на бок. При этом в аккордеоне можно закрыть текущую вкладку, если нажать на активную ссылку.
// // Обсуждение
// // Технически HTML код аккордеона удобнее, чем код вкладок: в нем ссылки расположены непосредственно над спойлером, который они открывают и закрывают. 
// // Кроме того, класс active в нашей верстки дается общему родителю ссылки и спойлера.
// // Это значит, что при нажатии на ссылку нужно просто деактивировать старую вкладку и активировать новую. 
// // Чтобы деактивировать старую вкладку нужно найти вкладку с классом active и удалить из нее этот класс.
// // Чтобы активировать новую вкладку нужно по клику на ссылку найти вкладку-родителя этой ссылки и дать ей класс active. 
// // Технически такой поиск можно сделать так: просто найти ближайшего родителя ссылки, имеющего класс tab.
// // Задача №1 ВАРИАНТ1
// // Скопируйте себе приведенный HTML и CSS коды. Реализуйте аккордеон согласно описанному алгоритму.

// let tabs     = document.querySelectorAll('.tab');
// let links    = document.querySelectorAll('.link');

// for(let link of links){
//     link.addEventListener('click', function(){
//         for(let i = 0; i < tabs.length; i++){
//             if(tabs[i].classList.contains('active')){
//                 tabs[i].classList.remove('active');
//                 this.parentElement.classList.add('active');
//             }
//         }
//     });
// }




// Задача №2 ВАРИАНТ2
let tabsText    = document.querySelectorAll('.tabs__text');
let links       = document.querySelectorAll('h3');

for(let link of links){
    link.addEventListener('click', function(){
        for(let i = 0; i < links.length; i++){
            links[i].classList.remove('select');
            links[i].nextElementSibling.style.height = '0px';
        }
        this.classList.add('select');
        this.nextElementSibling.style.height = 'auto';
    });
}