// // 1. Дана кнопка. По нажатию на эту кнопку выведите высоту окна браузера

// function go(){
//     console.log(document.documentElement.clientHeight);
// };




// // 2. Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа

// function down(){
//     let niz = document.documentElement.scrollHeight;
//     scrollTo(0, niz);
// };

// function up(){
//     scrollTo(0, 0);
// }




// 3. Дана кнопка. По нажатию на эту кнопку узнайте, есть ли у окна браузера вертикальная прокрутка

function go(){
    let scrol = window.pageYOffset;

    if(scrol > 0){
        alert('Вертикальная прокрутка есть!');
    }else{
        alert('Вертикальной прокрутки нет!');
    }
}