/**
 * Untuk testing ganti a dengan
 * a tercomment -> akan menghasilkan error karena a memang tidak ada
 * a terbentuk tetapi tidak ada value -> akan menghasilkan undefined
 * a terbentuk dan memiliki value -> akan menghasilkan value tersebut (defined)
 */

var a;
console.log(a);

if (a === undefined) {
  console.log("a is undefined!");
} else {
  console.log("a is defined!");
}