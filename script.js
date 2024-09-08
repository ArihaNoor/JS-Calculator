let screen = document.querySelector(".screen");

const operator = document.querySelectorAll("button");

// console.log(operator)

const calculate = (index) => {
  const btnValue = index.target.value;
  // console.log(btnValue)
  if (btnValue === "=") {
    if (screen.value !== ""){
      let string = "=";
      let num = eval(screen.value)
      screen.value = string.concat(num.toPrecision(3))
      // screen.value = "=" + eval(screen.value)
    }else{
      alert("Expression Missing")
    }
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
