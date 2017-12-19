// Allow the user to enter a number of how many dice to roll, and of what size
// If they want to roll 3 d6 dice, they would enter "3d6", 

let content = document.getElementById('content');
let input = document.getElementById('input');

input.onchange = function() {
  console.log(input.value);
  // to get a random number between 2 numbers look at:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

