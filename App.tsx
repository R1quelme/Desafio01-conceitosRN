import React from 'react';
import { StatusBar } from 'react-native';

import { Home } from './src/pages/Home';

export default function App() {
  return (
    //Para executar de npm install
    //npm start
    //pod install na pasta IOS
    //cd ios && arch -x86_64 xed . && cd ..
    //o xcode ira abrir e la executar
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
    </>
  );
}
