const btnSave = getElement('btn-save');

const savingAmount = getElement('saving-amount');
const remainingBalance = getElement('remaining-balance');

const savePercent = getIntFromString(getElement('save').value);
const balanceBeforeSave = getIntFromString(balance.innerText);

function btnSaveHandler() {
	const newSavingAmount = (incomeAmount * savePercent) / 100;
	const newRemainingBalance = balanceBeforeSave - newSavingAmount;

	savingAmount.innerText = newSavingAmount;
	remainingBalance.innerText = newRemainingBalance;
}

btnSave.addEventListener('click', (e) => btnSaveHandler(e));

btnSaveHandler();
