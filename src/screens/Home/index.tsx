import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Welcome from '../../components/UserWelcome'
import Search from '../../components/Search'
import Card from '../../components/TopicCard'
import styles from './styles'

const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Welcome name="Jehf" />
        <Search />
        <Card />
      </SafeAreaView>
    </ScrollView>
  )
}
export default Home
