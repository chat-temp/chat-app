import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  spinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
