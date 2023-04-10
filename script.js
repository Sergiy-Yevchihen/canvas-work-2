const canvas = document.querySelector('canvas');

const context = canvas.getContext('2d');

canvas.width = 500;

canvas.height = 500;

requestAnimationFrame(tick);

let pTimestamp = 0;
let angle = 0;

function tick(timestemp) {
    requestAnimationFrame(tick);
    
    const diff = timestemp - pTimestamp;
    pTimestamp = timestemp;

     angle += Math.PI * 0.01;

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.beginPath();
    context.arc(
       
      canvas.width / 2 + 150 * Math.cos(angle),
      canvas.height / 2 + 150 * Math.sin(angle),
      5,
      0,
      Math.PI * 2
    );
    context.fillStyle = "green";
    context.fill();
}