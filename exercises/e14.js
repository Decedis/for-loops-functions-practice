
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBalance = [];
  let depositSum = 0;
  let withdrawalSum = 0;

  for (let i = 0; i < array.length; i++) {
    if ((array[i].deposits != null) && (array[i].withdrawals != null)) {
      for (let j = 0; j < array[i].deposits.length; j++) {
        depositSum += array[i].deposits[j];
      }
      for (let j = 0; j < array[i].withdrawals.length; j++) {
        withdrawalSum += array[i].withdrawals[j];
      }
      if ((depositSum - withdrawalSum) != array[i].balance) {
        wrongBalance.push(array[i]);
      }
      depositSum = 0;
      withdrawalSum = 0;
    }
  }
  return wrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
