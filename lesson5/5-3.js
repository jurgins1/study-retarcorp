var rows = +prompt("Введите число строк: ");
var cells = +prompt("Введите число столбцов: ");
var r = 1;

var table = document.createElement('table');
table.setAttribute('border',"1");

for(var i =0;i<rows;i++){
    var tr = document.createElement('tr');
    for(var j =0;j<cells;j++){
        var td = document.createElement('td');
        td.innerHTML = r;
        r++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);

var len = table.getElementsByTagName('td');
console.log(len.length);


function is_numder(num){
    if (num<2) return false;
    for(var i = 2;i<num;i++){
        if (num%i===0) return false;
    }
    return true;
}

for(var k =0;k<(len.length);k++){
    if(is_numder(k)){
        len[k-1].style.backgroundColor="red";
    }
}
