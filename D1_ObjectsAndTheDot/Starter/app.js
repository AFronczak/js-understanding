var person = new Object();

person["firstname"] = "Adam";
person["lastname"] = "Fronczak";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";


// This is NOT considered the best way to create an objet.
