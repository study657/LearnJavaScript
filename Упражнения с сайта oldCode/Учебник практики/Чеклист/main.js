// Чеклист на JavaScript
// В данном уроке мы с вами реализуем чеклист. Чеклистом называется программа, которая позволяет сделать список планируемых дел, а затем по мере выполнения этим дел отмечать эти дела сделанными.
// Давайте сделаем так, чтобы дела можно было добавлять, удалять, редактировать и отмечать сделанными.
// Вот образец того, что у нас должно получится (для ввода нового дела введите текст в инпут и нажмите Enter, для редактирования выполните двойной клик по тексту дела)

let input       = document.getElementById('input');
let list        = document.getElementById('list');

input.addEventListener('keypress', function(event){
    let code    = event.keyCode;

    if(code == 13){
        let li              = document.createElement('li');
        list.appendChild(li);

        let span1           = document.createElement('span');
        span1.innerHTML     = input.value;
        span1.classList.add('task');
        li.appendChild(span1);

        let span2           = document.createElement('span');
        span2.innerHTML     = 'Удалить';
        span2.href          = '#';
        span2.classList.add('remove');
        li.appendChild(span2);

        let span3           = document.createElement('span2');
        span3.innerHTML     = 'Сделано';
        span3.href          = '#';
        span3.classList.add('mark');
        li.appendChild(span3);

        span1.addEventListener('dblclick', function(){
            let input   = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML  = '';
            this.appendChild(input);

            let self    = this;
            input.addEventListener('keypress', function(event){
                let code    = event.keyCode;

                if(code == 13){
                    self.innerHTML  = this.value;
                    this.remove();
                }
            });
        });

        span2.addEventListener('click', function(){
            this.parentElement.remove();
        });

        span3.addEventListener('click', function(){
            let elem    = this.previousSibling.previousSibling;
            elem.style.textDecoration = 'line-through';
        });
        input.value     = '';
    }
});