// Set DOM variables
const attackBtn = document.getElementById('attackBtn')
const rollTotalSpan = document.getElementById('rollTotal')
const diceImage = document.getElementById('diceImage')
const pokemonImage = document.getElementById('pokemonImage')
const monsterImage = document.getElementById('monsterImage')

const bgArray = ['assets/images/dungeon-bg-1.png', 'assets/images/dungeon-bg-2.png', 'assets/images/dungeon-bg-3.png', 'assets/images/dungeon-bg-4.png', 'assets/images/dungeon-bg-5.png', 'assets/images/dungeon-bg-6.png']

function setBackground() {
    const choice = Math.floor(Math.random() * bgArray.length)
    document.body.style = `background-image: url(${bgArray[choice]});`
}


/* ------------------- FUNCTIONS FOR DICE ROLLS --------------------- */

// One roll of a specified numbered die
function rollDice(number) {
    let result = Math.ceil(Math.random() * number)
    console.log(result)
    return result
}

// Multiple rolls of the same numbered die
function multiRoll(rolls, number) {
    let result = 0;
    for (let i = 0; i < rolls; i++) {
        result += rollDice(number)
    }
    console.log("Total: " + result)
    return result
}
/* ------------------------------------------------------------------------- */

/* ------------------- FUNCTIONS FOR BATTLE ANIMATIONS --------------------- */

// Toggle whether pokemon image is visible so it can flash in and out
function togglePokemonVisibility() {
    pokemonImage.classList.toggle('invisible');
};
// Toggle whether monster image is visible so it can flash in and out
function toggleMonsterVisibility() {
    monsterImage.classList.toggle('invisible');
};

// Pokemon hits monster, does not take monster to 0 HP
function pokemonHits() {
    pokemonImage.classList.add('translate-y-[25%]')
    
    setTimeout(function() {
        pokemonImage.classList.remove('translate-y-[25%]')
        pokemonImage.classList.add('translate-x-[100%]')
        toggleMonsterVisibility()
    }, 150)
    setTimeout(function() {
        pokemonImage.classList.remove('translate-x-[100%]')
    }, 200)
    setTimeout(toggleMonsterVisibility, 400)
    setTimeout(toggleMonsterVisibility, 600)
    setTimeout(toggleMonsterVisibility, 800)
}

// Pokemon hits monster to 0 HP
function pokemonWins() {
    pokemonImage.classList.add('translate-y-[25%]')
    
    setTimeout(function() {
        pokemonImage.classList.remove('translate-y-[25%]')
        pokemonImage.classList.add('translate-x-[100%]')
        monsterImage.classList.add('origin-bottom','rotate-90', '-translate-x-[25%]', '-translate-y-[25%]')
    }, 150)
    setTimeout(function() {
        pokemonImage.classList.remove('translate-x-[100%]')
    }, 200)
    setTimeout(toggleMonsterVisibility, 400)
    setTimeout(toggleMonsterVisibility, 600)
    setTimeout(toggleMonsterVisibility, 800)
    setTimeout(toggleMonsterVisibility, 1000)
}

// Monster hits pokemon, does not take pokemon to 0 HP
function monsterHits() {
    monsterImage.classList.add('translate-y-[25%]')
    
    setTimeout(function() {
        monsterImage.classList.remove('translate-y-[25%]')
        monsterImage.classList.add('-translate-x-[100%]')
        togglePokemonVisibility()
    }, 150)
    setTimeout(function() {
        monsterImage.classList.remove('-translate-x-[100%]')
    }, 200)
    setTimeout(togglePokemonVisibility, 400)
    setTimeout(togglePokemonVisibility, 600)
    setTimeout(togglePokemonVisibility, 800)
}

// Monster hits pokemon to 0 HP
function monsterWins() {
    monsterImage.classList.add('translate-y-[25%]')
    
    setTimeout(function() {
        monsterImage.classList.remove('translate-y-[25%]')
        monsterImage.classList.add('-translate-x-[100%]')
        pokemonImage.classList.add('origin-bottom','-rotate-90', 'translate-x-[25%]', '-translate-y-[25%]')
    }, 150)
    setTimeout(function() {
        monsterImage.classList.remove('-translate-x-[100%]')
    }, 200)
    setTimeout(togglePokemonVisibility, 400)
    setTimeout(togglePokemonVisibility, 600)
    setTimeout(togglePokemonVisibility, 800)
    setTimeout(togglePokemonVisibility, 1000)
}
/* ------------------------------------------------------------------------------- */


// Init

setBackground()

// Event listener
attackBtn.addEventListener('click', function(e) {
    // These roll parameters will change based on attack
    const rollTotal = multiRoll(6, 8)
    rollTotalSpan.innerText = rollTotal
    diceImage.src = 'assets/images/d-20-still.png'
    diceImage.alt = 'image of a d20'
    // Will remove these - this is just to show how the animations look
    pokemonHits()
    setTimeout(monsterHits, 2000)
    setTimeout(pokemonWins, 4000)
})
