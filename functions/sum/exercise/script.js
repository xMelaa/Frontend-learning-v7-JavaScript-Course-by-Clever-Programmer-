//i made it in vs code because it not working there :(((
/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

/*function add(a, b){
    return a+b;
  }

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  if (b == 0) return "u cannot divide by zero!!!";
  else return a / b;
}

function mul(a, b) {
  return a * b;
}*/

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => {
  if (b == 0) return "u cannot divide by zero!!!";
  else return a / b;
};
const mul = (a, b) => a*b;

console.log("hello from the SUM exercise");
console.log(add(1, 3));
console.log(sub(1, 3));
console.log(div(1, 3));
console.log(div(1, 0));
console.log(mul(1, 3));
/* 
    TODO: create a function that console logs the result of any of the above operations.
  */