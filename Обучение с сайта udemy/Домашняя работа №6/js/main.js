let startBtn                = document.getElementById('start'),                                                                             // Плучаем доступы ко всем элементам на странице, которые необходимы для дальнейшей работы
    budgetValue             = document.querySelector('.budget-value'),
    daybudgetValue          = document.querySelector('.daybudget-value'),
    levelValue              = document.querySelector('.level-value'),
    expensesValue           = document.querySelector('.expenses-value'),
    optionalexpensesValue   = document.querySelector('.optionalexpenses-value'),
    incomeValue             = document.querySelector('.income-value'),
    monthsavingsValue       = document.querySelector('.monthsavings-value'),
    yearsavingsValue        = document.querySelector('.yearsavings-value'),
    expensesItem            = document.getElementsByClassName('expenses-item'),
    expensesItemBtn         = document.getElementsByTagName('button')[0],
    optionalexpensesBtn     = document.getElementsByTagName('button')[1],
    countBudgetBtn          = document.getElementsByTagName('button')[2],
    optionalexpensesItem    = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome            = document.querySelector('.choose-income'),
    savings                 = document.querySelector('#savings'),
    chooseSum               = document.querySelector('.choose-sum'),
    choosePercent           = document.querySelector('.choose-percent'),
    yearValue               = document.querySelector('.year-value'),
    monthValue              = document.querySelector('.month-value'),
    dayValue                = document.querySelector('.day-value');