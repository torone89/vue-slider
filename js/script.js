
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

// VERIFICA COLLEGAMENTO VUEJS

console.log('Vue ok', Vue)

// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Le caratteristiche minime richieste sono:
// Immagine grande visibile quando attiva
// Lista di Thumbnails in basso
// Anche nelle thumbnails dobbiamo avere una classe active corrispondente all'immagine attiva in quel momento (lo stile è a vostra discrezione)
// Al click sulle freccette l'immagine principale deve cambiare (e la thumbnail corrispondente deve avere la classe active con conseguente effetto visivo)
// Implementare il ciclo infinito: se sono sulla prima immagine e clicco prev, devo ricominciare dall'ultima. Se sono sull'ultima e clicco next, devo ripartire dalla prima.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (questo richiederà qualcosa che non abbiamo visto)
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce (questo richiederà degli eventi che non abbiamo visto)
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];

const contenitore = document.getElementById("galleria")
console.log(contenitore)
const thumbnails = document.getElementById("thumb")

// Variabili di appoggio 
let item = '';
let thumb = '';
let active = [0];

for (let key in images) {
    item += `
     <div class="item">
    <img src="${images[key].url}" alt="${images[key].title}">
<div class="textcontent">
    <h3>${images[key].title}</h3>
    <p>${images[key].description}</p>
    </div>
      </div>
            `
    thumb += `
        <div class="thumb">
            <img class="scale" src="${images[key].url}" alt="${images[key].title}">
        </div>
    `
}

// STAMPO SUL DOM
contenitore.innerHTML += item
thumbnails.innerHTML += thumb

// / ## Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
// ---
// ## BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.


// Prendo le classi item&scale dal css per attivare disattivare stili sulle immagini

document.getElementsByClassName('item')[active].classList.add('active');

document.getElementsByClassName('scale')[active].classList.add('scaleactive');

// FUNZIONE GOtoNExt
const goToNext = () => {
    //rimuovo la classe active
    document.querySelector(".active").classList.remove('active')
    document.querySelector(".scaleactive").classList.remove('scaleactive')

    // incremento activindex 
    active++;

    // RIPARTO DA 0 quando arrivo in fondo alle immagini

    if (active > images.length - 1) {

        active = 0;
    }

    // aggiungo la classe active
    document.getElementsByClassName('item')[active].classList.add('active');
    document.getElementsByClassName('scale')[active].classList.add('scaleactive');
}

// Aggiungo i bottoni
const prima = document.getElementById('prima');
const dopo = document.getElementById('dopo');
console.log(prima, dopo)

// Invoco la funzione gotonext e uso l'AddeventListner per cliccare sul bottone dopo per
// passare all'immagine succesiva

dopo.addEventListener('click', goToNext)

// Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima 
// e l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura s
// e l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.


prima.addEventListener('click', function () {
    //rimuovo la classe active
    document.querySelector(".active").classList.remove('active')
    document.querySelector(".scaleactive").classList.remove('scaleactive')

    // RIPARTO DA 0 quando arrivo in fondo alle immagini
    active--

    if (active < 0) {
        active = images.length - 1;
    }

    // aggiungo la classe active
    document.getElementsByClassName('item')[active].classList.add('active');
    document.getElementsByClassName('scale')[active].classList.add('scaleactive');
})


// ## BONUS 2:
// ## BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo 
// (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

setInterval(goToNext, 3000);




