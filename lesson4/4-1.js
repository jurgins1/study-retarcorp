//телефонные номера
var str1 = "Позвоните мне, пожалуйста по номеру: +375291161312 или (37517)324-14-18";
var reg1= /[+]?[0-9\-()]{6,}/g;
var result1= str1.match(reg1);
console.log(result1);

//адреса сайтов
var str2 = "Регулярные выражения: https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions";
var reg2= /https?:\/\/[a-zA-Z\./\_]+/g;
var result2 = str2.match(reg2);
console.log(result2);

//адреса зданий
var str3 = "Я проживаю на ул.Набережной 17Б или можете подъехать на работу г.Минск, ул.Тимирязева 72, офис 8004";
var reg3 = /\.[a-яА-Я]*\s[0-9A-Яа-я]{2,3}/g;
var result3 = str3.match(reg3);
console.log(result3);

//HTML-тегов
var str4 = "<h1>Hello World</h1><b/> <> <2> <a href='#'></a>";
var reg4 = /<[a-z\/].*?>/g;
var result4 = str4.match(reg4);
console.log(result4);