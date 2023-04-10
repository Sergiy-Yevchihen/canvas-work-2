const canvas = document.querySelector(".can");
const context = canvas.getContext("2d");
 canvas.width = 500;
 canvas.height = 500;
// function resize() {
//   canvas1.width = 500;
//   canvas1.height = 500;
// }

// function clearCanvas(canvas1) {
//   canvas1.width = canvas1.width;
// }

// context1.beginPath();
// context1.moveTo(0, 0);
// context1.lineTo(500, 500);
// context1.stroke();

//  context.beginPath();
//  context.moveTo(0, 0);
//  context.lineTo(200, 300);
// context.stroke();
 
// contexts.beginPath();
// contexts.moveTo(100, 100);
// contexts.lineTo(300, 400);
// contexts.lineTo(450, 200);

// contexts.strokeStyle = "blue";
// contexts.lineWidth = 10;
// contexts.lineCap = "round";
// contexts.lineJoin = "bevel";

// contexts.stroke();

context.beginPath();
context.moveTo(50, 50);
context.lineTo(250, 400);
context.strokeStyle = "blue";
context.lineWidth = 5;
context.stroke();

context.beginPath();
context.moveTo(250, 400);
context.lineTo(500, 0);
context.strokeStyle = "red";
context.lineWidth = 5;
context.stroke();