/* function doSomething() {
  console.log("3rd");
}
console.log("1st");
console.log("2nd");
const myVar = setTimeout(() => {
  console.log("3rd");
}, 5000);
console.log("4rt");
console.log("5th");
console.log("6th");
 */

for (let i = 0; i <= 20; ++i) {
  i = ++i;
  i = ++i;
  console.log(i);
}
