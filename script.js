function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

var num1 = generateRandomInteger(20);
var num2 = generateRandomInteger(20);
var num3 = generateRandomInteger(20);
var largest = Math.max(num1, num2, num3);

function outputHTML(newElement, idName) {
    document.getElementById(idName).innerHTML = newElement;
}

outputHTML(num1, "Gryffindor");
outputHTML(num2, "Ravenclaw");
outputHTML(num3, "Slytherin");

if (largest != num2 && largest != num3) {
    outputHTML("Today's best Hogwarts House is Gryffindor (" + num1 + ").", "biggest-number");
}
else if (largest != num1 && largest != num3) {
    outputHTML("Today's best Hogwarts House is Ravenclaw (" + num2 + ").", "biggest-number");
}
else if (largest != num1 && largest != num2) {
    outputHTML("Today's best Hogwarts House is Slytherin (" + num3 + ").", "biggest-number");
}
else if (largest != num3) {
    outputHTML("Today's best Hogwarts House are both Gryffindor & Ravenclaw (" + num1 + ").", "biggest-number");
}
else if (largest != num2) {
    outputHTML("Today's best Hogwarts House are both Gryffindor & Slytherin (" + num1 + ").", "biggest-number");
}
else if (largest != num1) {
    outputHTML("Today's best Hogwarts House are both Ravenclaw & Slytherin (" + num2 + ").", "biggest-number");
}
else if (largest == num1 && largest == num2 && largest == num3) {
    outputHTML("All are winners!!! COngratulations^^. (" + num1 + ").", "biggest-number");
}

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var num1th_letter = alphabet.charAt(num1);
outputHTML("The best student's last name starts with " + num1th_letter.toUpperCase(), "num1th-letter");

var min = num2 * num3;
function timeConvert(min) {
    var hours = (min / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    document.getElementById("hr-min").innerHTML = "The time it took for the House's achievements to be achieved is (" + min + " mins): " + rhours + " hour(s) and " + rminutes + " minute(s).";
}

timeConvert(min);
