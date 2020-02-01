import React from 'react'
import { View, ScrollView, Text, SafeAreaView } from 'react-native'
import Badge from '../../components/Badge'

import styles from './styles'

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.fullSpace} />
        <Badge />
        <View style={styles.user}>
          <Text style={styles.fullName}>Jehf K Denezaire</Text>
          <Text style={styles.level}>computer scientist</Text>
        </View>
        <View style={styles.fullSpace} />
        <View>
          <Text>bruh</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Home
