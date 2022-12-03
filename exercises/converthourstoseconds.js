// Test you code by forking this repl: 
// 👉 https://replit.com/@CleverLance/ConvertHoursToSeconds#solution.js

// Solution 👉 https://www.loom.com/share/3de1aa5d007047ef82652530f04600b1

// Write a function that takes a parameter (hours) and converts
// it to seconds

function howManySeconds(hours) {
  // Your function should return an integer
  // of how many seconds are in the hour
  let minutes = hours * 60;
  let seconds = minutes * 60;

  return seconds;
}

console.log(howManySeconds(1));

//Topics: Variables,functions, Math

