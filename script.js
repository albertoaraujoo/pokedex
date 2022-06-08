const fetchPokemon = () => {

    const pokeUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokePromises = [];

    for (let i = 1; i <= 151; i++){

        pokePromises.push(fetch(pokeUrl(i)).then(res => res.json()))
       
    }

    Promise.all(pokePromises)
    .then(pokemon => {

       const pokeList = pokemon.reduce((acc, poke) => {

        acc += `<div class="card-pokemon"  >
                    <img src="./assets/${poke.name}.png">
                   <div class="pokeInfo">
                   <div class="pokeName first-letter">
                   ${poke.id}. ${poke.name}
                </div>
         
               <div class="pokeType">
                ${poke.types.map(typeInfo => `<span class="${typeInfo.type.name}"> ${typeInfo.type.name} </span>`).join('   ')}
                 </div>
                 </div>
                </div>`
        return acc
       }, '')

      document.getElementById('container').innerHTML = pokeList
        
      
    })

}

fetchPokemon()


let imgHeader = document.getElementById('img-header');

setInterval ( () =>{

    imgHeader.src = `./img/${Math.floor((Math.random() * 6) + 1 )}.png`
    
}, 2000)






