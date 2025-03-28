let tipDisplay = document.querySelector('.jstip');
let totalDisplay = document.querySelector('.jstotal');
let billInput = document.querySelector('.jsbill');
let percentageInput = document.querySelector('.jspercentage');
let calcButton = document.querySelector('.jsbutton');
let resetButton = document.querySelector('.jsreset')

calcButton.addEventListener('click', () => {
  let bill = parseFloat(billInput.value);
  let percent = parseFloat(percentageInput.value);
  let tip = bill * (percent / 100);
  let displayTip = tip.toFixed(2);
  tipDisplay.textContent = displayTip;
  let total = bill + tip;
  totalDisplay.textContent = total;
});

resetButton.addEventListener('click', function () {
  tipDisplay.textContent = 0;
  totalDisplay.textContent = 0;
  billInput.value = '';
  percentageInput.value = '';
})

