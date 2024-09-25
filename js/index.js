//blog -btn  event handler//
document.getElementById("blog-btn").addEventListener("click", function () {
  console.log("welcome to blog page");
  window.location.href = "./blog.html";
});

//first card//
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
//Second card//

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
  }); //
document
  //Third card//
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
//fourth card//
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

//popup card-1//
document
  .getElementById("first-donate-now-btn")
  .addEventListener("click", function () {
    console.log("popup button clicked");
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("close-popup");
  });
//popup card-2//
document
  .getElementById("second-donate-now-btn")
  .addEventListener("click", function () {
    console.log("popup button clicked");
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("close-popup");
  });
//popup card-3//
document
  .getElementById("third-donate-now-btn")
  .addEventListener("click", function () {
    console.log("popup button clicked");
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("close-popup");
  });
//popup card-4//
document
  .getElementById("fourth-donate-now-btn")
  .addEventListener("click", function () {
    console.log("popup button clicked");
    document.getElementById("popup").classList.remove("hidden");
  });
//donation button//
document
  .getElementById("donation-button")
  .addEventListener("click", function () {
    document.getElementById("card-container-btn").classList.remove("hidden");

    document.getElementById("close-popup").classList.remove("hidden");
  });
