/**
 * Setiap function mempunyai variable environment dan context sendiri-sendiri
 */

function b() {
  var myVar = 7;
  console.log(myVar);
}

function a() {
  var myVar = 5;
  console.log(myVar);
  b();
}

var myVar = 3;
console.log(myVar);
a();
console.log(myVar);