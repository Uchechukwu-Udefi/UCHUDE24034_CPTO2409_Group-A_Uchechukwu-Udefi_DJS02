const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Dividing numbers result in a decimal number
  result.innerText = Math.floor(dividend / divider);
  console.log(`Result: ${Math.floor(dividend / divider)}`);

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

});

// Scenario: Starting program state
