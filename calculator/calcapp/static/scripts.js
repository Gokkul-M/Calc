const display = document.querySelector(".display input"); // Select the input element
const buttons = document.querySelectorAll(".buttons button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
    try {
      output = eval(output.replace("%", "/100")); // Use try-catch for eval
    } catch (error) {
      output = "Error"; // Handle potential errors from eval
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnValue = e.target.dataset.value; // Get button value from dataset
    calculate(btnValue);
  });
});
