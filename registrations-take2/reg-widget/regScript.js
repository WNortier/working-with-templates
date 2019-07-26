function factoryTemplater(){
    // var testOne = "One"
    // var testTwo = "Two"
    // var testThree = "Three"
    // var arrayTest = ["zero","one","two","three"]

    function generateTemplater() {
        //TEMPLATE SOURCE
        var templateSource = document.querySelector(".generateTemplate").innerHTML;
        //COMPILER
        var userTemplate = Handlebars.compile(templateSource);
        //QUERYSELECTORS
    
    var insertPoint = document.querySelector(".generateTemplateInsertPoint")
    console.log(generatorArray)
    //DATA
    var userData = {
        "genRegistrations": generatorArray                           
      };
    
        //INSERT DATA
        var userDataHTML = userTemplate(userData);
        console.log(userDataHTML)
        //ALLOCATE TEMPLATE
        insertPoint.innerHTML = userDataHTML;
    }






    function filterTemplater() {
        //TEMPLATE SOURCE
        var templateSource = document.querySelector(".filterTemplate").innerHTML;
        //COMPILER
        var userTemplate = Handlebars.compile(templateSource);
        //QUERYSELECTORS
    
    var insertPoint = document.querySelector(".generateTemplateInsertPoint")
    
    console.log(selectedFilterForTemplates)
    console.log(chosenFilterArrayForTemplates)
    //DATA
    var userData = {
        selectedFilterForTemplates,
        "filterRegistrations":chosenFilterArrayForTemplates
      };
    
        //INSERT DATA
        var userDataHTML = userTemplate(userData);
        //console.log(userDataHTML)
        //ALLOCATE TEMPLATE
        insertPoint.innerHTML = userDataHTML;
    }







    function localStorageTemplater() {
        //TEMPLATE SOURCE
        var templateSource = document.querySelector(".localStorageTemplate").innerHTML;
        //COMPILER
        var userTemplate = Handlebars.compile(templateSource);
        //QUERYSELECTORS
    
    var insertPoint = document.querySelector(".generateTemplateInsertPoint")
    
    console.log(selectedFilterForTemplates)
    console.log(chosenFilterArrayForTemplates)
    //DATA
    var userData = {
        "localStorageRegistrations": thisSessionsRegistrationsArrayForTemplates
      };
    
        //INSERT DATA
        var userDataHTML = userTemplate(userData);
        //console.log(userDataHTML)
        //ALLOCATE TEMPLATE
        insertPoint.innerHTML = userDataHTML;
    }
    
    return { generateTemplater,
        filterTemplater,
        localStorageTemplater

    }

    }

    // <div>{{}}</div>


 