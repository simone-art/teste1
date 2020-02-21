const input = document.querySelector(".input-pokemon");
const botao = document.querySelector(".btn-information");
const container = document.getElementById("container-pokemon");
const card = document.querySelector('#cards');
// const url = 'https://pokeapi.co/api/v2/pokemon/80'

const url = 'https://pokeapi.co/api/v2/pokemon/?q=${valorInput}'


botao.addEventListener('click', (e) => fazerFetch(e));

function CarregarPokemon(id) {
    // event.preventDefault();
    // const id = input.value;
    // console.log(id)
    // const valorInput = input.value;
    // console.log(valorInput);
    // const url = 'https://pokeapi.co/api/v2/version/';
    // const url = './data/data.json';
    // const data = JSON.parse(data/data.json)
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
    // fetch('https://pokeapi.co/api/v2/pokemon/80')
    .then(function (response) {
        return response.json();
        })
        .then(function (pokemon) {
            let card = document.getElementById('cards')
            card.innerHTML = `
            <p>${pokemon.name}</p>
            `;
            console.log(pokemon.name);
        })
        
    }
    
    CarregarPokemon(1)
    
    // <img src = '${data.sprites.front_default}'/>//
// function showPokemon(jsonObj) {
//     let pokemon = jsonObj['pokemon']

//     for (var i = 0; i < pokemon.length; i++) {
//     const h1 = document.createElement('h1')
//     h1.textContent = name.value;
//     const url = document.createElement('a')
//     url.textContent = url.value;
//     const position = document.createElement('p')
//     position.textContent = position.value;

//     container.appendChild(card);    
//     card.appendChild(h1);
//     card.appendChild(url);
//     card.appendChild(position);
//     }
// }

