greet();


function greet() {
  console.log('hi');
}

// This above function does put a unit in memory and does get hoisted. So it is availible ahead of time

var anonymousGreet = function() {
  console.log('hi');
}
anonymousGreet();

// in ^ function, the variable name gives the function an address in the memory. A function without a given name
// is an anonymous function.


// setting a function to a variable will not hoist the function. So if the function is called syntactically before
// (as in above in the file and not below) it will give an error that 'undefined is not a function'.

// to re-cap, function expressions are not hoisted


function log(a) {
  a();
}

log(function() {
  console.log('hi');
}
);

// function expression passed as a parameter to another function.
// First class functions can be passed around like variables
