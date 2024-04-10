fetch(`https://www.dnd5eapi.co/api/monsters/mimic`)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(JSON.stringify(data,null,2))
    })


    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(JSON.stringify(data,null,2))
    })