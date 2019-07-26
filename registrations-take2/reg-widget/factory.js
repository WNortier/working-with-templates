function registrationFactory(regList) {
    //VARIABLES
    var regsGeneratedObject = regList || {}
    var filteredRegs;
    var letterChecker;
    var numberChecker;

    function addToRegsGeneratedObject(correctInput) {

        console.log(typeof correctInput)
        var firstLetters = correctInput.charAt(0) + correctInput.charAt(1);
        var numberzTwo = isNaN(correctInput.slice(3))
        var letterzNan = isNaN(firstLetters)
        if (correctInput.length >= 6 && letterzNan != false && numberzTwo == false && regsGeneratedObject[correctInput] === undefined) {
            regsGeneratedObject[correctInput] = 0;
            console.log(regsGeneratedObject)
            return true
        }
        return false;
    }



    function regsAddedToObject() {
        return regsGeneratedObject
    }

    function counterValue() {
        var y = Object.keys(regsGeneratedObject)
        //console.log(y)
        return y.length
    }

    function filter(selectedFilter) {
        var x = Object.keys(regsGeneratedObject)
        if (selectedFilter == "all") {
            filteredRegs = x
        } else if (selectedFilter == "cpt") {
            filteredRegs = x.filter(selectedFilter => selectedFilter.startsWith("CA"));
        } else if (selectedFilter == "ck") {
            filteredRegs = x.filter(selectedFilter => selectedFilter.startsWith("CK"));
        } else if (selectedFilter == "cy") {
            filteredRegs = x.filter(selectedFilter => selectedFilter.startsWith("CY"));
        }
        console.log(filteredRegs)
        return filteredRegs
    }

    function clearTheRegsGeneratedObject(reg) {
        for (var reg in regsGeneratedObject) {
            delete regsGeneratedObject[reg]
        }
        console.log(regsGeneratedObject)
        return regsGeneratedObject
    }





    console.log(regsGeneratedObject)
    function formatter(correctInput) {
        var allowedArray = ["CA", "CY", "CK"]
        var numCheck = []
        var arrayChecker = [];
        //LETTERS
        var letterFormat = correctInput.charAt(0) + correctInput.charAt(1)
        //NUMBERS
        numberz = (correctInput.slice(3))
        //console.log(numberz);

        var str = String(numberz);
        numCheck.push(str)
        var arrayNum = Object.values(numCheck)
        var stringed = String(arrayNum)
        var splittedNum = stringed.split("")

        //NUMBERCHECKER
        {
            if (splittedNum[0] == 0 || splittedNum[0] == 1 || splittedNum[0] == 2 || splittedNum[0] == 3 || splittedNum[0] == 4 || splittedNum[0] == 5 || splittedNum[0] == 6 || splittedNum[0] == 7 || splittedNum[0] == 8 || splittedNum[0] == 9 || splittedNum[0] === undefined) { //if the string is a number, do the following
                arrayChecker.push("yes");
            } else {
                arrayChecker.push("no")
            }
            if (splittedNum[1] == 0 || splittedNum[1] == 1 || splittedNum[1] == 2 || splittedNum[1] == 3 || splittedNum[1] == 4 || splittedNum[1] == 5 || splittedNum[1] == 6 || splittedNum[1] == 7 || splittedNum[1] == 8 || splittedNum[1] == 9 || splittedNum[1] === undefined) {
                arrayChecker.push("yes");
            } else {
                arrayChecker.push("no")
            }
            if (splittedNum[2] == 0 || splittedNum[2] == 1 || splittedNum[2] == 2 || splittedNum[2] == 3 || splittedNum[2] == 4 || splittedNum[2] == 5 || splittedNum[2] == 6 || splittedNum[2] == 7 || splittedNum[2] == 8 || splittedNum[2] == 9 || splittedNum[2] === undefined) {
                arrayChecker.push("yes");
            } else {
                arrayChecker.push("no")
            }
            if (splittedNum[3] == 0 || splittedNum[3] == 1 || splittedNum[3] == 2 || splittedNum[3] == 3 || splittedNum[3] == 4 || splittedNum[3] == 5 || splittedNum[3] == 6 || splittedNum[3] == 7 || splittedNum[3] == 8 || splittedNum[3] == 9 || splittedNum[3] === undefined) {
                arrayChecker.push("yes");
            } else {
                arrayChecker.push("no")
            }
            if (splittedNum[4] == 0 || splittedNum[4] == 1 || splittedNum[4] == 2 || splittedNum[4] == 3 || splittedNum[4] == 4 || splittedNum[4] == 5 || splittedNum[4] == 6 || splittedNum[4] == 7 || splittedNum[4] == 8 || splittedNum[4] == 9 || splittedNum[4] === undefined) {
                arrayChecker.push("yes");
            } else {
                arrayChecker.push("no")
            }
            if (splittedNum[5] == 0 || splittedNum[5] == 1 || splittedNum[5] == 2 || splittedNum[5] == 3 || splittedNum[5] == 4 || splittedNum[5] == 5 || splittedNum[5] == 6 || splittedNum[5] == 7 || splittedNum[5] == 8 || splittedNum[5] == 9 || splittedNum[5] === undefined) {
                arrayChecker.push("yes");
            } else {
                arrayChecker.push("no")
            }

            if (arrayChecker[0] == "yes" && arrayChecker[1] == "yes" && arrayChecker[2] == "yes" && arrayChecker[3] == "yes" && arrayChecker[4] == "yes" && arrayChecker[5] == "yes") {
                numberChecker = "pass"
            } else {
                numberChecker = "fail"
            }
            //console.log(numberChecker)
        }
        //LETTERCHECKER
        {
            if (letterFormat == allowedArray[0]) {
                letterChecker = "pass"
            } else if (letterFormat == allowedArray[1]) {
                letterChecker = "pass"
            } else if (letterFormat == allowedArray[2]) {
                letterChecker = "pass"
            } else {
                letterChecker = "fail"
            }
        }

        if (numberChecker == "pass" && letterChecker == "pass") {
            var formatCheck = "works"
        } else {
            var formatCheck = "failed"
        }
        console.log(formatCheck)
        return formatCheck
    }

    return {
        counterValue,
        clearTheRegsGeneratedObject,
        addToRegsGeneratedObject,
        regsAddedToObject,
        filter,
        formatter
    }
}

