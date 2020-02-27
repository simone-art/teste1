const input = document.querySelector(".input-pokemon-inicial");
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
        <h1>Nome:${pokemon.results[id].name}</h1>
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

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=11&limit=20`)

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
    const cardFechar = document.getElementById("Pokemon")
    modal.classList.add("modal");

    fetch(`https://pokeapi.co/api/v2/pokemon/1`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar = document.getElementById('card1')
    modalFechar.addEventListener('click', function(){
    const modal = document.getElementById("card1")
    const cardFechar = document.getElementById("Pokemon")
    modal.style.display="none";
    cardFechar.style.display="none";
})
}

//FUNÇAO PARA ESCONDER O MODAL1//

// const modalFechar = document.getElementById('card1')
// modalFechar.addEventListener('click', function(){
//     const modal = document.getElementById("card1")
//     const cardFechar = document.getElementById("Pokemon")
//     modal.style.display="none";
//     cardFechar.style.display="none";
// })



//FUNÇÃO PARA MOSTRAR O MODAL2//

const cardsPokemon2 = document.getElementById("card2")
cardsPokemon2.addEventListener('click', function(){
    mostrarModalDos()

})

function mostrarModalDos(){
    const modal2 = document.getElementById("card2")
    const cardFechar2 = document.getElementById("Pokemon2")
    modal2.classList.add("modal-2");

    fetch(`https://pokeapi.co/api/v2/pokemon/2`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal2.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    //FUNÇAO PARA ESCONDER O MODAL2//
    
    const modalFechar2 = document.getElementById('card2')
    modalFechar2.addEventListener('click', function(){
        const modal2 = document.getElementById("card2")
        const cardFechar2 = document.getElementById("Pokemon2")
        modal2.style.display="none";
        cardFechar2.style.display="none";
    })
}



//FUNÇÃO PARA MOSTRAR O MODAL3//

const cardsPokemon3 = document.getElementById("card3")
cardsPokemon3.addEventListener('click', function(){
    mostrarModalTres()

})


function mostrarModalTres(){
    const modal3 = document.getElementById("card3")
    const cardFechar3 = document.getElementById("Pokemon3")
    modal3.classList.add("modal-3");

    fetch(`https://pokeapi.co/api/v2/pokemon/3`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal3.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar3 = document.getElementById('card3')
    modalFechar3.addEventListener('click', function(){
        const modal3 = document.getElementById("card3")
        const cardFechar3 = document.getElementById("Pokemon3")
        modal3.style.display="none";
        cardFechar3.style.display="none";
    })
}



//FUNÇÃO PARA MOSTRAR O MODAL4//

const cardsPokemon4 = document.getElementById("card4")
cardsPokemon4.addEventListener('click', function(){
    mostrarModalCuatro()

})

function mostrarModalCuatro(){
    const modal4 = document.getElementById("card4")
    const cardFechar4 = document.getElementById("Pokemon4")
    modal4.classList.add("modal-4");

    fetch(`https://pokeapi.co/api/v2/pokemon/4`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal4.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar4 = document.getElementById('card4')
    modalFechar4.addEventListener('click', function(){
        const modal4 = document.getElementById("card4")
        const cardFechar4 = document.getElementById("Pokemon4")
        modal4.style.display="none";
        cardFechar4.style.display="none";
    })
}



//FUNÇÃO PARA MOSTRAR O MODAL5//

const cardsPokemon5 = document.getElementById("card5")
cardsPokemon5.addEventListener('click', function(){
    mostrarModalCinco()

})

function mostrarModalCinco(){
    const modal5 = document.getElementById("card5")
    const cardFechar5 = document.getElementById("Pokemon5")
    modal5.classList.add("modal-5");

    fetch(`https://pokeapi.co/api/v2/pokemon/5`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal5.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })

    const modalFechar5 = document.getElementById('card5')
    modalFechar5.addEventListener('click', function(){
        const modal5 = document.getElementById("card5")
        const cardFechar5 = document.getElementById("Pokemon5")
        modal5.style.display="none";
        cardFechar5.style.display="none";
    })
}


//FUNÇÃO PARA MOSTRAR O MODAL6//

const cardsPokemon6 = document.getElementById("card6")
cardsPokemon6.addEventListener('click', function(){
    mostrarModalSeis()

})

function mostrarModalSeis(){
    const modal6 = document.getElementById("card6")
    const cardFechar6 = document.getElementById("Pokemon6")
    modal6.classList.add("modal-6");

    fetch(`https://pokeapi.co/api/v2/pokemon/6`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal6.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar6 = document.getElementById('card6')
    modalFechar6.addEventListener('click', function(){
        const modal6 = document.getElementById("card6")
        const cardFechar6 = document.getElementById("Pokemon6")
        modal6.style.display="none";
        cardFechar6.style.display="none";
    })
}



//FUNÇÃO PARA MOSTRAR O MODAL7//

const cardsPokemon7 = document.getElementById("card7")
cardsPokemon7.addEventListener('click', function(){
    mostrarModalSiete()

})

function mostrarModalSiete(){
    const modal7 = document.getElementById("card7")
    const cardFechar7 = document.getElementById("Pokemon7")
    modal7.classList.add("modal-7");

    fetch(`https://pokeapi.co/api/v2/pokemon/7`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal7.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar7 = document.getElementById('card7')
    modalFechar7.addEventListener('click', function(){
        const modal7 = document.getElementById("card7")
        const cardFechar7 = document.getElementById("Pokemon7")
        modal7.style.display="none";
        cardFechar7.style.display="none";
    })
}




//FUNÇÃO PARA MOSTRAR O MODAL8//

const cardsPokemon8 = document.getElementById("card8")
cardsPokemon8.addEventListener('click', function(){
    mostrarModalOito()

})

function mostrarModalOito(){
    const modal8 = document.getElementById("card8")
    const cardFechar8 = document.getElementById("Pokemon8")
    modal8.classList.add("modal-8");

    fetch(`https://pokeapi.co/api/v2/pokemon/8`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal8.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar8 = document.getElementById('card8')
    modalFechar8.addEventListener('click', function(){
        const modal8 = document.getElementById("card8")
        const cardFechar8 = document.getElementById("Pokemon8")
        modal8.style.display="none";
        cardFechar8.style.display="none";
    })
}




//FUNÇÃO PARA MOSTRAR O MODAL9//

const cardsPokemon9 = document.getElementById("card9")
cardsPokemon9.addEventListener('click', function(){
    mostrarModalNove()

})


function mostrarModalNove(){
    const modal9 = document.getElementById("card9")
    const cardFechar9 = document.getElementById("Pokemon9")
    modal9.classList.add("modal-9");

    fetch(`https://pokeapi.co/api/v2/pokemon/9`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal9.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar9 = document.getElementById('card9')
    modalFechar9.addEventListener('click', function(){
        const modal9 = document.getElementById("card9")
        const cardFechar9 = document.getElementById("Pokemon9")
        modal9.style.display="none";
        cardFechar9.style.display="none";
    })
}




//FUNÇÃO PARA MOSTRAR O MODAL10//

const cardsPokemon10 = document.getElementById("card10")
cardsPokemon10.addEventListener('click', function(){
    mostrarModalDez()

})

function mostrarModalDez(){
    const modal10 = document.getElementById("card10")
    const cardFechar10 = document.getElementById("Pokemon10")
    modal10.classList.add("modal-10");

    fetch(`https://pokeapi.co/api/v2/pokemon/10`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal10.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar10 = document.getElementById('card10')
    modalFechar10.addEventListener('click', function(){
        const modal10 = document.getElementById("card10")
        const cardFechar10 = document.getElementById("Pokemon10")
        modal10.style.display="none";
        cardFechar10.style.display="none";
    })
}




//FUNÇÃO PARA MOSTRAR O MODAL11//

const cardsPokemon11 = document.getElementById("card11")
cardsPokemon11.addEventListener('click', function(){
    mostrarModalOnce()

})

function mostrarModalOnce(){
    const modal11 = document.getElementById("card11")
    const cardFechar11 = document.getElementById("Pokemon11")
    modal11.classList.add("modal-11");

    fetch(`https://pokeapi.co/api/v2/pokemon/11`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal11.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar11 = document.getElementById('card11')
    modalFechar11.addEventListener('click', function(){
        const modal11 = document.getElementById("card11")
        const cardFechar11 = document.getElementById("Pokemon11")
        modal11.style.display="none";
        cardFechar11.style.display="none";
    })
}



//FUNÇÃO PARA MOSTRAR O MODAL12//

const cardsPokemon12 = document.getElementById("card12")
cardsPokemon12.addEventListener('click', function(){
    mostrarModalDoce()

})

function mostrarModalDoce(){
    const modal12 = document.getElementById("card12")
    const cardFechar12 = document.getElementById("Pokemon12")
    modal12.classList.add("modal-12");

    fetch(`https://pokeapi.co/api/v2/pokemon/12`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal12.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar12 = document.getElementById('card12')
    modalFechar12.addEventListener('click', function(){
        const modal12 = document.getElementById("card12")
        const cardFechar12 = document.getElementById("Pokemon12")
        modal12.style.display="none";
        cardFechar12.style.display="none";
    })
}



//FUNÇÃO PARA MOSTRAR O MODAL13//

const cardsPokemon13 = document.getElementById("card13")
cardsPokemon13.addEventListener('click', function(){
    mostrarModalTrece()

})

function mostrarModalTrece(){
    const modal13 = document.getElementById("card13")
    const cardFechar13 = document.getElementById("Pokemon13")
    modal13.classList.add("modal-13");

    fetch(`https://pokeapi.co/api/v2/pokemon/13`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal13.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar13 = document.getElementById('card13')
    modalFechar13.addEventListener('click', function(){
        const modal13 = document.getElementById("card13")
        const cardFechar13 = document.getElementById("Pokemon13")
        modal13.style.display="none";
        cardFechar13.style.display="none";
    })
}


//FUNÇÃO PARA MOSTRAR O MODAL14//

const cardsPokemon14 = document.getElementById("card14")
cardsPokemon14.addEventListener('click', function(){
    mostrarModalCatorce()

})

function mostrarModalCatorce(){
    const modal14 = document.getElementById("card14")
    const cardFechar14 = document.getElementById("Pokemon14")
    modal14.classList.add("modal-14");

    fetch(`https://pokeapi.co/api/v2/pokemon/14`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal14.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar14 = document.getElementById('card14')
    modalFechar14.addEventListener('click', function(){
        const modal14 = document.getElementById("card14")
        const cardFechar14 = document.getElementById("Pokemon14")
        modal14.style.display="none";
        cardFechar14.style.display="none";
    })
}



//FUNÇÃO PARA MOSTRAR O MODAL15//

const cardsPokemon15 = document.getElementById("card15")
cardsPokemon15.addEventListener('click', function(){
    mostrarModalQuince()

})

function mostrarModalQuince(){
    const modal15 = document.getElementById("card15")
    const cardFechar15 = document.getElementById("Pokemon15")
    modal15.classList.add("modal-15");

    fetch(`https://pokeapi.co/api/v2/pokemon/15`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal15.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar15 = document.getElementById('card15')
    modalFechar15.addEventListener('click', function(){
        const modal15 = document.getElementById("card15")
        const cardFechar15 = document.getElementById("Pokemon15")
        modal15.style.display="none";
        cardFechar15.style.display="none";
    })
}


//FUNÇÃO PARA MOSTRAR O MODAL16//

const cardsPokemon16 = document.getElementById("card16")
cardsPokemon16.addEventListener('click', function(){
    mostrarModalDieciseis()

})

function mostrarModalDieciseis(){
    const modal16 = document.getElementById("card16")
    const cardFechar16 = document.getElementById("Pokemon16")
    modal16.classList.add("modal-16");

    fetch(`https://pokeapi.co/api/v2/pokemon/16`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal16.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar16 = document.getElementById('card16')
    modalFechar16.addEventListener('click', function(){
        const modal16 = document.getElementById("card16")
        const cardFechar16 = document.getElementById("Pokemon16")
        modal16.style.display="none";
        cardFechar16.style.display="none";
    })
}



//FUNÇÃO PARA MOSTRAR O MODAL17//

const cardsPokemon17 = document.getElementById("card17")
cardsPokemon17.addEventListener('click', function(){
    mostrarModalDiecisiete()

})


function mostrarModalDiecisiete(){
    const modal17 = document.getElementById("card17")
    const cardFechar17 = document.getElementById("Pokemon17")
    modal17.classList.add("modal-17");

    fetch(`https://pokeapi.co/api/v2/pokemon/17`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal17.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar17 = document.getElementById('card17')
    modalFechar17.addEventListener('click', function(){
        const modal17 = document.getElementById("card17")
        const cardFechar17 = document.getElementById("Pokemon17")
        modal17.style.display="none";
        cardFechar17.style.display="none";
    })

}


//FUNÇÃO PARA MOSTRAR O MODAL18//

const cardsPokemon18 = document.getElementById("card18")
cardsPokemon18.addEventListener('click', function(){
    mostrarModalDieciocho()

})

function mostrarModalDieciocho(){
    const modal18 = document.getElementById("card18")
    const cardFechar18 = document.getElementById("Pokemon18")
    modal18.classList.add("modal-18");

    fetch(`https://pokeapi.co/api/v2/pokemon/18`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal18.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar18 = document.getElementById('card18')
    modalFechar18.addEventListener('click', function(){
        const modal18 = document.getElementById("card18")
        const cardFechar18 = document.getElementById("Pokemon18")
        modal18.style.display="none";
        cardFechar18.style.display="none";
    })
}


//FUNÇÃO PARA MOSTRAR O MODAL19//

const cardsPokemon19 = document.getElementById("card19")
cardsPokemon19.addEventListener('click', function(){
    mostrarModalDiecinueve()

})

function mostrarModalDiecinueve(){
    const modal19 = document.getElementById("card19")
    const cardFechar19 = document.getElementById("Pokemon19")
    modal19.classList.add("modal-19");

    fetch(`https://pokeapi.co/api/v2/pokemon/19`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal19.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar19 = document.getElementById('card19')
    modalFechar19.addEventListener('click', function(){
        const modal19 = document.getElementById("card19")
        const cardFechar19 = document.getElementById("Pokemon19")
        modal19.style.display="none";
        cardFechar19.style.display="none";
    })
}


//FUNÇÃO PARA MOSTRAR O MODAL20//

const cardsPokemon20 = document.getElementById("card20")
cardsPokemon20.addEventListener('click', function(){
    mostrarModalVinte()

})

function mostrarModalVinte(){
    const modal20 = document.getElementById("card20")
    const cardFechar20 = document.getElementById("Pokemon20")
    modal20.classList.add("modal-20");

    fetch(`https://pokeapi.co/api/v2/pokemon/20`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal20.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar20 = document.getElementById('card20')
    modalFechar20.addEventListener('click', function(){
        const modal20 = document.getElementById("card20")
        const cardFechar20 = document.getElementById("Pokemon20")
        modal20.style.display="none";
        cardFechar20.style.display="none";
    })
}


//FUNÇÃO PARA MOSTRAR O MODAL21//

const cardsPokemon21 = document.getElementById("card21")
cardsPokemon21.addEventListener('click', function(){
    mostrarModalVentiuno()

})

function mostrarModalVentiuno(){
    const modal21 = document.getElementById("card21")
    const cardFechar21 = document.getElementById("Pokemon21")
    modal21.classList.add("modal-21");

    fetch(`https://pokeapi.co/api/v2/pokemon/21`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal21.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar21 = document.getElementById('card21')
    modalFechar21.addEventListener('click', function(){
        const modal21 = document.getElementById("card21")
        const cardFechar21 = document.getElementById("Pokemon21")
        modal21.style.display="none";
        cardFechar21.style.display="none";
    })
}

//FUNÇÃO PARA MOSTRAR O MODAL22//

const cardsPokemon22 = document.getElementById("card22")
cardsPokemon22.addEventListener('click', function(){
    mostrarModalVentidos()

})

function mostrarModalVentidos(){
    const modal22 = document.getElementById("card22")
    const cardFechar22 = document.getElementById("Pokemon22")
    modal22.classList.add("modal-22");

    fetch(`https://pokeapi.co/api/v2/pokemon/22`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal22.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar22 = document.getElementById('card22')
    modalFechar22.addEventListener('click', function(){
        const modal22 = document.getElementById("card22")
        const cardFechar22 = document.getElementById("Pokemon22")
        modal22.style.display="none";
        cardFechar22.style.display="none";
    })
}

//FUNÇÃO PARA MOSTRAR O MODAL23//

const cardsPokemon23 = document.getElementById("card23")
cardsPokemon23.addEventListener('click', function(){
    mostrarModalVentitres()

})

function mostrarModalVentitres(){
    const modal23 = document.getElementById("card23")
    const cardFechar23 = document.getElementById("Pokemon23")
    modal23.classList.add("modal-23");

    fetch(`https://pokeapi.co/api/v2/pokemon/23`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal23.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar23 = document.getElementById('card23')
    modalFechar23.addEventListener('click', function(){
        const modal23 = document.getElementById("card23")
        const cardFechar23 = document.getElementById("Pokemon23")
        modal23.style.display="none";
        cardFechar23.style.display="none";
    })
}


//FUNÇÃO PARA MOSTRAR O MODAL24//

const cardsPokemon24 = document.getElementById("card24")
cardsPokemon24.addEventListener('click', function(){
    mostrarModalVenticuatro()

})

function mostrarModalVenticuatro(){
    const modal24 = document.getElementById("card24")
    const cardFechar24 = document.getElementById("Pokemon24")
    modal24.classList.add("modal-24");

    fetch(`https://pokeapi.co/api/v2/pokemon/24`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal24.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar24 = document.getElementById('card24')
    modalFechar24.addEventListener('click', function(){
        const modal24 = document.getElementById("card24")
        const cardFechar24 = document.getElementById("Pokemon24")
        modal24.style.display="none";
        cardFechar24.style.display="none";
    })
}

//FUNÇÃO PARA MOSTRAR O MODAL25//

const cardsPokemon25 = document.getElementById("card25")
cardsPokemon25.addEventListener('click', function(){
    mostrarModalVenticinco()

})

function mostrarModalVenticinco(){
    const modal25 = document.getElementById("card25")
    const cardFechar25 = document.getElementById("Pokemon25")
    modal25.classList.add("modal-25");

    fetch(`https://pokeapi.co/api/v2/pokemon/25`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal25.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar25 = document.getElementById('card25')
    modalFechar25.addEventListener('click', function(){
        const modal25 = document.getElementById("card25")
        const cardFechar25 = document.getElementById("Pokemon25")
        modal25.style.display="none";
        cardFechar25.style.display="none";
    })
}

//FUNÇÃO PARA MOSTRAR O MODAL26//

const cardsPokemon26 = document.getElementById("card26")
cardsPokemon26.addEventListener('click', function(){
    mostrarModalVentiseis()

})

function mostrarModalVentiseis(){
    const modal26 = document.getElementById("card26")
    const cardFechar26 = document.getElementById("Pokemon26")
    modal26.classList.add("modal-26");

    fetch(`https://pokeapi.co/api/v2/pokemon/26`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal26.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar26 = document.getElementById('card26')
    modalFechar26.addEventListener('click', function(){
        const modal26 = document.getElementById("card26")
        const cardFechar26 = document.getElementById("Pokemon26")
        modal26.style.display="none";
        cardFechar26.style.display="none";
    })
}

//FUNÇÃO PARA MOSTRAR O MODAL27//

const cardsPokemon27 = document.getElementById("card27")
cardsPokemon27.addEventListener('click', function(){
    mostrarModalVentisiete()

})

function mostrarModalVentisiete(){
    const modal27 = document.getElementById("card27")
    const cardFechar27 = document.getElementById("Pokemon27")
    modal27.classList.add("modal-27");

    fetch(`https://pokeapi.co/api/v2/pokemon/27`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal27.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar27 = document.getElementById('card27')
    modalFechar27.addEventListener('click', function(){
        const modal27 = document.getElementById("card27")
        const cardFechar27 = document.getElementById("Pokemon27")
        modal27.style.display="none";
        cardFechar27.style.display="none";
    })
}


//FUNÇÃO PARA MOSTRAR O MODAL28//

const cardsPokemon28 = document.getElementById("card28")
cardsPokemon28.addEventListener('click', function(){
    mostrarModalVentiocho()

})


function mostrarModalVentiocho(){
    const modal28 = document.getElementById("card28")
    const cardFechar28 = document.getElementById("Pokemon28")
    modal28.classList.add("modal-28");

    fetch(`https://pokeapi.co/api/v2/pokemon/28`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal28.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    
    const modalFechar28 = document.getElementById('card28')
    modalFechar28.addEventListener('click', function(){
        const modal28 = document.getElementById("card28")
        const cardFechar28 = document.getElementById("Pokemon28")
        modal28.style.display="none";
        cardFechar28.style.display="none";
    })
}


//FUNÇÃO PARA MOSTRAR O MODAL29//

const cardsPokemon29 = document.getElementById("card29")
cardsPokemon29.addEventListener('click', function(){
    mostrarModalVentinueve()

})
function mostrarModalVentinueve(){
    const modal29 = document.getElementById("card29")
    const cardFechar29 = document.getElementById("Pokemon29")
    modal29.classList.add("modal-29");

    fetch(`https://pokeapi.co/api/v2/pokemon/29`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal29.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar29 = document.getElementById('card29')
    modalFechar29.addEventListener('click', function(){
        const modal29 = document.getElementById("card29")
        const cardFechar29 = document.getElementById("Pokemon29")
        modal29.style.display="none";
        cardFechar29.style.display="none";
    })
}

//FUNÇÃO PARA MOSTRAR O MODAL30//

const cardsPokemon30 = document.getElementById("card30")
cardsPokemon30.addEventListener('click', function(){
    mostrarModalTreinta()

})


function mostrarModalTreinta(){
    const modal30 = document.getElementById("card30")
    const cardFechar30 = document.getElementById("Pokemon30")
    modal30.classList.add("modal-30");

    fetch(`https://pokeapi.co/api/v2/pokemon/30`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            console.log(pokemon.height)
            console.log(pokemon.weight)
        modal30.innerHTML = `
        <p><strong>Detalhes do Pokemon<strong><p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Altura: ${pokemon.height}</p>
        `
        
    })
    const modalFechar30 = document.getElementById('card30')
    modalFechar30.addEventListener('click', function(){
        const modal30 = document.getElementById("card30")
        const cardFechar30 = document.getElementById("Pokemon30")
        modal30.style.display="none";
        cardFechar30.style.display="none";
    })
}




