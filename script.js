let screen = document.querySelector(".screen");

const operator = document.querySelectorAll("button");

// console.log(operator)

const calculate = (operator) => {
  const btnValue = operator.target.value;
  if (btnValue === "=") {
    if (screen.value !== "") screen.value = "=" + eval(screen.value);
  } else if (btnValue === "AC") {
    screen.value = "";
  } else if (btnValue === "C") {
    screen.value = screen.value.substring(0, screen.value.length - 1);
  } else {
    screen.value += btnValue;
  }
};

operator.forEach(function (operator) {
  operator.addEventListener("click", calculate);
});
