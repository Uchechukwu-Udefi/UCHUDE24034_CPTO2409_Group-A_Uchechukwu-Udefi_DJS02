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

  

});

// Scenario: Starting program state
