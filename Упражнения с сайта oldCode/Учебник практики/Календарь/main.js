let parent      = document.getElementById('parent');
let calendar    = document.getElementById('calendar');
let bodyTable   = document.querySelector('.body');
let info        = document.querySelector('.info');
let prev        = document.querySelector('.prev');
let next        = document.querySelector('.next');

let date                = new Date();
let year                = date.getFullYear();
let month               = date.getMonth();
let months              = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
info.innerHTML          = months[month] + ' ' + year;
calendarStart();

function calendarStart(){
    let maxDaysInMonth      = new Date(year, month + 1, 0).getDate();
    function qualityEmptyColumnsBegin(){
        let quality             = 0;
        let days                = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        let firstDayWeek        = days[new Date(year, month, 1).getDay()];
    
        if(firstDayWeek == 'пн'){
            quality = 0;
        }else if(firstDayWeek == 'вт'){
            quality = 1;
        }else if(firstDayWeek == 'ср'){
            quality = 2;
        }else if(firstDayWeek == 'чт'){
            quality = 3;
        }else if(firstDayWeek == 'пт'){
            quality = 4;
        }else if(firstDayWeek == 'сб'){
            quality = 5;
        }else if(firstDayWeek == 'вс'){
            quality = 6;
        }
        return quality;
    };
    
    function qualityEmptyColumnsEnd(){
        let quality             = 0;
        let days                = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        let lastDayWeek         = days[new Date(year, month + 1, 0).getDay()];
    
        if(lastDayWeek == 'пн'){
            quality = 6;
        }else if(lastDayWeek == 'вт'){
            quality = 5;
        }else if(lastDayWeek == 'ср'){
            quality = 4;
        }else if(lastDayWeek == 'чт'){
            quality = 3;
        }else if(lastDayWeek == 'пт'){
            quality = 2;
        }else if(lastDayWeek == 'сб'){
            quality = 1;
        }else if(lastDayWeek == 'вс'){
            quality = 0;
        }
        return quality;
    };
    let mass    = [];
    
    function pushQualityEmptyColumnsInBeginMass(qualityEmptyColumns){
        for(let i = 1; i <= qualityEmptyColumns; i++){
            mass.push('');
        }
    };
    pushQualityEmptyColumnsInBeginMass(qualityEmptyColumnsBegin());
    
    function pushDaysInBeginMass(maxDaysInMonth){
        for(let i = 1; i <= maxDaysInMonth; i++){
            mass.push(i);
        }
    };
    pushDaysInBeginMass(maxDaysInMonth);
    
    function pushQualityEmptyColumnsInEndMass(qualityEmptyColumns){
        for(let i = 1; i <= qualityEmptyColumns; i++){
            mass.push('');
        }
    };
    pushQualityEmptyColumnsInEndMass(qualityEmptyColumnsEnd());
    
    function convertMass(mass, num){
        let curr        = mass.length / num;
        let newMass     = [];
    
        for(let i = 1; i <= curr; i++){
            let elems = mass.splice(0, 7);
            newMass.push(elems);
        }
        return newMass;
    };
    
    let newMass   = convertMass(mass, 7);
    
    function createTable(bodyTable, newMass){
        for(let i = 0; i < newMass.length; i++){
            let tr      = document.createElement('tr');
            bodyTable.appendChild(tr);
        
            for(let k = 0; k < newMass[i].length; k++){
                let td          = document.createElement('td');
                td.innerHTML    = newMass[i][k];
                tr.append(td);
            }
        }
    };
    createTable(bodyTable, newMass);
};

function removeCalendar(){
    let trs     = bodyTable.querySelectorAll('tr');

    for(let tr of trs){
        tr.remove();
    }
};

next.addEventListener('click', function(){
    if(month == 11){
        month = -1;
        year++;
    }
    month++;
    removeCalendar();
    calendarStart();
    info.innerHTML          = months[month] + ' ' + year;
});

prev.addEventListener('click', function(){
    if(month == 0){
        month = 12;
        year--;
    }
    month--;
    removeCalendar();
    calendarStart();
    info.innerHTML          = months[month] + ' ' + year;
});