/*alert('Hello');*/


document.addEventListener("DOMContentLoaded", function() {
    var c = document.getElementById("myCanvas");
console.log(c);
var p = c.getContext("2d");
    p.moveTo(10, 30);
    p.lineTo(10, 10);
    p.stroke();
})