// 16. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 30;

if(day >= 0 && day <= 9){
    console.log('Это ПЕРВАЯ декада месяца');
}else if(day >= 10 && day <= 19){
    console.log('Это ВТОРАЯ декада месяца');
}else if(day >= 20 && day <= 31){
    console.log('Это ТРЕТЬЯ декада месяца');
}

// 17.  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 5;

if(month >=1 && month <= 3){
    console.log('Это зима');
}else if(month >= 4 && month <= 6){
    console.log('Это весна');
}else if(month >= 7 && month <= 9){
    console.log('Это лето');
}else if(month >= 10 && month <= 12){
    console.log('Это осень');
}

// 18. Дана строка, состоящая из символов, например, 'abcde'. 
// Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let string = 'nbcde';

if(string[0] == 'a'){
    console.log('Да');
}else{
    console.log('Нет');
}

// 19.  Дана строка с цифрами, например, '12345'. 
// Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let number = '52345';

if(number[0] == '1' || number[0] == '2' || number[0] == '3'){
    console.log('Да');
}else{
    console.log('Нет');
}

// 20.  Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

let numberString = '123';

if(numberString[0] == +numberString[0] && numberString[1] == +numberString[1] && numberString[2] == +numberString[2]){
    let result = +numberString[0] + +numberString[1] + +numberString[2];
    console.log(result);
}else{
    console.log('Одна из строк не является числом!');
}

// 21.  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

// let numberString_2 = '123456';

// let sum_1NumberString_2 = +numberString_2[0] + +numberString_2[1] + +numberString_2[2];

// let sum_2NumberString_2 = +numberString_2[3] + +numberString_2[4] + +numberString_2[5];

// if(sum_1NumberString_2 == sum_2NumberString_2){
//     console.log('Да');
// }else{
//     console.log('Нет');
// }

// Второй вариант решения данной задачи:

let numberString_2 = '123456';

if(+numberString_2[0] + +numberString_2[1] + +numberString_2[2] == +numberString_2[3] + +numberString_2[4] + +numberString_2[5]){
    console.log('Да');
}else{
    console.log('Нет');
}








// Задачи на циклы while, for в JavaScript

// Циклы while и for
// Решите эти задачи сначала через цикл while, а затем через цикл for.

// 1. Выведите столбец чисел от 1 до 100.

for(let i = 1; i <= 100; i++){
    document.write(i + '<br>');
}

let i = 1;
while(i <= 100){
    document.write(i + '<br>');
    i++;
}

// 2.  Выведите столбец чисел от 11 до 33.

for(let i = 11; i <= 33; i++){
    document.write(i + '<br>');
}

let i_1 = 11;
while(i_1 <= 33){
    document.write(i_1 + '<br>');
    i_1++;
}

// 3.  Выведите столбец четных чисел в промежутке от 0 до 100.

for(let i = 0; i <= 100; i += 2){
    document.write(i + '<br>');
}

let i_2 = 0;
while(i_2 <= 100){
    document.write(i_2 + '<br>');
    i_2 = i_2 + 2;
}

// 4.  С помощью цикла найдите сумму чисел от 1 до 100.

let summ = '';
for (let i_3 = 0; i_3 <= 100; i_3++){
    summ = i_3 * (i_3 + 1) / 2; // Данная формула (n*(n+1)/2) была взята с сайта.
    console.log(summ);
}

let summ_2  = '';
let i_4     = 0;

while(i_4 < 100){
    i_4++;
    summ_2 = i_4 * (i_4 + 1) / 2;
    console.log(summ_2);
}