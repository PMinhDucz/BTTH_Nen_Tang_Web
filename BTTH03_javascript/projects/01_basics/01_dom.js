const app = document.getElementById('app');

const p = document.createElement('p');
p.textContent = 'Hello DOM';
app.appendChild(p);

p.classList.add('text-primary');
