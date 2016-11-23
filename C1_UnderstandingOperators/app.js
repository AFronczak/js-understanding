// Operator: a special function that is syntactically (written differently)

var a = 3 + 4;

console.log(a);

// how did JS know to log 7? The syntax parser and the rest of the JS engine Identified
// the '+' symbol in the variable a. That '+' sign is an operator, the Addition operator.

// It would be annoying to type out +(3, 4); to do addition. JS and many other languages
// include these operators (like +, -, >, <) to make code simpler to write and more human readable.

// operator precedence and associativity: which gets called first and what order functions ger
// called in (respectively)

var b = 3 + 4 * 5
console.log(b);

// operator precedence says that we will see 23 and not 35(* takes higher precedense than +)

var c = 2, d = 3, e = 4;

c = d = e;

console.log(c);
console.log(d);
console.log(e);

// the log shows 4, why? associativity. The assignment operator associativity is right-to-left.
// simply put, it's as if d = e was resolved to 4, and then so-on with c = d.
