import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

const Welcome = ({ navigation }) => {
  const handleSignInClick = () => {
    navigation.push('SignIn')
    console.log('hello')
  }
  const handleSignUpClick = () => {
    navigation.push('SignUp')
    console.log('hello')
  }

  return (
    <View style={{ backgroundColor: 'white' }}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.logo}>Thicc Logo</Text>
          <View style={styles.form}>
            <Image source={require('../../assets/together.png')} style={styles.illustration} />
            <Text style={styles.title}>Help make knowledge more accessible by sharing.</Text>
            <TouchableOpacity onPress={handleSignInClick} style={styles.submit}>
              <Text style={styles.submitTitle}>Already a Member</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUpClick} style={styles.submit}>
              <Text style={styles.submitTitle}>Join the Movement</Text>
            </TouchableOpacity>
          </View>
          <Text></Text>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default Welcome
