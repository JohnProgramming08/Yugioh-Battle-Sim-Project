const defeatedMonstersDisplay = document.getElementById('defeated');
const defeatedMonsters = JSON.parse(localStorage.getItem('defeatedMonsters'));
defeatedMonstersDisplay.innerText = `You managed to defeat a total of ${defeatedMonsters} monsters!`;