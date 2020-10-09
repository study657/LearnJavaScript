let name        = document.getElementById('name');
let price       = document.getElementById('price');
let amount      = document.getElementById('amount');
let add         = document.getElementById('add');
let table       = document.getElementById('table');
let total       = document.getElementById('total');

add.addEventListener('click', function(){
    let tr              = document.createElement('tr');
    table.append(tr);

    let thName      = createNewProduct(tr, name.value, 'name');
    let thPrice     = createNewProduct(tr, price.value, 'price');
    let thAmount    = createNewProduct(tr, amount.value, 'amount');
    createNewProduct(tr, price.value * amount.value, 'cost');
    let remove      = createNewProduct(tr, 'удалить', 'remove');

    remove.addEventListener('click', function(){
        this.parentElement.remove();
        getTotalPrice(total);
    });

    changeTdInTable(thName);
    changeTdInTable(thPrice);
    changeTdInTable(thAmount);

    getTotalPrice(total);
    
    name.value  = '';
    price.value  = '';
    amount.value  = '';
});

function createNewProduct(tr, text, className){
    let td              = document.createElement('td');
    td.innerHTML        = text;
    td.classList.add(className);
    tr.append(td);

    return td;
};

function getTotalPrice(total){
    let costs       = document.querySelectorAll('.cost');
    let sum         = 0;

    for(let elem of costs){
        sum += Number(elem.innerHTML);
    }
    total.innerHTML = sum;
};

function changeTdInTable(elem){
    elem.addEventListener('dblclick', function(){
        let input       = document.createElement('input');
        input.focus();
        input.value     = this.innerHTML;
        this.innerHTML  = '';
        this.append(input);

        let self        = this;

        input.addEventListener('keypress', function(event){
            let code    = event.keyCode;

            if(code == 13){
                self.innerHTML  = this.value;
                this.remove();

                if(self.classList.contains('price') || self.classList.contains('amount')){
                    let parent  = self.parentElement;
                    let price   = parent.querySelector('.price');
                    let amount  = parent.querySelector('.amount');
                    let cost    = parent.querySelector('.cost');

                    cost.innerHTML  = Number(price.innerHTML) * Number(amount.innerHTML);
                    getTotalPrice(total);
                }
            }
        });
    });
};