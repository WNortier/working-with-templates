describe("addToRegsGeneratedObject function - adds registration to object", function () {
    it("should return 'true' if the registration number entered is not yet in the object", function () {
        let regGenerator = registrationFactory()
        
        assert.equal(true, regGenerator.addToRegsGeneratedObject("CA 5534"))
    });
    it("should return 'false' if the registration number entered is already in the object", function () {
        let regGenerator = registrationFactory()
        regGenerator.addToRegsGeneratedObject("CA 123")
        assert.equal(false, regGenerator.addToRegsGeneratedObject("CA 123"))
    });
});



describe("formatter function - checks format", function () {
    it("should return 'works' if the format of the registration number in the input field is correct", function () {
        let regGenerator = registrationFactory()

        assert.equal("works", regGenerator.formatter("CA 123"))
    });
    it("should return 'failed' if the number part of the registration contains letters", function () {
        let regGenerator = registrationFactory()

        assert.equal("failed", regGenerator.formatter("CA 8R4D2GZ"))
    });
    it("should return 'failed' if the first two letters of the registration contains numbers", function () {
        let regGenerator = registrationFactory()

        assert.equal("failed", regGenerator.formatter("11 8R4D2GZ"))
    });
});

describe("counterValue - displays counter value", function () {
    it("the counter value should display '0' if no registrations have been generated and the object is empty", function () {
        let regGenerator = registrationFactory()
        assert.equal(0, regGenerator.counterValue())
    });

    it("the counter value should display '3' if three registrations have been generated", function () {
        let regGenerator = registrationFactory()
        regGenerator.addToRegsGeneratedObject("CK 1234")
        regGenerator.addToRegsGeneratedObject("CA 1255")
        regGenerator.addToRegsGeneratedObject("CY 1234")
        assert.equal(3, regGenerator.counterValue())
    });
});

describe("clearTheRegsGeneratedObject - clears the Object to which reges are added when they are generated", function () {
    it("should return 'an empty object' when the function is called", function () {
        let regGenerator = registrationFactory()
        regGenerator.addToRegsGeneratedObject("CK 1234")
        assert.deepEqual({}, regGenerator.clearTheRegsGeneratedObject())
    });
});

describe("filter - filters an array containing strings", function () {
    it("should return an 'array of all the Malmesbury registration numbers' if the selected filter is 'ck'", function () {
        let regGenerator = registrationFactory()
        let selectedFilter = "ck"
        regGenerator.addToRegsGeneratedObject("CK 0000")
        regGenerator.addToRegsGeneratedObject("CA 1255")
        regGenerator.addToRegsGeneratedObject("CA 999999")
        regGenerator.addToRegsGeneratedObject("CY 4455")
        assert.deepEqual(["CK 0000"], regGenerator.filter(selectedFilter))
    });
    it("should return an 'array of all the Cape Town registration numbers' if the selected filter is 'ca'", function () {
        let regGenerator = registrationFactory()
        let selectedFilter = "cpt"
        regGenerator.addToRegsGeneratedObject("CK 0000")
        regGenerator.addToRegsGeneratedObject("CA 1255")
        regGenerator.addToRegsGeneratedObject("CA 999999")
        regGenerator.addToRegsGeneratedObject("CY 4455")
        assert.deepEqual(["CA 1255", "CA 999999"], regGenerator.filter(selectedFilter))
    });
    it("should return an 'array of all the Bellville registration numbers' if the selected filter is 'cy'", function () {
        let regGenerator = registrationFactory()
        let selectedFilter = "cy"
        regGenerator.addToRegsGeneratedObject("CK 0000")
        regGenerator.addToRegsGeneratedObject("CA 1255")
        regGenerator.addToRegsGeneratedObject("CA 999999")
        regGenerator.addToRegsGeneratedObject("CY 4455")
        assert.deepEqual(["CY 4455"], regGenerator.filter(selectedFilter))
    });
});

describe("regsAddedToObject - returns an object", function () {
    it("should return an object containing all the registrations that have been generated", function () {
        let regGenerator = registrationFactory()
        regGenerator.addToRegsGeneratedObject("CK 0000")
        regGenerator.addToRegsGeneratedObject("CA 1255")
        regGenerator.addToRegsGeneratedObject("CA 999999")
        regGenerator.addToRegsGeneratedObject("CY 4455")
        assert.deepEqual({'CK 0000': 0, 'CA 1255': 0, 'CA 999999': 0, 'CY 4455': 0}, regGenerator.regsAddedToObject())
    });
});












// formatter
// counterValue
// addToRegsGeneratedObject