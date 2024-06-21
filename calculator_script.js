function appendValue(value) {
	const display = document.getElementById('display');
	display.value += value;
}

function clearDisplay() {
	const display = document.getElementById('display');
	display.value = '';
}

function deleteLast() {
	const display = document.getElementById('display');
    const expression = display.value;
    if (expression.includes('Cannot divide by zero')){
        display.value = '';
    }
    else{
        display.value = display.value.slice(0, -1);
    }
}

function calculateResult() {
	const display = document.getElementById('display');
	try {
		const expression = display.value;
		if (expression.includes('/0')) {
			display.value = 'Cannot divide by zero';
		} else {
			display.value = eval(expression);
		}
	} catch (error) {
		display.value = 'Error';
	}
}
