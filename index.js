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


Super keywords

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

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._height * this._width).toFixed(1)}cm^2`;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

Another example

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0 ){
            this._firstName = newFirstName;
        }

        else{
            console.error("First name must be a non empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0 ){
            this._lastName = newlastName;
        }

        else{
            console.error("Last name must be a non empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0 ){
            this._age = newAge;
        }

        else{
            console.error("Age must be a non negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

Destructuring

Swapping the values of two variables

let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a);
console.log(b);

Swap 2 elements in an Array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); ... is called rest parameter

Assign array elements to variables

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extracolors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extracolors);

Extract values from objects
Create two persons objects

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

using destructuring, we can extract values from this objects

const {firstName, lastName, age, job} = person1
const {firstName, lastName, age, job ="Unemployed"} = person2

Now, display the variables.

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

You can set default values when using destructuring. e.g Set job to be unemployed.

example 5: Destructure in function parameters

function displayPerson({firstName, lastName,age, job ="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person1);
displayPerson(person2);

Nested objects

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Counch St.",
        city: "Bikini Bottom",
        country: "Int. Water",
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address.street);

To look through the property of a nested objects

for(const property in person.address){
    console.log(person.address[property]);
}
/*Our person object has a nested address object inside of it

Another example: Creating a class that utilizes nested objects


class Person {
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);

    }
}
class Address {
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.",  
                                            "Bikini Bottom", 
                                            "Int. waters");
                                            
const person2 = new Person("Patrick", 37, "128 Counch St.",  
                                          "Bikini Bottom", 
                                          "Int. waters");

const person3 = new Person("Squidward", 45, "126 Counch St.",  
                                            "Bikini Bottom", 
                                            "Int. waters");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address.street);

console.log(person2.name);
console.log(person2.age);
console.log(person2.address.city);

console.log(person3.name);
console.log(person3.age);
console.log(person3.address.country);

Array of objects.

const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];
                
To access a property within an array of objects

console.log(fruits[0].name);

To add an Object into an array of objects, use the push method.

fruits.push({name: "grapes", color: "purple", calories: 62});
console.log(fruits);

To remove an Object into an array of objects, use the pop method.

fruits.pop();
console.log(fruits);

splice is used to remove an element at certain indices indicated.

fruits.splice(1, 2);
console.log(fruits);

Use the forEach method to look through the element of the array.
We can use a callback, a function expression or an arrow function here, I used an arrow function.

fruits.forEach(fruits => console.log(fruits));
fruits.forEach(fruits => console.log(fruits.calories));

Map method is used to run each element through a function and return a new array

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);

const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);

filter method will return a new array after using each element and checking the condition
change the color of pineapple to yellow if it's not yellow before, so we can have two yellow fruits.

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

Reduce method will return a single value, in this case an object.
using the ternary operator, is this true?

const maxFruits = fruits.reduce( (max, fruit) => 
                                 fruit.calories > max.calories ?
                                 fruit: max);
console.log(maxFruits);
console.log(maxFruits.calories);

const minFruits = fruits.reduce( (min, fruit) => 
                                 fruit.calories < min.calories ?
                                 fruit: min);
console.log(minFruits);
console.log(minFruits.calories);

Sort method in JS

let fruits = ["apple", "coconut", "pineapple", "banana", "orange"]

fruits.sort();
console.log(fruits);

let numbers = [1, 10, 5, 7, 8, 4, 9, 3, 2, 6]

numbers.sort((a, b) => a - b);
console.log(numbers);

for reverse order
let numbers = [1, 10, 5, 7, 8, 4, 9, 3, 2, 6]

numbers.sort((a, b) => b - a);
console.log(numbers);

sorting objects by given example

const people = [{name: "Sponegbob", age: 30, gpa: 3.0}, 
                {name: "Patrick", age: 37, gpa: 1.5}, 
                {name: "Squidward", age: 51, gpa: 2.5}, 
                {name: "Sandy", age: 27, gpa: 4.0}]

sorting the array of objects by age property
people.sort((a, b) => a.age - b.age);
console.log(people);

for reverse order
people.sort((a, b) => b.age - a.age);
console.log(people);

sorting the array of objects by gpa property
people.sort((a, b) => a.gpa - b.gpa);
console.log(people);

sorting the array of objects by name property

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

for reverse order
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);

shuffling in an Array

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}*/

Date object in js

const date = new Date();
console.log(date);

To create a custom date ...
use this format:

const date = new Date(2024, 0, 1, 2, 3, 4, 5 );
console.log(date);

const date = new Date("2024-01-02T12:00:00Z");
console.log(date);

const date = new Date(1700000000000);
console.log(date);

To extract individual value from the date object

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
console.log(dayOfWeek);

const date = new Date();

date.setFullYear(2025);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date);

You could also compare your dates as well

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("HAPPY NEW YEAR!")
}

Closures in js

function outer(){
    let message = "Hello";
    
    function inner(){
        console.log(message);

    }
    inner();

}
outer();

A closure can maintain the state of a variable, create a counter Program

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

We could use an anonymous function instead of a call back

setTimeout(function(){window.alert("Hello")}, 3000);

We can also use an arrow function

setTimeout(() => window.alert("Hello", 3000));

We can also us ethe clearTimeout(timeoutId) to cancel a timeout before it triggers.

const timeoutId = setTimeout(() => window.alert("Hello", 3000));
clearTimeout(timeoutId);

The html code is in the html file
function startTimer(){
    setTimeout(() => window.alert("Hello"), 9000);
}

Digital clock program

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock, 1000);
To get the clock to update every seconds, do the set interval

Stopwatch program

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;

    }
    
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
    
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000/10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

ES6 module: This is an external file that contains reusable codes that can be imported into other Javascript files. They can contain variables, classes, functions and more.
Create a new file, named Mathutil.js, go to the script tag in html and include "module" them go to the new file created to create reusable codes.
Create a const PI function to get circumference, area and volume. Then prefic each variables with export keywords so it can be exported
Then continue from here

import {PI, getCircumference, getArea, getVolume} from './Mathutil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);

Synchronous code: They are codes that executes line by line consecutively in a sequential manner. They wait for an opeartion to complete.
Asynchronous code: Allows multiple operation to be perc=formed concurrently without waiting. Dosen't block the execution flow and allows the program to continue. It is found in input output operations, (I/O operations)
Network requests, fetching data. Handled with callbacks, promises, Async/Await.

E.g

setTimeout(() => console.log("Task 1"), 6000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

Error object in JS: An error is an object that is created to represent a project taht occurs. Errors occurs often with accepting user input or establishing a connection

Calculator program
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }
}
    ELEMENT SELECTORS.

Get Element By ID
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

Get Element By ClassName
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

To style each fruits, do this with each of the fruit index.
const fruits = document.getElementsByClassName("fruits");
fruits[2].style.backgroundColor = "yellow";

const fruits = document.getElementsByClassName("fruits");
for(let fruit of fruits){
    fruit.style.backgroundColor = "blue";
}
const fruits = document.getElementsByClassName("fruits");

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});

Get Element by TagName
const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

h4Elements[0].style.backgroundColor = "green";

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

h4Elements[1].style.backgroundColor = "orange";

const h4Elements = document.getElementsByTagName("h4");
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "blue";
}

const liElements = document.getElementsByTagName("li");
for(let liElement of liElements){
    liElement.style.backgroundColor = "pink";
}

const h4Elements = document.getElementsByTagName("h4");
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "red";
});

const liElements = document.getElementsByTagName("li");
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "blue";
});

Query selector: This will return the first matching element or null, If you're selecting a class, you have to use a dot in front, but if it's a tag name, you do not need to.


const element = document.querySelector(".fruits");
element.style.backgroundColor = "yellow";

const element = document.querySelector("h4");
element.style.backgroundColor = "red";

QueryselectorAll()

const fruits = document.querySelectorAll(".fruits");
fruits[1].style.backgroundColor = "pink";

const foods = document.querySelectorAll("li");
foods[4].style.backgroundColor = "pink";

const foods = document.querySelectorAll("li");
console.log(foods);

const foods = document.querySelectorAll("li");
foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})

DOM Navigation: This is the process of navigating through the structure of an HTML doc using Js.

First Element Child

const element = document.getElementById("vegetables");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "red";

OR use queryselectorAll(), this will highlight all of the first children of the unordered List.

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "pink";
})

LAST ELEMENT CHILD.
const element = document.getElementById("desserts");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "red";

You can also use queryselectorall() for this.

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "pink";
})

NEXT ELEMENT SIBLINGS
const element = document.getElementById("onions");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "brown";

If i select the id of fruits, it will highlight the unordered list of fruits, same as vegetables and desserts
const element = document.getElementById("vegetables");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "brown";

PREVIOUS ELEMENT SIBLINGS
const element = document.getElementById("orange");
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "brown";

const element = document.getElementById("vegetables");
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "brown";

PARENT ELEMENT: WHATEVER ELEMENT WE Select, WE GET THE PARENT.
const element = document.getElementById("carrots");
const parent = element.parentElement;
parent.style.backgroundColor = "brown";

CHILDREN PROPERTY
const element = document.getElementById("vegetables");
const children = element.children;

This will highlight all the children in the selected Id
Array.from(children).forEach(child => {
    child.style.backgroundColor = "blue";
});

console.log(children);

YOU CAN ALSO ACCESS THIS CHILDREN BY INDEX Number.

const element = document.getElementById("vegetables");
const children = element.children;

children[1].style.backgroundColor = "pink";

ADD AND CHANGE HTML ELEMENTS USING JS, IT INVOLVES THREE STEPS
1. CREATE THE ELEMENT
const newH1 = document.createElement("h1");

2. ADD ATTRIBUTES/PROPERTY
newH1.textContent = "I like pizza!";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

3. APPEND ELEMENT TO DOM
document.body.append(newH1);
/*document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
document.getElementById("box1").prepend(newH1);

TO PUT THE H1 ELEMENT BETWEEN BOX1 AND BOX2
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);

What if they have no Id, we will use queryselectorall to select everything that has the box class.
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[0]);  This will insert the "I like pizza before the firstbox"

4. Remove the html Element.
document.body.removeChild("newH1");

Example 2: ADD AND CHANGE HTML ELEMENTS USING JS, IT INVOLVES THREE STEPS
1. CREATE THE ELEMENT
const newListItem = document.createElement("li");

2. Add attributes/properties.
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";


/*3. Append element to Dom
document.body.append(newListItem);
document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").prepend(newListItem);

To put the newlistitems (coconut) before orange
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

To insert the coconut before the banana
const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem, banana);

To insert the coconut before the banana
const apple = document.getElementById("apple");
document.getElementById("fruits").insertBefore(newListItem, apple);

What if they have no Id, we will use queryselectorall to select
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[0]);

EVENT LISTERNERS
const myBox = document.getElementById("myBox");

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";
}
myBox.addEventListener("click", changeColor);


Another way you can do it, and this example is also for mouseover
const myBox = document.getElementById("myBox");
myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it!";
});

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "CLICK ME";
});

Event listerners: Keydown and Keyup. I didn't complete it

HOW TO HIDE AND SHOW HTML ELEMENTS
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event =>{

    if( myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    }

    else{
        myButton.textContent = "Show";
     }
    
});

NODELIST

let buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

Add html/css proerties
buttons.forEach(button =>{
    button.style.backgroundColor = "green";
    button.textContent += "☺";
})
ADDING click EVENT LISTERNERS
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });

});

MOUSEOVER AND MOUSEOUT EVENT LISTERNER
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "tomato";
    });

});

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "tomato";
    });

});

ADDING AN ELEMENT TO A NODELIST

let buttons = document.querySelectorAll(".myButtons");

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";

Step3
document.body.appendChild(newButton);

REMOVE AN ELEMENT FROM A NODELIST
let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.remove();
    });

});

CLASS LISTS*/

const myButton = document.getElementById("myButton");
//To add a class to an element//
myButton.classList.add("enabled");
//To remove a class to an element//
myButton.classList.remove("enabled");

FOR HOVER,add
const myButton = document.getElementById("myButton");
myButton.addEventListener("mouseover", event =>{
    event.target.classList.add("hover");
});

//To remove the hover class//
//const myButton = document.getElementById("myButton");//
myButton.addEventListener("mouseout", event =>{
    event.target.classList.remove("hover");
});

FOR TOGGLE
const myButton = document.getElementById("myButton");
myButton.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover");
});

//To remove the hover class//
//const myButton = document.getElementById("myButton");//
myButton.addEventListener("mouseout", event =>{
    event.target.classList.toggle("hover");
});

REPLACE(oldClass, newClass)
const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.addEventListener("click", event =>{
    event.target.classList.replace("enabled", "disabled");
});

CONTAINS METHOD: It could return true or false
const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😎";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
    
});
const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");
myH1.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😎";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
    
});

Create a node list

let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button =>{
    button.classList.add("enabled");
});

buttons.forEach(button =>{
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");

    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");

    });
});

buttons.forEach(button =>{
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "😊"
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
        

    });
});

ROCK PAPER SCISSORS GAME

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }

    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper":
                  result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                  break;

            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;

        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN!":
           resultDisplay.classList.add("greenText");
           playerScore++;
           playerScoreDisplay.textContent = playerScore;
           break;
           

        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
           break;
    }


}