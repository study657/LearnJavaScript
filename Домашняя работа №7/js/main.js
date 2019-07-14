let startBtn                = document.getElementById('start'),                                                                                       // Плучаем доступы ко всем элементам на странице, которые необходимы для дальнейшей работы
    budgetValue             = document.querySelector('.budget-value'),
    dayBudgetValue          = document.querySelector('.daybudget-value'),
    levelValue              = document.querySelector('.level-value'),
    expensesValue           = document.querySelector('.expenses-value'),
    optionalExpensesValue   = document.querySelector('.optionalexpenses-value'),
    incomeValue             = document.querySelector('.income-value'),
    monthsavingsValue       = document.querySelector('.monthsavings-value'),
    yearsavingsValue        = document.querySelector('.yearsavings-value'),
    expensesItem            = document.getElementsByClassName('expenses-item'),
    expensesItemBtn         = document.getElementsByTagName('button')[0],
    optionalexpensesBtn     = document.getElementsByTagName('button')[1],
    countBudgetBtn          = document.getElementsByTagName('button')[2],
    optionalExpensesItem    = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome            = document.querySelector('.choose-income'),
    savings                 = document.querySelector('#savings'),
    chooseSum               = document.querySelector('.choose-sum'),
    choosePercent           = document.querySelector('.choose-percent'),
    yearValue               = document.querySelector('.year-value'),
    monthValue              = document.querySelector('.month-value'),
    dayValue                = document.querySelector('.day-value');


let money, time;                                                                                                                                      // Сделали наши переменные ГЛОБАЛЬНЫМИ, т.к. если использовать их внутри функции, то снаружи они будут не видны                                                                                              

expensesItemBtn.disabled        = true;                                                                                                               // Пока не нажметка кнопка Начать рассчет, то все остальные кнопки будут не активны
optionalexpensesBtn.disabled    = true;
countBudgetBtn.disabled         = true;

startBtn.addEventListener('click', function () {                                                                                                      // Повесили обработчик события клика на нашу кнопку Начать рассчет
    time  = prompt('Введите дату в формате YYYY-MM-DD', '');                                                                                          // Создаем переменную, которая просит пользователя: "Введите дату в формате YYYY-MM-DD"
    money = +prompt('Ваш бюджет на месяц?', '');                                                                                                      // Создаем переменную, которая спрашивает пользователя: "Ваш бюджет на месяц?". Унатный плюсик перед prompt нужен для того, чтобы сделать наши данные от пользователя числом, а не строкой

    while (isNaN(money) || money == '' || money == null) {                                                                                            // Делаем проверки чтобы пользователь не мог ввести буквы в бюджет, метод isNaN будет true в том случае, когда попадут НЕ цифры. Далее проверяем, чтобы строка не была пустой. далее проверяем, чтобы пользователь не мог нажать кнопку отмены
        money = +prompt('Ваш бюджет на месяц?', '');                                                                                                  // Соответственно пока в цикле одно из условий не выполнится, так и будет задавать вопрос пользователю ввести бюджет
    }
    appData.budjet          = money;                                                                                                                  // Записываем бюджет от пользователя в глобальный объект appData
    appData.timeData        = time;                                                                                                                   // Записываем дату от пользователя в глобальный объект appData
    budgetValue.textContent = money.toFixed();                                                                                                        // Далее в наш элемент, который на странице с помозью свойства textContent записываем туда данные с доходом пользователя и округляем до 1 знака после ,
    yearValue.value         = new Date(Date.parse(time)).getFullYear();                                                                               // Записываем в наш input, который с помощью атрибута readonly неизменный, записываем наше значение value - это числовое значение, которые как атрибут будет создано в нашем input и будет отображаться. new Date - создаем объект даты. Далее обращаем внимания какая дата к нам приходит, а приходит она с переменной с ответа от пользователя. Date.parse - преобразовывает полученные зачени. getFullYear() - поволяет преобразовать полученные данные и оставить лишь год.
    monthValue.value        = new Date(Date.parse(time)).getMonth() + 1;                                                                              // Все тоже самое по аналогии как с годом, только для месяца теперь. getMonth() - преобразовывает полученные данные и оставляет лишь месяц. По скольку в js все начинается с 0, то чтобы был 1 месяц - декабрь надо прибавлять 1.
    dayValue.value          = new Date(Date.parse(time)).getDate();                                                                                   // Все тоже самое, но только с днем месяца. getDate() - получение нужного дня от пользователя

    expensesItemBtn.disabled        = false;
    optionalexpensesBtn.disabled    = false;
    countBudgetBtn.disabled         = false;
});

