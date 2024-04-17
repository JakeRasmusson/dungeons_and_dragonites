const loadScores = JSON.parse( localStorage.getItem('highScores')) || []

// Capitalize first letter of text
function capitalizeFirstLetter(pokemon){
    return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
}

// Lists the data from local storage onto Highscore box
function showHighscores() {
    const scoreList = $('#scoreList')
    let i = 1
    for (const score of loadScores){
        // Capitalize pokemon names
        const pokemonName = capitalizeFirstLetter(score.pokemon)
        if (score.score >= 10) {
            const scoreName = $(`
            <p class="score">${i}. ${score.name}</p>
            `)
            scoreList.append(scoreName)
            const scorePokemon = $(`
            <p class="score">${pokemonName}</p>
            `)
            scoreList.append(scorePokemon)
            const scoreScore = $(`
            <p class="score highNumber scoreScore">${score.score}</p>
            `)
            scoreList.append(scoreScore)
            i++
        } else { 
            const scoreName = $(`
            <p class="score">${i}. ${score.name}</p>
            `)
            scoreList.append(scoreName)
            const scorePokemon = $(`
            <p class="score">${pokemonName}</p>
            `)
            scoreList.append(scorePokemon)
            const scoreScore = $(`
            <p class="score  scoreScore">${score.score}</p>
            `)
            scoreList.append(scoreScore)
            i++
        }

    }
}

showHighscores()