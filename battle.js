const historySection = document.getElementById("history-section");
const cardDiv = document.getElementById("card-div");
const enemyHealth = document.getElementById("enemy-num");
const playerHealth = document.getElementById("player-num");
const resetDiv = document.getElementById("restart-div");
const winLose = document.getElementById("win-lose");
const filter = document.getElementById("filter");
const enemyImg = document.getElementById("enemy-img");
const playerImg = document.getElementById("player-img");
const startText = document.getElementById("start-text");
const defeatedMonstersText = document.getElementById("monsters-defeated");
const turnDiv = document.getElementById("turn-change-div");
const playerMonster = JSON.parse(localStorage.getItem("selectedMonster"));
const enemyMonster = JSON.parse(localStorage.getItem("enemyMonster"));
const chosenCards = JSON.parse(localStorage.getItem("chosenCards"));
const defeatedMonsters = JSON.parse(localStorage.getItem("defeatedMonsters"));
localStorage.setItem("battleStarted", 1);

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
    if (
      ability.currentCooldown === 0 ||
      ability.currentCooldown >= ability.cooldown
    ) {
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
      const delay =
        ability.currentCooldown === 0
          ? 0
          : ability.cooldown - ability.currentCooldown;
      const buttonContent = `<h3 class="ability-name">${ability.name}</h2>
            <div class="damage"><i class="fas fa-exclamation-triangle"></i><p>${ability.damage} damage</p></div>
            <div class="cooldown"><i class="fas fa-clock"></i><p>${delay} turn/s</p></div>
            <p class="description">${ability.description}</p>`;
      // Disable cards that are on cooldown
      cardDiv.innerHTML +=
        ability.currentCooldown > 0 &&
        ability.currentCooldown != ability.cooldown
          ? `<button class="card" data-name="${move}" disabled>${buttonContent}</button>`
          : `<button class="card card-hover" data-name="${move}">${buttonContent}</button>`;
    }
    const abilityCards = Array.from(document.getElementsByClassName("card"));
    abilityCards.forEach((card) =>
      card.addEventListener("click", (event) =>
        battle.calculateUserDamage(event)
      )
    );
  }
}

class Battle {
  // Create the player and enemy monster
  constructor() {
    this.turn = 0;

    const playerAbilities = {
      move1: playerMonster.move1,
      move2: playerMonster.move2,
      move3: playerMonster.move3,
    };
    playerHealth.innerText = playerMonster.health;
    playerImg.src = playerMonster.image;
    this.player = new Monster(
      playerMonster.health,
      playerMonster.speed,
      playerAbilities,
      playerMonster.name
    );

    const enemyAbilities = {
      move1: enemyMonster.move1,
      move2: enemyMonster.move2,
      move3: enemyMonster.move3,
    };
    enemyHealth.innerText = enemyMonster.health;
    enemyImg.src = enemyMonster.image;
    this.enemy = new Monster(
      enemyMonster.health,
      enemyMonster.speed,
      enemyAbilities,
      enemyMonster.name
    );
  }

  // Update the local storage monster stats
  updateStorage() {
    if (this.enemy.health === 0) {
      localStorage.setItem("defeatedMonsters", defeatedMonsters + 1);
    }
    for (const key in chosenCards) {
      if (chosenCards[key].name === playerMonster.name) {
        playerMonster.health = this.player.health;
        chosenCards[key] = playerMonster;
        localStorage.setItem("chosenCards", JSON.stringify(chosenCards));
        enemyMonster.health = this.enemy.health;
        localStorage.setItem("enemyMonster", JSON.stringify(enemyMonster));
      }
    }
  }

  // Decide which monster goes first
  chooseFirstTurn() {
    if (this.player.speed > this.enemy.speed) {
      return this.player;
    }
    return this.enemy;
  }

  // Identify the ability chosen by the user
  userChooseAbility(event) {
    const card = event.target.closest(".card");
    const abilityName = card.dataset.name;
    for (let move in this.player.abilities) {
      if (abilityName === move) {
        return this.player.abilities[move];
      }
    }
  }

  // Update all of the cooldowns for the monsters abilities
  updateCooldowns(monster, ability) {
    for (let move in monster.abilities) {
      const moveStats = monster.abilities[move];
      if (moveStats.currentCooldown > 0) {
        moveStats.currentCooldown =
          moveStats.currentCooldown >= moveStats.cooldown
            ? moveStats.cooldown
            : moveStats.currentCooldown + 1;
      } else if (moveStats.currentCooldown === 0 && ability === moveStats) {
        moveStats.currentCooldown++;
      }
    }
  }

