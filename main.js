
// Este array debe usarse para el ejercicio 10
const data = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]

//1
const body = document.querySelector("body");
const backgroundArticle = document.getElementById("ejercicio-1")
const backgroundButton = backgroundArticle.lastChild.previousSibling
const colors = ["lightgreen", "pink", "lightblue", "purple", "orange", "yellow"]
backgroundButton.addEventListener("click", () => body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length - 1)])
//2
counter = document.getElementById("counter")
divButtons = document.getElementById("counter-btns")
button1 = divButtons.firstElementChild
button2 = divButtons.lastElementChild
button1.addEventListener("click", () => counter.innerText = parseInt(counter.innerHTML) + 1)
button2.addEventListener("click", () => counter.innerText = parseInt(counter.innerHTML) - 1)
//3
const desapearingText = document.getElementById("ejercicio-3")
const desapearingButton = desapearingText.lastElementChild
const desapearingParagraph = desapearingText.lastElementChild.previousElementSibling

desapearingButton.addEventListener("click", function () {
    desapearingParagraph.style.visibility !== "hidden" ? desapearingParagraph.style.visibility = "hidden" :
        desapearingParagraph.style.visibility = "initial"
})
//4
const ulArticle = document.getElementById("ejercicio-4")
const deleteButton = ulArticle.lastElementChild
const ulItem = deleteButton.previousElementSibling
deleteButton.addEventListener("click", function () {
    if (ulItem.children.length == 0) {
    } else {
        ulItem.firstElementChild.remove()
    }
});

//5
const articleContainer = document.getElementById("ejercicio-5")
const divContainer = document.querySelectorAll("div.paragraph-container")
const ulCountainer = articleContainer.firstElementChild.nextElementSibling.nextElementSibling

divContainer.forEach(e => e.lastElementChild.addEventListener("click", function () {
    const liContainer = document.createElement("li")
    ulCountainer.appendChild(liContainer).innerText = e.firstElementChild.innerText
}))


//6
const articleSquare = document.getElementById("ejercicio-6")
const divSquareContainer = document.getElementById("square-container")
const divSquare = divSquareContainer.children
const buttonSquare = articleSquare.lastElementChild

buttonSquare.addEventListener("click", function () {
    const divSqur = document.createElement("div")
    divSqur.className = "square"
    divSquareContainer.appendChild(divSqur)
})

for (let i = 0; i < divSquare.length; i++) {
    divSquare[i].addEventListener("click", function () {
        divSquare[i].style.visibility = "hidden"
    })
}
//7
const articleColors = document.getElementById("ejercicio-7")
const divColors = document.getElementById("color_btns")
const divColorsBg = document.getElementsByClassName("color-div")
const buttonColors1 = divColors.firstElementChild
const buttonColors2 = divColors.firstElementChild.nextElementSibling
const buttonColors3 = divColors.firstElementChild.nextElementSibling.nextElementSibling
const buttonColors4 = divColors.lastElementChild.previousElementSibling
const buttonColors5 = divColors.lastElementChild

buttonColors1.addEventListener("click", function () {
    divColorsBg[0].style.backgroundColor = "blue"
})
buttonColors2.addEventListener("click", function () {
    divColorsBg[0].style.backgroundColor = "red"
})
buttonColors3.addEventListener("click", function () {
    divColorsBg[0].style.backgroundColor = "green"
})
buttonColors4.addEventListener("click", function () {
    divColorsBg[0].style.backgroundColor = "black"
})
buttonColors5.addEventListener("click", function () {
    divColorsBg[0].style.backgroundColor = "purple"
})
//8
const divClosedOpen1 = document.getElementById("faq-card")
const divClosedOpen2 = document.getElementById("faq-title")
const buttonClosedOpen = divClosedOpen2.firstElementChild.nextElementSibling
const textClosedOpen = divClosedOpen1.lastElementChild
buttonClosedOpen.addEventListener("click", function () {
    if (textClosedOpen.style.visibility !== "hidden") {
        textClosedOpen.style.visibility = "hidden"
    } else {
        textClosedOpen.style.visibility = "visible"
    }
    if (buttonClosedOpen.innerText == "Close") {
        buttonClosedOpen.innerText = "Open"
    } else {
        buttonClosedOpen.innerText = "Close"
    }
})

//9

//10
const articlePokemon = document.getElementById("ejercicio-10")
const divPokemon = document.createElement("div")
articlePokemon.appendChild(divPokemon)
data.forEach(pokeObj => { 
    const pokeSpan = document.createElement("span")
    pokeSpan.innerText = pokeObj.id;
    divPokemon.appendChild(pokeSpan)
    const pokeName = document.createElement("h4")
    pokeName.innerText = pokeObj.name;
    divPokemon.appendChild(pokeName)
    const pokeImg = document.createElement("img")
    pokeImg.src = pokeObj.img
    divPokemon.appendChild(pokeImg)
})
console.log(divPokemon);