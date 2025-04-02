
// Array.prototype.indexOf() is called on an array and takes two arguments: 
  //        the value you are looking for and an optional start position.

    cards.indexOf('jack of clubs'); //=> 1
    cards.indexOf('ace of spades', 2); //=> 3

// Array.prototype.find() allows you to execute more complex searches by passing it a callback function.

  function isOdd(element, index, array) {
    return (element % 2 === 1);
  }

  [4, 6, 8, 10].find(isOdd); //=> undefined, not found
  [4, 5, 8, 10].find(isOdd); //=> 5

  //this can work as well (using one parameter)

  //Array.prototype.filter()
    [1, 2, 3, 4, 5].filter(function (num) {
      return num > 3;
    });
    // => [4, 5]

// map() function
  function map(array, callback) { //map takes a callback function as argument 
    const newArr = [];

    for (const element of array) {
      newArr.push(callback(element)); //push new output to newArr
    }

    return newArr;
  }
  //Example 
  const originalNumbers = [1, 2, 3, 4, 5];

  const squaredNumbers = map(originalNumbers, function (num) {
    return num * num;
  });

  originalNumbers;
  // => [1, 2, 3, 4, 5]

  squaredNumbers;
  // => [1, 4, 9, 16, 25]

// reduce() method
  // reduce() method is used when we want to get some information from each element
  //  in the collection and gather that information into a final summary value.

  function getTotalAmountForProducts(products) {
    let totalPrice = 0;

    for (const product of products) {
      totalPrice += product.price;
    }

    return totalPrice;
  }

  console.log(getTotalAmountForProducts(products)); // LOG: 33.46


























