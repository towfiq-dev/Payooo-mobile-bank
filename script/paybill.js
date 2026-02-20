document.getElementById('pay-bill-btn').addEventListener('click', function () {
    const purpose = document.getElementById('bill-purpose').value;
    const accNo = getValueFromInput('bill-acc-number');
    const amount = Number(getValueFromInput('bill-amount'));
    const pin = getValueFromInput('bill-pin');
    const currentBalance = getBalance();
    const dateTime = new Date().toLocaleString();

    if (!purpose || purpose === "Select bank") return alert('Select Bill Type!');
    if (accNo.length < 5) return alert('Invalid Account Number!');
    if (amount <= 0 || amount > currentBalance) return alert('Invalid Amount or Low Balance!');
    if (pin !== '1111') return alert('Wrong Pin!');

    setBalance(currentBalance - amount);

    alert(`Success! \nType: ${purpose} \nAcc: ${accNo} \nAmount: $${amount} \nTime: ${dateTime}`);

    const historyContainer = document.getElementById('history-container');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="flex justify-between items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm mb-3">
            <div>
                <h4 class="font-bold text-gray-800">${purpose} Bill</h4>
                <p class="text-[11px] text-gray-400">${dateTime}</p>
            </div>
            <div class="text-right">
                <p class="font-bold text-red-500">-$${amount}</p>
                <p class="text-[10px] text-gray-500">A/C: ${accNo}</p>
            </div>
        </div>
    `;
    historyContainer.prepend(div);

    ['bill-acc-number', 'bill-amount', 'bill-pin'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('id-name').value = '';
});