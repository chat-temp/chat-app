import React, { useEffect } from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native'

const Loading = props => {
  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    props.navigation.navigate(userToken ? 'App' : 'Auth')
  }

  useEffect(() => {
    getToken().catch(err => {
      console.log(err)
    })
  })

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  )
}

export default Loading
