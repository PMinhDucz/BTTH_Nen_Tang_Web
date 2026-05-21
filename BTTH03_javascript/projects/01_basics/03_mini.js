function clock() { document.body.innerHTML = new Date().toLocaleTimeString(); }
setInterval(clock, 1000);

function randColor() { return '#' + Math.floor(Math.random()*16777215).toString(16); }
document.body.style.background = randColor();
