var d = new Date("1988-08-13 10:00:00");
var d2 = new Date("2033-12-22 17:00:00");
var msec = d2-d;
var hours = msec/(1000*60*60);
alert("Количесвто часов: "+hours);