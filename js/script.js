//MILESTONE 0

//Creare un'array di immagini

const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]


//Creare dinamicamente i div con le immagini del carosello

let itemsContent = '';

for (let i = 0; i < imagesArray.length; i++){
    itemsContent +=
    `
    <div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>
    `
}


//inserire le immagini nel div che le deve contenere

const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;


//Prendere la prima immagine dell'array e renderla attiva

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');