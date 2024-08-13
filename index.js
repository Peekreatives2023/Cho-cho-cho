//console.log (`Hello`);
// console.log (`I like Pizza!`);

// windows.alert (`I like Pizza`);

//document.getElementById("MyH1").textContent = `Hello`;
//document.getElementById("MyP").textContent = `I like Pizza!`;

/*let x;
x = 100;
console.log (x);

let y = 123

let age = 25;
let price = 10.99;
let cgpa = 4.40

console.log(typeof cgpa);
console.log(`You are ${age} years old`);
console.log(`The price is $${10.99}`);
console.log(`My Cgpa is: ${4.4}`);*/

/*let firstName = 'Oluwapelumi'
let favouriteFood = 'Rice and beans'
let eMail = 'oluwapelumielizabeth201@gmail.com'

console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is ${firstName}`);
console.log(`I love ${favouriteFood} a lot`);
console.log(`My email is ${eMail}`);

let online = true;
console.log(typeof online);
console.log(`Oluwapelumi is online: ${online}`);

let fullName = "Oluwapelumi";
let age = 21;
let student = true;

document.getElementById("P1").textContent = fullName;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = student;

document.getElementById("P1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;*/

//let students = 30;

//students = students + 1
//students = students -1
//students = students * 2
//students = students / 2
//students = students % 1
//students = students ** 2

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;

//students++;
//students--;
//console.log(students);

//let result = 1 + 2 * 3 + 4 ** 2;
//console.log(result);

/*let username;

username = window.prompt("what's your username?");
console.log(username);*/

/*let age = window.prompt("How old are you");
age = Number(age);
age+=1

console.log(age);

let x = "pizza"
let y = "pizza"
let z = "pizza"

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

const PI = 3.142
let radius;
let circumference;

PI = 5.678;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;
console.log(circumference);*/

/*const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    countLabel. textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel. textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    countLabel. textContent = count;
}

console.log(Math.PI);
console.log(Math.E);

let x = 3;
let y = 2;
let z = 1;

let min = Math.min(x, y, z);
console.log(min);

let randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);

const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");
const min = 1;
const max = 6;
let randonNum1;
let randonNum2;
let randonNum3;

myButton.onclick = function(){
    randonNum1 = Math.floor(Math.random() * max) + min;
    randonNum2 = Math.floor(Math.random() * max) + min;
    randonNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randonNum1;
    Label2.textContent = randonNum2;
    Label3.textContent = randonNum3;

    let time = 14;
    if(time , 12){
        console.log("Good morning!");
    }

    else{
        console.log("Good afternoon");
    }

const mycheckbox = document.getElementById("mycheckbox");
const VisaBtn = document.getElementById("VisaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");
const PaypalBtn = document.getElementById("PaypalBtn");
const subresult = document.getElementById("subresult");
const payresult = document.getElementById("payresult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent = `You are subscribed!`;
    }

    else{
        subresult.textContent = `You are NOT subscribed!`;
    }

    if(VisaBtn.checked){
        payresult.textContent = `You are paying with Visa`;
    }

    else if(MasterCardBtn.checked){
        payresult.textContent = `You are paying with MasterCard`;
    }

    else if(PaypalBtn.checked){
        payresult.textContent = `You are paying with Paypal`;
    }

    else{
        payresult.textContent = `You must select a payment type!`;
    }

}

let userName = "Oluwapelumi";

console.log(userName.charAt(3));
console.log(userName.indexOf("p"));
console.log(userName.length);

userName = userName.toUpperCase();
console.log(userName);

userName = userName.toLowerCase();
console.log(userName);


Number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while(running){}

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }

    else if(guess < minNum || guess > maxNum){
        window.alert("please enter a valid number");
    }
    else{
        attempts++;
        if (guess < answer){
            window.alert("TOO LOW! Try again!");
        }

        if (guess > answer){
            window.alert("TOO HIGH! Try again!");
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
    

}


function happyBirthday(){
    console.log("Happy birthday to my brother");
    console.log("Happy birthday to my only brother");
    console.log("Happy birthday to Emmanuel my brother");
    console.log("Happy birthday to my Okanlawon");
}

happyBirthday();


function happyBirthday(username, age){
    console.log("Happy birthday to my brother");
    console.log("Happy birthday to my only brother");
    console.log(`Happy birthday to ${username} my brother`);
    console.log("Happy birthday to my Okanlawon");
    console.log(`You are ${age} years old today`);

}

happyBirthday("Emmanuel", 15);
happyBirthday("Glory", 18);
happyBirthday("Oluwapelumi", 21);

const textbox = document.getElementById("textbox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp;

function convert(){
    if(toFahrenheit.checked){
        result.textContent = "You selected to Fahrenheit";

    }

    else if(toCelsius.checked){
        result.textContent = "You selected to Celsius";

    }

    else{
        result.textContent = "Select a unit";
    }
}


const textbox = document.getElementById("textbox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }

    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    }

    else{
        result.textContent = "Select a unit";
    }
}

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);

    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
    

}

hello(wait);

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("wait");
}


function leave(){
    console.log("leave");
}


function goodbye(){
    console.log("goodbye");
}*/

