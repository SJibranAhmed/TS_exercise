"use strict";
let pizzas = ['fajita', 'tikka', 'pepperoni'];
for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i] == 'fajita') {
        console.log(`${pizzas[i]} pizza is so tasty...`);
    }
    else if (pizzas[i] == 'tikka') {
        console.log(`${pizzas[i]} pizza is so spicy....`);
    }
    else {
        console.log(`${pizzas[i]} pizza i don\'t eat `);
    }
}
