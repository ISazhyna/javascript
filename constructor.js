// function User(firstName, lastName) {
//     // вспомогательная переменная
//     var phrase = "Привет";
//
//     //  вспомогательная вложенная функция
//     function getFullName() {
//         return firstName + " " + lastName;
//     }
//
//     this.sayHi = function() {
//         alert( phrase + ", " + getFullName() ); // использование
//     };
// }
//
// function Calculator() {
//
//     this.read= function()  {
//         this.a=+prompt("a", "");
//         this.b=+prompt("b", "");
//     };
//
//     this.sum =function () {
//
//         return this.a+ this.b;
//     };
//
//     this.mul= function() {
//
//         return this.a* this.b;
//     }
//
// }
//
// var calculator = new Calculator();
// calculator.read();
//
// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );


// function Accumulator(startingValue) {
//  this.value=+startingValue;
//  this.read=function () {
//      this.num=+prompt("число","");
// return this.value=this.value+this.num;
//  }
//
// }
//
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение


// function Calculator() {
//
//     var methods = {   //методы просто добавляются к внутреннему объекту
//         "-": function(a, b) {
//             return a - b;
//         },
//         "+": function(a, b) {
//             return a + b;
//         }
//     };
//
//     this.calculate = function(str) {
//
//         var split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2]
//
//         if (!methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//
//         return methods[op](+a, +b);
//     };
//
//     this.addMethod = function(name, func) {
//         methods[name]= func;
//     };
// }
//
// var calc = new Calculator;
//
// calc.addMethod("*", function(a, b) {
//     return a * b;
// });
// calc.addMethod("/", function(a, b) {
//     return a / b;
// });
// calc.addMethod("**", function(a, b) {
//     return Math.pow(a, b);
// });
//
// var result = calc.calculate("2 ** 5");
// alert( result ); // 8
//

var methods = {};
 function addMethod(name, parm) {
    methods[name]= parm;
}

function addMethod1(name, parm) {
    methods[name]= parm;
}
addMethod("fgd","dfgdfg");
addMethod("ffghd","fghfgg");
addMethod1("a1","bbmvbmg");
alert(methods.a1);