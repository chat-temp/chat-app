import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput as Input, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'

const SignUp = ({ navigation }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    preferredLanguage: '',
  })

  const handleTextChange = (input, value) => {
    switch (input) {
      case 'firstName':
        setState({ ...state, firstName: value })
        break

      case 'lastName':
        setState({ ...state, lastName: value })
        break
      case 'email':
        setState({ ...state, email: value })
        break

      case 'password':
        setState({ ...state, password: value })
        break

      case 'country':
        setState({ ...state, country: value })
        break

      case 'preferredLanguage':
        setState({ ...state, preferredLanguage: value })

        break
      default:
        throw new Error('ye buddy! you broke me')
        break
    }
  }

  const goBack = () => {
    navigation.push('Welcome')
  }

  const isValid = state => {
    // TODO: actually validate state and do error handling
    for (const key in state) {
      if (state.hasOwnProperty(key) && state[key] === '') {
        return false
      }
    }
    return true
  }

  const handleSubmit = () => {
    isValid(state) ? navigation.navigate('App') : console.log('error')
  }

  return (
    <View style={{ backgroundColor: 'white' }}>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
          </View>
          <View style={styles.form}>
            <Text style={styles.title}>Changing the world through knowledge sharing.</Text>
            <Input
              style={styles.input}
              onChangeText={text => handleTextChange('firstName', text)}
            />
            <Input style={styles.input} onChangeText={text => handleTextChange('lastName', text)} />
            <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
              <Text style={styles.submitTitle}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={goBack} style={styles.goBack}>
            <AntDesign name={'arrowleft'} size={25} color={'#26547C'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default SignUp
