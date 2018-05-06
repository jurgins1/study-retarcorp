var string = prompt("Введите цифры");

var oneArr = string.split('');
console.log(oneArr);
var total = 0;
var sum = 0;
for (var i in oneArr){
    if(oneArr[i]%3===0){
        var a=+oneArr[i];
        total++;
        sum+=a;
    }
}
alert("Количество элементов, которые делятся на 3: "+total);
alert("Сумма элементов, которые делятся на 3: "+sum);