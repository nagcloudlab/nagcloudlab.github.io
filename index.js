const number1Ele = document.getElementById("n1");
const number2Ele = document.getElementById("n2");
const operatorEle = document.getElementById("op");
const goBtnEle = document.getElementById("go");
const resultEle = document.getElementById("result");

goBtnEle.addEventListener("click", (e) => {
  const number1 = Number(number1Ele.value);
  const number2 = Number(number2Ele.value);
  const operator = operatorEle.value;
  let result;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 + number2;
      break;
    case "*":
      result = number1 - number2;
      break;
    case "/":
      result = number1 * number2;
      break;
  }
  resultEle.innerText = result;
});
