//first card donate
//add money

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
      totalDonation + "_" + "BDT";

    const globalAmount = document.getElementById("global-amount").value;
    const newglobalAmount = parseFloat(globalAmount) - totalDonation;
    document.getElementById("global-amount").value = newglobalAmount;
    console.log(newglobalAmount);
  });
