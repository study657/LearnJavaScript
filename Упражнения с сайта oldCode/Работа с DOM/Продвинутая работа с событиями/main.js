// let input   = document.getElementsByTagName('input');

// for(let i = 0; i < input.length; i++){
//     input[i].onclick = func;

//     function func(){
//         alert('!');
//     };
// }




// let input   = document.getElementsByTagName('input');

// for(let i = 0; i < input.length; i++){
//     input[i].onclick = func;

//     function func(){
//         alert(this.value);
//     };
// }











































// // 1. Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src

// let img = document.getElementsByTagName('img');

// for(let i = 0; i < img.length; i++){
//     img[i].onclick = goShowAlert;

//     function goShowAlert(){
//         alert(this.getAttribute('src'));
//     };
// }




// // На addEventListener, removeEventListener
// // 2. Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст

// let links = document.getElementsByTagName('a');

// for(let i = 0; i < links.length; i++){
//     links[i].addEventListener('mouseover', writeTextAtribbute);

//     function writeTextAtribbute(){
//         this.title = this.innerHTML;
//     };
// }




// // 3. Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках

// let links = document.getElementsByTagName('a');

// for(let i = 0; i < links.length; i++){
//     links[i].addEventListener('mouseover', writeHref);

//     function writeHref(){
//         this.innerHTML  = this.innerHTML + ' (' + this.href + ')';
//     };
// }




// // 4. Дополните предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста

// let links = document.getElementsByTagName('a');

// for(let i = 0; i < links.length; i++){
//     links[i].addEventListener('mouseover', writeHref);

//     function writeHref(){
//         this.innerHTML  = this.innerHTML + ' (' + this.href + ')';
//         links[i].removeEventListener('mouseover', writeHref);
//     };
// }




// // 5. Привяжите всем инпутам следующее событие - по потери фокуса каждый инпут выводит свое value в абзац с id="test"

// let input   = document.getElementsByTagName('input');
// let test    = document.getElementById('test');

// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener('mouseout', writeValue);

//     function writeValue(){
//         test.innerHTML = this.value;
//     };
// }




// // 6. Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, но только по первому нажатию. 
// // Повторное нажатие на инпут не должно вызывать реакции

// let input   = document.getElementsByTagName('input');

// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener('click', writeValue);

//     function writeValue(){
//         alert(this.value);
//         input[i].removeEventListener('click', writeValue);
//     };
// }




// // 7. Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит

// let abzac   = document.getElementsByTagName('p');

// for(let i = 0; i < abzac.length; i++){
//     abzac[i].addEventListener('click', showKvadratNumber);

//     function showKvadratNumber(){
//         this.innerHTML = Math.pow(this.innerHTML, 2);
//     };
// }




// // 8. Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. 
// // Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
// // Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной

// let input   = document.getElementsByTagName('input');

// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener('mouseout', showSymbols);

//     function showSymbols(){
//         let quantitySymbols = this.dataset.length;
//         if(this.value.length == quantitySymbols){
//             this.style.borderColor = 'green';
//         }else{
//             this.style.borderColor = 'red';
//         }
//     };
// }




// 9. Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. 
// Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener

let divs    = document.getElementsByTagName('div');

for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', paintRed);

    function paintRed(){
        this.style.backgroundColor = 'red';
        divs[i].removeEventListener('click', paintRed);
        divs[i].addEventListener('click', paintGreen);
    };

    function paintGreen(){
        this.style.backgroundColor = 'green';
        divs[i].removeEventListener('click', paintGreen);
        divs[i].addEventListener('click', paintRed);
    };
}