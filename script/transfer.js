document.getElementById('transfer-btn').addEventListener('click', function () {
    const number = getValueFromInput('transfer-number');
    const amount = getValueFromInput('transfer-amount');
    const pin = getValueFromInput('transfer-pin');
    const currentBalance = getBalance();

    if (number.length !== 11) {
        alert('Invalid Recipient Number! Please enter an 11-digit number.');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Invalid Amount! Please enter a valid number.');
        return;
    }
    if (Number(amount) > currentBalance) {
        alert('Insufficient Balance for this transfer.');
        return;
    }
    if (pin !== '1111') {
        alert('Invalid Pin! Please try again.');
        return;
    }

    const newBalance = currentBalance - Number(amount);
    setBalance(newBalance);

    const time = new Date().toLocaleString();
    alert(`Transfer Successful! \nAmount: $${amount} \nTo: ${number} \nTime: ${time}`);

    const historyContainer = document.getElementById('history-container');
    const div = document.createElement('div');
    div.className = "transaction-card p-5 bg-base-200 rounded-xl shadow-sm";
    div.innerHTML = `
        <p class="font-bold text-red-600">Transfer Money: $${amount}</p>
        <p class="text-sm">To: ${number}</p>
        <p class="text-[10px] text-gray-500">${time}</p>
    `;
    historyContainer.prepend(div);
});