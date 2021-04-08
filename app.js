
const amtBox = document.querySelector('.amtbox');
const amtFigures = document.querySelector('#amtfigures');
const each = document.querySelector('#each');

const calculateBtn = document.querySelector('.calculate-btn');
const resetBtn = document.querySelector('.reset-btn');

calculateBtn.addEventListener('click', function calculate() {

  const billInput = document.querySelector('.bill-input').value;
  const serviceInput = document.querySelector('.service-input').value;
  const shareInput = document.querySelector('.shareppl-input').value;

    
  const bill = parseFloat(billInput);
  const service = parseFloat(serviceInput);
  const numOfPplSharing = parseFloat(shareInput);

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
    });

  if (/[^\.\d\s]/.test(billInput)) {
    alert('Please insert numerical values only.');
    amtBox.style.display = 'none';
    each.style.display = 'none';
  } else if (billInput.length == "") {
      alert('Empty detected. Please insert numerical values in bill amount.');
      amtBox.style.display = 'none';
      each.style.display = 'none';

    } else if  (bill == 0) {
      alert('Please insert a value that is greater than 1.');
      amtBox.style.display = 'none';
      each.style.display = 'none';
    
    } else if  (billInput == " ") {
      alert('Whitespace detected. Please insert numerical values in bill amount.');
      amtBox.style.display = 'none';
      each.style.display = 'none';
    
    } else if (/[^.\d]/.test(numOfPplSharing)) {
    alert('Insert number of people sharing the bill');
    amtBox.style.display = 'none';
    each.style.display = 'none';
  } else if (numOfPplSharing == 0 || numOfPplSharing == 1) {
      each.style.display = 'none';
    } else each.style.display = 'block';

if (bill >= 1 && numOfPplSharing >=0){
    let totalBillTip = (bill * service) + bill;
    let totalBillShared = totalBillTip / numOfPplSharing;

    amtBox.style.display = 'block';
    amtFigures.innerText = formatter.format(totalBillShared);
}

});

resetBtn.addEventListener('click', function () {
  amtBox.style.display = 'none';

})









