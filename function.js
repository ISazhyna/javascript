// var x=prompt('x');
// var y=prompt('y');
// var z=prompt('z');
// function calcD(a, b, c) {
//     var test;
//     test=b*b - 4*a*c;
//     return  alert(test);
// }
// calcD(x,y,z);
//

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }
//
// alert(checkAge(17));
//
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);