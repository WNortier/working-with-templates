// get a reference to the sms or call radio buttons
var radioButtonOne = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var additionButtonElement = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var currentTotalCallsElement = document.querySelector(".callTotalTwo");
var currentTotalSmsElement = document.querySelector(".smsTotalTwo");
var currentTotalElement = document.querySelector(".totalTwo");
//add an event listener for when the add button is pressed

var radioTotalCost = 0;
var radioSmsTotal = 0;
var radioCallsTotal = 0;
var radioStatus;
    
function submit(){
    additionButtonElement.click();
}

    function radioButtonBillTotal(){
        
        

            // billItemType will be 'call' or 'sms'
            var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
            if (checkedRadioBtn){
            var billItemType = checkedRadioBtn.value
            console.log(billItemType)
            }
            //console.log(billItemType);
            
        // update the correct total
        if (billItemType === "call"){
            radioCallsTotal = 2.75 + radioCallsTotal;
        }

        else if (billItemType === "sms"){
            radioSmsTotal += 0.75;

        }

        radioTotalCost = radioCallsTotal + radioSmsTotal; 
    //console.log(callsTotal)

        //update the totals that is displayed on the screen.
        // currentTotalCallsElement.innerHTML = callsTotal.toFixed(2);
        // currentTotalSmsElement.innerHTML = smsTotal.toFixed(2);
        // totalCost = callsTotal + smsTotal;
        // currentTotalElement.innerHTML = totalCost.toFixed(2);

        // if (Number(currentTotalElement.innerHTML) >= 30) {
        //     currentTotalElement.classList.add("warning");
        
        // }
        // if   (Number(currentTotalElement.innerHTML) >= 50) {
        //     currentTotalElement.classList.add("danger");
        // }

        
    if (radioTotalCost >= 50){
        // adding the danger class will make the text red
       radioStatus = "danger"
    }
    else if (radioTotalCost >= 30){
        radioStatus = "warning"
    }
    console.log(radioStatus)
    factoryTemp.totalsTemplater()

}

additionButtonElement.addEventListener('click', radioButtonBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons

