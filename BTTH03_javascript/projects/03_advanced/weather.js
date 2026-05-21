const WEATHER_API = 'KEY'; async function getWeather(city) {}

async function getWeather(city) { const res = await fetch(pi.openweathermap.org/data/2.5/weather?q=+city); return await res.json(); }

function renderWeather(data) { document.body.style.background = data.main.temp > 30 ? 'orange' : 'blue'; }

navigator.geolocation.getCurrentPosition(pos => getWeatherByCoords(pos.coords.latitude, pos.coords.longitude));

function saveHistory(city) { let hist = JSON.parse(localStorage.getItem('weather_hist') || '[]'); hist.push(city); localStorage.setItem('weather_hist', JSON.stringify(hist)); }
