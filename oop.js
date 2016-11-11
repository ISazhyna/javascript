function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.addWater = function(amount) {
        this.setWaterAmount(waterAmount + amount);
    };

    function onReady() {
        alert( 'Кофе готов!' );
    }
    this.getWaterAmount=function () {
        return  waterAmount;

    };

    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };


    this.run = function() {
        setTimeout( onReady(), getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200); // Нельзя залить больше, чем 400
coffeeMachine.run();

coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    alert( 'Готов кофе: ' + amount + 'мл' ); // Готов кофе: 150 мл
});

coffeeMachine.run();