{   //FIELDS
    localStorage = {}
    var registrationField = document.querySelector("#registration_field");
    //BUTTONS
    var generateButton = document.querySelector("#generate_button");
    var resetBtn = document.querySelector("#resetButton")
    var allBtn = document.querySelector("#allButton")
    var ctBtn = document.querySelector("#ctButton")
    var ckBtn = document.querySelector("#ckButton")
    var cyBtn = document.querySelector("#cyButton")
    //var vidBtn = document.querySelector("#vidButton")
    //INNERHTML
    var errorReturn = document.querySelector("#error_return");
    var regReturn = document.querySelector("#regPlate");
    var regHouse = document.querySelector("#reg_container")
    var counterDisplayer = document.querySelector("#regCounter");
    // LOCAL STORAGE
    var localStorageExtraction = JSON.parse(localStorage.getItem("regsPassed"))
    //GLOBAL VARIABLES
    var correctInput
    var selectedFilter;
    var chosenFilterArray;
    var myVar;
    var myVarTwo;
    var counter;
}
//LOCAL STORAGE
if (localStorage['regsPassed']) {
    var regList = JSON.parse(localStorage.getItem("regsPassed"));
} else {
    var regList;
}
//FACTORY FUNCTION
var regFactory = registrationFactory(regList);
//REGEX FOR SPACES
document.getElementById("registration_field").addEventListener('keydown', function (e) {
    const regexer = RegExp('[A-Z0-9]');

    if (!regexer.test(e.key) && e.key !== 'backspace') {
        e.preventDefault();
        errorReturn.innerHTML = "Oops - Only uppercase or numbers!"
    }
});

//ONPAGELOAD FUNCTION //BIG EVENT
function localStorageRegGenerator() {

    var thisSessionsRegistrations = localStorageExtraction || {};
    counterDisplayer.innerHTML = regFactory.counterValue(thisSessionsRegistrations)
    var thisSessionsRegistrationsArray = Object.keys(thisSessionsRegistrations)

    //myVideo()
    if (document.getElementById("regCounter").innerHTML == 15) {
        document.querySelector("#registration_field").setAttribute("disabled", false);
        document.querySelector("#registration_field").setAttribute("editable", true);
        document.querySelector("#error_return").innerHTML = "Database maximum entries (15) reached! Press reset to clear the database."
        registrationField.value = "";

    }


    for (var i = 0; i < thisSessionsRegistrationsArray.length; i++) {
        var entry = thisSessionsRegistrationsArray[i];
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(entry);
        newDiv.appendChild(newContent);
        newDiv.setAttribute("id", "regPlate");
        newDiv.setAttribute("class", "filterDiv Malmesbury All");
        document.getElementById('reg_container').appendChild(newDiv);
    }

}



//UTILITY FUNCTIONS


function resetter() {
    document.getElementById("regCounter").innerHTML = 0;
    document.querySelector("#registration_field").disabled = false;
    registrationField.value = ""
    regHouse.innerHTML = ""
    errorReturn.innerHTML = ""
    regFactory.clearTheRegsGeneratedObject();
    localStorage.removeItem('regsPassed');

}





//THE ORIGINAL REGISTRATION GENERATOR//
function registrationGenerator() {

    var lengthCheck = registrationField.value.length
    var lengthAnswer = ""
    if (lengthCheck < 5) {
        lengthAnswer = "less"
    } else {
        lengthAnswer = "greater"
    }

    errorReturn.innerHTML = ""
    var checker = registrationField.value.charAt(0).toUpperCase() + registrationField.value.charAt(1).toUpperCase() + registrationField.value.charAt(2)

   
    var evilZero = registrationField.value.charAt(2)

    if (evilZero == 0 && registrationField.value.charAt(3) == 1) {
        correctInput = registrationField.value.charAt(0).toUpperCase() + registrationField.value.charAt(1).toUpperCase() + " " + 0 + (registrationField.value.slice(3))
    } else if (evilZero == 0 && registrationField.value.charAt(3) == 2) {
        correctInput = registrationField.value.charAt(0).toUpperCase() + registrationField.value.charAt(1).toUpperCase() + " " + 0 + (registrationField.value.slice(3))
    }
    else {
        correctInput = registrationField.value.charAt(0).toUpperCase() + registrationField.value.charAt(1).toUpperCase() + " " + (registrationField.value.slice(2))
    }

    // && regFactory.formatter(correctInput) == "works"

    if (lengthAnswer == "greater" && regFactory.addToRegsGeneratedObject(correctInput) == true && regFactory.formatter(correctInput) == "works") { 
        registrationField.value = ""
        errorReturn.innerHTML = ""
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(correctInput);
        newDiv.appendChild(newContent);
        newDiv.setAttribute("id", "regPlate");
        newDiv.setAttribute("class", "filterDiv Malmesbury All");
        document.getElementById('reg_container').appendChild(newDiv);
        localStorage.setItem('regsPassed', JSON.stringify(regFactory.regsAddedToObject()));

        //UPDATE COUNTER
        counterDisplayer.innerHTML = regFactory.counterValue()
    } else if (lengthAnswer == "greater" && regFactory.addToRegsGeneratedObject(correctInput) == false && regFactory.formatter(correctInput) == "works") {
        errorReturn.innerHTML = "Entry already exists!"
    } else {
        errorReturn.innerHTML = "Invalid Input! Example: \"CA801\"."
    }

// } else if (lengthAnswer == "greater" && regFactory.addToRegsGeneratedObject(correctInput) == false && regFactory.formatter(correctInput) == "works") {
//     errorReturn.innerHTML = "That registration is already in our database..."
// } else {
//     errorReturn.innerHTML = "Invalid Input! Input format has a minimum 4 characters) -> Example: \"CA8011\"."
// }

    //MAX AT 25
    {
        if (document.getElementById("regCounter").innerHTML == 15) {
            document.querySelector("#registration_field").setAttribute("disabled", false);
            document.querySelector("#registration_field").setAttribute("editable", true);
            errorReturn.innerHTML = "Database maximum entries (15) reached! Press reset."
            registrationField.value = "";
        }
    }

}

