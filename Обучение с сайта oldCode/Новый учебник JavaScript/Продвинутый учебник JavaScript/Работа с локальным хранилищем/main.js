// // Основы работы
// // 1. Дан текстареа. В него вводится текст. Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в текстареа. 
// // Текст должен запоминаться в локальном хранилище.

// let textArea    = document.getElementById("textArea");
// let curr        = 5;

// textArea.addEventListener('keypress', function(event){
//     let code    = event.keyCode;
    
//     if(code == 13){
//         localStorage.setItem('textValue', textArea.value);
//     }
// });

// if(localStorage['textValue'] !== undefined){
//     let id  = setInterval(function(){
//         curr--;
    
//         if(curr == 0){
//             textArea.value  = localStorage['textValue'];
//             clearInterval(id);
//         }
//     }, 1000);
//     // textArea.value  = localStorage['textValue'];
// }




// // Закрепление
// // 2. Дан текстареа. В него можно ввести данные, затем поредактировать их, затем еще поредактировать. 
// // Пусть текстареа хранит историю своих изменений (даже после перезагрузки страницы). Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории.

// let textArea    = document.getElementById("textArea");
// let prev        = document.getElementById('prev');
// let next        = document.getElementById('next');

// textArea.addEventListener('keypress', function(event){
//     let code    = event.keyCode;
//     let text    = textArea.value;

//     if(code == 13){
//         save('dataBase', text);
//     }
// });

// next.addEventListener('click', function(){
//     if(get('dataBase')){
//         let arr     = get('dataBase');
//         let text    = textArea.value;
//         let index   = arr.indexOf(text);
       
//         if(index < arr.length - 1){
//             textArea.value  = arr[index + 1];
//         }else{
//             textArea.value  = arr[index];
//         }
//     }
// });

// prev.addEventListener('click', function(){
//     if(get('dataBase') && textArea.value){
//         let arr     = get('dataBase');
//         let text    = textArea.value;
//         let index   = arr.indexOf(text);
       
//         if(index > 0){
//             textArea.value  = arr[index - 1];
//         }else{
//             textArea.value  = arr[index];
//         }
//     }
// });

// function get(id){
//     let arr = localStorage.getItem(id);
//     arr = JSON.parse(arr);
//     return arr;
// };

// function save(id, text){
//     let arr = get(id);
//     if(arr == undefined){
//         arr = [];
//         arr.push(text);
//     }else{
//         arr.push(text);
//     }

//     let json    = JSON.stringify(arr);
//     localStorage.setItem('dataBase', json);
// };




// // 3. Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп. Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму). 
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах. Сделайте ваш скрипт как можно более универсальным.

// if(get('dataBase')){
//     general.innerHTML   = get('dataBase');
//     start();
// }else{
//     start();
// }

// function start(){
//     let general     = document.getElementById('general');
//     let inputs      = document.getElementById('inputs');
//     let textArea    = document.getElementById('textArea');
//     let checkbox    = document.querySelectorAll('#checkbox input');
//     let radio       = document.querySelectorAll('#radio input');
//     let select      = document.getElementById('select');
//     let btn         = document.getElementById('btn');
    
//     for(let elem of inputs){
//         elem.value              = elem.dataset.value;
//         elem.addEventListener('input', function(){
//             this.dataset.value  = this.value;
//             save('dataBase', general);
//         });
//     }
    
//     textArea.value          = textArea.dataset.value;
//     textArea.addEventListener('input', function(){
//         this.dataset.value      = this.value;
//         save('dataBase', general);
//     });
    
//     for(let elem of checkbox){
//         elem.addEventListener('click', function(){
//             if(this.hasAttribute('checked')){
//                 this.removeAttribute('checked');
//             }else{
//                 this.setAttribute('checked', '');
//             }
//             save('dataBase', general);
//         });
//     }
    
//     for(let elem of radio){
//         elem.addEventListener('click', function(){
//             deleteAttribute(radio, 'checked');
//             if(this.hasAttribute('checked')){
//                 this.removeAttribute('checked');
//             }else{
//                 this.setAttribute('checked', '');
//             }
//             save('dataBase', general);
//         });
//     }

//     select.addEventListener('change', function(){
//         deleteAttribute(select, 'selected');
//         select[select.selectedIndex].setAttribute('selected', '');
//         save('dataBase', general);
//     });

//     btn.addEventListener('click', function(){
//         localStorage.removeItem('dataBase');
//         alert('Ваши данные успешно приняты, ожидайте рассмотрения и ответа!');
//     });
    
//     function deleteAttribute(arr, nameAttr){
//         for(let elem of arr){
//             elem.removeAttribute(nameAttr);
//         }
//     };
// };

// function get(id){
//     let arr = localStorage.getItem(id);
//     arr = JSON.parse(arr);
//     return arr;
// };

// function save(id, elem){
//     let json    = JSON.stringify(elem.innerHTML);
//     localStorage.setItem(id, json);
// };




// 4. Реализуйте записную книгу, хранящую данные в локальном хранилище.

let wrapper     = document.getElementById('wrapper');

if(getLocalStorageText('dataHTML')  != null){
    wrapper.innerHTML   = getLocalStorageText('dataHTML');
    start();
}else{
    start();
}

