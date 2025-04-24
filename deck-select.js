const monsterStats = {
    darkMagicianStats: {
        name: 'Dark Magician',
        image: 'https://vignette1.wikia.nocookie.net/yugioh/images/b/b3/DarkMagician-SD6-EN-C-UE.png/revision/latest?cb=20160331211958',
        health: 2100,
        maxHealth: 2100,
        speed: 1000,
        move1: {
            name: 'Dark Magic Attack',
            description: 'A powerful blast of pure dark magic concentrated on your enemy.',
            damage: 700,
            cooldown: 2,
            currentCooldown: 0,
            type: 'attack'
        },
        move2: {
            name: 'Dark Magic Twin Burst',
            description: 'Borrow some of Dark Magician Girls power to anhilate your enemy.',
            damage: 900,
            cooldown: 3,
            currentCooldown: 0,
            type: 'attack'
        },
        move3: {
            name: 'Dark Magical Circle',
            description: 'Surround and trap your opponent with dark magic as it closes in for a lethal slice.',
            damage: 500,
            cooldown: 1,
            currentCooldown: 0,
            type: 'attack'
        }
    },

    blueEyesStats: {
        name: 'Blue Eyes White Dragon',
        image: 'https://dacardworld2.imgix.net/23584.jpg?auto=format%2Ccompress&fm=jpg&h=1800&ixlib=php-1.2.1&w=1800&s=18a4edeacc35f29f0fafc6395f1b7538',
        health: 2500,
        maxHealth: 2500,
        speed: 800,
        move1: {
            name: 'White Lightning',
            description: 'Use the dragons power over lightning to destroy your opponent.',
            damage: 800,
            cooldown: 3,
            currentCooldown: 0,
            type: 'attack'
        },
        move2: {
            name: 'Successor Soul',
            description: 'Use the power of fallen dragons to lay waste to your enemy.',
            damage: 650,
            cooldown: 2,
            currentCooldown: 0,
            type: 'attack'
        },
        move3: {
            name: 'Burst Stream Of Destruction',
            description: 'Use Blue Eyes White Dragons raw power to destroy your opponents',
            damage: 550,
            cooldown: 1,
            currentCooldown: 0,
            type: 'attack'
        }
    },

    RedEyesStats: {
        name: 'Red Eyes Black Dragon',
        image: 'https://product-images.tcgplayer.com/491813.jpg',
        health: 2000,
        maxHealth: 2000,
        speed: 900,
        move1: {
            name: 'Red Eyes Roar',
            description: 'Red Eyes unleashes a powerful roar that shatters the space around it',
            damage: 600,
            cooldown: 1,
            currentCooldown: 0,
            type: 'attack'
        },
        move2: {
            name: 'Red Eyes Black Inferno',
            description: 'Use the power of Red Eyes to unleash a devouring, engulfing flame',
            damage: 800,
            cooldown: 3,
            currentCooldown: 0,
            type: 'attack'
        },
        move3: {
            name: 'Red Eyes Cursed Seal',
            description: 'Allow Red Eyes to transcend its limits for one great attack',
            damage: 700,
            cooldown: 2,
            currentCooldown: 0,
            type: 'attack'
        }
    },
    
    diabelstarStats: {
        name: 'Diabellstar The Black Witch',        
        image: 'https://www.cardtrader.com/uploads/blueprints/image/264491/show_diabellstar-the-black-witch-secret-rare-age-of-overlord.jpg',
        health: 2000,
        maxHealth: 2000,
        speed: 1100,
        move1: {
            name: 'Seeker Of Sinful Spoils',
            description: 'Use Diabelstars magic to unleash a powerful blast that never misses',
            damage: 500,
            cooldown: 1,
            currentCooldown: 0,
            type: 'attack'
        },
        move2: {
            name: 'Snake Eye',
            description: 'Diabelstar uses ancient magic to banish your opponents to another realm',
            damage: 900,
            cooldown: 3,
            currentCooldown: 0,
            type: 'attack'
        },
        move3: {
            name: 'Sinful Spoils Unfortunate',
            description: 'Use Diabelstars magic to tether the string that gives your opponents life',
            damage: 650,
            cooldown: 2,
            currentCooldown: 0,
            type: 'attack'
        }
    },

    rafaleStats: {
        name: 'Rafale Champion Fur Hire',
        image: 'https://th.bing.com/th/id/OIP.nPHfC2qqBy4iK3462m8EfAAAAA?w=203&h=295&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        health: 2200,
        maxHealth: 2200,
        speed: 700,
        move1: {
            name: 'Mayhem Fur Hire',
            description: 'Rafale uses his immense power to tear the space around him',
            damage: 850,
            cooldown: 3,
            currentCooldown: 0,
            type: 'attack'
        },
        move2: {
            name: 'Tactics Fur Hire',
            description: 'Use Rafales combat experience to strike your opponent down',
            damage: 600,
            cooldown: 1,
            currentCooldown: 0,
            type: 'attack'
        },
        move3: {
            name: 'Focus Fur Hire',
            description: 'Rafale uses a concentrated strike, guaranteed to split your opponent in 2',
            damage: 700,
            cooldown: 2,
            currentCooldown: 0,
            type: 'attack'
        }
    },

    blackLusterSoldierStats: {
        name: 'Black Luster Soldier',
        image: 'https://th.bing.com/th/id/OIP.PG3eyssI7qxmviuDHv5j2AHaKv?w=203&h=295&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        health: 2500,
        maxHealth: 2500,
        speed: 800,
        move1: {
            name: 'Chaos Form',
            description: 'Use the immense power of Black Luster Soldier to anhilate your enemies',
            damage: 800,
            cooldown: 3,
            currentCooldown: 0,
            type: 'attack'
        },
        move2: {
            name: 'Black Luster Ritual',
            description: 'Use ancient magic to unleash hell on your opponents',
            damage: 650,
            cooldown: 2,
            currentCooldown: 0,
            type: 'attack'
        },
        move3: {
            name: 'Legacy Of The Black Luster Soldiers',
            description: 'Black Luster Soldier harnesses the power of his ancestors to finish off your opponents',
            damage: 550,
            cooldown: 1,
            currentCooldown: 0,
            type: 'attack'
        }
    },

    kashtiraUnicornStats: {
        name: 'Kashtira Unicorn',
        image: 'https://th.bing.com/th/id/OIP.o9z-2tyT-TOK0N8hmYixigHaK3?w=203&h=298&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        health: 2100,
        maxHealth: 2100,
        speed: 1000,
        move1: {
            name: 'Kashtiratheosis',
            description: 'Use Kashtira Unicorns power to crush your opponents',
            damage: 700,
            cooldown: 2,
            currentCooldown: 0,
            type: 'attack'
        },
        move2: {
            name: 'Kashtira Akstra',
            description: 'Kashtira Unicorn uses ancient magic to shatter your opponent into pieces',
            damage: 800,
            cooldown: 3,
            currentCooldown: 0,
            type: 'attack'
        },
        move3: {
            name: 'Kashtira Overlap',
            description: 'Use Kashtira Unicorns abilities reduce your enemies to dust',
            damage: 600,
            cooldown: 1,
            currentCooldown: 0,
            type: 'attack'
        }
    },

    heroNeosStats: {
        name: 'Elemental Hero Neos',
        image: 'https://th.bing.com/th/id/OIP.vREM0e00bkRL2NLloK7LZAHaK3?w=203&h=298&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        health: 2000,
        maxHealth: 2000,
        speed: 900,
        move1: {
            name: 'Neos Force',
            description: 'Use the great strength of Neos to anhilate your opponent',
            damage: 850,
            cooldown: 3,
            currentCooldown: 0,
            type: 'attack'
        },
        move2: {
            name: 'Fifth Hope',
            description: 'Neos uses the techniques of his allies to unleasha devastating attack',
            damage: 700,
            cooldown: 2,
            currentCooldown: 0,
            type: 'attack'
        },
        move3: {
            name: 'Spark Blaster',
            description: 'Neos fires bolts of electricity at your opponents',
            damage: 500,
            cooldown: 1,
            currentCooldown: 0,
            type: 'attack'
        }
    }
}
localStorage.setItem('allCards', JSON.stringify(monsterStats));
const cards = document.getElementById('cards');
const drawHighlight = document.getElementById('draw-highlight');
const backCardImage = 'https://th.bing.com/th/id/OIP.0x4CeXmIq4eMaU3Xqgo2lAAAAA?w=203&h=295&c=7&r=0&o=5&dpr=1.5&pid=1.7';
const faceDownCard = document.getElementById('face-down-card');
const drawCard = document.getElementById('draw');
const nextPageBtn = document.getElementById('next-page');

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
    cards.innerHTML += card;
}
const monsterCards = document.querySelectorAll('.monster-card');

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

localStorage.setItem('enemyMonster', 'Drugs');
localStorage.setItem('defeatedMonsters', 0);
const draw = new Draw();
drawHighlight.addEventListener('click', () => {
    draw.randomCard();
})