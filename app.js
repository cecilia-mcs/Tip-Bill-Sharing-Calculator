
const amtBox = document.querySelector('.amtbox');
const amtFigures = document.querySelector('#amtfigures');
const each = document.querySelector('#each');

const calculateBtn = document.querySelector('.calculate-btn');
const resetBtn = document.querySelector('.reset-btn');

calculateBtn.addEventListener('click', function calculate() {

  const billInput = document.querySelector('.bill-input').value;
  const serviceInput = document.querySelector('.service-input').value;
  const shareInput = document.querySelector('.shareppl-input').value;

    
  const bill = parseInt(billInput);

  //the values in serviceInput in HTML starts with 0.10, 0.15, so we need to use parseFloat to convert to integers with decimals. If we use parseInt on this variable, it can only read integers, or whole numbers, not floating numbers.
  const service = parseFloat(serviceInput);
  const numOfPplSharing = parseInt(shareInput);


  //with Number()
  // //checks for 0 and spaces
  // if (bill === 0) {
  //   alert('Insert values');
  // }

  //checks if value has characters including whitespaces, other than $ , . 0-9., OR whether it has 0

  //checks for nothing entered 
  // if (billInput.length == '') {
  //    alert('Insert values');
  // }

  //Below is looking for strings that have white spaces. If there are white spaces, it will trim them, and any strings that are 0.
  // if (billInput.trim().length == 0) {
  //    alert('Insert values');
  // }

  // " " means a space, "" means empty strings or nothing entered
  if (billInput == " " || billInput.length == "" || bill == 0) {
    alert('Insert bill amount');
    amtBox.style.display = 'none';
    each.style.display = 'none';
    
  //below checks if values have characters including whitespaces, other than $ , . 0-9., OR whether it has 0
    } else if (/[^$,\.\d]/.test(numOfPplSharing)) {
    alert('Insert number of people sharing the bill');
    amtBox.style.display = 'none';
    each.style.display = 'none';
  } else if (numOfPplSharing == 0 || numOfPplSharing == 1) {
      each.style.display = 'none';
    } else each.style.display = 'block';

if (bill >= 1 && numOfPplSharing >=0){
    let totalBillTip = (bill * service) + bill;
    let totalBillShared = totalBillTip / numOfPplSharing;
   console.log(totalBillShared);
    amtBox.style.display = 'block';
    amtFigures.innerText = totalBillShared.toFixed(2);
}

});


resetBtn.addEventListener('click', function () {
  amtBox.style.display = 'none';

})









