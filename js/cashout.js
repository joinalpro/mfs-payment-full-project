// add money form
document
  .getElementById("show-add-money")
  .addEventListener("click", function (e) {
    handleToggle("add-money-form");
    handleButtonToggle("show-add-money");
  });
//   cash out form
document
  .getElementById("show-cash-out")
  .addEventListener("click", function (e) {
    handleToggle("cash-out-form");
    handleButtonToggle("show-cash-out");
  });
// transfer money
document
  .getElementById("show-transfer-money")
  .addEventListener("click", function (e) {
    handleToggle("transfer-money-section");
    handleButtonToggle("show-transfer-money");
  });

// get bonus
document
  .getElementById("show-get-bonus")
  .addEventListener("click", function (e) {
    handleToggle("get-bonus-section");
    handleButtonToggle("show-get-bonus");
  });

// pay bill
document
  .getElementById("show-pay-bill")
  .addEventListener("click", function (e) {
    handleToggle("pay-bill-section");
    handleButtonToggle("show-pay-bill");
  });

// transactions
document
  .getElementById("show-transaction")
  .addEventListener("click", function (e) {
    handleToggle("transaction-section");
    handleButtonToggle("show-transaction");
  });

//   Working on transaction section
document
  .getElementById("show-transaction")
  .addEventListener("click", function () {
    const transacContainer = document.getElementById("transaction-container");
    transacContainer.innerText = "";
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="bg-white rounded-2xl p-4 mt-3">
                <div class="flex items-center gap-1 ">
                    <img
                        class="bg-gray-100 rounded-full p-3"
                        src="./assets/wallet1.png"
                        alt=""
                    />
                    <div>
                        <h4 class="font-bold">${data.name}</h4>
                        <p class="text-[#08080880]">${data.date}</p>
                    </div>
                </div>
          </div>
        `;
      transacContainer.appendChild(div);
    }
  });
