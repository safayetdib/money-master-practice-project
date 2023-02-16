const btnSave = getElement('btn-save');

const savingAmount = getElement('saving-amount');
const remainingBalance = getElement('remaining-balance');

function btnSaveHandler() {
	const incomeAmount = getIntFromString(income.value);
	const balanceBeforeSave = getIntFromString(balance.innerText);
	const savePercent = getIntFromString(getElement('save').value);

	const newSavingAmount = (incomeAmount * savePercent) / 100;
	const newRemainingBalance = balanceBeforeSave - newSavingAmount;

	if (newSavingAmount <= balanceBeforeSave) {
		savingAmount.innerText = newSavingAmount;
		remainingBalance.innerText = newRemainingBalance;
	} else {
		return alert('Your are trying to save more than your balance!');
	}
}

btnSaveHandler();

btnSave.addEventListener('click', (e) => btnSaveHandler(e));
