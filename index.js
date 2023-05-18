const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const password1Div = document.getElementById("password1");
const password2Div = document.getElementById("password2");
const charLimit = 15;

function generatePassword() {
    let currentPassword = "";
    let randomNumber;
    for ( let i = 0; i < charLimit; i++ ) {
        randomNumber = Math.floor(Math.random() * characters.length);
        currentPassword += characters[randomNumber];
    }
    return currentPassword;
}

function grabRandomPasswords() {
    password1Div.textContent = generatePassword();
    password2Div.textContent = generatePassword();
}
