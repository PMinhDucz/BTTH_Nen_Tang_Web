function clock() { document.body.innerHTML = new Date().toLocaleTimeString(); }
setInterval(clock, 1000);
