class Sticker{
    constructor(parent, key, id){
        this.parent     = parent;
        this._key       = key;
        this._id        = id;

        this.elem       = document.createElement('textarea');
        this.elem.classList.add('sticker');
        this.parent.append(this.elem);

        this._watchText();
        this._watchSize();

        this._initTopState();
        this._initTransformElem();
        this._initRemove();

        this._storage        = new Storage(key, id);
    };

    _restoreData(data){
        this._setWidth(data.width);
        this._setHeight(data.height);
        this._setX(data.x);
        this._setY(data.y);
        this._setZ(data.z);

        this._setText(data.texts);
    };

    _save(){
        let data    = {
            x:      this._getX(),
            y:      this._getY(),
            z:      this._getZ(),
            width:  this._getWidth(),
            height: this._getHeight(),
            texts:  this._getText(),
        };

        this._storage.globalSave(data);
    };

    create(width, height, x, y){
        this._setWidth(width);
        this._setHeight(height);
        this._setX(x);
        this._setY(y);
        this._setText('');

        this._setMaxZ();
    };

    _setWidth(width){
        this._width             = width;
        this.elem.style.width   = width + 'px';

        this._save();
    };

    _getWidth(){
        return this._width;
    };

    _setHeight(height){
        this._height            = height;
        this.elem.style.height  = height + 'px';

        this._save();
    }

    _getHeight(){
        return this._height;
    };

    _setX(value){
        this._x                 = value;
        this.elem.style.left    = value + 'px';

        this._save();
    };

    _getX(){
        return this._x;
    }

    _setY(value){
        this._y                 = value;
        this.elem.style.top     = value + 'px';

        this._save();
    };

    _getY(){
        return this._y;
    };

    _setZ(value){
        this._z                 = value;
        this.elem.style.zIndex  = value;

        this._save();
    };

    _getZ(){
        return this._z;
    };

    _setMaxZ(){
        let maxZ = this._getMaxZ();

        if(maxZ == 0 || maxZ != this._getZ()){
            this._setZ(maxZ + 1);
        }
    };

    _getMaxZ(){
        let zindexes        = document.querySelectorAll('.sticker');
        let zindex          = [];

        for(let i = 0; i < zindexes.length; i++){
            zindex.push(zindexes[i].style.zIndex);
        }

        return Math.max.apply(null, zindex);
    };

    _setText(text){
        this._text      = text;
        this.elem.value = text;

        this._save();
    };

    _getText(){
        return this._text;
    };

    _watchText(){
        this.elem.addEventListener('blur', () => {
            let newText     = this.elem.value;

            if(newText != this._getText()){
                this._getText(newText);
                this._save();
            }
        });
    };

    _watchSize(){
        this.elem.addEventListener('mouseup', () => {
            let newWidth        = parseInt(this.elem.clientWidth);
            let newHeight       = parseInt(this.elem.clientHeight);

            if(newWidth != this._getWidth()){
                this._setWidth(newWidth);
            }
            if(newHeight != this._getHeight()){
                this._setHeight(newHeight);
            }
        });
    };

    _initTopState(){
        this.elem.addEventListener('dragstart', () => {
            this._setMaxZ();
        });

        this.elem.addEventListener('click', () => {
            this._setMaxZ();
        });
    };

    _initTransformElem(){
        this.elem.draggable     = true;

        let correctionX         = 0;
        let correctionY         = 0;

        this.elem.addEventListener('dragstart', (event) => {
            correctionX     = this._getX() - event.pageX;
            correctionY     = this._getY() - event.pageY;
        });

        this.elem.addEventListener('dragend', (event) => {
            this._setX(event.pageX + correctionX);
            this._setY(event.pageY + correctionY);

            this.elem.blur();
        });
    };

    _initRemove(){
        this.elem.addEventListener('mouseup', (event) => {
            if(event.which == 2){
                this.parent.removeChild(this.elem);
            }
        });
    };
};

class Storage{
    constructor(key, id = null){
        this._key   = key;
        this._id    = id;
    };

    save(data){
        localStorage.setItem(this._key, data);
    };

    get(){
        return localStorage.getItem(this._key);
    };

    globalSave(value){
        let data    = this._extract();
        data[this._id]  = value;
        this._compact(data);
    };

    _remove(){
        let data    = this._extract();
        delete data[this._id];
        this._compact(data);
    };

    globalGet(){
        let data    = this._extract();
        if(data[this._id !== undefined]){
            return data[this._id];
        }
    };

    getAll(){
        return this._extract();
    };

    _extract(){
        let data    = this.get();

        if(data == null){
            return {};
        }else{
            return JSON.parse(data);
        }
    };

    _compact(data){
        this.save(JSON.stringify(data));
    };
};

let key         = 'stickers';
let id          = 0;
let storage     = new Storage(key, id);
let globalDate  = storage.getAll();

for(id in globalDate){
    let sticker = new Sticker(document.body, key, id);
    sticker._restoreData(globalDate[id]);

}

window.addEventListener('dblclick', (event) => {
    let sticker = new Sticker(document.body, key, id);
    sticker.create(100, 150, event.pageX, event.pageY);

    id++;
});