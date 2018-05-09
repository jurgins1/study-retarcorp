
var arrName = ["Миша","Катя","Петр","Александр","Ирина","Егор","Елена","Дмитрий","Артур"];

function People(name,age){
    this.name=name;
    this.age=age;
    this.message = function(){
        return ("Привет, меня зовут "+this.name+" мне "+this.age);
    }
}
var arr = [];
arr.length=100;

for (var i=0;i<arr.length; i++) {
    var k = Math.floor(Math.random()*arrName.length);
    var age = Math.floor(Math.random()*(90-1)+1);
    arr[i]=new People(arrName[k],age);

}
arr.forEach(function(elem){
    console.log(elem.message());
})
