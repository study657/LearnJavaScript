// let iphone = {
//     'name' : 'IPhone Xs 512GB',
//     'price': 120000,
//     buy(){
//         alert(`Вы купили ${this.name}`);
//     }
// };

// let galaxy = {
//     'name'  : 'Galaxy Note 9',
//     'price' : 90000,
//     buy(){
//         alert(`Вы купили ${this.name}`);
//     }
// };
// iphone.buy();
// galaxy.buy();

class ProductCard{
    constructor(name, price, description, photoProduct) {
        this.name           = name;
        this.price          = price;
        this.description    = description;
        this.photo          = photoProduct;
        this.wish           = false;
        this.poap           = false;
        this.message        = 'Товар в корзине';

        this.elem   = document.createElement('div');
        this.elem.classList.add('catalog-product');
    };

    addWish(){
        this.wish   = true;
        this.elem.classList.add('wish');
    };

    removeWish(){
        this.wish   = false;
        this.elem.classList.remove('wish');
    };

    buy(){
        alert(`Вы купили ${this.name}`);
    };

    renderElement(){
        this.elem.innerHTML = `
            <img src="${this.photo}">
            <h3>${this.name}</h3>
            <h1 class='popup'>${this.description}</h1>
            <p>${this.price} руб.</p>
            <button class='button'>Купить</button>
        `;

        let self    = this;
        this.elem.querySelector('.button').addEventListener('click', function(event){
            event.stopPropagation();
            this.innerHTML  = self.message;
            self.buy();
        });

        this.elem.querySelector('h3').addEventListener('click', function(event){
            event.stopPropagation();
            if(self.poap){
                self.poapHide();
            }else{
                self.poapShow();
            }
        });

        this.elem.addEventListener('click', function(){
            if(self.wish){
                self.removeWish();
            }else{
                self.addWish();
            }
        });

        return this.elem;
    };

    poapShow(){
        this.poap = true;
        this.elem.querySelector('.popup').style.display = 'block';
    };

    poapHide(){
        this.poap = false;
        this.elem.querySelector('.popup').style.display = 'none';
    };
};

class ProductCardPreOrder extends ProductCard{
    constructor(name, price, description, photoProduct, date){
        super(name, price, description, photoProduct);
        this.date       = date;
        this.message    = 'Товар заказан';
    };
    buy(){
        alert(`Вы предзаказали ${this.name}`);
    };
    renderElement(){
        super.renderElement();
        this.elem.querySelector('.button').innerHTML    = 'Заказать';

        return this.elem;
    };
};

class ProductCardSale extends ProductCard{
    constructor(name, price, description, photoProduct, sale) {
        super(name, price, description, photoProduct);
        this.sale   = sale;
    };
    renderElement(){
        super.renderElement();
        this.elem.querySelector('p').innerHTML  += ' (' + this.sale + '%)';
        this.elem.querySelector('.button').style.backgroundColor    = 'orange';

        return this.elem;
    };
};

let catalog = document.querySelector('.catalog');

let iPhoneXs        = new ProductCard('iPhone Xs 512GB', 120000, 'Новый телефон, iPhone. Все как вы любите!', 'images/iphone.jpg');
let iPhone7         = new ProductCardSale('iPhone 7 256GB', 60000, 'Устервший iPhone 7, но стабильный и надежный аппарат, к тому же по привлекательной цене!', 'images/iPhone7.jpg', 10);
let GalaxyNote9     = new ProductCard('Galaxy Note 9', 90000, 'Новый телефон, Galaxy. Все как вы любите!', 'images/galaxy.jpg');
let galaxy8         = new ProductCardSale('Galaxy 8', 10000, 'Устервший Galaxy 8, но стабильный и надежный аппарат, к тому же по привлекательной цене!', 'images/galaxy8.jpg', 20);
let iPhone20        = new ProductCardPreOrder('iPhone 20', 200000, 'Самая последняя модель iPhone, которая выйдет в 2021 году!', 'images/iphone.jpg', '2021');
let iPhone8         = new ProductCard('iPhone 8', 80000, 'Самая стабильная и прочная модель iPhone 8', 'images/iPhone8.jpg');

catalog.append(iPhoneXs.renderElement());
catalog.append(iPhone7.renderElement());
catalog.append(GalaxyNote9.renderElement());
catalog.append(galaxy8.renderElement());
catalog.append(iPhone20.renderElement());
catalog.append(iPhone8.renderElement());

// iphone.buy();
// galaxy.buy();