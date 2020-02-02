import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width / 20,
    padding: width / 30,
    flexDirection: 'column',
    height: height / 3,
    backgroundColor: 'yellow',
  },
  topic: {
    fontSize: width / 20,
    fontWeight: '700',
    color: '#26547C',
    textAlign: 'left',
  },
  footerStatus: {
    fontSize: width / 20,
    fontWeight: '500',
    color: '#26547C',
    textAlign: 'left',
  },
  footer: {
    position: 'absolute',
    bottom: width / 30,
    left: width / 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
})

export default styles
