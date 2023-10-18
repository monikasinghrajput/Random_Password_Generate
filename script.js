const passwordBox = document.getElementById("Password")
const length = 12 ; // isme hum kitna pass ka length rkhna chahte hai

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = " abcdefghijklmnopqrstuvwxyz"
const number = "0123456789";
const specialSymbol = " `~!@#$%^&*()[]{}-+=/?/.,<>*";

const allChart = upperCase + lowerCase + number + specialSymbol;

function createPassword(){
    let password = " ";
    password += upperCase[Math.floor(Math.random()*upperCase.length)] ;
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)] ;
    password += number[Math.floor(Math.random()*number.length)] ;
    password += specialSymbol[Math.floor(Math.random()*specialSymbol.length)] ;

    while (length > password.length){
        password += allChart[Math.floor(Math.random()*allChart.length)] ;
    }
    passwordBox.value = password ;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");

}
