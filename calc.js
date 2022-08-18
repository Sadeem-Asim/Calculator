const input = document.getElementById("input");
const ans = document.getElementById("ans");
const currentValue = document.getElementById("currentValue");
const clearButton = document.getElementById("clear");
const prevAns = document.getElementById("value");
let result = "";
let previousResults = [];
let ans1;
input.addEventListener("keypress", (event) => {
  let value = event.target.value;
  let key = event.key;
  let lastDigit = previousResults.length - 1;

  if (key && previousResults[lastDigit]) {
    prevAns.innerHTML = `Ans = ${previousResults[lastDigit].toFixed(2)}`;
    ans.innerHTML = null;
  }

  if (value.match(/^\d+/)) {
    if (key == "Enter") {
      ans1 = eval(value);
      previousResults.push(ans1);
      result = ans1.toFixed(2);
      ans.innerHTML = result;
      event.target.value = null;
    }
  }

  if (isNaN(value[0]) && key == "Enter" && previousResults[lastDigit]) {
    let lastResult = previousResults[lastDigit].toString();
    event.target.value = null;
    ans1 = eval(lastResult + value);
    previousResults.push(ans1);
    result = ans1.toFixed(2);
    ans.innerHTML = result;
  }
});

clearButton.addEventListener("click", () => {
  ans.innerHTML = "00";
  result = 0;
  arr = [];
  prevAns.innerHTML = "";
});
