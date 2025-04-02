const historySection = document.getElementById('history-section');
const cardDiv = document.getElementById('card-div');
const blueEyesHealth = document.getElementById('enemy-health');
const darkMagicianHealth = document.getElementById('player-health');
const resetDiv = document.getElementById('restart-div');
const winLose = document.getElementById('win-lose');
const filter = document.getElementById('filter');

class Monster {
    // Assign properties
    constructor(health, speed, abilities, name) {
        this.health = health;
        this.speed = speed;
        this.abilities = abilities;
        this.name = name;
    }

    // Logic for the monsters attack
    attack(target, ability) {
        if (ability.currentCooldown === 0 || ability.currentCooldown >= ability.cooldown) {
            target.health -= ability.damage;
            for (let move in this.abilities) {
                this.abilities[move].currentCooldown++;
            }
            return true;
        }
        return false;
    }

    // Display all monster abilities to user
    displayAbilities() {
        for (let move in this.abilities) {
            const ability = this.abilities[move];
            const delay = ability.currentCooldown === 0 ? 0 : ability.cooldown - ability.currentCooldown;
            const buttonContent = `<h3>${ability.name}</h2>
            <p>${ability.description}</p>
            <p>${ability.damage} Damage</p>
            <p class="cooldown">${ability.cooldown} Move Cooldown</p>
            <p class="current-cooldown">${delay} Moves Left</p>`
            // Disable cards that are on cooldown
            cardDiv.innerHTML += (ability.currentCooldown > 0 && ability.currentCooldown != ability.cooldown) ? `<button class="card" data-name="${move}" disabled>${buttonContent}</button>` : `<button class="card card-hover" data-name="${move}">${buttonContent}</button>`;
        }
        const abilityCards = Array.from(document.getElementsByClassName('card'));
        abilityCards.forEach(card => card.addEventListener('click', event => battle.calculateUserDamage(event)));
    }

}

class Battle {
    // create the player and enemy monster
    constructor() {
        this.turn = 0;
        const darkMagicianAbilities = {
            darkMagicAttack: {
                name: 'Dark Magic Attack',
                description: 'A powerful blast of pure dark magic concentrated on your enemy.',
                damage: 700,
                cooldown: 2,
                currentCooldown: 0,
                type: 'attack'
            },
            darkMagicTwinBurst: {
                name: 'Dark Magic Twin Burst',
                description: 'Borrow some of Dark Magician Girls power to anhilate your enemy.',
                damage: 900,
                cooldown: 3,
                currentCooldown: 0,
                type: 'attack'
            },
            darkMagicalCircle: {
                name: 'Dark Magical Circle',
                description: 'Surround and trap your opponent with dark magic as it closes in for a lethal slice.',
                damage: 500,
                cooldown: 1,
                currentCooldown: 0,
                type: 'attack'
            }
        }
        this.player = new Monster(2100, 1000, darkMagicianAbilities, 'Dark Magician');

        const blueEyesAbilities = {
            whiteLightning: {
                name: 'White Lightning',
                description: 'Use the dragons power over lightning to destroy your opponent.',
                damage: 800,
                cooldown: 3,
                currentCooldown: 0,
                type: 'attack'
            },
            successorSoul: {
                name: 'Successor Soul',
                description: 'Use the power of fallen dragons to lay waste to your enemy.',
                damage: 600,
                cooldown: 2,
                currentCooldown: 0,
                type: 'attack'
            },
            burstStreamOfDestruction: {
                name: 'Burst Stream Of Destruction',
                description: 'Use Blue Eyes White Dragons raw power to destroy your opponents',
                damage: 550,
                cooldown: 1,
                currentCooldown: 0,
                type: 'attack'
            }
        }
        this.blueEyes = new Monster(2500, 800, blueEyesAbilities, 'Blue Eyes White Dragon');
    }

    chooseFirstTurn() {
        if (this.player.speed > this.blueEyes.speed) {
            return this.player;
        }
        return this.blueEyes;
    }

    // Identify the ability chosen by the user
    userChooseAbility(event) {
        const card = event.target.closest('.card');
        const abilityName = card.dataset.name;
        for (let move in this.player.abilities) {
            if (abilityName === move) {
                return this.darkMagician.abilities[move];
            }
        }
    }

