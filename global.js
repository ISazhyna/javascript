// function makeCounter() {   //функция возвращает не одну функцию, а объект с несколькими методами
//     var currentCount = 1;
//
//     return {               // возвратим объект вместо функции
//         getNext: function() {
//             return currentCount++;
//         },
//
//         set: function(value) {
//             currentCount = value;
//         },
//
//         reset: function() {
//             currentCount = 1;
//         }
//     };
// }
//
// var counter = makeCounter();   //создали новый объект
//
// alert( counter.getNext() ); // 1
// alert( counter.getNext() ); // 2
//
// counter.set(5);
// alert( counter.getNext() );
// counter.reset();
// alert( counter.getNext() );

function sum(a) {

    return function(b) {
        return a + b; // возьмет a из внешнего LexicalEnvironment
    };

}

alert(sum(1)(3));



// function makeCounter() {
//     var currentCount = 1;
//                                         // возвращаемся к функции
//     function counter() {
//         return currentCount++;
//     }
//                                         // ...и добавляем ей методы!
//     counter.set = function(value) {
//         currentCount = value;
//     };
//
//     counter.reset = function() {
//         currentCount = 1;
//     };
//
//     return counter;
// }
//
// var counter = makeCounter();
//
// alert( counter() ); // 1
// alert( counter() ); // 2
//
// counter.set(5);
// alert( counter() );