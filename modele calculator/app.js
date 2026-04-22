import { add, subtract } from "./utils.js";
import { getHistory, saveHistory } from "./storage.js";

window.onload = function () {

  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const result = document.getElementById("result");
  const historyList = document.getElementById("history");

  const addBtn = document.getElementById("addBtn");
  const subBtn = document.getElementById("subBtn");

  let history = getHistory();

  // Render history
  function renderHistory() {
    historyList.innerHTML = "";

    history.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      historyList.appendChild(li);
    });
  }

  // Save result
  function saveResult(operation, value1, value2, output) {
    const entry = `${value1} ${operation} ${value2} = ${output}`;
    history.push(entry);

    saveHistory(history);
    renderHistory();
  }

  // Add
  addBtn.addEventListener("click", function () {
    if (num1.value === "" || num2.value === "") {
      result.innerText = "Please enter both numbers";
      return;
    }

    const output = add(Number(num1.value), Number(num2.value));
    result.innerText = "Result: " + output;

    saveResult("+", num1.value, num2.value, output);
  });

  // Subtract
  subBtn.addEventListener("click", function () {
    if (num1.value === "" || num2.value === "") {
      result.innerText = "Please enter both numbers";
      return;
    }

    const output = subtract(Number(num1.value), Number(num2.value));
    result.innerText = "Result: " + output;

    saveResult("-", num1.value, num2.value, output);
  });

  renderHistory();
};
