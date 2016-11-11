function sum(a) {
    var currentSum = a;  //замыкание
    function f(b) {
        currentSum += b;
        return f; // мы возвращаем саму функцию, ничего не вызывая, а есть подвызов f() - рекурсия
    }
    f.toString = function() {  // свойство функции добавляем
        return currentSum;
    };

    return f; // возвращает функцию f


}

alert(sum(1)(2)(4));



exit();



var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
    }
};

ladder.up().up().up().up().up().down().showStep();


// var sum= {
//     sumZ: 0,
//     func:  function (a) {
//         this.sumZ=this.sumZ+ +a;
//         return this;
//     },
//     toString: function () {
//         return +this.sumZ;
//
//     }
// };
//
// alert(sum.func(5).func(67).func(100));



