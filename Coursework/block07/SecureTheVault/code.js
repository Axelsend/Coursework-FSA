/**http://127.0.0.1:3000/Coursework/block07/SecureTheVault/index.html
 * - Declare a string variable and assign it to "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
 * - Declare and assign 3 variables, one for each number in the combination
 * - "code1" will use addition
 * - "code2" will use subtraction
 * - "code3" will use multiplication
 * - Display the string and codes to the user
 */


const userMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

let code1 = 3+4
let code2 = 12-5
let code3 = 2*8

/**
 * Code below will display dialog box on html web page that gives the message and code
 */

alert(userMessage + "\n" + code1 + " " + code2 + " " + code3)