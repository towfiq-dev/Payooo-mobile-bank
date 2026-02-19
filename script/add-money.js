document.getElementById('add-money-btn')
.addEventListener('click', function(){
  
  const bankAccount = getValueFromInput('add-money-bank')
  if(bankAccount == 'Select A Bank'){
    alert('Please Select a Bank')
    return
  }

  const accNo = getValueFromInput('add-money-number')
  if (accNo.length !==11) {
    alert('invalid Acc No')
    return
  }

  const amount = getValueFromInput('add-money-amount')
  const currentBalance = getBalance()
  const newBalance = currentBalance + Number(amount)
  // if(newBalance < 1){
  //   alert('Invalid Amount')
  //   return;
  // }
  const pin = getValueFromInput('add-money-pin')
  if(pin === '1111'){
    alert(`Add Money Succesful from ${bankAccount}
    at ${new Date()}`);
    setBalance(newBalance)
    const history = document.getElementById('history-container')
    const newHistory = document.createElement('div')
    newHistory.innerHTML =`
    <div class="transaction-card p-5 bg-base-200">
        Add Money Succesful from ${bankAccount}, acc-no $(accNo)at ${new Date()}
    </div>
    `
    history.append(newHistory)
  }
  else{
    alert('Invalid Pin')
    return
  }
  })