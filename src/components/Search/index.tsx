import React from 'react'
import { View, Text, TouchableOpacity, TextInput as Input } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'

const Search = ({}) => {
  const filter = () => {}

  return (
    <View style={styles.container}>
      <Input style={styles.input} />
      <TouchableOpacity style={styles.iconContainer}>
        <AntDesign name={'filter'} size={25} color={'white'} />
      </TouchableOpacity>
    </View>
  )
}

export default Search
