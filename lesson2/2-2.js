var firstString = prompt("Введите первую строку");
var secondString = prompt("Введите вторую строку");

var firstArr = firstString.split('');
var secondArr = secondString.split('');
var sortFirstArr = firstArr.sort();
var sortSecondArr = secondArr.sort();
var newFirstString = sortFirstArr.join('');
var newSecondString = sortSecondArr.join('');
if (newFirstString===newSecondString){
    alert(true);
}else {
    alert(false);
}