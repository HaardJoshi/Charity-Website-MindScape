// Select the donation form element
const donationForm = document.querySelector(".donation-form");

donationForm.addEventListener("submit", (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Flag to track if validation passes
  let isValid = true;

  // ---------- Amount and Frequency Validation ----------

  // Select the checked radio button within the element with class 'donation-amount'
  const donationAmountRadio = document.querySelector(
    '.donation-amount input[type="radio"]:checked'
  );
  // Select the custom amount input element within the element with class 'donation-amount'
  const donationAmountCustom = document.querySelector(
    '.donation-amount input[type="number"]'
  );
  // Select the checked radio button within the element with class 'donation-frequency'
  const donationFrequencyRadio = document.querySelector(
    '.donation-frequency input[type="radio"]:checked'
  );

  // Check if either radio button or custom amount is selected (any amount option)
  const isAmountSelected =
    donationAmountRadio || donationAmountCustom.value !== "";

  // Validate if user selects neither amount nor frequency
  if (!isAmountSelected && !donationFrequencyRadio) {
    isValid = false;
    // Display single alert message for both missing selections
    alert(
      "Please select a donation amount (radio button or enter a custom amount) and a donation frequency to continue."
    );
  } else {
    // Validate if user selects both radio button and custom amount
    if (donationAmountRadio && donationAmountCustom.value !== "") {
      isValid = false;
      // Display alert message for selecting both amount options
      alert(
        "Sorry!! You have selected two donation; Please select either the donation amount or the custom amount. To proceed please reload the page and try again."
      );
    } else {
      // Nested validations if user selects only amount or only frequency
      if (isAmountSelected && !donationFrequencyRadio) {
        isValid = false;
        // Display alert message for missing frequency
        alert("Please select a donation frequency to continue.");
      }
      if (!isAmountSelected && donationFrequencyRadio) {
        isValid = false;
        // Display alert message for missing amount
        alert(
          "Please select a donation amount or enter a custom amount to continue."
        );
      }
    }
  }

  // Submit form if validation passes
  if (isValid) {
    donationForm.submit();
  }
});
// ------ ##################################################
//   Copyright 2024 Hard Joshi. Subject to the MIT license. 
//################################################## ------
