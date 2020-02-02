import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  logo: { height: width / 4, width: width / 3 },
  title: {
    color: '#26547C',
    textAlign: 'center',
    fontSize: width / 15,
    fontWeight: '700',
    marginBottom: width / 10,
  },
  form: {
    maxHeight: height / 2,
    height: '100%',
    width: '100%',
  },
  input: {
    padding: width / 25,
    backgroundColor: '#26547C',
    margin: width / 40,
    borderRadius: width / 95,
    color: 'white',
  },
  submit: {
    backgroundColor: '#3066BE',
    padding: width / 25,
    marginBottom: width / 30,
    marginTop: width / 15,
    marginHorizontal: width / 30,
    borderRadius: width / 10,
  },
  submitTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: width / 25,
    fontWeight: '700',
  },
  goBack: {
    position: 'absolute',
    bottom: 10,
    left: width / 30,
    textAlign: 'center',
    fontSize: width / 15,
    fontWeight: '700',
  },
})

export default styles
