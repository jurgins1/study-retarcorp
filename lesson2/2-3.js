var string = prompt("Введите строку");
var vowels = ["а","я","и","е","у","ю","ы","о","э"];
var arr = string.split('');

for(var i in arr){
    if(vowels.indexOf(arr[i])>-1){
        arr.splice(i,1);
    }
}
var newString = arr.join('');
alert(newString);