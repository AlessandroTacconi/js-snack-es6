/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

'use strict';

const biciDaCorsa = [
  {
    nome: 'Benotto',
    pesoKG: 8.2,
  },
  {
    nome: 'Bianchi',
    pesoKG: 7,
  },
  {
    nome: 'Colnago',
    pesoKG: 9,
  },
  {
    nome: 'Columbus',
    pesoKG: 7.5,
  },
  {
    nome: 'Olympia',
    pesoKG: 9.2,
  },
];

// Trova la bici con il peso minore
let biciPesoMinore = biciDaCorsa[0];

for (let key in biciDaCorsa) {
  const bici = biciDaCorsa[key];
  if (bici.pesoKG < biciPesoMinore.pesoKG) {
    biciPesoMinore = bici;
  }
}

// Stampare la bici con il peso minore
const { nome, pesoKG } = biciPesoMinore;
const biciPiuLeggera = document.getElementById('bici');
console.log(`La bici più leggera è la ${nome} con un peso di ${pesoKG} kg.`);
biciPiuLeggera.innerHTML = `La bici più leggera è la ${nome} con un peso di ${pesoKG} kg.`;
