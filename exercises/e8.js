
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let tempArray = [];
  let newArray = [];
  
    for (let i = 0; i < array.length; i++) {
      tempArray.push(array[i].balance);
    }
    //find max
    let maxVal = tempArray[1];
    for (let i = 0; i < tempArray.length; i++) {
        if(maxVal < tempArray[i + 1]) {
            maxVal = tempArray[i + 1];
        }
    }
    for (let i = 0; i < array.length; i++){
        if(array[i].balance == maxVal){
            array = array[i];
        }
    }
    newArray.push(array);
    return newArray;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
