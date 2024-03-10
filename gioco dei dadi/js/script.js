const numeroGiocatore = parseInt(Math.random() * 5) + 1;
console.log(numeroGiocatore);

const numeroComputer = parseInt(Math.random() * 5) + 1;
console.log(numeroComputer);

if (numeroGiocatore > numeroComputer) {
    alert('ha vinto il giocatore'); 
} else if (numeroGiocatore < numeroComputer) {
    alert('ha vinto il computer'); 
} else if (numeroGiocatore === numeroComputer) {
    alert ('è un pareggio');
}