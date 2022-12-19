//BONUS 1 E 2

//Creare un'array di oggetti

const imagesArray = [
    {
        image: "01.webp",
        title: "Marverl's Spider-Man Miles Morale",
        description: "Experience the rise of MIles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man",
    },
    {
        image: "02.webp",
        title: "Rachet and Clank",
        description: "Ratchet & Clank is a series of action platformer and third-person shooter video games. ... The series is exclusive to Sony",
    },
    {
        image: "03.webp",
        title: "ALL Superheroes",
        description: "Darth Vader is a fictional character in the Star Wars franchise. The character is the central antagonist of the original tr",
    },
    {
        image: "04.webp",
        title: "Cat game",
        description: "Stray is a 2022 adventure game developed by BlueTwelve Studio and published by Annapurna Interactive. The story follows a st",
    },
    {
        image: "05.webp",
        title: "Marvel Avengers",
        description: "Marvel's The Avengers or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the s",
    },
]

// DEFINZIONE FUNZIONE PER AUTOPLAY

function autoplaySlide(){

    if(itemActive < items.length - 1){

        // Togliere la classe active all'imagine e del pallino attuale
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        // Incremento
        itemActive++;

        // Aggiungere la classe active all'elemento successivo

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active")
        thumbnails[itemActive].classList.add("active")

    }else{
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        itemActive = 0;

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active") 
        thumbnails[itemActive].classList.add("active")
    }

}


//Creare dinamicamente i div con le immagini del carosello

let itemsContent = '';
let itemsThumbnails = ""

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += 
    `
    <div class="item">
        <img src="./img/${imagesArray[i].image}">
        <div class="item-description">
            <h2>${imagesArray[i].title}</h2>
            <p>${imagesArray[i].description}</p>
        </div>
    </div>
    `

    itemsThumbnails += 
    `
    <div class="thumb">
        <img src="./img/${imagesArray[i].image}">
    </div>
    `

}


//inserire le immagini nel div contenitore

const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

const thumbnailsPrev = document.querySelector(".thumbnails")
thumbnailsPrev.innerHTML += itemsThumbnails


//Prendere la prima immagine dell'array e renderla attiva

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');


//Rendere attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const thumbnails = document.getElementsByClassName("thumb")
thumbnails[itemActive].classList.add("active")

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', autoplaySlide)

prev.addEventListener('click', function(){
    
    if(itemActive > 0){

        // Togliere la classe active all'imagine e del pallino attuale
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        // Decremento
        itemActive--;

        // Aggiungere la classe active all'elemento precedente

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active")
        thumbnails[itemActive].classList.add("active")

    }else{
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        itemActive = items.length - 1;

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active") 
        thumbnails[itemActive].classList.add("active")
    }
})

setInterval(autoplaySlide, 3000);