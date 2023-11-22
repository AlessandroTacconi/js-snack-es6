/*
Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

'use strict';

const serieA = [
  {
    nome: 'Lazio',
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Juventus',
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Milan',
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Inter',
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Atalanta',
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Fiorentina',
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Napoli',
    punti: 0,
    falliSubiti: 0,
  },
];

function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let nomeSquadra in serieA) {
  serieA[nomeSquadra].punti = generaNumeroCasuale(40, 90);
  serieA[nomeSquadra].falliSubiti = generaNumeroCasuale(380, 550);
}

const serieAClassifica = [];

for (let nomeSquadra in serieA) {
  const { nome, falliSubiti } = serieA[nomeSquadra];
  serieAClassifica.push({ nome, falliSubiti });
}

console.log('Serie A:', serieA);
console.log('Nomi e Falli Subiti:', serieAClassifica);
