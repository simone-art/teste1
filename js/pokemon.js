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

const pokemonTexto = "https://pokeapi.co/api/v2/ability/65"


function mostrarModal(){
    const modal = document.getElementById("card1")
    const texto = document.getElementById("texto-modal")
    const buttonFechar = document.getElementById("button-fechar")
    modal.classList.add("modal");
    modal.appendChild(buttonFechar)
    modal.appendChild(texto)

    fetch(`https://pokeapi.co/api/v2/ability/65/`)

        .then(function (response) {
            return response.json();
        })
        .then(function (pokemonTexto) {
            console.log(pokemonTexto.ability[id].effect_entries.effect)
        modal.innerHTML = `
            <p>Detalhes do Pokemon:${pokemonTexto.ability[id].effect_entries.effect}<p>
            `
        
})

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


//FUNÇÃO PARA MOSTRAR O MODAL11//

const cardsPokemon11 = document.getElementById("card11")
cardsPokemon11.addEventListener('click', function(){
    mostrarModalOnce()

})

function mostrarModalOnce(){
    const modal11 = document.getElementById("card11")
    const buttonFechar11 = document.getElementById("button-fechar-11")
    modal11.classList.add("modal-11");
    modal11.appendChild(buttonFechar11)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar11 = document.getElementById("button-fechar-11")
btnFechar11.addEventListener('click', function(){
    const modal11 = document.getElementById("card11")
    modal11.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL12//

const cardsPokemon12 = document.getElementById("card12")
cardsPokemon12.addEventListener('click', function(){
    mostrarModalDoce()

})

function mostrarModalDoce(){
    const modal12 = document.getElementById("card12")
    const buttonFechar12 = document.getElementById("button-fechar-12")
    modal12.classList.add("modal-12");
    modal12.appendChild(buttonFechar12)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar12 = document.getElementById("button-fechar-12")
btnFechar12.addEventListener('click', function(){
    const modal12 = document.getElementById("card12")
    modal12.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL13//

const cardsPokemon13 = document.getElementById("card13")
cardsPokemon13.addEventListener('click', function(){
    mostrarModalTrece()

})

function mostrarModalTrece(){
    const modal13 = document.getElementById("card13")
    const buttonFechar13 = document.getElementById("button-fechar-13")
    modal13.classList.add("modal-13");
    modal13.appendChild(buttonFechar13)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar13 = document.getElementById("button-fechar-13")
btnFechar13.addEventListener('click', function(){
    const modal13 = document.getElementById("card13")
    modal13.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL14//

const cardsPokemon14 = document.getElementById("card14")
cardsPokemon14.addEventListener('click', function(){
    mostrarModalCatorce()

})

function mostrarModalCatorce(){
    const modal14 = document.getElementById("card14")
    const buttonFechar14 = document.getElementById("button-fechar-14")
    modal14.classList.add("modal-14");
    modal14.appendChild(buttonFechar14)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar14 = document.getElementById("button-fechar-14")
btnFechar14.addEventListener('click', function(){
    const modal14 = document.getElementById("card14")
    modal14.style.display="none";
       
})



//FUNÇÃO PARA MOSTRAR O MODAL15//

const cardsPokemon15 = document.getElementById("card15")
cardsPokemon15.addEventListener('click', function(){
    mostrarModalQuince()

})

function mostrarModalQuince(){
    const modal15 = document.getElementById("card15")
    const buttonFechar15 = document.getElementById("button-fechar-15")
    modal15.classList.add("modal-15");
    modal15.appendChild(buttonFechar15)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar15 = document.getElementById("button-fechar-15")
btnFechar15.addEventListener('click', function(){
    const modal15 = document.getElementById("card15")
    modal15.style.display="none";
       
})



//FUNÇÃO PARA MOSTRAR O MODAL16//

const cardsPokemon16 = document.getElementById("card16")
cardsPokemon16.addEventListener('click', function(){
    mostrarModalDieciseis()

})

function mostrarModalDieciseis(){
    const modal16 = document.getElementById("card16")
    const buttonFechar16 = document.getElementById("button-fechar-16")
    modal16.classList.add("modal-16");
    modal16.appendChild(buttonFechar16)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar16 = document.getElementById("button-fechar-16")
btnFechar16.addEventListener('click', function(){
    const modal16 = document.getElementById("card16")
    modal16.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL17//

const cardsPokemon17 = document.getElementById("card17")
cardsPokemon17.addEventListener('click', function(){
    mostrarModalDiecisiete()

})

function mostrarModalDiecisiete(){
    const modal17 = document.getElementById("card17")
    const buttonFechar17 = document.getElementById("button-fechar-17")
    modal17.classList.add("modal-17");
    modal17.appendChild(buttonFechar17)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar17 = document.getElementById("button-fechar-17")
btnFechar17.addEventListener('click', function(){
    const modal17 = document.getElementById("card17")
    modal17.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL18//

const cardsPokemon18 = document.getElementById("card18")
cardsPokemon18.addEventListener('click', function(){
    mostrarModalDieciocho()

})

function mostrarModalDieciocho(){
    const modal18 = document.getElementById("card18")
    const buttonFechar18 = document.getElementById("button-fechar-18")
    modal18.classList.add("modal-18");
    modal18.appendChild(buttonFechar18)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar18 = document.getElementById("button-fechar-18")
btnFechar18.addEventListener('click', function(){
    const modal18 = document.getElementById("card18")
    modal18.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL19//

const cardsPokemon19 = document.getElementById("card19")
cardsPokemon19.addEventListener('click', function(){
    mostrarModalDiecinueve()

})

function mostrarModalDiecinueve(){
    const modal19 = document.getElementById("card19")
    const buttonFechar19 = document.getElementById("button-fechar-19")
    modal19.classList.add("modal-19");
    modal19.appendChild(buttonFechar19)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar19 = document.getElementById("button-fechar-19")
btnFechar19.addEventListener('click', function(){
    const modal19 = document.getElementById("card19")
    modal19.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL20//

const cardsPokemon20 = document.getElementById("card20")
cardsPokemon20.addEventListener('click', function(){
    mostrarModalVinte()

})

function mostrarModalVinte(){
    const modal20 = document.getElementById("card20")
    const buttonFechar20 = document.getElementById("button-fechar-20")
    modal20.classList.add("modal-20");
    modal20.appendChild(buttonFechar20)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar20 = document.getElementById("button-fechar-20")
btnFechar20.addEventListener('click', function(){
    const modal20 = document.getElementById("card20")
    modal20.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL21//

const cardsPokemon21 = document.getElementById("card21")
cardsPokemon21.addEventListener('click', function(){
    mostrarModalVentiuno()

})

function mostrarModalVentiuno(){
    const modal21 = document.getElementById("card21")
    const buttonFechar21 = document.getElementById("button-fechar-21")
    modal21.classList.add("modal-21");
    modal21.appendChild(buttonFechar21)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar21 = document.getElementById("button-fechar-21")
btnFechar21.addEventListener('click', function(){
    const modal21 = document.getElementById("card21")
    modal21.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL22//

const cardsPokemon22 = document.getElementById("card22")
cardsPokemon22.addEventListener('click', function(){
    mostrarModalVentidos()

})

function mostrarModalVentidos(){
    const modal22 = document.getElementById("card22")
    const buttonFechar22 = document.getElementById("button-fechar-22")
    modal22.classList.add("modal-22");
    modal22.appendChild(buttonFechar22)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar22 = document.getElementById("button-fechar-22")
btnFechar22.addEventListener('click', function(){
    const modal22 = document.getElementById("card22")
    modal22.style.display="none";
       
})



//FUNÇÃO PARA MOSTRAR O MODAL23//

const cardsPokemon23 = document.getElementById("card23")
cardsPokemon23.addEventListener('click', function(){
    mostrarModalVentitres()

})

function mostrarModalVentitres(){
    const modal23 = document.getElementById("card23")
    const buttonFechar23 = document.getElementById("button-fechar-23")
    modal23.classList.add("modal-23");
    modal23.appendChild(buttonFechar23)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar23 = document.getElementById("button-fechar-23")
btnFechar23.addEventListener('click', function(){
    const modal23 = document.getElementById("card23")
    modal23.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL24//

const cardsPokemon24 = document.getElementById("card24")
cardsPokemon24.addEventListener('click', function(){
    mostrarModalVenticuatro()

})

function mostrarModalVenticuatro(){
    const modal24 = document.getElementById("card24")
    const buttonFechar24 = document.getElementById("button-fechar-24")
    modal24.classList.add("modal-24");
    modal24.appendChild(buttonFechar24)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar24 = document.getElementById("button-fechar-24")
btnFechar24.addEventListener('click', function(){
    const modal24 = document.getElementById("card24")
    modal24.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL25//

const cardsPokemon25 = document.getElementById("card25")
cardsPokemon25.addEventListener('click', function(){
    mostrarModalVenticinco()

})

function mostrarModalVenticinco(){
    const modal25 = document.getElementById("card25")
    const buttonFechar25 = document.getElementById("button-fechar-25")
    modal25.classList.add("modal-25");
    modal25.appendChild(buttonFechar25)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar25 = document.getElementById("button-fechar-25")
btnFechar25.addEventListener('click', function(){
    const modal25 = document.getElementById("card25")
    modal25.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL26//

const cardsPokemon26 = document.getElementById("card26")
cardsPokemon26.addEventListener('click', function(){
    mostrarModalVentiseis()

})

function mostrarModalVentiseis(){
    const modal26 = document.getElementById("card26")
    const buttonFechar26 = document.getElementById("button-fechar-26")
    modal26.classList.add("modal-26");
    modal26.appendChild(buttonFechar26)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar26 = document.getElementById("button-fechar-26")
btnFechar26.addEventListener('click', function(){
    const modal26 = document.getElementById("card26")
    modal26.style.display="none";
       
})



//FUNÇÃO PARA MOSTRAR O MODAL27//

const cardsPokemon27 = document.getElementById("card27")
cardsPokemon27.addEventListener('click', function(){
    mostrarModalVentisiete()

})

function mostrarModalVentisiete(){
    const modal27 = document.getElementById("card27")
    const buttonFechar27 = document.getElementById("button-fechar-27")
    modal27.classList.add("modal-27");
    modal27.appendChild(buttonFechar27)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar27 = document.getElementById("button-fechar-27")
btnFechar27.addEventListener('click', function(){
    const modal27 = document.getElementById("card27")
    modal27.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL28//

const cardsPokemon28 = document.getElementById("card28")
cardsPokemon28.addEventListener('click', function(){
    mostrarModalVentiocho()

})

function mostrarModalVentiocho(){
    const modal28 = document.getElementById("card28")
    const buttonFechar28 = document.getElementById("button-fechar-28")
    modal28.classList.add("modal-28");
    modal28.appendChild(buttonFechar28)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar28 = document.getElementById("button-fechar-28")
btnFechar28.addEventListener('click', function(){
    const modal28 = document.getElementById("card28")
    modal28.style.display="none";
       
})



//FUNÇÃO PARA MOSTRAR O MODAL29//

const cardsPokemon29 = document.getElementById("card29")
cardsPokemon29.addEventListener('click', function(){
    mostrarModalVentinueve()

})

function mostrarModalVentinueve(){
    const modal29 = document.getElementById("card29")
    const buttonFechar29 = document.getElementById("button-fechar-29")
    modal29.classList.add("modal-29");
    modal29.appendChild(buttonFechar29)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar29 = document.getElementById("button-fechar-29")
btnFechar29.addEventListener('click', function(){
    const modal29 = document.getElementById("card29")
    modal29.style.display="none";
       
})


//FUNÇÃO PARA MOSTRAR O MODAL30//

const cardsPokemon30 = document.getElementById("card30")
cardsPokemon30.addEventListener('click', function(){
    mostrarModalTreinta()

})

function mostrarModalTreinta(){
    const modal30 = document.getElementById("card30")
    const buttonFechar30 = document.getElementById("button-fechar-30")
    modal30.classList.add("modal-30");
    modal30.appendChild(buttonFechar30)
}

//FUNÇAO PARA ESCONDER O MODAL//

const btnFechar30 = document.getElementById("button-fechar-30")
btnFechar30.addEventListener('click', function(){
    const modal30 = document.getElementById("card30")
    modal30.style.display="none";
       
})

}