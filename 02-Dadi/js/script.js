// 1. Generazione del lancio
const playerRoll = Math.floor(Math.random() * 6) + 1;
const computerRoll = Math.floor(Math.random() * 6) + 1;

// 2. Stampa risultati
console.log("Tuo lancio: " + playerRoll);
console.log("Lancio computer: " + computerRoll);

// 3. Determinazione vincitore
if (playerRoll > computerRoll){
  console.log("Hai vinto!");
} 
else if (playerRoll < computerRoll){
  console.log("Hai perso!");
} 
else{
  console.log("Pareggio!");
}
