document.getElementById('transfer-btn').addEventListener('click', function() {
    const number = getValueFromInput('transfer-number');
    const amount = Number(getValueFromInput('transfer-amount'));
    const pin = getValueFromInput('transfer-pin');
    const currentBalance = getBalance();

    if (number.length === 11 && amount > 0 && amount <= currentBalance && pin === '1111') {
        const newBalance = currentBalance - amount;
        setBalance(newBalance);
        alert('Transfer Successful!');
        
        // Add to history
        const history = document.getElementById('history-container');
        const div = document.createElement('div');
        div.className = "transaction-card p-5 bg-base-200 rounded-xl";
        div.innerHTML = `Transfered $${amount} to ${number} at ${new Date().toLocaleString()}`;
        history.appendChild(div);
    } else {
        alert('Check recipient number, balance or pin!');
    }
});