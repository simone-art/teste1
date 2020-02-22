const input = document.querySelector(".input-pokemon");
const botao = document.querySelector(".btn-information");
const container = document.getElementById("container-pokemon");
const card = document.querySelector('#cards');
const input3 = document.getElementById("pokemon-numero");

//API ENDPOINT//
const pokemon = "https://pokeapi.co/api/v2/pokemon/"

//FUNÇAO NO BOTÂO//
botao.addEventListener('click', (e) => ConsultarPokemon());

// let pokemonNumero = pokemon.id;
// let name = pokemon.name;


function ConsultarPokemon() {
    event.preventDefault();
    const id = input3.value;
    console.log(id);

    fetch(`https://pokeapi.co/api/v2/pokemon/?q=${id}`)

    .then(function (response) {
        return response.json();
        })
    .then(function(pokemon) {
           console.log(pokemon.results[id].name)
           card.innerHTML = `
    <h1>Name:${pokemon.results[id].name}</h1>
    `
    })
    .catch(err => console.log(err));
}




