const monsterStats = JSON.parse(localStorage.getItem('allCards'));
const cardsDiv = document.getElementById('cards');
const drawHighlight = document.getElementById('draw-highlight');
const backCardImage = 'https://th.bing.com/th/id/OIP.0x4CeXmIq4eMaU3Xqgo2lAAAAA?w=203&h=295&c=7&r=0&o=5&dpr=1.5&pid=1.7';
const faceDownCard = document.getElementById('face-down-card');
const drawCard = document.getElementById('draw');
const nextPageBtn = document.getElementById('next-page');
const title = document.getElementById('title');

// Add all of the monster cards to the page
for (const key in monsterStats) {
    const monster = monsterStats[key];
    const card = `<div class="monster-card">
                <img id="image" src=${monster.image}>
                <div class="monster-info">
                    <p>Health: ${monster.health}</p>
                    <p>${monster.move1.name}: ${monster.move1.damage} damage</p>
                    <p>${monster.move2.name}: ${monster.move2.damage} damage</p>
                    <p>${monster.move3.name}: ${monster.move3.damage} damage</p>
                </div>
            </div>`;
    cardsDiv.innerHTML += card;
}
const monsterCards = document.querySelectorAll('.monster-card');

// Allow the user to draw 5 random cards
class Draw {
    constructor() {
        this.chosenCards = [];
    }

    // Control the flip animation for drawing a card
    flipCard() {
        // Flip the face down card revealing the chosen card
        drawCard.classList.add('flip');
        setTimeout (() => {
            faceDownCard.src = `${this.chosenCard.image}`;
            drawCard.classList.remove('flip');
            drawHighlight.style.display = 'none';
        }, 400);

        // Add a border to the chosen card
        for (const card of monsterCards) {
            const imageTag = card.querySelector('#image');
            if (imageTag.src == this.chosenCard.image) {
                card.classList.add('selected');
            }
        }

        // Flip the card back over to be drawn again
        setTimeout(() => {
            drawCard.classList.add('flip');
        }, 2000);
        setTimeout(() => {
            faceDownCard.src = backCardImage;
        }, 2400);
        setTimeout(() => {
            drawCard.classList.remove('flip');
            if (this.chosenCards.length < 5) {
                drawHighlight.style.display = 'block';
            } else {
                nextPageBtn.style.display = 'block';
                localStorage.setItem('chosenCards', JSON.stringify(this.chosenCards));
            }
        }, 2400);
    }

    // Draw a random card
    randomCard() {
        const num = Math.floor(Math.random() * 8);
        let count = 0;
        for (const key in monsterStats) {
            if (count === num) {
                this.chosenCard = monsterStats[key];
                if (this.chosenCards.includes(this.chosenCard)) {
                    this.randomCard();
                } else {
                    this.chosenCards.push(this.chosenCard);
                    this.flipCard();
                }
            }
            count++;
        }
    }
}

const draw = new Draw();
drawHighlight.addEventListener('click', () => {
    draw.randomCard();
});

// Refresh the page before loading drawn cards - looks smoother
nextPageBtn.addEventListener('click', () => {
    localStorage.setItem('battleStarted', 1);
    window.location.href = 'deck-select.html';
});

// Allow the user to choose one of the cards they drew
class MonsterSelect {
    constructor(cards, title, nextPage, drawDiv, downCard) {
        this.chosenCards = JSON.parse(localStorage.getItem('chosenCards'));
        this.allMonsters = JSON.parse(localStorage.getItem('allCards'));
        this.defeatedMonsters = JSON.parse(localStorage.getItem('defeatedMonsters'));
        this.cards = cards;
        this.title = title;
        this.nextPageBtn = nextPage;
        this.drawDiv = drawDiv;
        this.downCard = downCard;
        this.selectedMonster;
        this.flipped;
        this.aliveMonsters = 0;
    }

