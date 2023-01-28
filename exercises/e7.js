// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  let tempArray = [];
  let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].balance != 0){
            tempArray.push(array[i].balance);
        }
    }
    let lowestVal = Math.min(...tempArray);
    for (let i = 0; i < array.length; i++){
        if(array[i].balance == lowestVal){
            array = array[i];
        }
    }
    newArray.push(array);
    return newArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
