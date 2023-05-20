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

// Listen for changes to the holiday select element
holidaySelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (holidaySelect.value === "yes") {
    holidayTime.hidden = false;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    holidayTime.hidden = true;
    holidayTime.value = "";
  }
});

// Listen for changes to the other holiday select element
otherHolidaySelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (otherHolidaySelect.value === "yes") {
    otherHolidayTime.hidden = false;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    otherHolidayTime.hidden = true;
    otherHolidayTime.value = "";
  }
});

// Listen for changes to the reduced time select element
reducedTimeSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (reducedTimeSelect.value === "yes") {
    reducedTimeGroup.hidden = false;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    reducedTimeGroup.hidden = true;
    reducedTime.value = "";
  }
});

// Listen for changes to the other reduced time select element
otherReducedTimeSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (otherReducedTimeSelect.value === "yes") {
    otherReducedTimeGroup.hidden = false;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    otherReducedTimeGroup.hidden = true;
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
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    manualReview.hidden = true;
    manualReview.value = "";
  }
});

// Listen for changes to the x customer select element
xCustomerSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (xCustomerSelect.value === "yes") {
    xCustomer.hidden = false;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    xCustomer.hidden = true;
    xCustomer.value = "";
  }
});

// Listen for changes to the fee select element
feeSelect.addEventListener("change", function () {
  // If "Yes" is selected, enable and show the input element
  if (feeSelect.value === "yes") {
    fee.hidden = false;
  }
  // If "No" is selected, disable, hide, and delete the value of the input element
  else {
    fee.hidden = true;
    fee.value = "";
  }
});
