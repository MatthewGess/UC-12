/**
 * Removes part of string between two sub strings
 * @param {string} text The original string
 * @param {string} start The starting string
 * @param {string} end The ending string
 * @return {string} The string in between
 * @throws (Error} If start or end not found
 */
function between(string, start, end) {
    var startAt = string.indexOf(start);
    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }
    return string.slice(startAt, endAt);
}

/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode + "</br>";
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
/**
 * Returns an area code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 * @throws {Error} If the format is incorrect
 */
function getAreaCode(phoneNum) {
    var areaCode;
    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        }
        else {
            throw new Error("Invalid area code: " + areaCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayCoCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var CoCode = getCoCode(phoneNum);
        outputText = "Your CoCode code is " + CoCode + "</br>";
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}
/**
 * Returns an area code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 * @throws {Error} If the format is incorrect
 */
function getCoCode(phoneNum) {
    var CoCode;
    try {
        CoCode = between(phoneNum, ")", "-");
        CoCode = CoCode.trim();
        if (CoCode.length == 3 && Number(CoCode)) {
            return CoCode;
        }
        else {
            throw new Error("Invalid Co code: " + CoCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
/**
<<<<<<< HEAD
  * Returns an area code from a phone number: (###) ###-####
=======
  * Returns a line code from a phone number: (###) ###-####
>>>>>>> orgin/master
  * @param   {string} phoneNum The phone number
  * @returns {string} The area code
  * @throws {Error} If the format is incorrect
  */
 function getLineCode(phoneNum) {

     var LineCode;

     try {
         LineCode = phoneNum.slice(phoneNum.length - 4);
         LineCode = LineCode.trim();
         if (areaCode.length == 4 && Number(LineCode)) {
             return LineCode;
         } else {
             throw new Error("Invalid Line code: " + LineCode);
         }
     } catch (error) {
         throw new Error("Invalid phone number: " + error.message);
     }
 }


/**
* Displays the line code from an inputted phone number
*@ param {string}inputId The element idfor the text box
*@ param {string}outputId The element id of message div / function displayLineCode(inputId, outputId) {
**/
function displayLineCode(phoneNum) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;


    try {
        var LineCode = getLineCode(phoneNum);
        outputText = "Your Line code is " + LineCode + "</br>";
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}
