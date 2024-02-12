function getValueById(id) {
    const element = document.getElementById(id);
    let valString;
    if(element.value) {
        valString = element.value;
    }
    else {
        valString = element.innerText;
    }
    const val = parseFloat(valString);
    if(isNaN(val) || val < 0) {
        alert('Please enter a valid number');
        element.value = '';
    }
    else {
        element.value = '';
        return val
    }
}

function setValueById(id, val) {
    const element = document.getElementById(id);
    element.innerText = val;
}