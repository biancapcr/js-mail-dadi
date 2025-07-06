// 1. Creazione lista invitati
const invitedEmails =[
  "alice@example.com",
  "carlo@example.com",
  "aurora@example.com",
  "davide@example.com",
  "anna@example.com"
];
// 2. Richiesta dell'e-mail all'utente
const userEmail = prompt("Inserisci la tua email:");

// 3. Ricerca dell'e-mail nella lista
let found = false;
for (let i = 0; i < invitedEmails.length; i++){
  // Confronto l'email corrente con quella inserita dall'utente
  if (invitedEmails[i] === userEmail){
    found = true;
    break;         
  }
}