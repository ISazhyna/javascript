// function Machine() {
//     var enabled = false;
//
//     this.enable = function() {
//         enabled = true;
//     };
//
//     this.disable = function() {
//         enabled = false;
//     };
// }
//
// function CoffeeMachine(power) {
//     Machine.call(this); // отнаследовать
//
//     var waterAmount = 0;
//
//     this.setWaterAmount = function(amount) {
//         waterAmount = amount;
//     };
//
// }
//
// var coffeeMachine = new CoffeeMachine(10000);
//
// coffeeMachine.enable();
// coffeeMachine.setWaterAmount(100);
// coffeeMachine.disable();
//


function Machine(power) {
    this._power = power;
    this._enabled = false; // вместо var enabled

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);
    // Machine.call(this);
    // this.enable();

    alert( this._enabled );
    alert( this._power );
}

var coffeeMachine = new CoffeeMachine(10000);