import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    padding: width / 30,
    marginBottom: width / 30,
    marginTop: width / 15,
    borderRadius: width / 40,

    marginHorizontal: width / 20,
    backgroundColor: '#26547C',
    margin: width / 60,
    color: 'white',
    flexDirection: 'row',
  },
  input: { width: '90%', color: 'white' },
  iconContainer: {},
})

export default styles
