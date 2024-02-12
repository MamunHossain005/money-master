document.getElementById('btn-calculate').addEventListener('click', ()=> {
    const foodExpenses = getValueById('food-money');    
    const rentExpenses = getValueById('rent-money');
    const clothesExpenses = getValueById('clothes-money');
    const incomeMoney = getValueById('income-money');
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;

    if( foodExpenses > incomeMoney || rentExpenses > incomeMoney || clothesExpenses > incomeMoney || totalExpenses > incomeMoney) {
        alert('Your expenses can not exceed your income!!');
    }
    else if(isNaN(totalExpenses) || isNaN(incomeMoney)){
        alert('Please enter a valid number');
    }
    else {
        setValueById('total-expenses', totalExpenses);
        const balance = incomeMoney - totalExpenses;
        setValueById('balance-money', balance);
    }
});

document.getElementById('btn-save').addEventListener('click', ()=> {
    const balance = getValueById('balance-money');
    const percentage = getValueById('save-percentage');
    const savings = (balance * (percentage / 100)).toFixed(2);
    const remaining = balance - savings;
    if(percentage > 100) {
        alert('Saving percentage can not be greater than 100%!!');
    }
    else if(isNaN(savings) || isNaN(remaining)) {
        alert('Please enter a valid number');
    }
    else {
        setValueById('saving-money', savings);
        setValueById('remaining-money', remaining);
    }
});