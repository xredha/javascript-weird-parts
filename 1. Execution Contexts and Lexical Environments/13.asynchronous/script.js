// Long running function

function waitThreeSecond() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log("finished function");
}

function clickHandler() {
  console.log("Click event");
}

// Listen for the click
document.addEventListener('click', clickHandler);
waitThreeSecond();
console.log("Finished execution");

/**
 * Hasil log adalah :
 * js : 6
 * js : 17
 * js : 15
 * Mengapa bisa begitu :
 * karena memang sebenarnya dalam JavaScript asynchronous
 * tidak akan melihat event queue sebelum fungsinya selesai dieksekusi
 */