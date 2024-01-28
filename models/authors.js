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
  require('../assets/images/sbs.jpeg'),
  []
);

const sms = new Author('Serigne Babacar Sy', require('../assets/images/sbs.jpeg'), []);
const smssd = new Author('Serigne Cheikh Ahmed Tidiane Sy',require('../assets/images/smsa.jpg'), []);
const scts = new Author('Serigne Abdou Aziz Sy Dabakh', require('../assets/images/maadms.jpg'), []);
const ehms = new Author('Serigne Maodo Sy Dabakh', require('../assets/images/smsm.jpg'), []);
const mms = new Author('Serigne Mbaye Sy Abdou', require('../assets/images/sbs.jpeg'), []);

// Créez une liste d'auteurs
const authors = [sbs, sms, smssd, scts, ehms, mms];

// Exportez la liste d'auteurs
export default authors;