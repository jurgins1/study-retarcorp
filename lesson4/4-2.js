
var bodyHeight = document.body.scrollHeight;
var timer = setInterval(function(){
    window.scrollBy(0,20);
    if(window.pageYOffset===bodyHeight){
        clearInterval(timer);
    }
},100);