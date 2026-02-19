document.getElementById('cashout-btn')
 .addEventListener('click', function(){
  const cashoutNumber = getValueFromInput('cashout-number')
  if (cashoutNumber.length !==11 ) {
     alert('ivalid Agent Number')
     return
   }
  
  const cashoutAmount = getValueFromInput('cashout-amount')
  const currentBalance = getBalance()
  // const balanceElement = document.getElementById('balance')
  // const balance = balanceElement.innerText
  
  const newBalance = currentBalance - Number(cashoutAmount)
  
  if(newBalance < 0){
    alert('Invalid Amount')
    return;
  }
  
  const pin = getValueFromInput('cashout-pin')
  if (pin === '1111') {
    alert('Cashout Succesfull')
    setBalance(newBalance)
   }
   else{
     alert('Invalid Pin')
     return;
   }

 })

// document.getElementById('cashout-btn')
// .addEventListener('click', function(){
//   const cashoutNumberInput = document.getElementById('cashout-number')
//   const cashoutNumber = cashoutNumberInput.value
//   if (cashoutNumber.length !==11 ) {
//     alert('ivalid Agent Number')
//     return
//   }
//   const cashoutAmountInput = document.getElementById('cashout-amount')
//   const cashoutAmount = cashoutAmountInput.value


//   const balanceElement = document.getElementById('balance')
//   const balance = balanceElement.innerText
//   const newBalance = Number(balance) - Number(cashoutAmount)
//   if(newBalance < 0){
//     alert('Invalid Amount')
//     return;
//   }
  
//   const cashoutPinInput = document.getElementById('cashout-pin')
//   const pin = cashoutPinInput.value
//   if (pin === '1111') {
//     alert('Cashout Succesfull')
//     //console.log(newBalance);
//     balanceElement.innerText = newBalance
//   }
//   else{
//     alert('Invalid Pin')
//     return;
//   }
// })