const btnCalculate = getElement('btn-calculate');

const income = getElement('income');
const foodExp = getElement('food');
const rentExp = getElement('rent');
const clothesExp = getElement('clothes');
const totalExpenses = getElement('total-expenses');
const balance = getElement('balance');

const incomeAmount = getIntFromString(income.value);

function btnCalculateHandler() {
	const foodExpAmount = getIntFromString(foodExp.value);
	const rentExpAmount = getIntFromString(rentExp.value);
	const clothesExpAmount = getIntFromString(clothesExp.value);

	const totalExpAmount = foodExpAmount + rentExpAmount + clothesExpAmount;
	const balanceAmount = incomeAmount - totalExpAmount;

	totalExpenses.innerText = totalExpAmount;
	balance.innerText = balanceAmount;
}

btnCalculateHandler();

btnCalculate.addEventListener('click', (e) => btnCalculateHandler(e));