//var found = reg.match(regex);

// function numberFormatter(reg){
//     //const regex = RegExp('[ 0-9A-Z-]')
//     numberz = (reg.slice(2))
//     console.log(numberz)
//            const regex = RegExp('[ 0-9]')
//            if (numberz.match(regex)){
//                alert("yes")
//                return true
//            }
//                else {
//                    alert("no")
//                    return errorOne
//                }
//            }

// function filter(reg){

//     var x = Object.keys(regsGeneratedObject)
//     console.log(x)
//     var cptFilter = x.filter(reg => reg.startsWith("ca"));

//     console.log(cptFilter)
//     return cptFilter
// }



// for (let i = 0; i < str.length; i++) {
//     console.log(!isNaN(str.charAt(i)));
//     if (!isNaN(str.charAt(i)) == false) { //if the string is a number, do the following
//         //alert("yes")
//         numberChecker = "pass"

//         //errorProvider = errorOne

//     } else if (!isNaN(str.charAt(i)) == true) {
//         numberChecker = "pass"
//         errorProvider = errorOne
//     }
// }


   // function validator(x) {
    //     var errorProvider;

    //     if (x == "works" && regsGeneratedObject[reg] === undefined) {
    //         errorProvider = ""
    //     } else if (x == "failed" && regsGeneratedObject[reg] === undefined) {
    //         errorProvider = errorOne
    //     } else if (x == "works" && regsGeneratedObject[reg] == 0) {
    //         errorProvider = errorTwo
    //     }
    //     //console.log(errorProvider)
    //     return errorProvider
    // }

