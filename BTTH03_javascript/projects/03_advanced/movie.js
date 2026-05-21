const API_KEY = 'YOUR_KEY'; async function searchMovie(query) {}

async function searchMovie(query) { const res = await fetch(http://www.omdbapi.com/?s=+query); const data = await res.json(); return data; }
