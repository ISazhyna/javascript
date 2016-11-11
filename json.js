var leader = {
    name: "Василий Иванович",
    age: 35
};
var js=JSON.stringify(leader);
alert(js);

var jscr = JSON.parse(js);

alert(jscr.name);

exit;




var event = {
    title: "Конференция",
    date: "сегодня"
};

var str = JSON.stringify(event);
alert( str ); // {"title":"Конференция","date":"сегодня"}

// Обратное преобразование.
event = JSON.parse(str);

var room = {
    number: 23,
    toJSON: function() {
        return this.number;
    }
};

event = {
    title: "Конференция",
    date: new Date(Date.UTC(2014, 0, 1)),
    room: room
};

alert( JSON.stringify(event) );


var user = {
    name: "Вася",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

var str = JSON.stringify(user, "", 5);

alert( str );



