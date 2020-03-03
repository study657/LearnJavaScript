// // Понятие узел
// // Задача №1:
// // Дан див. Внутри него вначале находится просто текст, а затем span:
// // Получите первого потомка нашего дива с помощью firstChild и с помощью firstElementChild. Сравните результаты.

// let elem    = document.getElementById('elem');
// console.log(elem.firstChild); // Выводит узел, т.е. текст
// console.log(elem.firstElementChild); // Выводет первый элемент DOM




// // Текстовый узел и узел-комментарий
// // Задача №2:
// // Дан див. Внутри него вначале находится просто текст, а затем span:
// // Выведите на экран находящийся в начале дива текст.

// let elem    = document.getElementById('elem');

// alert(elem.firstChild.data);
// alert(elem.firstChild.nodeValue);
// alert(elem.firstChild.textContent);




// // Задача №3:
// // Дан див. Внутри него вначале находится просто текст, а затем span:
// // Поменяйте текст на восклицательный знак.

// let elem    = document.getElementById('elem');

// elem.firstChild.data = '! ';
// // elem.firstChild.nodeValue = '! ';
// // elem.firstChild.textContent = '! ';




// // Задача №4:
// // Дан див. Внутри него вначале находится span, а затем просто текст:
// // Поменяйте текст на восклицательный знак.

// let elem    = document.getElementById('elem');
// elem.firstChild.nextSibling.data = '!';




// // Задача №5:
// // Дан див с комментарием:
// // Выведите на экран текст комментария.

// let elem    = document.getElementById('elem');
// alert(elem.firstChild.data);




// // Задача №6:
// // Дан див с комментарием:
// // Поменяйте текст комментария на восклицательный знак.

// let elem    = document.getElementById('elem');
// elem.firstChild.data = '!';




// // Разница между nextSibling и nextElementSibling, childNodes и children, firstChild и firstElementChild, lastChild и lastElementChild
// // Задача №7:
// // Дан див:
// // Переберите циклом всех потомков дива сначала через childNodes, а потом через children.

// let elem = document.getElementById('elem');

// // for(let i = 0; i < elem.childNodes.length; i++){
// //     console.log(elem.childNodes[i].textContent);
// // }

// for(let i = 0; i < elem.children.length; i++){
//     console.log(elem.children[i]);
// }




// // Задача №8:
// // Дан див:
// // Выведите на экран содержимого второго (если начинать отсчет с единицы) узла-потомка нашего дива.

// let elem = document.getElementById('elem');
// document.write(elem.firstElementChild.textContent);




// // Задача №9:
// // Дан див:
// // Выведите на экран содержимого второго (если начинать отсчет с единицы) DOM-элемента-потомка нашего дива.

// let elem = document.getElementById('elem');

// document.write(elem.firstElementChild.nextElementSibling.textContent);




// // Задача №10:
// // Дан див:
// // Получите span с числом 3 внутри. Выведите на экран текст его правого и левого узла-соседа.

// let elem = document.getElementById('elem');
// let span3   = elem.firstElementChild.nextElementSibling;

// document.write(span3.previousSibling.textContent);
// document.write(span3.nextSibling.nextSibling.textContent);




// // Задача №11:
// // Дан див:
// // Получите span с числом 3 внутри. Выведите на экран текст его правого и левого DOM-элемента-соседа.

// let elem = document.getElementById('elem');

// let span3 = elem.firstElementChild.nextElementSibling;

// document.write(span3.previousElementSibling.textContent);
// document.write(span3.nextElementSibling.textContent);




// // Задача №12:
// // Дан див:
// // Получите текстовый узел с числом 3 внутри. Выведите на экран текст его правого соседа.

// let elem = document.getElementById('elem');

// let textNode_3 = elem.firstElementChild.nextSibling;
// document.write(textNode_3.nextSibling.textContent);
// console.log(textNode_3);




// // Задача #13:
// // Дан див:
// // Переберите циклом все его узлы, получите их текст, выведите текст на экран, а рядом с каждый текстом - тип соответствующего узла.

// let elem    = document.getElementById('elem');
// for(let i = 0; i < elem.childNodes.length; i++){
//     document.write(elem.childNodes[i].textContent + ' - ' + elem.childNodes[i].nodeType + '</br>');
// }




// // Задача №14:
// // Даны абзацы. Получите их в виде NodeList.

// let paragNodeList = document.querySelectorAll('p');
// console.log(paragNodeList); // Получили именно NodeList коллекцию элементов, т.к. воспользовались свойством querySelectorAll, а значит этот тип будет скорее всего динамически статичным




// // Задача №15:
// // Даны абзацы. Получите их в виде HTMLCollection.

// let paragrHtmlCollection = document.getElementsByTagName('p');
// console.log(paragrHtmlCollection); // Получили именно HTMLCollection коллекцию элементов, т.к. воспользовались свойством getElementsByTagName, а значит этот тип будет динамически изменяемым всегда




// // Задача №16:
// // Даны абзацы. Получите их в виде NodeList, а затем преобразуйте этот NodeList в массив.

// let paragNodeList = document.querySelectorAll('p');
// let arrParagNodeList = Array.from(paragNodeList);
// // let arrParagNodeList = [...paragNodeList]; // Стандарт es6
// console.log(arrParagNodeList);




// // Задача #17:
// // Даны абзацы. Получите их в виде HTMLCollection, а затем преобразуйте этот HTMLCollection в массив.

// let paragHtmlCollection = document.getElementsByTagName('p');
// let arrParagHtmlCollection = Array.from(paragHtmlCollection);
// // let arrParagHtmlCollection = [...paragHtmlCollection]; // Стандарт es6
// console.log(arrParagHtmlCollection);




// // Задача №18:
// // Дан див:
// // Вставьте перед спеном текст '!!!', создав его предварительно как текстовый узел с помощью createTextNode.

// let elem    = document.getElementById('elem');
// let node    = document.createTextNode('!!!');
// elem.insertBefore(node, elem.firstElementChild);




// // Задача №19:
// // Дан див:
// // Вставьте после слова text новый текстовый узел с текстом '!!!'.

// let elem    = document.getElementById('elem');
// let node    = document.createTextNode('!!!');
// elem.insertBefore(node, elem.firstElementChild);




// // Задача №20:
// // Дан див:
// // Удалите из него текстовый узел ' text '.

// let elem    = document.getElementById('elem');
// elem.removeChild(elem.childNodes[0]);




// Задача №21:
// Дан див:
// Переберите циклом все его узлы и выведите на экран для текстовых узлов и комментариев их текст, а для узлов-DOM-элементов - их innerHTML.

let elem    = document.getElementById('elem');

elem.childNodes.forEach(function(child){
    if(child.nodeType == 8){
        document.write(child.textContent);
    }
    if(child.nodeType == 3){
        document.write(child.textContent);
    }

    if(child.nodeType == 1){
        document.write(child.innerHTML);
    }
});