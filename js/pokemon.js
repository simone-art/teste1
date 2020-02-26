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


//FUNÇÃO PARA MOSTRAR O MODAL1//

// const cardsPokemonUmporUm = document.getElementById("Pokemon")
// cardsPokemonUmporUm.addEventListener('click', function(){
//     console.log("card funciona perfeitamente")
//     mostrarModalUmporUm()

// })

// function mostrarModalUmporUm(){
//     let divPokemon = document.createElement("div")
//     divPokemon.classList.add('modal')
//     let textoPokemon = document.createElement("p")
//     let buttonFechar = document.createElement("button")
//     buttonFechar.classList.add("fechar")
//     divPokemon.appendChild(textoPokemon)
//     divPokemon.appendChild(buttonFechar)
    
// }

// //FUNÇAO PARA ESCONDER O MODAL//

// const btnFechar = document.getElementById('button-fechar')
// btnFechar.addEventListener('click', function(){
//     const modal = document.getElementById("pokemon")
//     modal.style.display="none";
       
// })

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


//FUNÇÃO PARA MOSTRAR O MODAL1//

const cardsPokemon = document.getElementById("card1")
cardsPokemon.addEventListener('click', function(){
    mostrarModal()

})

function mostrarModal(){
    const modal = document.getElementById("card1")
    const buttonFechar = document.getElementById("button-fechar")
    modal.classList.add("modal");
    modal.appendChild(buttonFechar)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar = document.getElementById('button-fechar')
btnFechar.addEventListener('click', function(){
    const modal = document.getElementById("card1")
    modal.style.display="none";
       
})

//FUNÇÃO PARA MOSTRAR O MODAL2//

const cardsPokemon2 = document.getElementById("card2")
cardsPokemon2.addEventListener('click', function(){
    mostrarModalDos()

})

function mostrarModalDos(){
    const modal2 = document.getElementById("card2")
    const buttonFechar2 = document.getElementById("button-fechar-2")
    modal2.classList.add("modal-2");
    modal2.appendChild(buttonFechar2)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar2 = document.getElementById('button-fechar-2')
btnFechar2.addEventListener('click', function(){
    const modal2 = document.getElementById("card2")
    modal2.style.display="none";
       
})

//FUNÇÃO PARA MOSTRAR O MODAL3//

const cardsPokemon3 = document.getElementById("card3")
cardsPokemon3.addEventListener('click', function(){
    mostrarModalTres()

})

function mostrarModalTres(){
    const modal3 = document.getElementById("card3")
    const buttonFechar3 = document.getElementById("button-fechar-3")
    modal3.classList.add("modal-3");
    modal3.appendChild(buttonFechar3)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar3 = document.getElementById('button-fechar-3')
btnFechar3.addEventListener('click', function(){
    const modal3 = document.getElementById("card3")
    modal3.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL4//

const cardsPokemon4 = document.getElementById("card4")
cardsPokemon4.addEventListener('click', function(){
    mostrarModalCuatro()

})

function mostrarModalCuatro(){
    const modal4 = document.getElementById("card4")
    const buttonFechar4 = document.getElementById("button-fechar-4")
    modal4.classList.add("modal-4");
    modal4.appendChild(buttonFechar4)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar4 = document.getElementById("button-fechar-4")
btnFechar4.addEventListener('click', function(){
    const modal4 = document.getElementById("card4")
    modal4.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL5//

const cardsPokemon5 = document.getElementById("card5")
cardsPokemon5.addEventListener('click', function(){
    mostrarModalCinco()

})

function mostrarModalCinco(){
    const modal5 = document.getElementById("card5")
    const buttonFechar5 = document.getElementById("button-fechar-5")
    modal5.classList.add("modal-5");
    modal5.appendChild(buttonFechar5)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar5 = document.getElementById("button-fechar-5")
btnFechar5.addEventListener('click', function(){
    const modal5 = document.getElementById("card5")
    modal5.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL6//

const cardsPokemon6 = document.getElementById("card6")
cardsPokemon6.addEventListener('click', function(){
    mostrarModalSeis()

})

function mostrarModalSeis(){
    const modal6 = document.getElementById("card6")
    const buttonFechar6 = document.getElementById("button-fechar-6")
    modal6.classList.add("modal-6");
    modal6.appendChild(buttonFechar6)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar6 = document.getElementById("button-fechar-6")
btnFechar6.addEventListener('click', function(){
    const modal6 = document.getElementById("card6")
    modal6.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL7//

const cardsPokemon7 = document.getElementById("card7")
cardsPokemon7.addEventListener('click', function(){
    mostrarModalSiete()

})

function mostrarModalSiete(){
    const modal7 = document.getElementById("card7")
    const buttonFechar7 = document.getElementById("button-fechar-7")
    modal7.classList.add("modal-7");
    modal7.appendChild(buttonFechar7)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar7 = document.getElementById("button-fechar-7")
btnFechar7.addEventListener('click', function(){
    const modal7 = document.getElementById("card7")
    modal7.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL8//

const cardsPokemon8 = document.getElementById("card8")
cardsPokemon8.addEventListener('click', function(){
    mostrarModalOito()

})

function mostrarModalOito(){
    const modal8 = document.getElementById("card8")
    const buttonFechar8 = document.getElementById("button-fechar-8")
    modal8.classList.add("modal-8");
    modal8.appendChild(buttonFechar8)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar8 = document.getElementById("button-fechar-8")
btnFechar8.addEventListener('click', function(){
    const modal8 = document.getElementById("card8")
    modal8.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL9//

const cardsPokemon9 = document.getElementById("card9")
cardsPokemon9.addEventListener('click', function(){
    mostrarModalNove()

})

function mostrarModalNove(){
    const modal9 = document.getElementById("card9")
    const buttonFechar9 = document.getElementById("button-fechar-9")
    modal9.classList.add("modal-9");
    modal9.appendChild(buttonFechar9)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar9 = document.getElementById("button-fechar-9")
btnFechar9.addEventListener('click', function(){
    const modal9 = document.getElementById("card9")
    modal9.style.display="none";
       
})

//FUNÇÃO PARA MOSTRAR O MODAL10//

const cardsPokemon10 = document.getElementById("card10")
cardsPokemon10.addEventListener('click', function(){
    mostrarModalDez()

})

function mostrarModalDez(){
    const modal10 = document.getElementById("card10")
    const buttonFechar10 = document.getElementById("button-fechar-10")
    modal10.classList.add("modal-10");
    modal10.appendChild(buttonFechar10)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar10 = document.getElementById("button-fechar-10")
btnFechar10.addEventListener('click', function(){
    const modal10 = document.getElementById("card10")
    modal10.style.display="none";
       
})
































