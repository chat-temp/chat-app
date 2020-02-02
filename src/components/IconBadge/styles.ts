import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {},
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: width / 30,
    fontWeight: '700',
    color: '#26547C',
    marginLeft: -5,
  },
})

export default styles
