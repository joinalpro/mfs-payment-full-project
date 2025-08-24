//   toggling features
// add money form
document
  .getElementById("show-add-money")
  .addEventListener("click", function (e) {
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("add-money-form").classList.remove("hidden");
  });
//   cash out form
document
  .getElementById("show-cash-out")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.remove("hidden");
  });
