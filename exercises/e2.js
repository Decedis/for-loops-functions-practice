// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

export function getNumbersWithSquareRoots(max) {
  // Your code goes here...
  let newArray = [];
  let comparisonArray = [];
  
  // doing it this way is a lot easier
  // for (let i = 0; i <= max; i++){
  //   if ((Math.sqrt(i) % 1) === 0){
  //     tempArray.push(i);
  //   }
  // }

  for (let i = 0; i <= max; i++){
    comparisonArray.push(i);
  }
  for (let i = 0; i <= comparisonArray.length; i++) {
    if ((comparisonArray[i] * comparisonArray[i]) <= max){
      newArray.push(comparisonArray[i] * comparisonArray[i])
    }
  }
  return newArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
