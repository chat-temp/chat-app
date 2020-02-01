import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: '100%',
    alignItems: 'center',
  },
  title: { fontSize: width / 12, fontWeight: '700', color: '#26547C' },
  user: {
    marginTop: 10,
  },
  fullName: { textAlign: 'center', fontSize: width / 20, fontWeight: '500', color: '#26547C' },
  level: { textAlign: 'center', fontSize: width / 25, fontWeight: '500', color: '#59C3C3' },
  fullSpace: {
    height: 50,
    width: '100%',
  },
})

export default styles