// const btn = document.getElementById("somebuttton");
// console.log(btn)
// btn.addEventListener("click", () => {console.log("Hello there!")})



/*let numbers = [1, 2, 3, 4, 5];

numbers.forEach(square);
numbers.forEach(triple);
numbers.forEach(double);
numbers.forEach(display);


function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function triple(element, index, array){
    array[index] = element * 3;
}

function double(element, index, array){
    array[index] = element * 2;
}


function display(element){
    console.log(element);
}

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(display);


function upperCase(element, index, array){
    array[index] = element.toupperCase();
}

function display(element){
    console.log(element);
}

maps function

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

function square(element){
    return Math.pow(element, 2)
}

console.log(squares);

const numbers = [1, 2, 3, 4, 5];
const cubes = numbers.map(cube);

function cube(element){
    return Math.pow(element, 3)

}
console.log(cubes);

const students = ["Spongebob", "patrick", "Squidward", "Sandy"];
const studentsupper = students.map(upperCase);

console.log(studentsupper);

function upperCase(element){
    return element.toUpperCase();
}


const students = ["Spongebob", "patrick", "Squidward", "Sandy"];
const studentslower = students.map(lowerCase);

console.log(studentslower);

function lowerCase(element){
    return element.toLowerCase();
}


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
return `${parts[1]}/${parts[2]}/${parts[0]}}`;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNums = numbers.filter(isEven);

console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNums = numbers.filter(isOdd);

console.log(oddNums);

function isOdd(element){
    return element % 2 !== 0;
}


const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);

console.log(adults);

function isAdult(element){
    return element >= 18;
}

const ages = [16, 17, 18, 18, 19, 20, 60];
const children = ages.filter(isChildren);

console.log(children);

function isChildren(element){
    return element < 18;
}


const words = ["apple", "orange", "banana", "coconut", "kiwi", "pomegranate"];
const shortwords = words.filter(getShortwords);

console.log(shortwords);

function getShortwords(element){
    return element.length <=6;
}
    
const words = ["apple", "orange", "banana", "coconut", "kiwi", "pomegranate"];
const longwords = words.filter(getLongwords);

console.log(longwords);

function getLongwords(element){
    return element.length > 6;
}

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total}`);

function sum(accumulator, element){
    return accumulator + element;
}

const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax (accumulator, element){
    return Math.max(accumulator, element);
}

const grades = [75, 50, 90, 80, 65, 95];
const minimum = grades.reduce(getMin);

console.log(minimum);

function getMin (accumulator, element){
    return Math.min(accumulator, element);
}

Function expressions

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);

const numbers = [1, 2, 3, 4, 5, 6];
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
console.log(cubes);

const numbers = [1, 2, 3, 4, 5, 6];
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNums);

const numbers = [1, 2, 3, 4, 5, 6];
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
console.log(oddNums);

const numbers = [1, 2, 3, 4, 5, 6];
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(total);

Arrow functions

const hello = () => console.log("Hello");
hello();

const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years Old`)};

hello ("Elizabeth", 21);

setTimeout(function(){
    console.log("Hello");
}, 3000)

setTimeout( () => console.log("Hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const numbers = [1, 2, 3, 4, 5, 6];
const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);

const numbers = [1, 2, 3, 4, 5, 6];
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const numbers = [1, 2, 3, 4, 5, 6];
const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);

const numbers = [1, 2, 3, 4, 5, 6];
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);

Javascript objects.Arrow

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepant",
    age: 30,
    isEmployed: "true"
    sayHello: function(){console.log("Hi! I am Spongebob!")},
}

person1.sayHello();

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: "false"
    sayHello: function(){console.log("Hi, i am Spongebob!")},
}
person2.sayHello();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

const person1 = {
    name: "Spongebob",
    favFood: "hamburger",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)}
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat();

Constructors

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}
const car1 = new Car("Ford", "Mustang", "2024", "Red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}
const car2 = new Car("Chevrolet", "Camoro", "2025", "blue");

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}
const car1 = new Car("Ford", "Mustang", "2024", "Red");
const car2 = new Car("Chevrolet", "Camoro", "2025", "blue");
const car3 = new Car("Dodge", "Charger", "2026", "Silver");

car1.drive();
car2.drive();

class in javascript

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: $${this.price.toFixed(2)}`)
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Socks", 10.90);
const product3 = new Product("Trousers", 100);

product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);

Static keywords

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();

console.log(User.userCount);

Inheritance Here: eat and sleep are methods.

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = rabbit;

    run(){
        console.log(`This ${this.name} is running`);
    }
}


class Fish extends Animal{
    name = fish;

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = hawk;

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();


Super keywords*/

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.swim(this.swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.fly(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 2, 12);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.name);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();

