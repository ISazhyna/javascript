var digit = prompt('Введите число', '');
var result= (digit>0) ? '1':
    (digit<0) ? '-1':
        (digit==0) ? '0': 'else'
alert( result );

exit();



var age = prompt('возраст?', 18);

var message = (age < 3) ? 'Здравствуй, малыш!' :  // тернарный оператор (condition)?true:false;
    (age < 18) ? 'Привет!' :
        (age < 100) ? 'Здравствуйте!' :
            'Какой необычный возраст!';

alert( message );

/*  тоже самое, что и вверху через тернарный оператор
if (age < 3) {
    message = 'Здравствуй, малыш!';
} else if (age < 18) {
    message = 'Привет!';
} else if (age < 100) {
    message = 'Здравствуйте!';
} else {
    message = 'Какой необычный возраст!';
}

    */


var company = prompt('Какая компания создала JavaScript?', '');

if (company == 'Netscape') {
    alert(company);
} else {
    alert('Неправильно');
}

if ("0") {
    alert( 'Привет' );
}


var name = prompt('Каково «официальное» название JavaScript?', '');
if (name=='ECMAScript')
    {
        alert('Верно!');
    }
else {
    alert('Не знаете? «ECMAScript»!');
}

