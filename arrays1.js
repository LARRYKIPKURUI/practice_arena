
//Arrays and Objects

// Array Literal
const numbers = [23,34,56,78,77,90];

console.log(numbers)

// Array Constructor
const fruits = new Array ('apple','banana','pineapple')

console.log(fruits.length)

fruits[2] = 'pears'

console.log(fruits) //Arrays are mutable (can change)

const arr = [23,21,45,26,89,46,13];

arr.push(100) //add to end of list
arr.pop()//removes last element

arr.unshift(99) //adds to begining of array
arr.shift()//remove item from begining

arr.reverse() //reverse oder of array

x = arr.includes(26); //check if passed in value is included in the array
x = arr.indexOf(13)// returns the index of passed in value 

console.log(x)


// slice and splice
x = arr.splice(1)