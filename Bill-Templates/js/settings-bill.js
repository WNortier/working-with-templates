// get a reference to the sms or call radio buttons
var radioButtonOne = document.querySelectorAll(".billItemTypeWithSettings");

// get refences to all the settings fields
var callCostElem = document.querySelector(".callCostSetting");
var smsCostElem = document.querySelector(".smsCostSetting");
var warningElem = document.querySelector(".warningLevelSetting");
var criticalElem = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
var additionButtonElem = document.querySelector(".callOrSmsAddButton");
//get a reference to the 'Update settings' button
var settingsButtonElem = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.
var callTotalElem = document.querySelector(".callTotalSettings");
var smsTotalElem = document.querySelector(".smsTotalSettings");
var finalTotalElem = document.querySelector(".totalSettings");

var currentCallCost = 0;
var currentSmsCost = 0;
var currentWarning = 0;
var currentCritical = 0;

var totalCost1 = 0;
var smsTotal1 = 0;
var callsTotal1 = 0;

var billItemType = ""

var factoryVariable = billCalculators();

function settingsUpdater() {

    additionButtonElem.disabled = false;

    currentCallCost = Number(callCostElem.value); //5
    currentSmsCost = Number(smsCostElem.value); //0
    currentWarning = Number(warningElem.value); //15
    currentCritical = Number(criticalElem.value); //25
    totalCost1 = Number(callCostElem.value) + Number(smsCostElem.value) //=5


    if (criticalElem.value.length == 0  && warningElem.value.length == 0) {
        return;
    }

    if (finalTotalElem.innerHTML >= currentCritical) {
        // adding the danger class will make the text red
        additionButtonElem.disabled = true;
        finalTotalElem.classList.add("danger");
}
if (finalTotalElem.innerHTML < currentCritical) {
    additionButtonElem.disabled = false;
finalTotalElem.classList.remove("danger");
}

if (finalTotalElem.innerHTML >= currentWarning) {
    finalTotalElem.classList.add("warning");

}
if   (finalTotalElem.innerHTML < currentWarning) {
    finalTotalElem.classList.remove("warning");
}
}

function settingsBillTotal() {

     var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        billItemType = checkedRadioBtn.value
        //console.log(billItemType); 
    }
    if (billItemType === "call"){
    callsTotal1 = factoryVariable.call(billItemType, currentCallCost)
    }
    else if (billItemType === "sms"){
    smsTotal1 = factoryVariable.sms(billItemType, currentSmsCost)
    }

    totalCost1 = factoryVariable.total(callsTotal1, smsTotal1)
 
    callTotalElem.innerHTML = callsTotal1
    smsTotalElem.innerHTML = smsTotal1
      finalTotalElem.innerHTML = totalCost1 

    // callTotalElem.innerHTML = callsTotal1.toFixed(2);
    // smsTotalElem.innerHTML = smsTotal1.toFixed(2);
    //   finalTotalElem.innerHTML = totalCost1.toFixed(2);

    if (totalCost1  >= currentCritical) {
        // adding the danger class will make the text red
        additionButtonElem.disabled = true;
        finalTotalElem.classList.add("danger");
}
if (currentCritical > totalCost1 ) {
    additionButtonElem.disabled = false; 
finalTotalElem.classList.remove("danger");
}

if (totalCost1  >= currentWarning) {
        finalTotalElem.classList.add("warning");

    }

    else if (currentWarning < totalCost1 ) {
        finalTotalElem.classList.remove("warning");
    }
}

settingsButtonElem.addEventListener('click', settingsUpdater);
//add an event listener for when the add button is pressed
additionButtonElem.addEventListener('click', settingsBillTotal);