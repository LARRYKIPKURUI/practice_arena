// Destructive Array Methods
// Destructive methods modify the original array instead of creating a new one.

// Examples
// .push() → Adds elements to the end of the array
// .pop() → Removes the last element of an array
// .shift() → Removes the first element of an array
// .unshift() → Adds elements to the beginning of an array
// .splice() → Adds or removes elements from an array




const fruits = ['apple', 'banana', 'cherry'];

// Using .push() - adds 'orange' to the array
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'cherry', 'orange']

// Using .pop() - removes last element
fruits.pop();
console.log(fruits); // ['apple', 'banana', 'cherry']

// Using .shift() - removes first element
fruits.shift();
console.log(fruits); // ['banana', 'cherry']

// Using .unshift() - adds 'grape' at the beginning
fruits.unshift('grape');
console.log(fruits); // ['grape', 'banana', 'cherry']

// Using .splice() - removing 1 element at index 1
fruits.splice(1, 1); 
console.log(fruits); // ['grape', 'cherry']











