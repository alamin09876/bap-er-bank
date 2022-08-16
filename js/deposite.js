
// step-1: add event listener to the deposit button
document.getElementById('btn-deposite').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the the value inside the input field
    const depositeField = document.getElementById('deposite-field');
    const depositeAmount = depositeField.value;
    const previouseDeposite = parseFloat(depositeAmount);
    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositeTotal = document.getElementById('deposite-total');
    const deposite = depositeTotal.innerText;
    const currentDeposite = parseFloat(deposite);
    // step-4: add numbers to set the total deposit
    const updateDepositeValue = previouseDeposite + currentDeposite;
     // set the deposit total
    depositeTotal.innerText = updateDepositeValue;

    // step-5: get ballance current total
    const balanceTotal = document.getElementById('balance-total');
    const balance = balanceTotal.innerText;
    const currentBalance = parseFloat(balance);
    // step-6: calculate current total balance
    const updateBalanceValue = currentBalance + previouseDeposite;

    // set the balance total

    balanceTotal.innerText = updateBalanceValue;
    // step-7: clear the deposit field
    depositeField.value = '';

})