const btnCalculate = getElement('btn-calculate');

const income = getElement('income');
const foodExp = getElement('food');
const rentExp = getElement('rent');
const clothesExp = getElement('clothes');
const totalExpenses = getElement('total-expenses');
const balance = getElement('balance');

function btnCalculateHandler() {
	const incomeAmount = getIntFromString(income.value);
	const foodExpAmount = getIntFromString(foodExp.value);
	const rentExpAmount = getIntFromString(rentExp.value);
	const clothesExpAmount = getIntFromString(clothesExp.value);

	const totalExpAmount = foodExpAmount + rentExpAmount + clothesExpAmount;
	const balanceAmount = incomeAmount - totalExpAmount;

	if (totalExpAmount <= incomeAmount) {
		totalExpenses.innerText = totalExpAmount;
		balance.innerText = balanceAmount;
	} else if (totalExpAmount > incomeAmount) {
		return alert('Your Expense is more than your Income!');
	} else {
		return alert('Please fill up every input field with valid data!');
	}
}

btnCalculate.addEventListener('click', (e) => btnCalculateHandler(e));
