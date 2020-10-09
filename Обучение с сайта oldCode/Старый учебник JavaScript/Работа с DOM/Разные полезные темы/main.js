// // Работа с формами
// // 1. Дана форма с id="form". В ней даны инпуты, в них числа. Дана кнопка. 
// // По нажатию на эту кнопку получите форму по ее id, затем циклом переберите все инпуты в ней и найдите сумму чисел из этих инпутов

// let btn     = document.getElementById('button');
// let forms   = document.forms[0];


// btn.addEventListener('click', function(){
//     let result = +'';
//     for(let i = 0; i < forms.length; i++){
//         result += Number(forms.elements[i].value);
//     }

//     let newP    = document.createElement('p');
//     newP.innerHTML = 'Результат сложения всех чисел в инпутах: ' + result;
//     document.body.appendChild(newP);
// });




// // 2. На странице расположено несколько форм. В них есть инпуты, в инпутах числа. Дана кнопка. 
// // По нажатию на эту кнопку циклом переберите все формы на странице, затем циклом переберите все инпуты в каждой форме и найдите сумму чисел из всех этих инпутов

// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ
// // let form1 = document.forms[0].elements;
// // let form2 = document.forms[1].elements;

// // let btn   = document.getElementById('button');

// // btn.addEventListener('click', function(){
// //     let result = +'';

// //     for(let i = 0; i < form1.length; i++){
// //         result += Number(form1[i].value);
// //     }

// //     for(let j = 0; j < form2.length; j++){
// //         result += Number(form2[j].value);
// //     }

// //     let newP        = document.createElement('p');
// //     newP.innerHTML  = 'Результат сложения всех инпутов: ' + result;
// //     document.body.appendChild(newP);
// // });


// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ
// let btn = document.getElementById('button');

// let lengthForm = document.forms.length - 1;

// btn.addEventListener('click', function(){
//     let result = +'';

//     for(let i = 0; i <= lengthForm; i++){
//         let elements = document.forms[i].elements;
//         for(let j = 0; j < elements.length; j++){
//             result += Number(elements[j].value);
//         }
//     }

//     let newP        = document.createElement('p');
//     newP.innerHTML  = 'Результат сложения всех инпутов: ' + result;
//     document.body.appendChild(newP);
// });




// // Работа с селектами
// // 3. Дан селект. Дан инпут. По изменению селекта выведите текст выбранного пункта в инпут

// let select  = document.getElementById('select');
// let options = select.options;

// let input   = document.getElementById('inp');
// select.value = options[0].innerHTML;
// // // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ
// // select.addEventListener('change', function(){
// //     if(select.value == 'one'){
// //         input.value = options[0].innerHTML;
// //     }else if(select.value == 'two'){
// //         input.value = options[1].innerHTML;
// //     }else if(select.value == 'three'){
// //         input.value = options[2].innerHTML;
// //     }
// // });

// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ
// select.addEventListener('change', function(){
//     for(let i = 0; i < options.length; i++){
//         if(select.value == options[i].value){
//             input.value = options[i].innerHTML;
//         }
//     }
// });




// // 4. Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести число, нажать на кнопку и в селекте становился выбранным пункт с этим номером

// let select  = document.getElementById('select');
// let input   = document.getElementById('inp');
// console.log(select.value);

// let btn     = document.getElementById('button');

// select.selectedIndex = -1;
// btn.addEventListener('click', function(){
//     for(let i = 1; i <= 3; i++){
//         if(input.value == i){
//             select.value = i;
//         }
//     }
// });




// // 5. Дан селект со списком стран. Сделайте так, чтобы при выборе страны рядом появлялся еще и селект со списком городов из этой страны

// // // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ
// // let countries       = document.getElementById('countries');

// // let citiesRu        = document.getElementById('ru'),
// //     citiesBy        = document.getElementById('by'),
// //     citiesUa        = document.getElementById('ua');

// // countries.addEventListener('change', function(){
// //     document.querySelector('.cities.active').classList.remove('active');

