// learn.javascript.ru/array#подмассив-наибольшей-суммы

function getSums(arr) {
    var result = [];
    if (!arr.length) return result;

    arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });

    return result;
}

alert(getSums([1,2,3,4,5]));

exit;



var arr = ["Почему", "надо", "учить", "JavaScript"];

var fullCopy = arr.slice();

arr[0]="Why";
alert( fullCopy );
alert( arr );
exit();


var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ', 2);

for (var i = 0; i < arr.length; i++) {
    alert( 'Вам сообщение ' + arr[i] );
}


var styles = ["Джаз","Блюз"];
styles.push("Рокнролл");
styles[styles.length-2]="Классика";
styles.unshift("Регги");
styles.unshift("Реп");
alert( styles);


var arr = [5, 4, 3, 8, 0,9,8,15,54,15,100,14,78];
function filterRange(arr, a, b) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]>=a && arr[i]<=b) {
            arr2.push(arr[i]);
        }
        else continue;
    }
    return arr2;
}
var filtered = filterRange(arr, 0, 20);
alert(filtered);

