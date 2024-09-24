//first card donate
//add money
//-----------------------------------------first card-----------------------------//
document
  .getElementById("first-donate-now-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donationInput = document.getElementById("first-donation-input").value;

    //console.log(donationInput);
    const currentAmount = document.getElementById(
      "first-current-amount"
    ).innerText;

    const userDonation = parseFloat(donationInput);
    const newCurrentAmount = parseFloat(currentAmount);
    //console.log(userDonation);

    //console.log(currentAmount);
    if (isNaN(userDonation)) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const totalDonation = newCurrentAmount + userDonation;
    document.getElementById("first-current-amount").textContent =
      totalDonation + " " + "BDT";

    const globalAmount = document.getElementById("global-amount").value;
    const newglobalAmount = parseFloat(globalAmount) - totalDonation;
    document.getElementById("global-amount").value = newglobalAmount;
    console.log(newglobalAmount);
    document.getElementById("first-donation-input").value = "";
  });
//--------------------------------------------Second card----------------------------------------//

document
  .getElementById("second-donate-now-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donationInput = document.getElementById(
      "second-donation-input"
    ).value;

    //console.log(donationInput);
    const currentAmount = document.getElementById(
      "second-current-amount"
    ).innerText;

    const userDonation = parseFloat(donationInput);
    const newCurrentAmount = parseFloat(currentAmount);
    //console.log(userDonation);

    //console.log(currentAmount);
    if (isNaN(userDonation)) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const totalDonation = newCurrentAmount + userDonation;
    document.getElementById("second-current-amount").textContent =
      totalDonation + " " + "BDT";

    const globalAmount = document.getElementById("global-amount").value;
    const newglobalAmount = parseFloat(globalAmount) - totalDonation;
    document.getElementById("global-amount").value = newglobalAmount;
    console.log(newglobalAmount);
    document.getElementById("second-donation-input").value = "";
  });
//---------------------------------------------Third card-----------------------------------------------//
document
  .getElementById("third-donate-now-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donationInput = document.getElementById("third-donation-input").value;

    //console.log(donationInput);
    const currentAmount = document.getElementById(
      "third-current-amount"
    ).innerText;

    const userDonation = parseFloat(donationInput);
    const newCurrentAmount = parseFloat(currentAmount);
    //console.log(userDonation);

    //console.log(currentAmount);
    if (isNaN(userDonation)) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const totalDonation = newCurrentAmount + userDonation;
    document.getElementById("third-current-amount").textContent =
      totalDonation + " " + "BDT";

    const globalAmount = document.getElementById("global-amount").value;
    const newglobalAmount = parseFloat(globalAmount) - totalDonation;
    document.getElementById("global-amount").value = newglobalAmount;
    console.log(newglobalAmount);
    document.getElementById("third-donation-input").value = "";
  });
//-------------------------------------fourth card---------------------------------------//
document
  .getElementById("fourth-donate-now-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donationInput = document.getElementById(
      "fourth-donation-input"
    ).value;

    //console.log(donationInput);
    const currentAmount = document.getElementById(
      "fourth-current-amount"
    ).innerText;

    const userDonation = parseFloat(donationInput);
    const newCurrentAmount = parseFloat(currentAmount);
    //console.log(userDonation);

    //console.log(currentAmount);
    if (isNaN(userDonation)) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const totalDonation = newCurrentAmount + userDonation;
    document.getElementById("fourth-current-amount").textContent =
      totalDonation + " " + "BDT";

    const globalAmount = document.getElementById("global-amount").value;
    const newglobalAmount = parseFloat(globalAmount) - totalDonation;
    document.getElementById("global-amount").value = newglobalAmount;
    console.log(newglobalAmount);
    document.getElementById("fourth-donation-input").value = "";
  });
