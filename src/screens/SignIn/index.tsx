import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput as Input, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import API from '../../services/API'
import styles from './styles'

const SignIn = ({ navigation }) => {
  const [state, setState] = useState({ email: '', password: '' })

  const handleTextChange = (input, value) => {
    switch (input) {
      case 'email':
        const stateWithNewEmail = { email: value, password: state.password }
        setState(stateWithNewEmail)
        break

      case 'password':
        const stateWithNewPassword = { password: value, email: state.email }
        setState(stateWithNewPassword)
        break

      default:
        break
    }
  }

  const isValid = state => {
    return true
  }
  const handleSubmit = () => {
    API.createAccount(state).then(console.log)
    isValid(state) ? navigation.navigate('App') : console.log('error')
  }

  const goBack = () => {
    navigation.push('Welcome')
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
            <Input style={styles.input} onChangeText={text => handleTextChange('email', text)} />
            <Input style={styles.input} onChangeText={text => handleTextChange('password', text)} />
            <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
              <Text style={styles.submitTitle}>Sign In</Text>
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
export default SignIn
