
    var div = document.getElementById('createButton');
    div.setAttribute('class',"divButton");
    var scroll = document.documentElement.clientHeight-20;
    var width = document.documentElement.clientWidth-400;
    div.style.left = width+"px";

    var arr = ["Госпожа Варвара из г.Рязани купила 10 шт товара", "Господин Бяроев из Берлина купил 5 шт. товара",
        "А Петр из Урала ничего не купил", "10 шт товаров купил Ульян", "г.Рязанов из г.Рязань купил(а) штук товара",
        "г.Майрон из г.Лондона купил(а) 3 штук товара"];

    var str = "";

    function setButton() {

        var i = Math.floor(Math.random() * arr.length);
        var elem = arr[i];
        str += "<p>" + elem + "</p>";
        div.innerHTML = str;
        scroll-=50;
        div.style.top = scroll+"px";

    }

    var timer = setInterval(setButton, 2000);

    // Почему первый setTimeout добавляет первый элемент тот же самый, который удалил второй setTimeout
    // function deleteButton() {
    //     elem = div.getElementsByTagName("p")[0];
    //     elem.parentNode.removeChild(elem);
    //
    //     // elem.innerHTML = "";
    // }
    // var deleteTimer = setInterval(deleteButton,5000);

    setTimeout(function(){
        clearInterval(timer);
        div.innerHTML = "";
    },10000);

    // setTimeout(function () {
    //     clearInterval(deleteTimer);
    // },20000);