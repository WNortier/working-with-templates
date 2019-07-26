function billCalculators(){
    
    smsTotal1 = 0;
    callsTotal1 = 0;
    totalCost1 = 0;
    
    currentCallCost = 0;
    currentSmsCost = 0;
    
    billItemType = "";


    function calculateBillEvent(value){
        // get the text from the textarea in the DOM
        var billItems = value.split(",");
        // call the function that calculate the total
        // display the 
        var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    return billTotal
}

function calculateCalls(value, currentCallCost){

    if (value === "call") {
        callsTotal1 = currentCallCost + callsTotal1
    }
    
    else if (value != "call"){
        currentCallCost = 0;
    }
//     }
//     else if (value != "call") {
//         smsTotal1 = 0 + smsTotal1;
// }
return callsTotal1

}

function calculateSmss(value, currentSmsCost){

if (value === "sms") {
        smsTotal1 = currentSmsCost + smsTotal1;

    }
    else if (value != "sms")
    currentSmsCost = 0;
    // else if (value != "sms") {
    //     callsTotal1 = 0 + callsTotal1;
    // }
    console.log(smsTotal1)
    return smsTotal1
}

function expenseTotal(callsTotal1, smsTotal1){

    totalCost1 = callsTotal1 + smsTotal1
        return totalCost1
}

// function settingsUpdate(){

// }
    

    return {
     calculate: calculateBillEvent,
     call: calculateCalls,
     sms: calculateSmss,
     total: expenseTotal
    //  update: settingsUpdate 
    //  text: textBillEvent,
    //  radio: radioBillEvent
    }
    
}