// //     if(this.value == 'ru'){
// //         citiesRu.classList.add('active');
// //     }
// //     if(this.value == 'by'){
// //         citiesBy.classList.add('active');
// //     }
// //     if(this.value == 'ua'){
// //         citiesUa.classList.add('active');
// //     }
// // });


// // // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ
// // let countriesSelect       = document.getElementById('countries');
// // let citiesSelect          = document.getElementById('cities');

// // let data = {
// //     ru: ['Москва', 'Смоленск', 'Воронеж'],
// //     by: ['Орша', 'Минск', 'Витебск'],
// //     ua: ['Киев', 'Одесса', 'Львов']
// // };

// // countries.addEventListener('change', function(){
// //     let cities = data[this.value];
// //     citiesSelect.length = 0;

// //     for(let i = 0; i < cities.length; i++){
// //         citiesSelect.add(new Option(cities[i]));
// //     }
// // });


// // ТРЕТИЙ ВАРИАНТ РЕШЕНИЯ (САМЫЙ УНИВЕРСАЛЬНЫЙ И ПРАВИЛЬНЫЙ)
// let countriesSelect     = document.getElementById('countries-select');
// let citiesSelect        = document.getElementById('cities-select');
// let btn                 = document.getElementById('button');
// let data = {
//     Россия: ['Москва', 'Смоленск', 'Воронеж'],
//     Беларусия: ['Орша', 'Минск', 'Витебск'],
//     Украина: ['Киев', 'Одесса', 'Львов']
// };

// let countries = Object.keys(data);
// addOptions(countriesSelect, countries);

// let defaultCities   = data[countries[0]];
// addOptions(citiesSelect, defaultCities);

// countriesSelect.addEventListener('change', function(){
//     let cities = data[this.value];
//     citiesSelect.length = 0;

//     addOptions(citiesSelect, cities);
// });

// function addOptions(select, arr){
//     for(let i = 0; i < arr.length; i++){
//         select.add(new Option(arr[i]));
//     }
// };

// btn.addEventListener('click', function(){
//     let newP = document.createElement('p');
//     newP.innerHTML = 'Вы выбрали страну: ' + countriesSelect.value + '<br>' + 'Город: ' + citiesSelect.value;
//     document.body.appendChild(newP);
// });




// 6. Даны 3 селекта: с днем, с месяцем и годом. Сделайте так, чтобы некорректную дату нельзя было выбрать

let selectYear      = document.getElementById('selectYear');
let selectMonth     = document.getElementById('selectMonth');
let selectDay       = document.getElementById('selectDay');

let date        = new Date();
let nowYear     = date.getFullYear();
let nowMonth    = date.getMonth() + 1;
let nowDay      = date.getDate();

fillSelect(selectYear, range(nowYear - 10, nowYear + 10));
fillSelect(selectMonth, range(1, 12));
fillSelect(selectDay, range(1, 31));

selectYear.addEventListener('focus', selectFocusHandle);
selectMonth.addEventListener('focus', selectFocusHandle);
selectDay.addEventListener('focus', selectFocusHandle);

selectYear.addEventListener('change', selectChangeHandle);
selectMonth.addEventListener('change', selectChangeHandle);
selectDay.addEventListener('change', selectChangeHandle);

function selectChangeHandle(){
    if(checkDate(selectYear.value, selectMonth.value, selectDay.value)){
        console.log('Все верно');
    }else{
        alert('Такой даты не существует!');
        this.value = this.dataset.default;
    }
};

function selectFocusHandle(){
    this.dataset.default = this.value;
};

function fillSelect(select, arr){
    arr.forEach(function(elem){
        select.add(new Option(elem));
    });
};

function range(from, to){
    let result = [];
    for(let i = from; i <= to; i++){
        result.push(i);
    }
    return result;
}

function checkDate(year, month, day){
    let date = new Date(year, month - 1, day);
    return date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day;
};