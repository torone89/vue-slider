
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

// VERIFICA COLLEGAMENTO VUEJS

console.log('Vue ok', Vue)

Vue.config.devtools = true

// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Le caratteristiche minime richieste sono:
// Immagine grande visibile quando attiva
// Lista di Thumbnails in basso
// Anche nelle thumbnails dobbiamo avere una classe active corrispondente all'immagine attiva in quel momento (lo stile è a vostra discrezione)
// Al click sulle freccette l'immagine principale deve cambiare (e la thumbnail corrispondente deve avere la classe active con conseguente effetto visivo)
// Implementare il ciclo infinito: se sono sulla prima immagine e clicco prev, devo ricominciare dall'ultima. Se sono sull'ultima e clicco next, devo ripartire dalla prima.
// Bonus:


const slider = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        time: 0,
        immagini: [{
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
        },]

    },
    methods: {
        goNext() {
            // RIPARTO DA 0 quando arrivo in fondo alle immagini
            if (this.currentIndex == this.immagini.length - 1) {

                this.currentIndex = 0;
            } else {
                //     // incremento activindex 
                this.currentIndex++;
            }
        },
        goBack() {
            this.currentIndex--;
            if (this.currentIndex < 0)
                this.currentIndex = this.immagini.length - 1
        },
        // SLIDER AUTO TIME
        // 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (questo richiederà qualcosa che non abbiamo visto)

        autoplay: function () {
            this.time = setInterval(this.goNext, 3000)
        },
        // 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce (questo richiederà degli eventi che non abbiamo visto)

        stopautoplay: function () {
            clearInterval(this.time);
            this.time = 0;
        },

    },
    // mounted() : viene eseguito prima di creare il componente.
    mounted() {
        this.autoplay()
    }
})

