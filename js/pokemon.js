const input = document.querySelector(".input-pokemon");
const botao = document.querySelector(".btn-information");
const container = document.getElementById("container-pokemon");
const card = document.querySelector('.cards');
const input3 = document.getElementById("pokemon-numero");
const selectedValue = document.getElementById("valorInput")


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
        .then(function (pokemon) {
            console.log(pokemon.results[id].name)
            console.log(pokemon.results[id].url)
            card.innerHTML = `
        <h1>Name:${pokemon.results[id].name}</h1>
        <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
        <h2> Tipo: "https://pokeapi.co/api/v2/type/${id}/"</h2>
        `
        })
}

function MostrarSelectedPokemon() {

    let valor = document.getElementById("opcoes").value;
    let texto = document.getElementById("opcoes");
    let selected = texto.options[texto.selectedIndex].text
    // const id = []
    // let name = []
    console.log(selected)

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.results)
            console.log(pokemon.results.url)
            console.log(pokemon)

            if (selected == 10) {

                let pokemonResults = []
                
                function getName(item) {
                    let fullname = [item.name].join("");
                    return fullname;
                }

                function getUrl(item) {
                    let fullurl = [item.url].join(" ");
                    return fullurl;
                }

                card1.innerHTML = `
                <h1>Name:${pokemon.results.map(getName)}</h1>
                <h1>Url:${pokemon.results.map(getUrl)}</h1>
                `
                card2.innerHTML = `
                <h1>Name:${pokemon.results.map(getName)}</h1>
            `
                // card3.innerHTML = `
                // <h1>Name:${pokemon.results[2].name}</h1>

                // `
                // card3.innerHTML = `
                // <h1>Name:${pokemon.results[3].name}</h1>

                // `
                // card4.innerHTML = `
                // <h1>Name:${pokemon.results[4].name}</h1>

                // `
                // card5.innerHTML = `
                // <h1>Name:${pokemon.results[5].name}</h1>

                // `
                // <h1>Name:${pokemon.results[3].name}</h1>
                // <h1>Name:${pokemon.results[4].name}</h1>
                // <h1>Name:${pokemon.results[5].name}</h1>
                // <h1>Name:${pokemon.results[6].name}</h1>
                // <h1>Name:${pokemon.results[7].name}</h1>
                // <h1>Name:${pokemon.results[8].name}</h1>
                // // <h1>Name:${pokemon.results[9].name}</h1>

                // <h2> url: ${pokemon.results[0].url}</h2>

                // `


            }

        })
}

//Criar Cards//

// const cardNames = [];
// const cardUrl = [];

// function cardCreate (cardNames, cardUrl){
//     this.cardNames = cardNames
//     this.cardUrl = cardUrl
// }

// const createDesk = () => {
// let desk = []
// deck.length = 0;
// cardNames.forEach(_cardName => {
// cardUrl.forEach(_cardUrl => {
//     desk.push(newCard(_cardName, _cardUrl));
//     console.log(deck)
//     deck.forEach(_cardCreate => {
//         let eachCard = document.createElement('div');
//         eachCard.innerHTML = cardCreate.cardNames + "" + cardCreate.cardUrl;
//         eachCard.classList.add('cards')
//         document.getElementById("container-deck").appendChild(eachCard);
//     })
// })

// })
// }