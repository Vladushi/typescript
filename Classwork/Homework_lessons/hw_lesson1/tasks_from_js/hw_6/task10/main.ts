
const suits: string[] = ['spade', 'diamond', 'heart', 'club'];
const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

type Card = {cardSuit: string, value: string, color: string};
const cards: Card[] = [];
for (const suit of suits) {
    for (const value of values) {
        const card: Card = {cardSuit: suit, value: value, color: (suit === 'heart' || suit === 'diamond') ? 'red' : 'black'};
        cards.push(card);
    }
}

console.log(cards);

// - знайти піковий туз
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// - всі шістки
console.log(cards.filter(card => card.value === '6'));
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));

// - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && !['6', '7', '8', '9'].includes(card.value)));
