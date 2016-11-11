function sayHi(who) {

    if (Array.isArray(who)) {
        who.forEach(sayHi);
    } else {
        alert( 'Привет, ' + who );
    }
}

// Вызов с примитивным аргументом
sayHi("Вася"); // Привет, Вася

// Вызов с массивом
sayHi(["Саша", "Петя"]); // Привет, Саша... Петя

// Вызов с вложенными массивами - тоже работает!
sayHi(["Саша", "Петя", ["Маша", "Юля"]]);


function sayHi(who) {

    if (who.forEach) {  // если есть forEach
        who.forEach(sayHi); // предполагаем, что он ведёт себя "как надо"
    } else {
        alert( 'Привет, ' + who );
    }
}