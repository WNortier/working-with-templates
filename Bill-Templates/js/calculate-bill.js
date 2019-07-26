//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringField = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
var factoryVariable = billCalculators();


function calculateBtnClicked(){

    var billTotal = factoryVariable.calculate(billStringField.value)
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    if (billTotalElement.innerHTML >= 20) {
        billTotalElement.classList.add("warning");
    
    }
    if   (billTotalElement.innerHTML >= 30) {
        billTotalElement.classList.add("danger");
    }

}
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
// add event listener

    // logic goes here
    calculateBtn.addEventListener('click', calculateBtnClicked);

