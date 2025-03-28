let tipDisplay = document.querySelector('.jstip');
let totalDisplay = document.querySelector('.jstotal');
let billInput = document.querySelector('.jsbill');
let percentageInput = document.querySelector('.jspercentage');
let calcButton = document.querySelector('.jsbutton');
let resetButton = document.querySelector('.jsreset')

window.addEventListener('load', () => {
  if (localStorage.getItem("bill")) {
    billInput.value = localStorage.getItem("bill");
  }
  if (localStorage.getItem('percent')) {
    percentageInput.value = localStorage.getItem('percent');
  }
  calculate();
});


function calculate() {
  let bill = parseFloat(billInput.value);
  let percent = parseFloat(percentageInput.value);
  if (isNaN(bill) || isNaN(percent) || bill <= 0 || percent <= 0) {
    tipDisplay.textContent = 0.00;
    totalDisplay.textContent = 0.00;
    return;
  }

  let tip = bill * (percent / 100);
  let displayTip = tip.toFixed(2);
  tipDisplay.textContent = displayTip;
  let total = bill + tip;
  totalDisplay.textContent = total.toFixed(2);
  localStorage.setItem('bill', bill);
  localStorage.setItem('percent', percent);
}

calcButton.addEventListener('click', () => {
  calculate();
});

resetButton.addEventListener('click', function () {
  tipDisplay.textContent = 0;
  totalDisplay.textContent = 0;
  billInput.value = '';
  percentageInput.value = '';
  localStorage.removeItem('bill');
  localStorage.removeItem('percent');
})

