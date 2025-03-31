
//callback function =>  a function is passed as an argument to
                        // another function 

                        // Used to handle asynchronous operations: //operations that might take a while 
                                // 1.REading a file 
                                // 2. Network Requests 
                                // 3.Interacting with databases


function hello(callback) {
    console.log('Goodbye');
    callback()
}

hello(goodbye)

function goodbye() {
    console.log('goodbye go away')
}

//example

sum(giveResult,5,90)

function sum (callback ,x,y) {
    let result = x + y ;
    callback(result);
}

function giveResult(result) {
    console.log(result)
}


//Arrow functions =>  A concise way to write function expressions good for simple functions
                    // that you use only once (parameters) => some code 


const greet = (greeting) => console.log(`${greeting}`);


greet('Good Morning');

// function playerStats(name) {
//     let stats = gameObject();
//     if (stats.home.players[name]) {
//       return stats.home.players[name];
//     } else if (stats.away.players[name]) {
//       return stats.away.players[name];
//     }
//     return "Player unknown";
//   }
 
 
// console.log(playerStats('Brendan Haywood'));













