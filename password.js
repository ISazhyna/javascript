var login = prompt('Логин', '');
console.log(login);
//
// if (login != null) {
//     if (login == 'Админ') {
//
//         var password = prompt('Пароль', '');
//         if (password != null) {
//
//             if (password == 'Чёрный Властелин') {
//                 alert('Добро пожаловать!');
//             }
//             else {
//                 alert('Пароль неверен');
//             }
//         }
//         else {
//             alert('Вход отменён');
//         }
//
//     }
//     else if (login != 'Админ') {
//         alert('Я вас не знаю');
//     }
// }
//
// else {
//     alert('Вход отменён ' +login);
// }


if (login == 'Админ')
{
    alert('Добро пожаловать!');
}

else if (login != 'Админ')
{
    alert('Кто ты?');
}
else {
    alert('Вход отменён ' +login);
}

