const loadScores = JSON.parse( localStorage.getItem('highScores'))

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
            const scoreData = $(`
            <p class="score">${i}. ${score.name} ${pokemonName} <span class='highNumber'>${score.score}</span></p>
            `)
            i++
            scoreList.append(scoreData)
        } else { 
            const scoreData = $(`
            <p class="score">${i}. ${score.name} ${pokemonName} ${score.score}</p>
            `)
            i++
            scoreList.append(scoreData)
        }

    }
}

showHighscores()