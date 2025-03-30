//NOTE - math object 
/*
in js the math object provieds lots of methods to work with numbers.
*/

const PI = Math.PI
//console.log(PI)

//ANCHOR -  rounding to the closest number 
// if above .5 round it up if less .5 then round down 

//console.log(Math.round(PI))
//console.log(Math.round(9.81))

//console.log(Math.floor(PI))
//console.log(Math.ceil(PI))

//console.log(Math.min(-5,3,20,4,5,10)) // -5 , returns the mininum value 
//console.log(Math.max(-5,3,20,4,5,10)) // 20,returns the maximum value 

//const randNum = Math.random()
//console.log(randnum)

// create a random number between 0 and -10 

//const num = Math.floor(Math.random() * 11)
//console.log(num)

//absoulte value 
//console.log(Math.abs(10))

//square root 
//console.log(Math.sqrt(100))

//power
//console.log(Math.pow(3,2))

//ANCHOR - strings 
/* 
strings are texts which are under single or double quote. to delcare a string we need a var name 
assignment operator and the you provide the value
*/

let space = ' '
let firstname = 'daniel'
let lastname = 'juniper'
let job = 'student'
let course = "SDV503"

//string concatenation 
let myfullname = firstname + space + lastname 
//console.log(myfullname)

let newperson = myfullname + '. I am ' + 'student ' + course 
//console.log(newperson)

//template strings 

//console.log(`the sum of 2 and 3 is 5`)
let a = 3 
let b = 4
//console.log(`the sum of ${a} and ${b} is ${a+b}`)

//string methords
/*
everything in java script is an object.
*/

let js = 'javascript'
//console.log(js.length)

let firstletter = js[4]
//console.log(firstletter)

//using bracket notation to locate a letter or somthing 

let lastindex = js.length -1
//console.log(lastindex)
//console.log(js[lastindex])


//ToUpperCase()
//console.log(js.toUpperCase())

//toLowerCase
//console.log(js.toLowerCase())

//subsrt() : it takes two arguments the  string index and the number of char to slice 
//console.log(js.substr(4,6))

//the split method 
let potato ='SDV503 with javaScript'
//console.log(potato.split())
//console.log(myfullname.split(' '))

//the trim() method 
let name = 'juniper   daniel '
//console.log(name.trim())


//this line includes method 
//console.log(potato.includes('days'))

//the replace() method 

//console.log(potato.replace('javaScript','TypeScript'))

//let anotherworld = 'TypeScript'
//console.log(anotherworld.replace('type','java'))

// the charAt() method 
//console.log(anotherworld.charAt(1))

//the charcodeAt() method  
//console.log(anotherworld.charCodeAt(1))

//the index of() method 
//console.log(anotherworld.indexOf('S')) // Type Script 

//the lastindexof() method 
//console.log(anotherworld.lastIndexOf('JavaScript'))

//the conctac() method 
//console.log(anotherworld.concat('JavaScript', 'c#','C++'))

//the startswith() method 
//console.log(potato.startsWith('sdv503'))

//the endswith() method 
//console.log(potato.endsWith('javascript'))
//let test = 'learning HTML. css and javascript in Web504 and learnign javascript in SDV503'

//the search() method 
//console.log(test.search('learning'))

//the search() method 
// console.log(test.search('learning'))

//ANCHOR - javaScript Arithmetich operator 

let numOne = 4 
let numTwo =3 
let sum = numOne + numTwo 
let diff = numOne - numTwo
let mult = numOne * numTwo 
let div = numOne % numTwo 

console.log(sum , diff, mult, div)

//logical  operators 

const checkAND = 4 > 3 && 10 > 5
console.log(checkAND)
const checkOR = 4 > 3 || 10 > 5 
console.log(checkOR)