    // Update all of the cooldowns for the monsters abilities
    updateCooldowns(monster, ability) {
        for (let move in monster.abilities) {
            const moveStats = monster.abilities[move];
            if (moveStats.currentCooldown > 0) {
                moveStats.currentCooldown = moveStats.currentCooldown >= moveStats.cooldown ? moveStats.cooldown : moveStats.currentCooldown+1;
            } else if (moveStats.currentCooldown === 0 && ability === moveStats) {
                moveStats.currentCooldown++;
            }
        }
    }

    // Calculate and display the damage dealt by user
    calculateUserDamage(event) {
        const ability = this.userChooseAbility(event);
        if (ability.currentCooldown === 0 || ability.currentCooldown === ability.cooldown) {
            this.blueEyes.health -= ability.damage;
            this.blueEyes.health = this.blueEyes.health < 0 ? 0 : this.blueEyes.health;
            ability.currentCooldown = 0;

            this.updateCooldowns(this.darkMagician, ability);

            cardDiv.innerHTML = '';
            this.darkMagician.displayAbilities();
            blueEyesHealth.innerText = `Enemy Health: ${this.blueEyes.health}`;
            historySection.innerHTML += `<p class="player-move">\n${this.darkMagician.name} used ${ability.name} against ${this.blueEyes.name}, dealing ${ability.damage} damage.</p>`;
            this.playBattle();
        }
    }

    // Calculates and displays computer damage
    calculateComputerDamage() {
        while (true) {
            const randomNum = Math.floor(Math.random() * 3);
            let count = 0;
            for (let move in this.blueEyes.abilities) {
                const ability = this.blueEyes.abilities[move];
                if (count === randomNum && (ability.currentCooldown === 0 || ability.currentCooldown === ability.cooldown)) {
                    this.darkMagician.health -= ability.damage;
                    this.darkMagician.health = this.darkMagician.health < 0 ? 0 : this.darkMagician.health;
                    ability.currentCooldown = 0;
                    this.updateCooldowns(this.blueEyes, ability);
                    darkMagicianHealth.innerText = `Your Health: ${this.darkMagician.health}`;
                    historySection.innerHTML += `<p class="enemy-move"> ${this.blueEyes.name} used ${ability.name} against ${this.darkMagician.name}, dealing ${ability.damage} damage.</p>`;
                    this.playBattle();
                    return;
                }
                count++;
            }
        }
    }

    // Complete a turn
    playBattle() {
        this.firstTurn = this.turn === 0 ? this.chooseFirstTurn() : this.firstTurn;
        this.turn++;
        cardDiv.innerHTML = '';
        this.darkMagician.displayAbilities();
        const cards = Array.from(document.getElementsByClassName('card'));

        if (this.firstTurn === this.darkMagician && this.darkMagician.health > 0 && this.blueEyes.health > 0) {
            // Player turn
            historySection.innerHTML += `<p>-----TURN ${this.turn}----- YOUR TURN </p>`;
            cardDiv.innerHTML = '';
            this.darkMagician.displayAbilities();
            this.firstTurn = this.blueEyes;
        } else if (this.darkMagician.health === 0) {
            // Lose
            winLose.innerText = 'YOU LOSE!';
            cards.forEach(card => {
                card.disabled = true;
                card.classList.remove('card-hover');
            });
            filter.style.display = 'block';
            filter.classList.add('screen-filter');
            filter.classList.add('screen-filter-red');
            resetDiv.style.display = 'flex';
        } else if (this.blueEyes.health === 0) {
            // Win
            winLose.innerText = 'YOU WIN!';
            cards.forEach(card => {
                card.disabled = true;
                card.classList.remove('card-hover');
            });
            filter.style.display = 'block';
            filter.classList.add('screen-filter');
            resetDiv.style.display = 'flex';
        }
         else {
            // Enemy turn 
            historySection.innerHTML += `<p>-----TURN ${this.turn}----- ENEMY TURN</p>`;
            setTimeout(() => {this.calculateComputerDamage();}, 5000);
            cards.forEach(card => {
                card.disabled = true;
                card.classList.remove('card-hover');
            });
            this.firstTurn = this.darkMagician;
        }
    }
}

const battle = new Battle();
battle.playBattle();