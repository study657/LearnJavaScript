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