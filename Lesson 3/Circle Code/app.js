var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.moveTo(146,7);
ctx.lineTo(235,80);
ctx.lineTo(80,80);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(150,85);
ctx.lineTo(185,150);
ctx.lineTo(140,240);
ctx.lineTo(105,150);
ctx.closePath();
ctx.fillStyle = "red";

ctx.beginPath();
ctx.arc(230,200,30,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "grey";
ctx.fill();