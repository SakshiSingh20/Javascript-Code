//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// Reference (Non primitive)

const heros = ["shaktiman", "naagraj", "doga"];  
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof userEmail);

// Array, Objects, Functions


//+++++++++++++++++++++++++++++++++++

//stack(Primitive), Heap(Non-Primitive)

// let myDogname = "tyson"
// let anothername = myDogname
// anothername = "leo"

// console.log(anothername)
// console.log(myDogname)

// Heap(Non-Primitive)

let userOne = {
    email:"sakshi@google.com",
    Upi : "upi@ynl"
}

let userTwo = userOne
userTwo.email= "sakshark@google.com"

console.log(userOne.email)
console.log(userTwo.email)