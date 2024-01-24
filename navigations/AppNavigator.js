// AppNavigator.js

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreens';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    // Ajoutez d'autres écrans ici si nécessaire
  },
  {
    initialRouteName: 'Home', // Définir la page d'accueil
    headerMode: 'none', // Masquer les en-têtes par défaut
  }
);

export default createAppContainer(AppNavigator);
