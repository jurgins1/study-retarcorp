var arr = [];
for(var i = 0;i<1000;i++){
    var s=5000;
    var p =7654;
    var min = s-p/100;
    var max = s+p/100;
    var number = Math.floor(Math.random()*(max-min)+min);
    arr.push(number);
}
arr.sort(function(a,b){
    return b%10-a%10;
});
console.log(arr);