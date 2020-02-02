import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import BadgeProvider from '../IconBadge'
import moment from 'moment'
import styles from './styles'

const Card = ({}) => {
  // TODO: update time periodically  in case day changes
  const date = moment().format('MMM Do')

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>#text</Text>
      <View style={styles.footer}>
        <BadgeProvider text="2277">
          <Feather name={'user'} size={25} color={'#26547C'} />
        </BadgeProvider>
        <Text style={styles.footerStatus}>active</Text>
      </View>
    </View>
  )
}

export default Card
