// Asynchronous

console.log("1");
console.log("2");
setTimeout(foo, 2000);
console.log("3");
console.log("4");

function foo() {
  console.log("callback function fired");
}
