// Selecting HTML elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Function to handle button clicks
function handleButtonClick(event) {
  const button = event.target;
  const value = button.textContent;

  if (button.id === 'clear') {
    clearCalculator();
  } else if (button.id === 'delete') {
    deleteLastCharacter();
  } else if (button.id === 'equals') {
    calculateResult();
  } else {
    updateDisplay(value);
  }
}

// Function to clear the calculator
function clearCalculator() {
  display.value = '';
}

// Function to delete the last character
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

// Function to update the display
function updateDisplay(value) {
  if (value === 'C' || value === 'DEL' || value === '=') {
    return;
  }
  display.value += value;
}

// Function to calculate the result
function calculateResult() {
  const expression = display.value;
  try {
    const result = eval(expression);
    display.value = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}

// Adding event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

