// add money section
const validPin = 1234;
let transactionData = [];
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
    if (addAmount <= 0) {
      alert("amount can not be zero");
      return;
    }
    const addPin = inputValueNumber("add-pin");

    //now get the available id
    const availableBalance = getInnerText("available-balance");
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
    setInnerText(newBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

//   cashout section
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = inputValueNumber("cash-out-amount");
  const availableBalance = getInnerText("available-balance");
  if (amount <= 0 || amount > availableBalance) {
    alert("give a valid number");
    return;
  }
  const totalNewAvailableBalance = availableBalance - amount;

  setInnerText(totalNewAvailableBalance);
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  console.log(transactionData);
});
