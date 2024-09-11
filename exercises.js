// Full Name: Teimur Terchyyev
// Student ID: 101412670
// Group#: T177C

// // Exercise 1
function greeter(myArray, counter) {
    counter = 0;
    const greetText = "Hello, ";
    for (let index = 0; index < myArray.length; index++) {
        counter++;
        console.log(counter + ": " + greetText + myArray[index]);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2
function capitalizer(input) {

    const [initial, ...rest] = input;
    return initial.toUpperCase() + rest.join('');
}

console.log(capitalizer('fooBar'));
console.log(capitalizer('nodeJs'));

// Exercise 3
const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(capitalizer);

console.log(capitalizedColors);

// Exercise 4
 let values = [1, 60, 34, 30, 20, 5]

const filterLessThan20 = values.filter(value => value < 20);
 console.log(filterLessThan20)

// Exercise 5
let array = [1, 2, 3, 4];
const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {

        console.log("Model: " + this.model + " " +this.year);
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        console.log(this.model + " has a balance of $" + this.balance);
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
car2.details();

const sedan = new Sedan('Volvo SD', 2018, 30000);
sedan.info();