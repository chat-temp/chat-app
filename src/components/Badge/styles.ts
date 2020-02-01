import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: width / 3,
    height: width / 3,
  },
  badge: { height: '100%', width: '100%', borderRadius: width / 6 },
})

export default styles
