
// step-1: add event listener to the deposit button
document.getElementById('btn-Withdraw').addEventListener('click', function() {
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the the value inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    const withdrawValue = parseFloat(withdrawAmount);
    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdraw = withdrawTotal.innerText;
    const currentWithdraw = parseFloat(withdraw);
    // step-4: add numbers to set the total deposit
    const updateWIthdrawValue = withdrawValue + currentWithdraw;
     // set the deposit total
    withdrawTotal.innerText = updateWIthdrawValue;
    
    // step-5: get ballance current total
    const balanceTotal = document.getElementById('balance-total');
    const balance = balanceTotal.innerText;
    const currentBalance = parseFloat(balance);
    // step-6: calculate current total balance
    const updateBalanceValue = currentBalance - withdrawValue;

    // set the balance total

    balanceTotal.innerText = updateBalanceValue;
    // step-7: clear the deposit field
    withdrawField.value = '';



})