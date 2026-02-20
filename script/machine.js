function getValueFromInput(id) {
  const input = document.getElementById(id)
  const value = input.value
  console.log(id, value);
  
  return value;
}

function getBalance() {
  const balanceElement = document.getElementById('balance')
  const balance = balanceElement.innerText
  console.log(Number(balance));
  return Number(balance)
}

function setBalance(value){
  const balanceElement = document.getElementById('balance')
  balanceElement.innerText = value
}

function showOnly(id) {
  const sections = ['add-money', 'cashout', 'history', 'transfer-money', 'get-bonus', 'pay-bill'];
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) section.classList.add('hidden');
  });

  document.getElementById(id).classList.remove('hidden');
}