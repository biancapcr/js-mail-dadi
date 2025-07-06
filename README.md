## Mail
===
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email

===

## Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

===

Fate sempre il file readme.md in cui scrivere i testi dell'esercizio e scomporre il problema in sottoproblemi. 
Numero di push minimo totale: 6

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare,
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare,
si ma noi cosa vogliamo fare?,
torniamo a scrivere in italiano,
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

===

# Scomposizione 'Mail'

1. Creazione lista e-mail

- Definire un array e-mail degli invitati:
const invitedEmails =[
  "alice@example.com",
  "carlo@example.com",
  "aurora@example.com",
  // ...
];

2. Input utente

- Chiedere all'utente di inserire la propria email tramite prompt:
const userEmail = prompt("Inserisci la tua email:");

3. Ricerca dell'e-mail

- Implementare ciclo for per scorrere manualmente l'array:

let found = false;
for (let i = 0; i < invitedEmails.length; i++){
  // ...
}

4. Controllo corrispondenza

- All'interno del ciclo confrontare l'e-mail corrente con quella dell'utente:

  if (invitedEmails[i] === userEmail){
    found = true;
    break;
  }

5. Esito/Verifica

- Usare console.log per stampare il risultato:
if (found){
  console.log("Accesso consentito");
} 
else {
  console.log("Accesso negato");
}

===

# Gioco dei dadi
1. Generazione del lancio

- Creare due variabili con numeri random da 1 a 6:
const playerRoll = Math.floor(Math.random() * 6) + 1;
const computerRoll = Math.floor(Math.random() * 6) + 1;

2. Stampa risultati

- Mostrare valore lancio di giocatore e computer:
console.log("Tuo lancio: " + playerRoll);
console.log("Lancio computer: " + computerRoll);

3. Determinazione del vincitore

- Confrontare i due valori e stampare esito:
if (playerRoll > computerRoll){
  console.log("Hai vinto!");
} else if (playerRoll < computerRoll){
  console.log("Hai perso!");
} else {
  console.log("Pareggio!");
}

===