import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import Navigation from './src/Navigation'

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )
}
export default App
