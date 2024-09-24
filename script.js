// References to the elements
const billAmountInput = document.querySelector('#bill-amount');
const tipPercentInput = document.querySelector('#tip-percent');
const display = document.querySelector('#display');

// Function to calculate the tip
function calculateTip(billAmount, tipPercent) {
    const percent = tipPercent / 100;
    const tipAmount = billAmount * percent;
    return tipAmount;
}

// Function to update the display with the calculated tip
function updateDisplay() {
    // Get the input values as numbers
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercent = parseFloat(tipPercentInput.value);

    // Ensure the inputs are valid numbers
    if (isNaN(billAmount) || isNaN(tipPercent)) {
        display.innerHTML = "Please enter valid numbers for both fields.";
        return;
    }

    // Calculate the tip
    const tipAmount = calculateTip(billAmount, tipPercent);

    // Update the display with the result
    display.innerHTML = `The tip amount is $${tipAmount.toFixed(2)}.`;
}

// Add event listeners to update the display whenever the inputs change
billAmountInput.addEventListener('input', updateDisplay);
tipPercentInput.addEventListener('input', updateDisplay);

// Initial call to display the result with the default values
updateDisplay();
