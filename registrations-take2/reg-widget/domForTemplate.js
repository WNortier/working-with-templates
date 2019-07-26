{   //DOMCONTENTLOADED FUNCTION
    //window.onload(localStorageRegGeneratorForTemplates())
    //FIELDS
    localStorageForTemplates = {}
    var registrationFieldForTemplates = document.querySelector("#registration_fieldForTemplates");
    //BUTTONS
    var generateButtonForTemplates = document.querySelector("#generate_buttonForTemplates");
    var resetBtnForTemplates = document.querySelector("#resetButtonForTemplates")
    var allBtnForTemplates = document.querySelector("#allButtonForTemplates")
    var ctBtnForTemplates = document.querySelector("#ctButtonForTemplates")
    var ckBtnForTemplates = document.querySelector("#ckButtonForTemplates")
    var cyBtnForTemplates = document.querySelector("#cyButtonForTemplates")
    //var vidBtn = document.querySelector("#vidButton")
    //INNERHTML
    var errorReturnForTemplates = document.querySelector("#error_returnForTemplates");
    var regReturn = document.querySelector("#regPlate");
    var regHouseForTemplates = document.querySelector("#reg_containerForTemplates")
    var counterDisplayerForTemplates = document.querySelector("#regCounterForTemplates");
    // LOCAL STORAGE
    var localStorageExtractionForTemplates = JSON.parse(localStorage.getItem("regsPassedForTemplates"))
    console.log(localStorageExtractionForTemplates)
    //GLOBAL VARIABLES
    var correctInputForTemplates
    var selectedFilterForTemplates;
    var chosenFilterArrayForTemplates;
    var thisSessionsRegistrationsArrayForTemplates;
    var generatorArray = [];

}
//LOCAL STORAGE
if (localStorage['regsPassedForTemplates']) {
    var regListForTemplates = JSON.parse(localStorage.getItem("regsPassedForTemplates"));
} else {
    var regListForTemplates;
}

//FACTORY FUNCTIONS
var regFactoryTwo = registrationFactory(regListForTemplates);
var factoryTemplater = factoryTemplater();

//factoryTemplater.
//REGEX FOR SPACES
document.getElementById("registration_fieldForTemplates").addEventListener('keydown', function (e) {
    const regexer = RegExp('[A-Z0-9]');

    if (!regexer.test(e.key) && e.key !== 'backspace') {
        e.preventDefault();
        errorReturnForTemplates.innerHTML = "Oops - Only uppercase or numbers!"
    }
});

//ONPAGELOAD FUNCTION //BIG EVENT
function localStorageRegGeneratorForTemplates() {
    var thisSessionsRegistrationsForTemplates = localStorageExtractionForTemplates || {}
    console.log(thisSessionsRegistrationsForTemplates)

    counterDisplayerForTemplates.innerHTML = regFactoryTwo.counterValue(thisSessionsRegistrationsForTemplates)



    thisSessionsRegistrationsArrayForTemplates = Object.keys(thisSessionsRegistrationsForTemplates)

    //myVideo()
    if (document.getElementById("regCounterForTemplates").innerHTML == 15) {
        document.querySelector("#registration_fieldForTemplates").setAttribute("disabled", false);
        document.querySelector("#registration_fieldForTemplates").setAttribute("editable", true);
        document.querySelector("#error_returnForTemplates").innerHTML = "Database maximum entries (15) reached! Press reset to clear the database."
        registrationFieldForTemplates.value = "";

    }

    // for (var i = 0; i < thisSessionsRegistrationsArrayForTemplates.length; i++) {
    //     var entry = thisSessionsRegistrationsArrayForTemplates[i];
    //     var newDiv = document.createElement("div");
    //     var newContent = document.createTextNode(entry);
    //     newDiv.appendChild(newContent);
    //     newDiv.setAttribute("id", "regPlate");
    //     newDiv.setAttribute("class", "filterDiv Malmesbury All");
    //     document.getElementById('reg_containerForTemplates').appendChild(newDiv);
    // }
    factoryTemplater.localStorageTemplater();
}



//UTILITY FUNCTIONS
function resetter() {
    document.getElementById("regCounterForTemplates").innerHTML = 0;
    document.querySelector("#registration_fieldForTemplates").disabled = false;
    registrationFieldForTemplates.value = ""
    regHouseForTemplates.innerHTML = ""
    errorReturnForTemplates.innerHTML = ""
    regFactoryTwo.clearTheRegsGeneratedObject();
    localStorage.removeItem('regsPassedForTemplates');
}