expensesItemBtn.addEventListener('click', function () {                                                                                               // Вешаем на кнопку обработчик событий который будет запускать некоторую логику при клике на нашу кнопку
    let sum = 0;                                                                                                                                      // Создали переменную, которая в последствии будет суммировать данные от пользователя с обязательными тратами

    for (let i = 0; i < expensesItem.length; i++){                                                                                                    // Задать пользователю по 2 раза вопросы: “Введите обязательную статью расходов в этом месяце”, “Во сколько обойдется?”. Записать ответы в объект expenses. Начинаем цикл, т.к. блоков вопросов с тратами может быть много, то берем нашу переменную в которой хранится псевдо массив и используем свойство lenght, чтобы определить их кол-во
        let a = expensesItem[i].value,                                                                                                                // Задаем в нашу переменную  expensesItem - это наш тег из html куда попадут данные от пользователя, вернее куда пользователь их введет [i] это указатель отсчета откуда начинаем, соответственно с 0 до 3. Ну и value записываем полученные данные                                                               
            b = expensesItem[++i].value;                                                                                                              // Сответственно далее так же, но ++i означает что объекты идут друг за другом (сами полученные значения от польователя)     
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {                         // Пишем проверку на то, чтобы пользователь не мог отменить наш вопрос, не мог оставить строку пустой. С помощью typeof(a) делаем прорверку, чтобы наши данные от пользователя были строкой. Далее выполняем проверку, чтобы пользователь не нажал отмену, если нажимает отмену, то это тип данных null, поэтому просто проверяем чтобы тип данных не был null. Так же проверяем, чтобы наши ответы от пользователя (переменные) a и b не были равны пустой строке. Ну и делаем проверку с помощью свойста lenght кол-ва символов, которое может ввести пользователь. Если все это выполняется, то выполняем действия ниже
            appData.expenses[a] = b;                                                                                                                  // записываем в наш expenses наши вопросы. Т.е. добераемся до глобального объекта appData, получаем ключ expenses и в него записываем в [Т.е. переменная] нашу переменную а, которая равна b. Таким образом в объекте expenses мы создали пару: ключ (а) и заничение (b)
            sum += +b;                                                                                                                                // += поставили для того чтобы каждый раз прибавлять к сумме значения от b. А +b сделали для того, чтобы у нас передавалось именно число, а не строка
        }else {                                                                                                                                       // Если пользователь не соблюдает требования по проверке выше, то тогда возвращаем его к вопросу занова. Собрали всю сумму от трат пользователя.
            i--;
        }
    }
    expensesValue.textContent = sum;                                                                                                                  // Записываем данные по сумме трат пользователя в нашу верстку на сайте
});

optionalexpensesBtn.addEventListener('click', function () {                                                                                           // Вешаем обработчик события клика на клавишу утвердить
    for (let i = 0; i < optionalExpensesItem.length; i++) {                                                                                                                // Прописываем цикл с условиями, что i начинается с 1, и до 3
        let Opt = optionalExpensesItem[i].value;                                                                                                      // Помешаем в переменную наши вопросы i это значит вопросы по порядку из ответа от пользователя. value - как и в других функция используем для написания в наш input получившихся значений от пользователя

        appData.optionalExpenses[i] = Opt;                                                                                                            // Создаем в глобальном объекте новый ключ optionalExpenses с префиксом [i] чтобы каждый новый цикл ответ записывался с 1 до 3, и присваиваем все наши ответы полученные от пользователя
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';                                                                       // Берем наш тег из html в переменной и записываем туда значения из цикла (динамически).
    };
});

countBudgetBtn.addEventListener('click', function () {                                                                                                // Вешаем на кнопку рассчитать событие клика с последующей логикой при нажатии этой кнопки

    if (appData.budjet != undefined) {                                                                                                                // Проверка на то, что если значение бюджета не будет задано, а именно написано, то тогда работать ничего не будет и считать это поле не будет
        appData.moneyPerDay = ((appData.budjet - +expensesValue.textContent) / 30).toFixed(1);                                                        // Содаем новый ключ в глобальном объекте и присваиваем значение бюджета на 1 день. Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert). Т.е. берем нам глобальный объект appData, получаем ключ budjet отнимаем наши траты пользователя (общие) и делим на 30. Метод toFixed() позволяет нам округлить число до целового или до 1-... знаков в скобках. Но нужно помнить, что toFixed возвращает нам стоковое значение, т.е. тип данных строку
        dayBudgetValue.textContent = appData.moneyPerDay;                                                                                             // В наше поле с верствой записываем наше свойство которое получили от пользователя и рассчитали в дальнейшем и записываем в соответствующее поле в верстке
    
        if (appData.moneyPerDay < 100) {                                                                                                              // Делаем проверки на то, что бюджет на 1 день, который рассчитался из данных от пользователя приравнивается к каким-то нормам, которые пишутся в условиях
            levelValue.textContent = 'Минимальный уровень достатка';                                                                                  // Выводим информацию уже не в консоль лог, а в соответсвующее меню в верстке
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        }else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        }else {
            levelValue.textContent = 'Произошла ошибка';
        }
    }else {
        dayBudgetValue.textContent = 'Вам нужно начать запуск программы с кнопки "Начать рассчет"';                                                   // Альтернативная ветка, которая говорит о том, что пока пользователь не нажмет кнопку начать рассчет и там не введет значения, то поле с бюджетом на 1 день рассчитаться не сможет, т.к. нет данных для расссчета
    }
});

