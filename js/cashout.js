//   toggling features
// add money form
document
  .getElementById("show-add-money")
  .addEventListener("click", function (e) {
    handleToggle("add-money-form");
  });
//   cash out form
document
  .getElementById("show-cash-out")
  .addEventListener("click", function (e) {
    handleToggle("cash-out-form");
  });
// transfer money
document
  .getElementById("show-transfer-money")
  .addEventListener("click", function (e) {
    handleToggle("transfer-money-section");
  });

// get bonus
document
  .getElementById("show-get-bonus")
  .addEventListener("click", function (e) {
    handleToggle("get-bonus-section");
  });

// pay bill
document
  .getElementById("show-pay-bill")
  .addEventListener("click", function (e) {
    handleToggle("pay-bill-section");
  });

// transactions
document
  .getElementById("show-transaction")
  .addEventListener("click", function (e) {
    handleToggle("transaction-section");
  });
