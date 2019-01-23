// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function ninja(weapon) {
  console.log(`I am a ninja and I use a ${weapon}.`);
  debugger;

  function ninjaSkill() {
    console.log(`I am very good with the ${weapon}.`); 
    debugger;
  }
  ninjaSkill();
}

ninja("katana")


// ==== Challenge 2: Create a counter function ====
function createCounter() {
  let counter = 0
  const myFunction = function() {
    counter++
    return counter
  }
  return myFunction
}
const increment = createCounter()

console.log(increment())
console.log(increment())
console.log(increment())





/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
