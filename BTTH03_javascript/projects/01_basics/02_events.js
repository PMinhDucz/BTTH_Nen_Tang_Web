const btn = document.getElementById('btn');
btn.addEventListener('click', () => alert('Clicked'));

const input = document.getElementById('input');
input.addEventListener('input', (e) => console.log(e.target.value));
