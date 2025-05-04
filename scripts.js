const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Validation when values are missing
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  };

  //An invalid division should log an error in the console
  if (divider === "0") {
    console.error("Error: Division by zero is not allowed.");
    result.innerText = "Division not performed. Invalid number provided. Try again";
    return;
  }

  //Providing anything that is not a number should crash the program
  function displayCriticalError() {
    console.error("Error: Invalid input. Please provide numbers only.");

    const criticalError = document.querySelector("[data-error]");
    const errorMessage = document.querySelector(".error-message");

    // Display an error message to the user
    if (criticalError && errorMessage) {
      errorMessage.innerText = "Something critical went wrong. Please reload the page";
      errorMessage.hidden = false;
      criticalError.style.display = "flex";
      criticalError.hidden = false;
    };
  };

  // Check if the inputs are valid numbers
  if (isNaN(dividend) || isNaN(divider)) {
    displayCriticalError();
  };
  
  //Dividing numbers result in a decimal number
  result.innerText = Math.floor(dividend / divider);
  console.log(`Result: ${Math.floor(dividend / divider)}`);

});

// Scenario: Starting program state
