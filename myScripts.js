// Get the select element and input element
var holidaySelect = document.getElementById("holidaySelect");
var holidayTime = document.getElementById("holidayTime");

var otherHolidaySelect = document.getElementById("otherHolidaySelect");
var otherHolidayTime = document.getElementById("otherHolidayTime");

var reducedTimeSelect = document.getElementById("reducedTimeSelect");
var reducedTimeGroup = document.getElementById("reducedTimeGroup");
var reducedTime = document.getElementById("reducedTime");

var otherReducedTimeSelect = document.getElementById("otherReducedTimeSelect");
var otherReducedTimeGroup = document.getElementById("otherReducedTimeGroup");
var otherReducedTime = document.getElementById("otherReducedTime");

var carryItemSelect = document.getElementById("carryItemSelect");
var carryItem = document.getElementById("carryItem");

var manualReviewSelect = document.getElementById("manualReviewSelect");
var manualReview = document.getElementById("manualReview");

var xCustomerSelect = document.getElementById("xCustomerSelect");
var xCustomer = document.getElementById("xCustomer");

var feeSelect = document.getElementById("feeSelect");
var fee = document.getElementById("fee");

var restockingFeeSelect = document.getElementById("restockingFeeSelect");
var restockingFee = document.getElementById("restockingFee");

var itemFeeSelect = document.getElementById("itemFeeSelect");
var itemFeeGroup = document.getElementById("itemFeeGroup");
var itemFee = document.getElementById("itemFee");

var shippedItemSelect = document.getElementById("shippedItemSelect");
var shippedItem = document.getElementById("shippedItem");

var vsRefundSelect = document.getElementById("vsRefundSelect");
var vsRefund = document.getElementById("vsRefund");

var gracePeriodSelect = document.getElementById("gracePeriodSelect");
var returnlessItem = document.getElementById("returnlessItem");

var vsRefundSelect = document.getElementById("vsRefundSelect");
var gracePeriod = document.getElementById("gracePeriod");

var newDonateSelect = document.getElementById("newDonateSelect");
var newDonate = document.getElementById("newDonate");

var usedDonateSelect = document.getElementById("usedDonateSelect");
var usedDonate = document.getElementById("usedDonate");

// Listen for changes to the holiday select element
holidaySelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (holidaySelect.value === "yes") {
    holidayTime.hidden = false;
    holidayTime.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    holidayTime.hidden = true;
    holidayTime.value = "";
    holidayTime.required = false;
  }
});

// Listen for changes to the other holiday select element
otherHolidaySelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (otherHolidaySelect.value === "yes") {
    otherHolidayTime.hidden = false;
    otherHolidayTime.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    otherHolidayTime.hidden = true;
    otherHolidayTime.required = false;
    otherHolidayTime.value = "";
  }
});

// Listen for changes to the reduced time select element
reducedTimeSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (reducedTimeSelect.value === "yes") {
    reducedTimeGroup.hidden = false;
    reducedTime.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    reducedTimeGroup.hidden = true;
    reducedTime.required = false;
    reducedTime.value = "";
  }
});

// Listen for changes to the other reduced time select element
otherReducedTimeSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (otherReducedTimeSelect.value === "yes") {
    otherReducedTimeGroup.hidden = false;
    otherReducedTime.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    otherReducedTimeGroup.hidden = true;
    otherReducedTime.required = false;
    otherReducedTime.value = "";
  }
});

// Listen for changes to the carry item select element
carryItemSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (carryItemSelect.value === "yes") {
    carryItem.hidden = false;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    carryItem.hidden = true;
  }
});

// Listen for changes to the manual review select element
manualReviewSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (manualReviewSelect.value === "yes") {
    manualReview.hidden = false;
    manualReview.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    manualReview.hidden = true;
    manualReview.required = false;
    manualReview.value = "";
  }
});

// Listen for changes to the x customer select element
xCustomerSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (xCustomerSelect.value === "yes") {
    xCustomer.hidden = false;
    xCustomer.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    xCustomer.hidden = true;
    xCustomer.required = false;
    xCustomer.value = "";
  }
});

// Listen for changes to the fee select element
feeSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (feeSelect.value === "yes") {
    fee.hidden = false;
    fee.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    fee.hidden = true;
    fee.required = false;
    fee.value = "";
  }
});

// Listen for changes to the restocking fee select element
restockingFeeSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (restockingFeeSelect.value === "yes") {
    restockingFee.hidden = false;
    restockingFee.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    restockingFee.hidden = true;
    restockingFee.required = false;
    restockingFee.value = "";
  }
});

// Listen for changes to the item fee select element
itemFeeSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (itemFeeSelect.value === "yes") {
    itemFeeGroup.hidden = false;
    itemFee.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    itemFeeGroup.hidden = true;
    itemFee.required = false;
    itemFee.value = "";
  }
});

// Listen for changes to the shipped item select element
shippedItemSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (shippedItemSelect.value === "yes") {
    shippedItem.hidden = false;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    shippedItem.hidden = true;
  }
});

// Listen for changes to the vs refund select element
vsRefundSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (vsRefundSelect.value === "yes") {
    vsRefund.hidden = false;
    vsRefund.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    vsRefund.hidden = true;
    vsRefund.required = false;
    vsRefund.value="";
  }
});

// Listen for changes to the return less item select element
returnlessItemSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (returnlessItemSelect.value === "yes") {
    returnlessItem.hidden = false;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    returnlessItem.hidden = true;
  }
});

// Listen for changes to the grace period select element
gracePeriodSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (gracePeriodSelect.value === "yes") {
    gracePeriod.hidden = false;
    gracePeriod.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    gracePeriod.hidden = true;
    gracePeriod.required = false;
    gracePeriod.value="";
  }
});

// Listen for changes to the new donate select element
newDonateSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (newDonateSelect.value === "yes") {
    newDonate.hidden = false;
    newDonate.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    newDonate.hidden = true;
    newDonate.required = false;
    newDonate.value="";
  }
});

// Listen for changes to the used donate select element
usedDonateSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (usedDonateSelect.value === "yes") {
    usedDonate.hidden = false;
    usedDonate.required = true;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    usedDonate.hidden = true;
    usedDonate.required = false;
    usedDonate.value="";
  }
});

// Get the form element
var myForm = document.getElementById("myForm");

// Listen for the form submit event
myForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Get the form data
  var formData = new FormData(myForm);
  // Send the form data to the server using fetch()
  fetch("http://localhost", {
    method: "POST",
    body: formData
  })
  .then(function (response) {
    // Handle the response from the server
    if (response.ok) {
      // If the response is successful, redirect to http://user/icon
      window.location.href = "http://user/icon";
    } else {
      // If the response is not successful, log an error message
      console.error("Error: " + response.status);
    }
  })
  .catch(function (error) {
    // Handle any errors that occur during the fetch request
    console.error(error);
  });

  // Use below code to get test formData in console this will provide formData
  // myForm.addEventListener("submit", function (event) {
  //   // Prevent the default form submission behavior
  //   event.preventDefault();
  
  //   // Get the form data
  //   var formData = new FormData(myForm);
  
  //   // Parse the form data into an object
  //   var formDataObject = {};
  //   formData.forEach(function (value, key) {
  //     console.log(key, value, 'asdf');
  //     formDataObject[key] = value;
  //   });
  
  //   // Do something with the form data object
  //   console.log(formDataObject);
  // });

  
});