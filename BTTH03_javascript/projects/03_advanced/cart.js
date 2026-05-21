let cart = []; const products = [{id:1, name:'Laptop', price:1000}];

function addToCart(productId) { cart.push(productId); }

function removeFromCart(productId) { cart = cart.filter(id => id !== productId); }
