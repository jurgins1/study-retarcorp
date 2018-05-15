var timer= setInterval(function(){
    var now= new Date();
    var tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
    var second = tomorrow-now;

    console.log(Math.round(second/1000/60));
},60000);