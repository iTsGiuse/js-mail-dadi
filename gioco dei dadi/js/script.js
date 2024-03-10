/* GENERA UN NUMERO CASUALE PER IL GIOCATORE */
const numeroGiocatore = parseInt(Math.random() * 5) + 1;
console.log(numeroGiocatore);

/* GENERA UN NUMERO CASUALE PER IL COMPUTER */
const numeroComputer = parseInt(Math.random() * 5) + 1;
console.log(numeroComputer);

/* VERIFICA CONDIZIONE */
if (numeroGiocatore > numeroComputer) {
    alert('ha vinto il giocatore'); 
} else if (numeroGiocatore < numeroComputer) {
    alert('ha vinto il computer'); 
} else if (numeroGiocatore === numeroComputer) {
    alert ('è un pareggio');
}