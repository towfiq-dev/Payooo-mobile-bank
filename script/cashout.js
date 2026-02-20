document.getElementById('cashout-btn')
 .addEventListener('click', function(){
  const cashoutNumber = getValueFromInput('cashout-number')
  if (cashoutNumber.length !==11 ) {
     alert('ivalid Agent Number')
     return
   }
  
  const cashoutAmount = getValueFromInput('cashout-amount')
  const currentBalance = getBalance()
  
  const newBalance = currentBalance - Number(cashoutAmount)
  
  if(newBalance < 0){
    alert('Invalid Amount')
    return;
  }
  
  const pin = getValueFromInput('cashout-pin')
  if (pin === '1111') {
   alert(`Cashout Succesful to ${cashoutNumber},
    at ${new Date()}`);
    setBalance(newBalance)
    const history = document.getElementById('history-container')
    const newHistory = document.createElement('div')
    newHistory.innerHTML =`
    <div class="transaction-card p-5 bg-base-200">
        Cashout ${cashoutAmount} TK Succesful to ${cashoutNumber}, at ${new Date()}
    </div>
    `
    history.append(newHistory)
   }
   else{
     alert('Invalid Pin')
     return;
   }
  
 })