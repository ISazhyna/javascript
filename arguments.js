"use strict";
function sum() {
    var sum1 = 0;

    for (var i = 0; i < arguments.length; i++)
    {
var args=[];  // create new array arg because arguments it's not an array at all
        args[i] = arguments[i];
 sum1=sum1+ args[i];
    }
return alert(sum1);

}

sum(1,2,3);