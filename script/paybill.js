document.getElementById('pay-bill-btn').addEventListener('click', function() {
    const purpose = document.getElementById('bill-purpose').value;
    const amount = Number(getValueFromInput('bill-amount'));
    const pin = getValueFromInput('bill-pin');
    const currentBalance = getBalance();

    if (purpose !== 'Select Bill Type' && amount > 0 && amount <= currentBalance && pin === '1111') {
        setBalance(currentBalance - amount);
        alert(`${purpose} Bill Payment Successful!`);
        
        const history = document.getElementById('history-container');
        const div = document.createElement('div');
        div.className = "transaction-card p-5 bg-base-200 rounded-xl";
        div.innerHTML = `Paid ${purpose} bill of $${amount} at ${new Date().toLocaleString()}`;
        history.appendChild(div);
    } else {
        alert('Payment Failed! Check inputs or balance.');
    }
});