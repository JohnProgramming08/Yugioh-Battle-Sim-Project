const monsterStats = {
    darkMagicianStats: {
        image: 'https://vignette1.wikia.nocookie.net/yugioh/images/b/b3/DarkMagician-SD6-EN-C-UE.png/revision/latest?cb=20160331211958',
        health: 2100,
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
        image: 'https://dacardworld2.imgix.net/23584.jpg?auto=format%2Ccompress&fm=jpg&h=1800&ixlib=php-1.2.1&w=1800&s=18a4edeacc35f29f0fafc6395f1b7538',
        health: 2500,
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
        image: 'https://product-images.tcgplayer.com/491813.jpg',
        health: 2000,
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
        image: 'https://www.cardtrader.com/uploads/blueprints/image/264491/show_diabellstar-the-black-witch-secret-rare-age-of-overlord.jpg',
        health: 2000,
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
        image: 'https://th.bing.com/th/id/OIP.nPHfC2qqBy4iK3462m8EfAAAAA?w=203&h=295&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        health: 2200,
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
        image: 'https://th.bing.com/th/id/OIP.PG3eyssI7qxmviuDHv5j2AHaKv?w=203&h=295&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        health: 2500,
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
        image: 'https://th.bing.com/th/id/OIP.o9z-2tyT-TOK0N8hmYixigHaK3?w=203&h=298&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        health: 2100,
        speed: 1000,
        move1: {
            name: 'Kashtiratheosis',
            description: 'Use Kashtira Unicorns power to crush your opponents',
            damage: 700,
            coldown: 2,
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
            decription: 'Use Kashtira Unicorns abilities reduce your enemies to dust',
            damage: 600,
            cooldown: 1,
            currentCooldown: 0,
            type: 'attack'
        }
    },

    heroNeosStats: {
        image: 'https://th.bing.com/th/id/OIP.vREM0e00bkRL2NLloK7LZAHaK3?w=203&h=298&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        health: 2000,
        speed: 900,
        move1: {
            name: 'Neos Force',
            decription: 'Use the great strength of Neos to anhilate your opponent',
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
const cards = document.getElementById('cards');

for (const key in monsterStats) {
    const monster = monsterStats[key];
    const card = `<div class="monster-card">
                <img src=${monster.image}>
                <div class="monster-info">
                    <p>Health: ${monster.health}</p>
                    <p>${monster.move1.name}: ${monster.move1.damage} damage</p>
                    <p>${monster.move2.name}: ${monster.move2.damage} damage</p>
                    <p>${monster.move3.name}: ${monster.move3.damage} damage</p>
                </div>
            </div>`;
    cards.innerHTML += card;
}