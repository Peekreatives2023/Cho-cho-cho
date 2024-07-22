//console.log (`Hello`);
//console.log (`I like Pizza!`);

//windows.alert (`I like Pizza`);

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

while(running){

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
}*/

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const Images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        Images.push(`img src="diceImages/${value}.png" alt="Dice ${value}">`);

    }

    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = Images.join('');
    

}









    




