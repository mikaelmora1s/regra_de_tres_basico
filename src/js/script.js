const calculateBtn = document.querySelector("#calculate");
const resultCalc = document.querySelector("#result");

const calculateResult = () => {
  const num1 = parseFloat(document.querySelector("#num1").value);
  const num2 = parseFloat(document.querySelector("#num2").value);
  const num3 = parseFloat(document.querySelector("#num3").value);

  if (!num1 || isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultCalc.textContent =
      "Por favor, preencha todos os campos corretamente.";
    return;
  }

  const result = (num3 * num2) / num1;

  resultCalc.textContent = Number.isInteger(result)
    ? result
    : result.toFixed(2);
};

calculateBtn.addEventListener("click", calculateResult);
