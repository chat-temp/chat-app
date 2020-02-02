import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: width / 20,
    flexDirection: 'column',
  },
  userInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  extra: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    height:'100%',
  },
  badge: { width: '50%', alignItems: 'flex-end' },
  message: {
    fontSize: width / 12,
    fontWeight: '700',
    color: '#26547C',
    textAlign: 'left',
  },
  date: {
    fontSize: width / 30,
    fontWeight: '700',
    color: '#26547C',
    marginRight: width / 30,
  },
})

export default styles
