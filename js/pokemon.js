const input = document.querySelector(".input-pokemon");
const botao = document.querySelector(".btn-information");
const container = document.getElementById("container-pokemon");
const card = document.querySelector('.cards');
const input3 = document.getElementById("pokemon-numero");
const lista = document.getElementById("listaPokemon")

//API ENDPOINT//
const pokemon = "https://pokeapi.co/api/v2/pokemon/"



//FUNÇAO NO BOTÂO//
botao.addEventListener('click', (e) => ConsultarPokemon());


function ConsultarPokemon() {
    event.preventDefault();
    const id = input3.value;
    console.log(id);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/?q=${id}.png`)
    
    .then(function (response) {
        return response.json();
    })
    .then(function(pokemon) {
        console.log(pokemon.results[id].name)
        console.log(pokemon.results[id].url)
        card.innerHTML = `
        <h1>Name:${pokemon.results[id].name}</h1>
        <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
        <h2> Tipo: "https://pokeapi.co/api/v2/type/${id}/"</h2>
        `
    })
    
}

const select = document.getElementById('opcao');
const opcoes = document.getElementById('opcao')
opcoes.addEventListener('click', (e) => MostrarVariosPokemon());

function MostrarVariosPokemon(){
    let valorDez = document.getElementById(valorInput1);
    valorDez = valorInput1.value
    console.log(valorInput1.value)
    let valorVinte = document.getElementById(valorInput2);
    valorVinte = valorInput2.value
    console.log(valorInput2.value)
    let valorTrinta = document.getElementById(valorInput3);
    valorTrinta = valorInput3.value
    console.log(valorInput3.value)




}

{/* <img src= "https://pokeapi.co/api/v2/ability/${id}/effect_changes/effect"></img> */}

// function MostrarPokemon(){
//     let imagem = document.getElementsByTagName("img")[0]
//     document.setAttribute("src", pokemon.results[id].sprites.front_default)
    
//     card.innerHTML = `
//         <img src="${imagem}">
//             <h1>Name:${pokemon.results[id].name}</h1>
            
//         `
    
//     .catch(err => console.log(err));
// }




