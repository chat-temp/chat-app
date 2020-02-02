import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  badge: { width: width / 3, height: width / 3, borderRadius: width / 6 },
  small: {
    width: width / 8,
    height: width / 8,
    borderRadius: width / 6,
  },
})

export default styles
