// колода
let cards = ['2', 'Король', 'Туз', '5', '6', 'Король', 'Дама'];
// карты в руке
let hand = [];

for (let card of cards) {
    // выполняем только когда находим карту с королём или тузом
    if (card !== 'Король' && card !== 'Туз') continue;
    hand.push(card);
    console.log('Карта ' + card + ' добавлена в руку');
}

console.log('Карты в руке', hand);