"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array = [];
for (let i = 1; i <= 100; i++) {
    array.push({ id: i, name: `Item ${i}` });
}
let currentPage = 1;
const itemsPerPage = 10;
const container = document.getElementById('container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
if (!container || !prevBtn || !nextBtn)
    throw new Error('Something went wrong');
function showItems(containerEl) {
    containerEl.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, array.length);
    for (const item of array.slice(start, end)) {
        containerEl.innerHTML += `${item.id}: ${item.name}<br>`;
    }
}
nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(array.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        showItems(container);
    }
});
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showItems(container);
    }
});
showItems(container);
//# sourceMappingURL=main.js.map