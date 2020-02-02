import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    position: 'absolute',
    top: 20,
    left: width / 30,
    color: '#26547C',
    textAlign: 'center',
    fontSize: width / 15,
    fontWeight: '700',
  },
  illustration: { width: width / 2, height: width / 3, marginBottom: width / 30 },
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -(width / 3),
  },
  submit: {
    width: width - (width / 30 + width / 30),
    backgroundColor: '#3066BE',
    padding: width / 25,
    marginBottom: width / 30,
    marginTop: width / 50,
    marginLeft: width / 30,
    marginRight: width / 30,
    borderRadius: width / 10,
  },
  submitTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: width / 25,
    fontWeight: '700',
  },
})

export default styles
