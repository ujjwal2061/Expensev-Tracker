let totalExpenses=0;
 function addExpenses(){
    const description=document.getElementById('expense-write').value;
    const amount=parseFloat(document.getElementById('expense-amount').value);
    const date=document.getElementById('expense-date').value;
    
    if (description && amount && date){
        totalExpenses += amount;
        const expensesList=document.getElementById('expense');
        const expenseItem=document.createElement('li');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `<span>${description}</span><span>$${amount.toFixed(2)}</span><span>${date}</span>`;
        expensesList.appendChild(expenseItem);

        document.getElementById('total').textContent = totalExpenses.toFixed(2);

        // Clear input fields
        document.getElementById('expense-write').value = '';
        document.getElementById('expense-amount').value = '';
        document.getElementById('expense-date').value = '';

    }

 }