let price:number | null = localStorage.getItem('price') ? Number(localStorage.getItem('price')) : null;
let lastUpdate:number | null = localStorage.getItem('lastUpdate') ? Number(localStorage.getItem('lastUpdate')) : null;

if(price === null) {
    price = 100;
    localStorage.setItem('price', price.toString());
} else {
    price = +price;
}

if(lastUpdate === null) {
    lastUpdate = Date.now();
    localStorage.setItem('lastUpdate', lastUpdate.toString());
} else {
    lastUpdate = +lastUpdate;
}

const now: number = Date.now();

if (now - lastUpdate > 10000) {
    price += 10;
    localStorage.setItem('price', price.toString());
    localStorage.setItem('lastUpdate', now.toString());
}

const priceBlock = document.getElementById('priceBlock');
if (priceBlock) {
    priceBlock.innerText = price + 'грн';
}
