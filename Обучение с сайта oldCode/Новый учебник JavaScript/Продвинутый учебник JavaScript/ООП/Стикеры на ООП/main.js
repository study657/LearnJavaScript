class Sticker{
    constructor(parent){
        this._stick     = document.createElement('textarea');
        this._stick.classList.add('sticker');

        this._parent    = parent;
        this._parent.append(this._stick);

        this._initRemove();
        this._initRelocation();
        this._initTopState();

        this._watchText();
        this._watchSize();
    };

    create(width, height, x, y){
        this._setWidth(width);
        this._setHeight(height);
        this._setX(x);
        this._setY(y);
        this._setText('');

        this._setMaxZ();
    };

    _setWidth(value){
        this._width     = value;
        this._stick.style.width     = value + 'px';
    };

    _getWidth(){
        return this._width;
    };

    _setHeight(value){
        this._height    = value;
        this._stick.style.height    = value + 'px';
    };

    _getHeight(){
        return this._height;
    };

    _setX(value){
        this._x     = value;
        this._stick.style.left      = value + 'px';
    };

    _getX(){
        return this._x;
    };

    _setY(value){
        this._y     = value;
        this._stick.style.top       = value + 'px';
    };
    _getY(){
        return this._y;
    };

    _setZ(value){
        this._z     = value;
        this._stick.style.zIndex    = value;
    };

    _getZ(){
        return parseInt(this._z);
    };

    _setText(text){
        this._text      = text;
        this._stick.value   = text;
    };

    _getText(){
        return this._text;
    };

    _getMaxZ(){
        let stickers    = [...document.querySelectorAll('.sticker')];

        if(stickers.length != 0){
            let zindexes    = [];

            stickers.forEach((sticker) => {
                zindexes.push(sticker.style.zIndex);
            });

            return Math.max.apply(null, zindexes);
        }else{
            return 0;
        }
    };

    _setMaxZ(){
        let maxZ    = this._getMaxZ();

        if(maxZ != this._getZ() || maxZ == 0){
            this._setZ(maxZ + 1);
        }
    };

    _watchText(){
        this._stick.addEventListener('blur', () => {
            let newText     = this._stick.value;

            if(newText != this._getText()){
                this._setText(newText);
            }
        });
    };

    _watchSize(){
        this._stick.addEventListener('mouseup', () => {
            let newWidth    = parseInt(this._stick.clientWidth);
            let newHeight   = parseInt(this._stick.clientHeight);

            if(newWidth != this._getWidth()){
                this._setWidth(newWidth);
            }
            if(newHeight != this._getHeight()){
                this._setHeight(newHeight);
            }
        });
    };

    _initRemove(){
        this._stick.addEventListener('mousedown', (event) => {
            if(event.which == 2){
                this._parent.removeChild(this._stick);
            }
        });
    };

    _initRelocation(){
        this._stick.draggable   = true;

        let correctionX = 0;
        let correctionY = 0;

        this._stick.addEventListener('dragstart', (event) => {
            correctionX = this._getX() - event.pageX;
            correctionY = this._getY() - event.pageY;
        });

        this._stick.addEventListener('dragend', (event) => {
            this._setX(event.pageX + correctionX);
            this._setY(event.pageY + correctionY);
        });
    };

    _initTopState(){
        this._stick.addEventListener('click', () => {
            this._setMaxZ();
        });

        this._stick.addEventListener('dragstart', () => {
            this._setMaxZ();
        });
    };
};

window.addEventListener('dblclick', (event) => {
    let sticker = new Sticker(document.body);
    sticker.create(100, 150, event.pageX, event.pageY);
});