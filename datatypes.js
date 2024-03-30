//primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

// js is dynamically typed language.
const score = 100
const scoreValue = 100.3
const surname =  "Rushikesh"
const isLoggedIn = false
const temperature = null
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id == anotherId)
console.log(id)
console.log(anotherId)

const bigNumber = 648363463876478555555n



//Reference  (Non Primitive)

// Array, Objects, Functions

const heros = ["ironman", "thor", "loki"]

info = {
    name : "Rushikesh",
    age : 22
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof info)


/***************************************************/

// stack (Primitive), Heap (Non-Primitive)

let myName = "rushikeshshinde"

let anotherName = myName
anotherName = "Shinde"

console.log(anotherName)
console.log(myName)


/*****************************************************/
let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "rushikesh@gmail.com"

console.log(userOne)
console.log(userTwo)