const billInput = document.querySelector('#billTotalInput');
const tipInput = document.querySelector('#tipInput');
const numberOfPeopleDiv = document.querySelector('#numberOfPeople');
const totalPerPerson = document.querySelector('#perPersonTotal');

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);
// ** Calculate the total bill per person **
const calculateBill = () => {  
   const bill = Number(billInput.value); // get bill from user input & convert it into a number
  const tipPercent = Number(tipInput.value) / 100; // get the tip from user & convert it into a percentage (divide by 100)  

  const total = ((tipPercent * bill) + bill) /numberOfPeople; // calculate the total (tip amount + bill) per person
  totalPerPerson.innerText = `$${total.toFixed(2)}`;  // update the perPersonTotal on DOM & show it to user
}

// ** Splits the bill between more people **
const increasePeople = () => {  
  numberOfPeople++; // increment the amount of people
  numberOfPeopleDiv.innerText = numberOfPeople; // update the DOM with the new number of people
  calculateBill(); // calculate the bill based on the new number of people  
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(numberOfPeople<=1) return;
  
  numberOfPeople--; // decrement the amount of people
  numberOfPeopleDiv.innerText = numberOfPeople; // update the DOM with the new number of people
  calculateBill(); // calculate the bill based on the new number of people  
}