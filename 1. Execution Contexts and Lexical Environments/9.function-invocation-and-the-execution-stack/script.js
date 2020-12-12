/**
 * Javascript menganut sebuah stack
 * Untuk contoh kasus disini stacknya adalah :
 * 
 * ==================================
 * b()
 * ==================================
 * a()
 * ==================================
 * Global environment
 * ==================================
 * 
 * yang dieksekusi dulu adalah b();
 */

function b() {

}

function a() {
  b();
}

a();
