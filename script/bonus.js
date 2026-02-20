document.getElementById('bonus-btn').addEventListener('click', function () {
    const coupon = getValueFromInput('coupon-code');
    const currentBalance = getBalance();

    if (coupon !== 'PAYOO20') {
        alert('Invalid Coupon Code! Try using PAYOO20');
        return;
    }

    const bonusAmount = 100;
    const newBalance = currentBalance + bonusAmount;
    setBalance(newBalance);

    const time = new Date().toLocaleString();
    alert(`Congratulations! You got a bonus. \nAmount: $${bonusAmount} \nTime: ${time}`);


    const historyContainer = document.getElementById('history-container');
    const div = document.createElement('div');
    div.className = "transaction-card p-5 bg-green-100 border border-green-200 rounded-xl";
    div.innerHTML = `
        <p class="font-bold text-green-700">Bonus Received: $${bonusAmount}</p>
        <p class="text-sm">Coupon: ${coupon}</p>
        <p class="text-[10px] text-gray-500">${time}</p>
    `;
    historyContainer.prepend(div);
    
    document.getElementById('coupon-code').value = '';
});