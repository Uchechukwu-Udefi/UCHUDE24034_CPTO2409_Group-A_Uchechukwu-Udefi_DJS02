const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Dividing numbers result in a decimal number
  if (dividend % divider !== 0) {
    result.innerText = "Error: Division results in a decimal number.";
    return;
  };

  //Validation when values are missing
  if (dividend === "" || divider === "") {
    result.innerText = "Error: Please fill in all fields.";
    return;
  };
  console.log(dividend, divider);
  


  result.innerText = dividend / divider;
});

// Scenario: Starting program state
