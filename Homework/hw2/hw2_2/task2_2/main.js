"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let price = localStorage.getItem('price') ? Number(localStorage.getItem('price')) : null;
let lastUpdate = localStorage.getItem('lastUpdate') ? Number(localStorage.getItem('lastUpdate')) : null;
if (price === null) {
    price = 100;
    localStorage.setItem('price', price.toString());
}
else {
    price = +price;
}
if (lastUpdate === null) {
    lastUpdate = Date.now();
    localStorage.setItem('lastUpdate', lastUpdate.toString());
}
else {
    lastUpdate = +lastUpdate;
}
const now = Date.now();
if (now - lastUpdate > 10000) {
    price += 10;
    localStorage.setItem('price', price.toString());
    localStorage.setItem('lastUpdate', now.toString());
}
const priceBlock = document.getElementById('priceBlock');
if (priceBlock) {
    priceBlock.innerText = price + 'грн';
}
//# sourceMappingURL=main.js.map