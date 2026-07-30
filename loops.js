var str = "AmaZiNg"

document.write(str.toUpperCase());
document.write("<br>");
document.write(str.toLowerCase());
document.write("<br>");
document.write(str.startsWith("i"));
document.write("<br>");


var str1 = "I learnt about JS Methods"

var patt = new RegExp("about");
var res = patt.test(str1);

document.write(res);


var fruits = ["apple" , "mango" , "kiwi" , "grapes" , "water-melon"];

var text = "";
var i;
for (i = 0;i < fruits.length;i++) {
    text += fruits[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;



var day;
switch (new Date().getDay()) {
    case 0:
    day = "sunday";
    break;
    case 1:
    day = "monday";
    break;
    case 3:
    day = "tuesday";
    break;
    case 4:
    day = "wednesday";
    break;
    case 5:
    day = "thursday";
    break;
    case 6:
    day = "friday";
    break;
    case 7:
    day = "saturday";
}

document.getElementById("demo2").innerHTML = "today is" + day;
