var d = new Date();
var n = d.getHours();

console.log(n);
if (n == 16) {
  document.getElementById("cookie-status").innerHTML = 'YES!!';
} else if (n == 15) {
  document.getElementById("cookie-status").innerHTML = 'Almost...';
} else if (n == 17) {
  document.getElementById("cookie-status").innerHTML = 'Too late :(';
} else {
  document.getElementById("cookie-status").innerHTML = 'No';
}
