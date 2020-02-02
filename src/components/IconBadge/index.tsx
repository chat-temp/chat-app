import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const IconBadge = ({ children, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

export default IconBadge