//THE ORIGINAL REGISTRATION GENERATOR//
function registrationGenerator() {

    var lengthCheck = registrationFieldForTemplates.value.length
    var lengthAnswer = ""
    if (lengthCheck < 5) {
        lengthAnswer = "less"
    } else {
        lengthAnswer = "greater"
    }

    errorReturnForTemplates.innerHTML = ""
    var checker = registrationFieldForTemplates.value.charAt(0).toUpperCase() + registrationFieldForTemplates.value.charAt(1).toUpperCase() + registrationFieldForTemplates.value.charAt(2)

   
    var evilZero = registrationFieldForTemplates.value.charAt(2)

    if (evilZero == 0 && registrationFieldForTemplates.value.charAt(3) == 1) {

        correctInputForTemplates = registrationFieldForTemplates.value.charAt(0).toUpperCase() + registrationFieldForTemplates.value.charAt(1).toUpperCase() + " " + 0 + (registrationFieldForTemplates.value.slice(3))
    } else if (evilZero == 0 && registrationFieldForTemplates.value.charAt(3) == 2) {
        correctInputForTemplates = registrationFieldForTemplates.value.charAt(0).toUpperCase() + registrationFieldForTemplates.value.charAt(1).toUpperCase() + " " + 0 + (registrationFieldForTemplates.value.slice(3))
    }
    else {
        correctInputForTemplates = registrationFieldForTemplates.value.charAt(0).toUpperCase() + registrationFieldForTemplates.value.charAt(1).toUpperCase() + " " + (registrationFieldForTemplates.value.slice(2))
    }

    // && regFactory.formatter(correctInputForTemplates) == "works"

    if (lengthAnswer == "greater" && regFactoryTwo.addToRegsGeneratedObject(correctInputForTemplates) == true && regFactoryTwo.formatter(correctInputForTemplates) == "works") { 
        
        registrationFieldForTemplates.value = ""
        errorReturnForTemplates.innerHTML = ""
generatorArray.push(correctInputForTemplates)


        // var newDiv = document.createElement("div");
        // var newContent = document.createTextNode(correctInputForTemplates);
        // newDiv.appendChild(newContent);
        // newDiv.setAttribute("id", "regPlate");
        // newDiv.setAttribute("class", "filterDiv Malmesbury All");
        // document.getElementById('reg_containerForTemplates').appendChild(newDiv);
        factoryTemplater.generateTemplater();



        localStorage.setItem('regsPassedForTemplates', JSON.stringify(regFactoryTwo.regsAddedToObject()));

        //UPDATE COUNTER
        counterDisplayerForTemplates.innerHTML = regFactoryTwo.counterValue()
    } else if (lengthAnswer == "greater" && regFactoryTwo.addToRegsGeneratedObject(correctInputForTemplates) == false && regFactoryTwo.formatter(correctInputForTemplates) == "works") {
        errorReturnForTemplates.innerHTML = "Entry already exists!"
    } else {
        errorReturnForTemplates.innerHTML = "Invalid Input! Example: \"CA801\"."
    }

    //MAX AT 25
    {
        if (document.getElementById("regCounterForTemplates").innerHTML == 15) {
            document.querySelector("#registration_fieldForTemplates").setAttribute("disabled", false);
            document.querySelector("#registration_fieldForTemplates").setAttribute("editable", true);
            errorReturnForTemplates.innerHTML = "Database maximum entries (15) reached! Press reset."
            registrationFieldForTemplates.value = "";
        }
    }

}

//FILTERS 
function letsFilterAll() {
    selectedFilterForTemplates = allBtnForTemplates.value
    regHouseForTemplates.innerHTML = ""
    chosenFilterArrayForTemplates = regFactoryTwo.filter(selectedFilterForTemplates)

    factoryTemplater.filterTemplater();

    // for (var i = 0; i < chosenFilterArrayForTemplates.length; i++) {
    //     var entry = chosenFilterArrayForTemplates[i];
    //     var newDiv = document.createElement("div");
    //     var newContent = document.createTextNode(entry.charAt(0).toUpperCase() + entry.charAt(1).toUpperCase() + " " + (entry.slice(2)));
    //     newDiv.appendChild(newContent);
    //     newDiv.setAttribute("id", "regPlate");
    //     newDiv.setAttribute("class", "filterDiv All");
    //     document.getElementById('reg_containerForTemplates').appendChild(newDiv);
    // }
}

function letsFilterCT() {
    selectedFilterForTemplates = ctBtnForTemplates.value
    regHouseForTemplates.innerHTML = ""
    chosenFilterArrayForTemplates = regFactoryTwo.filter(selectedFilterForTemplates)

    
    factoryTemplater.filterTemplater();    
  
    // for (var i = 0; i < chosenFilterArrayForTemplates.length; i++) {
    //     var entry = chosenFilterArrayForTemplates[i];
    //     var newDiv = document.createElement("div");
    //     var newContent = document.createTextNode(entry.charAt(0).toUpperCase() + entry.charAt(1).toUpperCase() + " " + (entry.slice(2)));
    //     newDiv.appendChild(newContent);
    //     newDiv.setAttribute("id", "regPlate");
    //     newDiv.setAttribute("class", "filterDiv All");
    //     document.getElementById('reg_containerForTemplates').appendChild(newDiv);
    // }
}

