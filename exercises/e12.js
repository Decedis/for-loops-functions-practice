
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  let tempArray = [];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].deposits != null) {
      tempArray.push(array[i].deposits);
    }
  }
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray[i].length; j++) {
      if (tempArray[i][j] > 100) {
        newArray.push(tempArray[i][j]);
      }
    }
  }
  return newArray;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
