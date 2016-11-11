// var sum = 0;
//
// while (true) {
//
//     var value = +prompt("Введите число", '');
//
//     if (!value) break;
//
//     sum += value;
//
// }
// alert( 'Сумма: ' + sum );
//
//
// for (var i = 1; i < 10; i++) {
//
//     if (i % 2 != 0) continue;  //break current iteration
//
//     alert(i);
// }

var num;

do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);

/* мое рещение
var digit = prompt('Введите число больше 100', '');
while (true) {
    if (!digit) {
        alert('Пусто');
        break;
    }
    else {
    if (digit < 100) {
        digit = prompt('Еще Введите число больше 100', '');
    }
    else if (digit >= 100) {
        alert(digit);
        break;
    }
    else break;}

}
*/


/*  мое рещение
var rez = "";
for (var i = 2; i < 20; i++) {

    var res = " ";
    var count = 0;
    for (var j = 2; j < 20; j++) {

        if (i % j == 0)   //остаток от деления =0
        {
            count = count + 1;  //количество делений нацело
            res = i;
        }

    }
    if (count == 1) {
        rez = rez + res + " ";
    }

}
alert(rez);*/



// nextPrime:
//     for (var i = 2; i < 10; i++) {
//
//         for (var j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//
//         alert( i ); // простое
//     }
//


// var i = 0
// while (i < 3)
// {
//
//     alert( "номер " + i + "!" );
//     i++
// }




// метка
// outerr: for (var i = 0; i < 3; i++) {  //метка
//
//     for (var j = 0; j < 3; j++) {
//
//         var input = prompt('Значение в координатах '+i+','+j, '');
//
//         // если отмена ввода или пустая строка -
//         // завершить оба цикла
//         if (!input) break outerr; // (*)
//
//     }
// }
// alert('Готово!');


