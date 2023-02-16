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
	} else if (newSavingAmount > balanceBeforeSave) {
		return alert(
			'Your are trying to save more than your balance! Please calculate expenses again or input valid savings rate against your income.'
		);
	} else {
		return alert('Please input valid savings rate against your income!');
	}
}

// btnSaveHandler();

btnSave.addEventListener('click', (e) => btnSaveHandler(e));
