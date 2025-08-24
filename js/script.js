// login button functionality
document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 1736774322;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumConverted = parseFloat(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumConverted = parseFloat(pinNumberValue);
  if (mobileNumConverted === mobileNumber && pinNumConverted === pinNumber) {
    window.location.href = "./home.html";
  } else {
    alert("check mobile and pin number");
  }
});
