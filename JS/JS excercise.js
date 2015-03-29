/*Capitalize First Letter of a string
 'str': String
 returns 'string'*/

function capitalizeFirstLetter(str){
    var firstLetter = str.charAt(0);
    var otherChars = str.substr(1);

    return firstLetter.toUpperCase() + otherChars;
}

capitalizeFirstLetter("colorado"); //"Colorado"

function getRandom () {
    return Math.ceil(Math.random() *100)
}

getRandom();

function times2 (num) {
    return num*2;
}

function divide2 (num) {
    return num/2;
}

function capitalizeFirstandLast(str){
    var wordlength = str.length;
    var firstLetter = str.charAt(0);
    var otherChars = str.substr(1,length-1);
    var lastletter= str.charAt(length);

    return firstLetter.toUpperCase() + otherChars + lastletter.toUpperCase();
}