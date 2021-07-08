import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import store from './src/store/Store'
import { ThemeProvider } from 'react-native-elements';
import { Navigation } from './src/navigation/Navigation'
import { useFonts } from 'expo-font'


export default function App() {


  /* const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Black.ttf'),
  })

  if (!loaded) {
    return null;
  } */

  const theme = {
    colors: {
      primary: '#38952A',
    }
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar translucent backgroundColor="transparent" />
    </Provider >
  )
}