//двойное НЕ используют для преобразования значений к логическому типу


exit();
alert( 1 && alert(2) ); // сработает alert(2), вернет Undefined, и внешний alert вернет Undefined в результате &&
if (-1 || 0) alert( 'первое' );
if (-1 && true) alert( 'второе' );
if (null || -1 && 1) alert( 'третье' );
var age=prompt('Age','');

    if (age>=14 && age<=90)
    {alert (age+' between 14 and 90');}
    else if ( age<=14 || age>=90)
    {alert (age+' beyond 14 and 90');}


alert( null || 2 && 3 || 4 );
alert( 1 && 2); //2
alert( alert(1) || 2 || alert(3) ); //первый аргумент – true,результат => true , остальные значения игнорируются.
alert( !!"строка" );
alert( !!null ); // false

var a=prompt('a','');
var b=prompt('b','');
var result=(+a + +b < 4)? 'Мало':'Много';  //add unar + to transfer string=>digit
alert(result+ (+a+ +b));

/*
second task
*/

var login=prompt('Логин','');
var message= (login == 'Вася')?'Привет':
    (login == 'Директор')?'Здравствуйте':
        (login == '')?'Нет логина': '';
alert (message);

