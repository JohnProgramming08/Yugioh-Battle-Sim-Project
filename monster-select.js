const chosenCards = JSON.parse(localStorage.getItem('chosenCards'));
const cards = document.getElementById('cards');

// Add all of the monster cards to the page
for (const key in chosenCards) {
    const monster = chosenCards[key];
    const card = `<div class="monster-card" id="m-card">
                <img id="image" src=${monster.image}>
                <div class="monster-info">
                    <p>Health: ${monster.health}/${monster.maxHealth}</p>
                    <p>${monster.move1.name}: ${monster.move1.damage} damage</p>
                    <p>${monster.move2.name}: ${monster.move2.damage} damage</p>
                    <p>${monster.move3.name}: ${monster.move3.damage} damage</p>
                </div>
            </div>`;
    cards.innerHTML += card;
}

const monsterCards = document.querySelectorAll('.monster-card');
for (const card of monsterCards) {
    card.addEventListener('click', (e) => {
        let targetEl = e.target.parentElement.id !== 'm-card' ? e.target.parentElement.parentElement : e.target.parentElement;
        if (e.target.id === 'm-card') {
            targetEl = e.target;
        }
        for (const card of monsterCards) {
            card.classList.remove('selected');
        }
        targetEl.classList.add('selected');
    });
}
