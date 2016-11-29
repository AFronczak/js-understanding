function greet(name) {
  name = name || 'Adam'
  console.log( 'Hello' + name);
}

// JS will not reject using a function without passing an argument
// we can use coercion to our advantage here by using the or operator.
// if name is not entered and resolves to undefined, name will be saved as 'Adam'

greet('Tony');
greet();