    // Add all of the chosen monster cards to the page
    addMonsters() {
        for (const key in this.chosenCards) {
            const monster = this.chosenCards[key];
            if (monster.health !== 0) {
                const card = `<div class="chosen-monster-card" id="m-card">
                            <img id="image" src=${monster.image}>
                            <div class="chosen-monster-info">
                                <p>Health: ${monster.health}/${monster.maxHealth}</p>
                                <p>${monster.move1.name}: ${monster.move1.damage} damage</p>
                                <p>${monster.move2.name}: ${monster.move2.damage} damage</p>
                                <p>${monster.move3.name}: ${monster.move3.damage} damage</p>
                            </div>
                        </div>`;
                this.cards.innerHTML += card;
                this.aliveMonsters++;
            }
        }
    }

    // Indicate which card is selected
    cardEventListeners() {
        const shownMonsterCards = document.querySelectorAll('.chosen-monster-card');
        for (const card of shownMonsterCards) {
            card.addEventListener('click', (e) => {
                // Add a border to the chosen card
                this.nextPageBtn.style.display = 'block';
                this.nextPageBtn.href = 'battle.html';
                let targetEl = e.target.parentElement.id !== 'm-card' ? e.target.parentElement.parentElement : e.target.parentElement;
                if (e.target.id === 'm-card') {
                    targetEl = e.target;
                }
                for (const card of shownMonsterCards) {
                    card.classList.remove('selected-monster');
                }
                targetEl.classList.add('selected-monster');

                // Keep track of which card has been selected
                for (const key in this.chosenCards) {
                    const image = this.chosenCards[key].image;
                    const cardImage = targetEl.querySelector('#image');
                    if (image === cardImage.src) {
                        this.selectedMonster = this.chosenCards[key];
                        localStorage.setItem('selectedMonster', JSON.stringify(this.selectedMonster));
                    }
                }
                this.flipCard();
          });
        }
    }

    // Choose a random monster for the enemy to use
    randomCard() {
        const num = Math.floor(Math.random() * 8);
        let count = 0;
        for (const key in this.allMonsters) {
            if (count === num) {
                const chosenCard = this.allMonsters[key];
                return chosenCard;
            }
            count++;
        }
    }

    // Only assign a new enemy if the previous one was defeated
    newEnemy() {
        try {
            const enemyMonster = JSON.parse(localStorage.getItem('enemyMonster'));
            if (enemyMonster.health === 0) {
                const enemyMonster = this.randomCard();
                localStorage.setItem('enemyMonster', JSON.stringify(enemyMonster));
                this.title.innerHTML = 'Choose a monster to fight the coming battle!';
            } else {
                this.title.innerHTML = 'Choose another monster to finish off your opponent!';

            }
        } catch(e) {
            const enemyMonster = this.randomCard();
            localStorage.setItem('enemyMonster', JSON.stringify(enemyMonster));
            this.title.innerHTML = 'Choose a monster to fight the coming battle!';
        }
    }
  
    // Control the flip animation for choosing a monster
    flipCard() {
        let delay = 0;
        
        // Flip the face down card revealing the chosen card
        if (!this.flipped) {
            this.drawDiv.classList.add('flip');
            this.flipped = true;
            delay = 400
        }

        setTimeout (() => {
            this.downCard.src = `${this.selectedMonster.image}`;
            this.drawDiv.classList.remove('flip');
        }, delay);
    }
  
  
    winScreen() {
        if (!this.aliveMonsters) {
            window.location.href = 'lose.html'
        }
    }
}

// Only activate after cards have been drawn
const battleStarted = JSON.parse(localStorage.getItem('battleStarted'));
if (battleStarted) {
    drawHighlight.style.display = 'none';
    nextPageBtn.style.display = 'none';
    cardsDiv.innerHTML = '';
    const monsterSelect = new MonsterSelect(cardsDiv, title, nextPageBtn, drawCard, faceDownCard);
    monsterSelect.addMonsters();
    monsterSelect.winScreen();
    monsterSelect.cardEventListeners();
    monsterSelect.newEnemy();
    nextPageBtn.removeEventListener('click');
}