//FILTERS 
function letsFilterAll() {
    selectedFilter = allBtn.value
    chosenFilterArray = regFactory.filter(selectedFilter)
    console.log(chosenFilterArray)
    regHouse.innerHTML = ""
    for (var i = 0; i < chosenFilterArray.length; i++) {
        var entry = chosenFilterArray[i];
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(entry.charAt(0).toUpperCase() + entry.charAt(1).toUpperCase() + " " + (entry.slice(2)));
        newDiv.appendChild(newContent);
        newDiv.setAttribute("id", "regPlate");
        newDiv.setAttribute("class", "filterDiv Malmesbury All");
        document.getElementById('reg_container').appendChild(newDiv);
    }
}

function letsFilterCT() {
    selectedFilter = ctBtn.value
    console.log(selectedFilter)
    chosenFilterArray = regFactory.filter(selectedFilter)
    console.log(chosenFilterArray)
    regHouse.innerHTML = ""
    for (var i = 0; i < chosenFilterArray.length; i++) {
        var entry = chosenFilterArray[i];
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(entry.charAt(0).toUpperCase() + entry.charAt(1).toUpperCase() + " " + (entry.slice(2)));
        newDiv.appendChild(newContent);
        newDiv.setAttribute("id", "regPlate");
        newDiv.setAttribute("class", "filterDiv Malmesbury All");
        document.getElementById('reg_container').appendChild(newDiv);
    }
}

function letsFilterCK() {
    selectedFilter = ckBtn.value
    chosenFilterArray = regFactory.filter(selectedFilter)
    regHouse.innerHTML = ""
    for (var i = 0; i < chosenFilterArray.length; i++) {
        var entry = chosenFilterArray[i];
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(entry.charAt(0).toUpperCase() + entry.charAt(1).toUpperCase() + " " + (entry.slice(2)));
        newDiv.appendChild(newContent);
        newDiv.setAttribute("id", "regPlate");
        newDiv.setAttribute("class", "filterDiv Malmesbury All");
        document.getElementById('reg_container').appendChild(newDiv);
    }
}

function letsFilterCY() {
    selectedFilter = cyBtn.value
    chosenFilterArray = regFactory.filter(selectedFilter)
    regHouse.innerHTML = ""
    for (var i = 0; i < chosenFilterArray.length; i++) {
        var entry = chosenFilterArray[i];
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(entry.charAt(0).toUpperCase() + entry.charAt(1).toUpperCase() + " " + (entry.slice(2)));
        newDiv.appendChild(newContent);
        newDiv.setAttribute("id", "regPlate");
        newDiv.setAttribute("class", "filterDiv Malmesbury All");
        document.getElementById('reg_container').appendChild(newDiv);
    }
}

//EVENT LISTENERS
{
    //vidBtn.addEventListener('click', myVideo);
    generateButton.addEventListener('click', registrationGenerator);
    resetBtn.addEventListener('click', resetter)
    allBtn.addEventListener('click', letsFilterAll);
    ctBtn.addEventListener('click', letsFilterCT);
    ckBtn.addEventListener('click', letsFilterCK);
    cyBtn.addEventListener('click', letsFilterCY);
}









// if (regFactory.addToRegsGeneratedObject(registrationField.value) == false){
//     errorReturn.innerHTML = "already!"
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