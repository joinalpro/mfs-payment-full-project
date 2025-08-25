// add money section
const validPin = 1234;
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // validate the bank account number

    // select the id
    const selectBank = getInputValue("select-bank");
    const accountNumber = document.getElementById("account-number").value;
    // const addAmount = parseFloat(document.getElementById("add-amount").value);
    // const addPin = parseFloat(document.getElementById("add-pin").value);

    const addAmount = inputValueNumber("add-amount");
    const addPin = inputValueNumber("add-pin");

    //now get the available id
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // validate the bank account number
    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }

    if (addPin !== validPin) {
      alert("Please provide valid pin number");
      return;
    }
    const newBalance = availableBalance + addAmount;
    document.getElementById("available-balance").innerText = newBalance;
  });

//   cashout section
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = inputValueNumber("cash-out-amount");
  const availableBalance = parseFloat(
    document.getElementById("available-balance").innerText
  );
  const totalNewAvailableBalance = availableBalance - amount;
  console.log(totalNewAvailableBalance);
  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
});
