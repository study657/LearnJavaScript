// Записная книжка
// Давайте сделаем записную книжку, позволяющую создавать записи с различным текстом. Пусть эта записная книжка представляет собой текстареа и кнопку. 
// Слева от текстареа пусть будет список созданных записей.
// В текстареа будет вводится текст. После нажатия на кнопку текст текстареа должен очистится, а в меню должна появится ссылка с текстом 'запись N', где вместо N будет порядковый номер записи.
// По нажатию на ссылку меню в текстареа должен появится текст соответствующей записи. Этот текст можно поредактировать и, по нажатию на кнопку, он должен обновится.

let opens       = document.querySelectorAll('.open');
let removes     = document.querySelectorAll('.remove');
let create      = document.getElementById('create');
let info        = document.getElementById('info');
let text        = document.getElementById('text').firstElementChild;
let save        = document.getElementById('text').lastElementChild;
let curr        = notes.children.length;
let texts       = {
    0: '',
	1: '',
	2: ''
};
setKeysOnRecords();

// Вешаем событие на кнопочку сохранения записей в записную книжку
save.addEventListener('click', function(){
    let notes       = document.getElementById('notes');
    let opens       = document.querySelectorAll('.open');
    let mode        = this.dataset.mode;

    if(mode == 'create'){ // Делаем проверку, что если мод кнопки основан на создании, то мы создаем и записываем в нашу запись текст от пользователя
        if(!notes.children[0].classList.contains('active')){
            texts[notes.children[0].dataset.key]    = text.value;
            notes.children[0].classList.add('active');
            text.value      = '';
            intervalInfo(1, info, 'Вы успешно сохранили запись');
        }else{
            let arr         = document.querySelectorAll('.active');
            let nextElem    = arr[arr.length - 1].nextElementSibling;
    
            if(nextElem != null){
                texts[nextElem.dataset.key]   = text.value;
                nextElem.classList.add('active');
                text.value                    = '';
                intervalInfo(1, info, 'Вы успешно сохранили запись');
            }else{
                alert('Пожалуйста, создайте новую запись!');
            }
        }

        for(let i = 0; i < opens.length; i++){ // Вешаем событие на кнопку записи, чтобы отредактировать ее
            if(opens[i].parentElement.classList.contains('active')){
                opens[i].addEventListener('click', function(){
                    let key                 = this.parentElement.dataset.key;
                    text.value              = texts[key];
                    save.dataset.mode       = 'update';
                    save.dataset.key        = this.parentElement.dataset.key;
                    save.innerHTML          = 'Сохранить изменения в данной записи';
                });
            }
        }
    }

    if(mode == 'update'){ // Если наша кнопка теперь в статусе update, значит мы редактируем значение в данной записи, которую нажал пользователь
        texts[this.dataset.key] = text.value;
        save.dataset.mode       = 'create';
        save.innerHTML          = 'Сохранить текст в новой записи';
        text.value              = '';
        intervalInfo(1, info, 'Вы успешно отредактировали запись');
    }
});

for(let open of opens){ // Цикл который распростроняется на изменение каждой записи (по двойному клику)
    changeTextInRecord(open);
}

create.addEventListener('click', function(){ // Вещаем обработчик события на создание новой записи
    createNewRecord(notes);
    intervalInfo(1, info, 'Вы успешно создали новую запись');
});

function setKeysOnRecords(){ // Присваиваем нашим записям универсальный ключ
    let notes   = document.getElementById('notes').children;
    for(let i = 0; i < notes.length; i++){
        notes[i].dataset.key  = i;
    }
};

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

    changeTextInRecord(span);
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
        
        delete texts[key];
        this.parentElement.remove();
        intervalInfo(1, info, 'Вы успешно удалили данную запись');
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