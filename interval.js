let second = 0;
console.log("1st");
console.log("2nd");
// const intervalId = setInterval(() => {
//   console.log(++second);
//   if (second == 10) {
//     console.log(intervalId);
//     clearInterval(intervalId);
//   }
// }, 500);

const myVar = setTimeout(() => {
  clearTimeout(myVar);
  console.log(10);
}, 5000);
console.log("4rt");
console.log("5th");
