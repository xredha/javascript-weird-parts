console.log(a);
z();
penjumlahan();

var a = "Hello World"; // Wajib var biar hoisting, sekarang sudah jarang dipake

function z () {
  console.log("Hello World");
}

function b () {
  return 5;
}

function c () {
  return 10;
}

function penjumlahan () {
  let jml = b() + c();
  console.log(jml);
}