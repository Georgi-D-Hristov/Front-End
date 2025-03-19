function passwordValidator(password){

    let lengthCheck = false;
    let digitCheck = false;
    let onlyDigitAndLetter = false;

    checkPasswordLength();

    checkOnlyDigitsAndLetter();

    CheckForAtLeastTwoDigit();

    if(lengthCheck&&digitCheck&&onlyDigitAndLetter){
        console.log('Password is valid');
    }

    function checkOnlyDigitsAndLetter() {
        for (let char of password) {
            let code = char.charCodeAt(0);

            if ((code < 48 || code > 57) && (code < 65 || code > 90) && (code < 97 || code > 122)) {
                onlyDigitAndLetter = false;
                console.log('Password must consist only of letters and digits');
                break;
            }
            else {
                onlyDigitAndLetter = true;
            }
        }
    }

    function CheckForAtLeastTwoDigit() {
        let digits = 0;
        for (let char of password) {
            
            if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
                digits++;
            }
            
        }
        if (digits < 2) {
            console.log('Password must have at least 2 digits');
            
        }
        else{
            digitCheck = true;
        }
    }

    function checkPasswordLength() {
        if (password.length < 6 || password.length > 10) {
            console.log('Password must be between 6 and 10 characters');
        }
        else{
            lengthCheck = true;
        }
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s')