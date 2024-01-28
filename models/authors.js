import React from 'react';
import { View, Text, Image } from 'react-native';

// Importez le composant Xassida
import xassidaList from './xassidas'; // Assurez-vous d'avoir le bon chemin d'importation

// Définissez la classe Author
class Author {
  constructor(name, imageUrl, xassidas) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.xassidas = xassidas;
  }
}

// Créez des instances d'auteurs avec des données spécifiques
const sbs = new Author(
  'Cheikh Seydil Hadj Malick Sy',
  './assets/images/sbs.jpeg',
  [
    
  ]
);

const sms = new Author('Serigne Babacar Sy', './assets/images/sms.jpeg', []);
const smssd = new Author('Serigne Cheikh Ahmed Tidiane Sy', './assets/images/smssd.jpeg', []);
const scts = new Author('Serigne Abdou Aziz Sy Dabakh', './assets/images/scts.jpeg', []);
const ehms = new Author('Serigne Maodo Sy Dabakh', './assets/images/ehms.jpeg', []);
const mms = new Author('Serigne Mbaye Sy Abdou', './assets/images/mms.jpeg', []);

// Créez une liste d'auteurs
const authors = [sbs, sms, smssd, scts, ehms, mms];

// Exportez la liste d'auteurs
export default authors;