chooseIncome.addEventListener('input', function () {                                                                                                  // Вешаем обработчик события input для того, чтобы когда пользователь вводил через запятую его доп.доходы это сразу же отображалось и в нашей колонке с данными параметрами. Если бы мы использовали обработчик change , то тогда все приходило бы в форму после того, когда бы мы кликнули вне нашего инпута
    let items = chooseIncome.value;                                                                                                                   // В нашу переменную записываем данные от пользователя
    appData.income = items.split(', ');                                                                                                               // Берем в глобальном объекте наш массив income и вызываем метод split, который превращает строку в массив с разделителем ","
    incomeValue.textContent = appData.income;                                                                                                         // В наше меню в верстве записываем то, что получили от пользователя
});

savings.addEventListener('click', function () {                                                                                                       // На наш чекбокс вешаем событие клика
    if (appData.savings == true) {                                                                                                                    // Делаем проверку, что если у нас пользователь ставит галочку на чекбоксе, то мы переводим наш savings в значение true (т.е. есть накопления), а в противном случае если чекбокс не стоит, то ставим в значение false (т.е. нет накоплений у человека)
        appData.savings = false;
    }else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {                                                                                                     // На нашу сумму ставим обработчик события input - об этом уже писалось выше
    if(appData.savings == true) {
        let sum     = +chooseSum.value,                                                                                                               // Создаем переменные, которые показываю то, что ввел нам пользователь в наши колонки. Плюсик поставили для того, чтобы приходил формат типа данных: число
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;                                                                                                     // Создаем новый ключ в глобальном объекте, под названием monthIncome, который включает в себе формулу по рассчету прибыли за месяц
        appData.yearIncome  = sum/100*percent;                                                                                                        // Создаем новый ключ в глобальном объекте, под названием monthIncome, который включает в себе формулу по рассчету прибыли за год

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);                                                                               // В наше меню в верстве вставляем рассчет дохода пользователя с его вклада за месяц с округлением до 1 знака после запятой
        yearsavingsValue.textContent  = appData.yearIncome.toFixed(1);                                                                                // В наше меню в верстве вставляем рассчет дохода пользователя с его вклада за год с округлением до 1 знака после запятой
    }
});

choosePercent.addEventListener('input', function () {                                                                                                 // На наш процент ставим обработчик события input - об этом уже писалось выше
    if(appData.savings == true) {
        let sumS    = +chooseSum.value,                                                                                                               // Создаем переменные, которые показываю то, что ввел нам пользователь в наши колонки
            percent = +choosePercent.value;

        appData.monthIncome = sumS/100/12*percent;                                                                                                    // Создаем новый ключ в глобальном объекте, под названием monthIncome, который включает в себе формулу по рассчету прибыли за месяц
        appData.yearIncome  = sumS/100*percent;                                                                                                       // Создаем новый ключ в глобальном объекте, под названием monthIncome, который включает в себе формулу по рассчету прибыли за год

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);                                                                               // В наше меню в верстве вставляем рассчет дохода пользователя с его вклада за месяц с округлением до 1 знака после запятой
        yearsavingsValue.textContent  = appData.yearIncome.toFixed(1);                                                                                // В наше меню в верстве вставляем рассчет дохода пользователя с его вклада за год с округлением до 1 знака после запятой   
    }
});

let appData = {                                                                                                                                       // Создаем объект appData, который будет содержать такие данные:
    budjet:             money,                                                                                                                        // бюджет (передаем сюда переменную из п.2),
    timeData:           time,                                                                                                                         // данные времени - timeData (передаем сюда переменную из п.2),
    expenses:           {},                                                                                                                           // объект с обязательными расходами - expenses (смотри пункт 4),
    optionalExpenses:   {},                                                                                                                           // объект с необязательными расходами - optionalExpenses (оставляем пока пустым),
    income:             [],                                                                                                                           // массив данных с доп. доходом - income (оставляем пока пустым),
    savings:            false                                                                                                                         // свойство savings (выставляем его как false)
};