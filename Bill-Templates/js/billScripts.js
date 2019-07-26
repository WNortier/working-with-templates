function factoryTemplater(){

function totalsTemplater() {
    //TEMPLATE SOURCE
    var templateSource = document.querySelector(".totalsTemplate").innerHTML;
    //COMPILER
    var userTemplate = Handlebars.compile(templateSource);
    //QUERYSELECTORS

var insertPoint = document.querySelector(".totalsTemplateInsertPoint")
var insertPointTwo = document.querySelector(".totalsTemplateInsertPointTwo")

//DATA
console.log(textStatus)
var userData = {
    callsTotal: callsTotal.toFixed(2),
    smssTotal: smsTotal.toFixed(2),
    total: totalCost.toFixed(2),
    status: textStatus
  };
  console.log(radioStatus)
  var userDataTwo = {
    callsTotal: radioCallsTotal.toFixed(2),
    smssTotal: radioSmsTotal.toFixed(2),
    total: radioTotalCost.toFixed(2),
    status: radioStatus
  };

    //USE THE TEMPLATE
    var userDataHTML = userTemplate(userData);
    var userDataHTMLTwo = userTemplate(userDataTwo);
    //console.log(userDataHTML)
    //ALLOCATE TEMPLATE
    insertPoint.innerHTML = userDataHTML;
    insertPointTwo.innerHTML = userDataHTMLTwo
}

return { totalsTemplater

}

}






















// document.addEventListener('DOMContentLoaded', function(){
// //TEMPLATE SOURCE
// var templateSource = document.querySelector(".userTemplate").innerHTML;
// //COMPILER
// var userTemplate = Handlebars.compile(templateSource);
// //INSERT LOCATION
// var userDataElem = document.querySelector(".userData");
// //INSERT DATA
// var userData = { users: [
//     {username: "Warwick", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
//     {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
//     {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
//   ]};


// //COMPILE THE TEMPLATE
// var userDataHTML = userTemplate(userData);
// //ALLOCATE TEMPLATE
// userDataElem.innerHTML = userDataHTML;


// });








// var textCallTotal = document.querySelector(".callTotalOne")
// var textSmsTotal = document.querySelector(".smsTotalOne")
// var textTotal = document.querySelector(".totalOne")

// var radioCallTotal = document.querySelector(".callTotalTwo")
// var radioSmsTotal = document.querySelector(".smsTotalTwo")
// var radioTotal = document.querySelector(".totalTwo")