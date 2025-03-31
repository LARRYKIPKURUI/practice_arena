
//FizzBuzz Function 

function fizzBuzz () {
   for (let num = 1; num <=10; num ++) { //loop to give all numbers and increment 
    if (num % 3 === 0 ) { //divisible by 3
        console.log('Fizz');
    } else if (num % 5 === 0 ) { //divisible by 5
        console.log('Buzz');
    } else if (num % 3 === 0 && num % 5 === 0 ) { //divisible by 3 and 5 
        console.log('Buzz');
   } else {
    console.log(num) //handle any other value 
   }
}
}
fizzBuzz();

















