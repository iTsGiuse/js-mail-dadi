/* CHIEDI ALL UTENTE LA MAIL  */
const email = prompt('Inserisci la tua mail');
console.log(email);

/* ARRAY EMAIL */
const listEmail = ['pluto@gmail.com', 'paperino@icloud.com', 'andrea@libero.it', 'rossi@virgilio.it', 'ciao@gmail.com'];
console.log(listEmail);

/* VARIABILE FOR CHECK */
let x = 0;

/* VERIFCA SE LA MAIL E PRESENTE NEL ARRAY */
 for (let i = 0; i < listEmail.length; i++) {
    if (email === listEmail[i]) {
        x = 1;
    }
} 

if (x === 1) {
    alert('La mail è presente nel database');
} else {
    alert('La mail non è presente nel database');
}