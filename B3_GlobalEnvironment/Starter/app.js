function b() {
  var myVar;
  console.log(myVar);
  console.log(this.myVar);
  console.log(this.type);
}
function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
