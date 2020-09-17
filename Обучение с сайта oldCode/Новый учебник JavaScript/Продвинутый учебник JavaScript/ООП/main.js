// // Простые задачи
// // 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), 
// // days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
// // Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// // Вот так должен работать наш класс:
// // var worker = new Worker('Иван', 'Иванов', 10, 31);
// // console.log(worker.name); //выведет 'Иван'
// // console.log(worker.surname); //выведет 'Иванов'
// // console.log(worker.rate); //выведет 10
// // console.log(worker.days); //выведет 31
// // console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// // С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.

// class Worker{
//     constructor(name, surname, rate, days){
//         this.name       = name;
//         this.surname    = surname;
//         this.rate       = rate;
//         this.days       = days;
//     }

//     getSalary(){
//         return this.rate * this.days;
//     }
// };

// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// let worker1     = new Worker('Александр', 'Иванов', 1000, 24);
// console.log(worker1.getSalary());

// let worker2     = new Worker('Екатерина', 'Иванова', 2000, 26);
// console.log(worker2.getSalary());

// let sum         = worker1.getSalary() + worker2.getSalary();
// console.log(sum);














// // Геттеры и сеттеры
// // 2. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:

// // var worker = new Worker('Иван', 'Иванов', 10, 31);

// // console.log(worker.getName()); //выведет 'Иван'
// // console.log(worker.getSurname()); //выведет 'Иванов'
// // console.log(worker.getRate()); //выведет 10
// // console.log(worker.getDays()); //выведет 31
// // console.log(worker.getSalary()); //выведет 310 - то есть 10*31




// class Worker {
//     constructor(name, surname, rate, days){
//         this._name       = name;
//         this._surname    = surname;
//         this._rate       = rate;
//         this._days       = days;
//     };

//     getName(){
//         return this._name;
//     };

//     getSurname(){
//         return this._surname;
//     };

//     getRate(){
//         return this._rate;
//     };

//     getDays(){
//         return this._days;
//     };

//     getSalary(){
//         return this._rate * this._days;
//     };
// };

// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.getName()); //выведет 'Иван'
// console.log(worker.getSurname()); //выведет 'Иванов'
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31





// // 3.  Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
// // var worker = new Worker('Иван', 'Иванов', 10, 31);
// // console.log(worker.getRate()); //выведет 10
// // console.log(worker.getDays()); //выведет 31
// // console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// // //Теперь используем сеттер:
// // worker.setRate(20); //увеличим ставку
// // worker.setDays(10); //уменьшим дни
// // console.log(worker.getSalary()); //выведет 200 - то есть 20*10

// class Worker {
//     constructor(name, surname, rate, days){
//         this._name       = name;
//         this._surname    = surname;
//         this._rate       = rate;
//         this._days       = days;
//     };

//     getName(){
//         return this._name;
//     };

//     getSurname(){
//         return this._surname;
//     };

//     getRate(){
//         return this._rate;
//     };

//     getDays(){
//         return this._days;
//     };

//     getSalary(){
//         return this._rate * this._days;
//     };

//     setRate(rate){
//         this._rate  = rate;
//     };

//     setDays(days){
//         this._days  = days;
//     };
// };

// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10














// // Практика
// // 4. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), 
// // который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
// // Наш класс должен работать так:
// // var str = new MyString();
// // console.log(str.reverse('abcde')); //выведет 'edcba'
// // console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// // console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// class MyString{
//     reverse(string){
//         return string.split('').reverse().join('');
//     };

//     ucFirst(string){
//         let arr     = string.split('');
//         return arr[0].toUpperCase() + string.substr(1);
//     };

//     ucWords(string){
//         let arr     = string.split(' ');
//         let result  = [];
        
//         for(let i = 0; i < arr.length; i++){
//             result.push(arr[i][0].toUpperCase() + arr[i].substr(1));
//         }
//         return result.join(' ');
//     };
// };

// var str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'




// 5. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. 
// Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, 
// метод isDate для проверки даты и метод isPhone для проверки телефона:

// var validator = new Validator();

// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

class Validator{
    isEmail(string){
        return /^[a-zA-Z0-9]{1,}@(?:mail.ru|list.ru|gmail.com)$/.test(string);
    };

    isDomain(string){
        return /^[a-zA-Zа-яёА-ЯЁ0-9]{1,}\.(?:net|ru|com|biz|ру)$/.test(string);
    };

    isDate(string){
        return /^[0-3][0-2]\.(?:[0][0-9]|[1][0-2])\.[1-2][0-9]{3}$/.test(string);
    };

    isPhone(string){
        return /^\+7(?:-|\s)[0-9]{3}(?:-|\s)[0-9]{3}(?:-|\s)(?:[0-9]{4}|[0-9]{2}(?:-|\s)[0-9]{2})$/.test(string);
    };
};

var validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+7 929-777-5535'));