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
                const id = selected.value;

                // function getName(item) {
                //     let fullname = [item.name].join("");
                //     return fullname;
                // }

                // function getUrl(item) {
                //     let fullurl = [item.url].join(" ");
                //     return fullurl;
                // }

                card1.innerHTML = `
                <h1>Name:${pokemon.results[0].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
                `
                card2.innerHTML = `
                <h1>Name:${pokemon.results[1].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png">
            `
                card3.innerHTML = `
                <h1>Name:${pokemon.results[2].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png">

                `
                card4.innerHTML = `
                <h1>Name:${pokemon.results[3].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png">

                `
                card5.innerHTML = `
                <h1>Name:${pokemon.results[4].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png">
                `
                card6.innerHTML = `
                <h1>Name:${pokemon.results[5].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">

                `
                card7.innerHTML = `
                <h1>Name:${pokemon.results[6].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png">

                `
                card8.innerHTML = `
                <h1>Name:${pokemon.results[7].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png">

                `
                card9.innerHTML = `
                <h1>Name:${pokemon.results[8].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png">

                `
                card10.innerHTML = `
                <h1>Name:${pokemon.results[9].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png">

                `
        

            }

        })
}


function MostrarSelectedPokemonVinte() {

    let valor = document.getElementById("opcoes").value;
    let texto = document.getElementById("opcoes");
    let selected = texto.options[texto.selectedIndex].text
    // const id = []
    // let name = []
    console.log(selected)

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=20`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.results)
            console.log(pokemon.results.url)
            console.log(pokemon)

            if (selected == 20) {

                let pokemonResults = []
                const id = selected.value;

                // function getName(item) {
                //     let fullname = [item.name].join("");
                //     return fullname;
                // }

                // function getUrl(item) {
                //     let fullurl = [item.url].join(" ");
                //     return fullurl;
                // }

                card1.innerHTML = `
                <h1>Name:${pokemon.results[10].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png">
                `
                card2.innerHTML = `
                <h1>Name:${pokemon.results[11].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png">
            `
                card3.innerHTML = `
                <h1>Name:${pokemon.results[12].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png">

                `
                card4.innerHTML = `
                <h1>Name:${pokemon.results[13].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png">

                `
                card5.innerHTML = `
                <h1>Name:${pokemon.results[14].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png">
                `
                card6.innerHTML = `
                <h1>Name:${pokemon.results[15].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png">

                `
                card7.innerHTML = `
                <h1>Name:${pokemon.results[16].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png">

                `
                card8.innerHTML = `
                <h1>Name:${pokemon.results[17].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png">

                `
                card9.innerHTML = `
                <h1>Name:${pokemon.results[18].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png">

                `
                card10.innerHTML = `
                <h1>Name:${pokemon.results[19].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png">

                `
        

            }

        })
}