function letsFilterCK() {
    selectedFilterForTemplates = ckBtnForTemplates.value
    regHouseForTemplates.innerHTML = ""
    
    
    chosenFilterArrayForTemplates = regFactoryTwo.filter(selectedFilterForTemplates)

    factoryTemplater.filterTemplater();  

    // for (var i = 0; i < chosenFilterArrayForTemplates.length; i++) {
    //     var entry = chosenFilterArrayForTemplates[i];
    //     var newDiv = document.createElement("div");
    //     var newContent = document.createTextNode(entry.charAt(0).toUpperCase() + entry.charAt(1).toUpperCase() + " " + (entry.slice(2)));
    //     newDiv.appendChild(newContent);
    //     newDiv.setAttribute("id", "regPlate");
    //     newDiv.setAttribute("class", "filterDiv All");
    //     document.getElementById('reg_containerForTemplates').appendChild(newDiv);
    // }
}

function letsFilterCY() {
    selectedFilterForTemplates = cyBtnForTemplates.value
    regHouseForTemplates.innerHTML = ""



    chosenFilterArrayForTemplates = regFactoryTwo.filter(selectedFilterForTemplates)
    factoryTemplater.filterTemplater();  
    
    // for (var i = 0; i < chosenFilterArrayForTemplates.length; i++) {
    //     var entry = chosenFilterArrayForTemplates[i];
    //     var newDiv = document.createElement("div");
    //     var newContent = document.createTextNode(entry.charAt(0).toUpperCase() + entry.charAt(1).toUpperCase() + " " + (entry.slice(2)));
    //     newDiv.appendChild(newContent);
    //     newDiv.setAttribute("id", "regPlate");
    //     newDiv.setAttribute("class", "filterDiv All");
    //     document.getElementById('reg_containerForTemplates').appendChild(newDiv);
    // }
}

//EVENT LISTENERS
{
    //vidBtn.addEventListener('click', myVideo);
    generateButtonForTemplates.addEventListener('click', registrationGenerator);
    resetBtnForTemplates.addEventListener('click', resetter)
    allBtnForTemplates.addEventListener('click', letsFilterAll);
    ctBtnForTemplates.addEventListener('click', letsFilterCT);
    ckBtnForTemplates.addEventListener('click', letsFilterCK);
    cyBtnForTemplates.addEventListener('click', letsFilterCY);
}









// if (regFactory.addToRegsGeneratedObject(registrationFieldForTemplates.value) == false){
//     errorReturnForTemplates.innerHTML = "already!"
// }
// var z = registrationField.value.split(' ').join('')
// var blanktest = z.slice(2);
//     console.log(blanktest);
// blanktest != "" && registrationField.value.length >= 5 && z.length
// var letters = /^[A-Za-z]+$/;
// if(inputtxt.value.match(letters))
//   {
//    alert("yes");
//   }
// else
//   {
//     alert("no")
//   return false;
//   }

//regFactory.formatter(registrationField.value)


// if (errorReturn.innerHTML == undefined){
//     document.getElementById("#error_return").style.display = "none";
// }
// console.log(registrationField.value)
// console.log(regFactory.formatter(registrationField.value))
//console.log(regFactory.addToRegsGeneratedObject(registrationField.value))






//RESTRICTING FIELD INPUT 
// document.getElementById('registration_field').addEventListener('keydown', function (e) {
//     const regexer = RegExp('[ 0-9A-Z-]');//var re = /^[a-zA-Z]{2}\d{2}$/;    ("^[a-zA-Z]{2}\\d{2}$", "m");
//     if (!regexer.test(e.key) && e.key != 'backspace') {
//       e.preventDefault();
//       errorReturn.innerHTML = "Please use the correct registration number format eg. CA 860-474!"
//     }
//   });

//DOM FUNCTIONS

// function loadjscssfile(filename, filetype) {
//     if (filetype == "css") { //if filename is an external CSS file
//         var fileref = document.createElement("link")
//         fileref.setAttribute("rel", "stylesheet")
//         fileref.setAttribute("type", "text/css")
//         fileref.setAttribute("href", filename)
//     }
//     if (typeof fileref != "undefined")
//         document.getElementsByTagName("body")[0].appendChild(fileref)
// }

// loadjscssfile("background.css", "css")


// function myVideo() {
//     var vid = document.getElementById("myVideo");
//     var textColor = document.getElementsByTagName("p");
//     if (vid.style.display === "none") {
//         vid.style.display = "block";

//     } else {
//         vid.style.display = "none";

//     }
// }