function start(){
    let opens       = document.querySelectorAll('.open');
    let removes     = document.querySelectorAll('.remove');
    let create      = document.getElementById('create');
    let info        = document.getElementById('info');
    let text        = document.getElementById('text').firstElementChild;
    let save        = document.getElementById('text').lastElementChild;
    let curr        = notes.children.length;

    // Вешаем событие на кнопочку сохранения записей в записную книжку
    save.addEventListener('click', function(){
        let notes       = document.getElementById('notes');
        let mode        = this.dataset.mode;

        if(mode == 'create'){ // Делаем проверку, что если мод кнопки основан на создании, то мы создаем и записываем в нашу запись текст от пользователя
            if(!notes.children[0].classList.contains('active')){
                let local   = getLocalStorage('dataBase');
                local[notes.children[0].dataset.key]    = text.value;
                saveLocalStorage('dataBase', local);
                notes.children[0].classList.add('active');
                text.value      = '';
                saveLocalStorageText('dataHTML', wrapper.innerHTML);
                intervalInfo(1, info, 'Вы успешно сохранили запись');
            }else{
                let arr         = document.querySelectorAll('.active');
                let nextElem    = arr[arr.length - 1].nextElementSibling;
        
                if(nextElem != null){
                    let local   = getLocalStorage('dataBase');
                    local[nextElem.dataset.key]   = text.value;
                    saveLocalStorage('dataBase', local);
                    nextElem.classList.add('active');
                    text.value                    = '';
                    saveLocalStorageText('dataHTML', wrapper.innerHTML);
                    intervalInfo(1, info, 'Вы успешно сохранили запись');
                }else{
                    alert('Пожалуйста, создайте новую запись!');
                }
            }
        }else{
            let local               = getLocalStorage('dataBase');
            local[this.dataset.key] = text.value;
            saveLocalStorage('dataBase', local);
            save.dataset.mode       = 'create';
            save.innerHTML          = 'Сохранить текст в новой записи';
            text.value              = '';
            saveLocalStorageText('dataHTML', wrapper.innerHTML);
            intervalInfo(1, info, 'Вы успешно отредактировали запись');
        }
    });

    for(let open of opens){ // Цикл который распростроняется на изменение каждой записи (по двойному клику)
        changeTextInRecord(open);
    }

    for(let i = 0; i < opens.length; i++){ // Вешаем событие на кнопку записи, чтобы отредактировать ее
        addEventForCreateOpens(opens[i]);
    }

    create.addEventListener('click', function(){ // Вещаем обработчик события на создание новой записи
        createNewRecord(notes);
        intervalInfo(1, info, 'Вы успешно создали новую запись');
    });

    function createNewRecord(selector){ // Функция, отвечающая за создание новой записи
        let li          = document.createElement('li');
        selector.append(li);

        let span        = document.createElement('span');
        span.innerHTML  = 'запись ' + notes.children.length + ' ';
        span.classList.add('open');
        li.append(span);

        let link        = document.createElement('a');
        link.href       = '#';
        link.innerHTML  = 'X';
        link.classList.add('remove');
        li.append(link);

        deleteRecord(link);

        li.dataset.key  = curr;
        curr++;

        addEventForCreateOpens(span);
        changeTextInRecord(span);
    };

    function addEventForCreateOpens(elem){ // Функция, отвечающая за навешивание события на изменение текста в записи
        elem.addEventListener('click', function(){
            if(elem.parentElement.classList.contains('active')){
                let loc                 = getLocalStorage('dataBase');
                let key                 = this.parentElement.dataset.key;
                text.value              = loc[key];
                save.dataset.mode       = 'update';
                save.dataset.key        = this.parentElement.dataset.key;
                save.innerHTML          = 'Сохранить изменения в данной записи';
                saveLocalStorage('dataBase', loc);
                saveLocalStorageText('dataHTML', wrapper.innerHTML);
            }
        });
    };

    function changeTextInRecord(elem){ // Функция, позволяющая изменить название самой записи
        elem.addEventListener('dblclick', function(){
            let input       = document.createElement('input');
            input.value     = this.innerHTML;
            this.innerHTML  = '';
            this.append(input);
            let self        = this;

            input.addEventListener('keypress', function(event){
                let code    = event.keyCode;

                if(code == 13){
                    self.innerHTML  = this.value + ' ';
                    this.remove();
                    saveLocalStorageText('dataHTML', wrapper.innerHTML);
                }
            });
        });
    }

    // Удаление записей
    for(let remove of removes){
        deleteRecord(remove);
    }

    function deleteRecord(elem){ // Функция, которая отвечает за удаление записей
        elem.addEventListener('click', function(){
            let key     = this.parentElement.dataset.key;
            
            let local   = getLocalStorage('dataBase');
            delete local[key];
            saveLocalStorage('dataBase', local);
            this.parentElement.remove();
            intervalInfo(1, info, 'Вы успешно удалили данную запись');
            saveLocalStorageText('dataHTML', wrapper.innerHTML);
        });
    }


    function intervalInfo(curr, select, text){ // Функция, отвечающая за оповещение пользователя о его действиях
        select.innerHTML    = text;
        let id  = setInterval(function(){
            curr--;

            if(curr == 0){
                clearInterval(id);
                select.innerHTML    = '';
            }
        }, 1000);
    };

    function setKeysOnRecords(){ // Присваиваем нашим записям универсальный ключ
        let notes   = document.getElementById('notes').children;
        for(let i = 0; i < notes.length; i++){
            notes[i].dataset.key  = i;
        }
    };
    if(getLocalStorageText('dataHTML')  == null){
        setKeysOnRecords();
    }
};


function getLocalStorage(id){
    let obj = localStorage.getItem(id);

    if(obj == null){
        ob = {
            0: '',
            1: '',
            2: ''
        };
        return ob;
    }else{
        obj = JSON.parse(obj);
        return obj;
    }
};

function saveLocalStorage(id, obj){
    let json    = JSON.stringify(obj);
    localStorage.setItem(id, json);
};

function getLocalStorageText(id){
    let text = localStorage.getItem(id);
    return text;
};

function saveLocalStorageText(id, text){
    localStorage.setItem(id, text);
};