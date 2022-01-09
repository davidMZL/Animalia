import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, compose} from 'redux'
import {App} from './routes/App';
import reducer from './reducer'
import "firebase/auth"
import "firebase/firestore"
import "firebase/app"
import "firebase/storage"
import { FirebaseAppProvider, Suspense } from 'reactfire';

import { firebaseConfig } from './firebase/config'

const initialState = {
  "numberCart": 0,
  "totalPrice": 0,
  "myList": [],
  "newProducts": [
    {
      id: 1,
      name: "BITE",
      description: "Bozal para perro",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626514963/Animalia/cards/1.png",
      price: 96,
      category: "new"
    },
    {
      id: 2,
      name: "CANARY",
      description: "Mix Especial",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591551/Animalia/cards/2_y7bhbk.png",
      price: 40,
      category: "new"
    },
    {
      id: 3,
      name: "JAULA",
      description: "Jaula para Canario",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/3_wkrvei.png",
      price: 140,
      category: "new"
    },
    {
      id: 4,
      name: "EXOTIC",
      description: "Comida Dietética para Ardillas",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/4_zltjbi.png",
      price: 36,
      category: "new"
    },    
  ],
  "popularProducts": [
    {
      id: 5,
      name: "PEDIGREE",
      description: "Comida para perros",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/5_xhstcl.png",
      price: 26,
      category: "popular"
    },
    {
      id: 6,
      name: "CIRCUIT",
      description: "Habitat de Canarios",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/6_us8eau.png",
      price: 166,
      category: "popular"
    },
    {
      id: 7,
      name: "CHURU",
      description: "Recipiente de Pollo",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/7_imas0a.png",
      price: 40,
      category: "popular"
    },
    {
      id: 8,
      name: "ROYAL CANIN",
      description: "Nutrientes para gatos",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/8_uga2kf.png",
      price: 40,
      category: "popular"
    },
    {
      id: 9,
      name: "BLUE",
      description: "Pollo Natural",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/9_xrogkr.png",
      price: 16,
      category: "popular"
    },
    {
      id: 10,
      name: "SUJETADOR",
      description: "Sujetador para perro",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/10_ucna9f.png",
      price: 36,
      category: "popular"
    },
    {
      id: 11,
      name: "TOYS",
      description: "Juguetes para perros",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/11_vwubch.png",
      price: 96,
      category: "popular"
    },
    {
      id: 13,
      name: "PECERA",
      description: "Pecera de vidrio templado",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/12_yakvxb.png",
      price: 240,
      category: "popular"
    },
    {
      id: 14,
      name: "ZOLUX",
      description: "Nicho de aves",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/13_gudzt9.png",
      price: 40,
      category: "popular"
    },
    {
      id: 15,
      name: "PREY",
      description: "Formula para perros",
      image: "https://res.cloudinary.com/fangel/image/upload/v1626591550/Animalia/cards/14_vrujt4.png",
      price: 40,
      category: "popular"
    },
  ]
}

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
console.log(initialState.myList)
const store = createStore(reducer, initialState, reduxDev)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
