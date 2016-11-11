
var f = function sayHi(name) {
    alert( sayHi ); // изнутри функции - видно (выведет код функции)
};
alert(f);




function faktor(n) {
    if (n != 1) {
        return n*faktor(n-1);
    } else {
        return n;
    }
}

alert(faktor(6));

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert( fib(7) );


function pow(x, n) {
    if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}

alert( pow(2, 3) ); // 8/**



// function sumTo(n) {
//
//     if (n > 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
//         return n+sumTo(n-1);
//     } else {
//         return n;
//     }
//
// }
// alert(sumTo(5));
//

function sumTo(n) {
 var result=0;
    for (var i=0; i<=n;i++)
    {
        result=result+i;
    }
return result;
}

alert(sumTo(5));



function sumTo(n) {
    var pr=((1+n)/2)*n;
    return pr;
}

alert(sumTo(5));


