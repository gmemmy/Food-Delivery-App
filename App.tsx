import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import * as Font from 'expo-font'
import Home from './src/screens/screen1';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
 
  useEffect(() => {
    Font.loadAsync({
      'MaisonNeueBold': require('./assets/Raleway-Bold.ttf'),
    }).then(() => setFontLoaded(true))
    return () => {
      setFontLoaded(false)
    }
  }, [])

  if (!fontLoaded) {
    return <View />
  }
  return (
   <Home />
  );
}
