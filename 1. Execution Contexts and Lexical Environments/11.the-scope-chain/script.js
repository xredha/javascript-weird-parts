/**
 * Ketika function b berada di dalam function a
 * Maka function b reference to Outer Lexical Environment a
 * function b physically sitting di dalam a
 * Inilah yang dinamakan scope chain
 */

// function a() {
//   var myVar = 2;
//   function b() {
//     console.log(myVar);
//   }
//   b();
// }

/**
 * Ketika function b berada di dalam global environment
 * Maka function b reference to Outer Lexical Environment ke global execution context
 * function b physically sitting di dalam global execution context
 * Inilah yang dinamakan scope chain
 */

function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

/**
 * Silakan tes dengan buka komen atas / bawah untuk mengetahui perbedaannya
 */

var myVar = 1;
a();
b();