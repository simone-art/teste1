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
                <h1>Nome:${pokemon.results[0].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
                    <p>Some text. Some text. Some text.</p>
                    <p>Some text. Some text. Some text.</p>
                   
                
                `
                card2.innerHTML = `
                <h1>Nome:${pokemon.results[1].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png">
            `
                card3.innerHTML = `
                <h1>Nome:${pokemon.results[2].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png">

                `
                card4.innerHTML = `
                <h1>Nome:${pokemon.results[3].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png">

                `
                card5.innerHTML = `
                <h1>Nome:${pokemon.results[4].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png">
                `
                card6.innerHTML = `
                <h1>Nome:${pokemon.results[5].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">

                `
                card7.innerHTML = `
                <h1>Nome:${pokemon.results[6].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png">

                `
                card8.innerHTML = `
                <h1>Nome:${pokemon.results[7].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png">

                `
                card9.innerHTML = `
                <h1>Nome:${pokemon.results[8].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png">

                `
                card10.innerHTML = `
                <h1>Nome:${pokemon.results[9].name}</h1>
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

                card11.innerHTML = `
                <h1>Nome:${pokemon.results[10].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png">
                `
                card12.innerHTML = `
                <h1>Nome:${pokemon.results[11].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png">
            `
                card13.innerHTML = `
                <h1>Nome:${pokemon.results[12].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png">

                `
                card14.innerHTML = `
                <h1>Nome:${pokemon.results[13].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png">

                `
                card15.innerHTML = `
                <h1>Nome:${pokemon.results[14].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png">
                `
                card16.innerHTML = `
                <h1>Nome:${pokemon.results[15].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png">

                `
                card17.innerHTML = `
                <h1>Nome:${pokemon.results[16].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png">

                `
                card18.innerHTML = `
                <h1>Nome:${pokemon.results[17].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png">

                `
                card19.innerHTML = `
                <h1>Nome:${pokemon.results[18].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png">

                `
                card20.innerHTML = `
                <h1>Nome:${pokemon.results[19].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png">

                `
        

            }

        })
}



function MostrarSelectedPokemonTrinta() {

    let valor = document.getElementById("opcoes").value;
    let texto = document.getElementById("opcoes");
    let selected = texto.options[texto.selectedIndex].text
    // const id = []
    // let name = []
    console.log(selected)

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=21&limit=30`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.results)
            console.log(pokemon.results.url)
            console.log(pokemon)

            if (selected == 30) {

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

                card21.innerHTML = `
                <h1>Nome:${pokemon.results[20].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png">
                `
                card22.innerHTML = `
                <h1>Nome:${pokemon.results[21].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png">
            `
                card23.innerHTML = `
                <h1>Nome:${pokemon.results[22].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png">

                `
                card24.innerHTML = `
                <h1>Nome:${pokemon.results[23].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png">

                `
                card25.innerHTML = `
                <h1>Nome:${pokemon.results[24].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png">
                `
                card26.innerHTML = `
                <h1>Nome:${pokemon.results[25].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png">

                `
                card27.innerHTML = `
                <h1>Nome:${pokemon.results[26].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png">

                `
                card28.innerHTML = `
                <h1>Nome:${pokemon.results[27].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png">

                `
                card29.innerHTML = `
                <h1>Nome:${pokemon.results[28].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png">

                `
                card30.innerHTML = `
                <h1>Nome:${pokemon.results[29].name}</h1>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png">

                `
        

            }

        })
}

function mostrarCards(){

    const buttonModal = document.getElementById("btn-modal")
    buttonModal.addEventListener('click', function(evento){
        console.log("botão funciona")
        evento.preventDefault()
        let modalPokemon = document.getElementById("card1")
        let buttonModalPokemon = document.createElement("h2");
        let buttonModalPokemonTexto = document.createElement("p");
        modalPokemon.appendChild(buttonModalPokemon);
        modalPokemon.appendChild(buttonModalPokemonTexto)
    })
}


// const cardsPokemon = document.getElementById("card1")
// cardsPokemon.addEventListener('click', function(){
//     alert("Informaçao Pokemon")

// })

