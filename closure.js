var currentCount = 1;

function makeCounter() {
    var func;
    func = new Function("", "return currentCount++");  //new Function see in Window scope, and couldn't use CLOSURE
    return func;
}

var counter = makeCounter();
var counter2 = makeCounter();

alert( counter() ); // ?  1
alert( counter() ); // ?  2

alert( counter2() ); // ?  3
alert( counter2() ); // ?  4


// var currentCount = 1;
//
// function makeCounter() {
//     return function() {
//         return currentCount++;   //not found currentCount in outer scope and get it from Window
//     };
// }
//
// var counter = makeCounter();
// var counter2 = makeCounter();
//
// alert( counter() ); // 1
// alert( counter() ); // 2
//
// alert( counter2() ); // 3
// alert( counter2() ); // 4



//
// function makeCounter() {
// var currentCount = 1;
//     return function() {
//         return currentCount++;   //found currentCount in outer scopes
//     };
// }
//
// var counter = makeCounter();
// var counter2 = makeCounter();
//
// alert( counter() ); // 1
// alert( counter() ); // 2
//
// alert( counter2() ); // 1
// alert( counter2() ); // 2