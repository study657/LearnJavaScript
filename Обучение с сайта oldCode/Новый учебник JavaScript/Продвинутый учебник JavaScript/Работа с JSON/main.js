// // Работа с JSON.parse
// // 1. Дана JSON строка '["Коля", "Вася", "Петя"]'. Преобразуйте ее в массив JavaScript и выведите на экран элемент "Петя"

// let json        = '["Коля", "Вася", "Петя"]';
// let arrFromJSON = JSON.parse(json);

// for(let i = 0; i < arrFromJSON.length; i++){
//     if(arrFromJSON[i] == 'Петя'){
//         document.write(arrFromJSON[i]);
//     }
// }




// Работа с JSON.stringify
// 1. Дан объект {a: 'aaa', b: 'bbb'}. Преобразуйте его в JSON

let obj     = {
    a: 'aaa', 
    b: 'bbb'
};

let jsonObj = JSON.stringify(obj);
console.log(typeof(obj));
console.log(typeof(jsonObj));