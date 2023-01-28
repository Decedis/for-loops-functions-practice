// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  for (let i = 0; i < array.length; i++) {
    console.log("I: ", i);
    for(let j = 0; j < array.length - i - 1; j++){
        console.log("J: ", j);
      if (array[j] > array[j + 1]) {
          //note: figure this out
          let temp = array[j];
          array[j] = array[j+1];
          array[j + 1] = temp;
      }
    }
}
  return array[0];
}

export function findMaxValueInArray(array) {
  // Your code goes here...
  for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - i - 1; j++){
      if (array[j] > array[j + 1]) {
          //note: figure this out
          let temp = array[j];
          array[j] = array[j+1];
          array[j + 1] = temp;
      }
    }
}
  return array[array.length - 1];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
