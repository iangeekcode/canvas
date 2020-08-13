var canvas = document.getElementById("myCanvas")
var paintBrush = canvas.getContext("2d")

paintBrush.fillStyle = "black"
paintBrush.fillRect(0,0,800,600)
paintBrush.fillStyle = "red"
paintBrush.fillRect(385, 285, 40, 40)

paintBrush.beginPath();
paintBrush.moveTo(500, 100);
paintBrush.lineTo(550, 100);
paintBrush.lineTo(550, 150);
paintBrush.lineTo(500, 100);
paintBrush.fillStyle ="blue";
paintBrush.fill();

paintBrush.beginPath();
paintBrush.arc(100, 400, 40, 2 * Math.PI, false)
paintBrush.lineWidth = "20";
paintBrush.strokeStyle = "orange";
paintBrush.stroke();