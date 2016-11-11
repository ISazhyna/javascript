var a = 1;

var obj = {
    b: 2
};

with(obj) {
    var b;
    alert( a + b );
}