const firstValue = document.getElementById("first_value");
const secondValue = document.getElementById("second_value");

const result = document.getElementById("result");

const errorMessage = document.getElementById("error");

const ok_Btn = document.getElementById("ok");

const elseFun = () => {
  errorMessage.innerText = "Введите числа";
  ok_Btn.style.display = "flex";
  errorMessage.style.display = "flex";
};

const addValues = (operator) => {
  if (firstValue.value !== "" && secondValue.value !== "") {
    const res = +firstValue.value + +secondValue.value;
    result.value = res;
  } else {
    elseFun();
  }
};

ok_Btn.addEventListener("click", () => {
  errorMessage.style.display = "none";
  ok_Btn.style.display = "none";
});

const minusValues = (operator) => {
  if (firstValue.value && secondValue.value) {
    const res = firstValue.value - secondValue.value;
    result.value = res;
  } else {
    elseFun();
  }
};

const divideValues = () => {
  if (secondValue.value == 0) {
    errorMessage.innerText = "на ноль делить нельзя!";
    ok_Btn.style.display = "flex";
    errorMessage.style.display = "flex";
  } else if (firstValue.value && secondValue.value) {
    const res = firstValue.value / secondValue.value;
    result.value = res;
  } else {
    elseFun();
  }
};

const multiplyValues = () => {
  if (firstValue.value && secondValue.value) {
    const res = firstValue.value * secondValue.value;
    result.value = res;
  } else {
    elseFun();
  }
};

const clearInputs = () => {
  firstValue.value = "";
  secondValue.value = "";
  result.value = "";
};

function fff(arg) {}
