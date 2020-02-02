import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'
import BadgeProvider from '../IconBadge'
import Badge from '../Badge'
import moment from 'moment'
import styles from './styles'

const Welcome = ({ name, message = 'Hello, ', navigation }) => {
  // TODO: update time periodically  in case day changes
  const date = moment().format('MMM Do, YYYY')

  const gotoProfile = () => {
    navigation.navigate('Profile')
    console.log(navigation)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.extra}>
          <Text style={styles.date}>{date}</Text>
          <BadgeProvider text={'5'}>
            <MaterialIcons name={'notifications'} size={25} color={'#26547C'} />
          </BadgeProvider>
        </View>

        <TouchableOpacity onPress={gotoProfile} style={styles.badge}>
          <Badge small />
        </TouchableOpacity>
      </View>

      <Text style={styles.message}>{`${message} ${name}`}</Text>
    </View>
  )
}

export default withNavigation(Welcome)
