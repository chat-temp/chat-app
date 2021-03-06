import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  welcomeMessage: {
    fontSize: width / 12,
    fontWeight: '700',
    color: '#26547C',
    marginLeft: width / 20,
  },
})

export default styles