  // Calculate and display the damage dealt by user
  calculateUserDamage(event) {
    // Attack animation
    playerImg.classList.add("player-attack-class");
    playerImg.classList.remove("shake-class");
    setTimeout(() => {
      playerImg.classList.remove("player-attack-class");
      playerImg.classList.add("shake-class");
    }, 2000);

    // Damage logic
    const ability = this.userChooseAbility(event);
    if (
      ability.currentCooldown === 0 ||
      ability.currentCooldown === ability.cooldown
    ) {
      this.enemy.health -= ability.damage;
      this.enemy.health = this.enemy.health < 0 ? 0 : this.enemy.health;
      ability.currentCooldown = 0;

      this.updateCooldowns(this.player, ability);
      cardDiv.innerHTML = "";
      this.player.displayAbilities();
      enemyHealth.innerText = this.enemy.health;
      historySection.innerHTML += `<p class="player-move">\n${this.player.name} used ${ability.name} against ${this.enemy.name}, dealing ${ability.damage} damage.</p>`;
      this.playBattle();
    }
  }

  // Calculates and displays computer damage
  calculateComputerDamage() {
    while (true) {
      const randomNum = Math.floor(Math.random() * 3);
      let count = 0;
      for (let move in this.enemy.abilities) {
        const ability = this.enemy.abilities[move];
        if (
          count === randomNum &&
          (ability.currentCooldown === 0 ||
            ability.currentCooldown === ability.cooldown)
        ) {
          this.player.health -= ability.damage;
          this.player.health = this.player.health < 0 ? 0 : this.player.health;
          ability.currentCooldown = 0;
          this.updateCooldowns(this.enemy, ability);
          playerHealth.innerText = this.player.health;
          historySection.innerHTML += `<p class="enemy-move"> ${this.enemy.name} used ${ability.name} against ${this.player.name}, dealing ${ability.damage} damage.</p>`;
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
    cardDiv.innerHTML = "";
    this.player.displayAbilities();
    const cards = Array.from(document.getElementsByClassName("card"));

    if (
      this.firstTurn === this.player &&
      this.player.health > 0 &&
      this.enemy.health > 0
    ) {
      // Player turn
      cards.forEach((card) => {
        card.disabled = true;
        card.classList.remove("card-hover");
      });

      // Turn slide animation
      setTimeout(() => {
        turnDiv.innerHTML = `<h4>Turn ${this.turn}</h4>`;
        turnDiv.style.display = "block";
        turnDiv.classList.add("slide-class");
        historySection.innerHTML += `<p>-----TURN ${this.turn}----- YOUR TURN </p>`;
      }, 1500);
      setTimeout(() => {
        turnDiv.style.display = "none";
        turnDiv.classList.remove("slide-in");
        cardDiv.innerHTML = "";
        this.player.displayAbilities();
        this.firstTurn = this.enemy;
      }, 4485);
    } else if (this.player.health === 0) {
      // Lose
      this.updateStorage();
      winLose.innerText = "YOU LOSE!";
      cards.forEach((card) => {
        card.disabled = true;
        card.classList.remove("card-hover");
      });
      filter.style.display = "block";
      filter.classList.add("screen-filter");
      filter.classList.add("screen-filter-red");
      resetDiv.style.display = "flex";
    } else if (this.enemy.health === 0) {
      // Win
      this.updateStorage();
      winLose.innerText = "YOU WIN!";
      defeatedMonstersText.innerText = `Monsters Defeated: ${
        defeatedMonsters + 1
      }`;
      cards.forEach((card) => {
        card.disabled = true;
        card.classList.remove("card-hover");
      });
      filter.style.display = "block";
      filter.classList.add("screen-filter");
      resetDiv.style.display = "flex";
    } else {
      // Enemy turn
      cards.forEach((card) => {
        card.disabled = true;
        card.classList.remove("card-hover");
      });
      this.firstTurn = this.player;

      // Turn slide animation
      setTimeout(() => {
        turnDiv.innerHTML = `<h4>Turn ${this.turn}</h4>`;
        turnDiv.style.display = "block";
        turnDiv.classList.add("slide-class");
        historySection.innerHTML += `<p>-----TURN ${this.turn}----- ENEMY TURN</p>`;
      }, 1500);
      setTimeout(() => {
        turnDiv.style.display = "none";
        turnDiv.classList.remove("slide-class");
      }, 4480);

      // Attack animation
      setTimeout(() => {
        this.calculateComputerDamage();
        enemyImg.classList.add("enemy-attack-class");
        enemyImg.classList.remove("shake-class");
      }, 7480);
      setTimeout(() => {
        enemyImg.classList.remove("enemy-attack-class");
        enemyImg.classList.add("shake-class");
      }, 9480);
    }
  }
}

startText.innerText = `The battle begins, you face off against ${enemyMonster.name}!`;
const battle = new Battle();
battle.playBattle();
