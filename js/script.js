// ESERCIZIO VUE

// 1. Creare un'app con la lista di brani musicali. 
//  [*]   Milestone 1.
//     Creare l'array di brani musicali. Ogni brano ha nome, cantante, genere, duratata.

//  [*]   Milestone 2.
//     Visualizzare i brani musicali in pagina

//  [*]   Milestone 3.
//     Al click su un brano deve comparire un'icona play. Per far scomparire l'icona l'utente deve cliccare al brano un'altra volta.
//     ATTENZIONE: solo visualizzare / fare nascondere l'icona, non dovete riprodurre i brani ;) 

//   []  Milestone 4.
//     Predisporre gli input che permettono all'utente di aggiungere un nuovo brano alla lista.

const {createApp} = Vue;

createApp({
    data() {
        return {
            myPlaylist: [
                {
                    name: "deja-vu",
                    singer: "Olivia Rodrigo",
                    genre: "Pop",
                    songLength: "3:36",
                    player: false
                },
                {
                    name: "Fine Line",
                    singer: "Harry Styles",
                    genre: "Pop",
                    songLength: "6:18",
                    player: false
                },
                {
                    name: "Greedy",
                    singer: "Ariana Grande",
                    genre: "Pop",
                    songLength: "3:35",
                    player: false
                },
                {
                    name: "Venus Fly Trap",
                    singer: "MARINA",
                    genre: "Pop",
                    songLength: "2:39",
                    player: false
                }
            ],
            newSong: {
                name: "",
                singer: "",
                genre: "",
                songLength: null,
                player: false
            }
        }
    },
    methods: {
        addNewSong() {
            if (this.newSong.name.length >= 3 && this.newSong.singer.length >= 3 && this.newSong.genre.length >= 3 && this.newSong.songLength.includes(":")) {
                this.myPlaylist.push(this.newSong);
            }
        } 
    }
}).mount("#app");
