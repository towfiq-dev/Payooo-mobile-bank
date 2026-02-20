document.getElementById('bonus-btn').addEventListener('click', function() {
    const coupon = getValueFromInput('coupon-code');
    if (coupon === 'PAYOO20') {
        const currentBalance = getBalance();
        setBalance(currentBalance + 100); // ১০০ টাকা বোনাস
        alert('Congrats! You got $100 bonus.');
        
        const history = document.getElementById('history-container');
        const div = document.createElement('div');
        div.className = "transaction-card p-5 bg-green-100 rounded-xl border border-green-500";
        div.innerHTML = `Bonus Received: $100 using code PAYOO20`;
        history.appendChild(div);
    } else {
        alert('Invalid Coupon Code');
    }
});