import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Welcome from '../../components/UserWelcome'
import styles from './styles'

const Home = () => {
  return (
    <SafeAreaView>
      <Welcome name="Jehf" />
    </SafeAreaView>
  )
}
export default Home
