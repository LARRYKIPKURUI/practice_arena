//destructuring

const doggie = {
  name: "Buzz",
  breed: "Great Pyrenees",
  furColor: "black and white",
  activityLevel: "sloth-like",
  favoriteFood: "hot dogs",
};

const { name, breed } = doggie; //destructuring assignment.

console.log(`${name},${breed}`);

// Destructuring on Arrays

const dogs = ["Great Pyrenees", "Pug", "Bull Mastiff"];
const [medium, small, giant] = dogs;
console.log(medium, small, giant); // LOG: Great Pyrenees Pug Bull Mastiff


//Destructuring Strings
const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' ');
console.log(title, firstName, lastName); // LOG: Sir Woody BarksALot


// Using split() returns an array  so we can pick and choose what we want to console.log
// const dogsName = 'Sir Woody BarksALot';
// const [title, ,lastName] = dogsName.split(' ');
// console.log(title, lastName); // LOG: Sir BarksALo



//  Using Spread Operator in A function Call 
function add(a, b, c) {
  return a + b + c ;
}
const arr = [1, 2, 3];

add(...arr); // returns 6





document.addEventListener("DOMContentLoaded", function(){
  const basketballPlayer = {
      name: "lebron James",
      team: "LA Lakers",
      position: "Forward",
      height: "6ft 9in", 
      pointPerGame: 27.2
  }
  
  //function a display the stats 
  function displayPlayerStats(player){
     Object.entries(player).forEach(([key,value]) => {
            console.log(`${key} : ${value}`)
     })
  }
  
  displayPlayerStats(basketballPlayer)
  
  // this function tracks my players scores across button clicks 
  function playerScorer(name){
      let points = 0
  
      return function scoreBasket(){
          points += 2
          console.log(`${name} has now scored ${points} points`)
      }
  }
  
  const lebronScore = playerScorer("Lebron James")
  
  // event handling and manipulating the DOM // clicking the game button updates the score 
  // and displays the message 
  function basketBallButton(playerName){
      let message = `${playerName} is ready to Play`
      const playerDiv = document.getElementById("playerInfo")
  
      document.getElementById("gameButton").addEventListener('click', function(){
          console.log(message)
          lebronScore() // update the score 
          playerDiv.innerHTML = `<p> ${playerName} just scored! Check console for the updated score`
      })
  }
  
  // intialize the event listener 
  basketBallButton(basketballPlayer.name)
})








