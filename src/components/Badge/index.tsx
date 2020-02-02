import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

const Badge = ({ small }) => {
  const badge = small ? 'small' : 'badge'
  return (
    <View>
      <Image
        style={styles[badge]}
        source={{
          uri:
            'https://www.biography.com/.image/t_share/MTU0OTkwNDUxOTQ5MDUzNDQ3/kanye-west-attends-the-christian-dior-show-as-part-of-the-paris-fashion-week-womenswear-fall-winter-2015-2016-on-march-6-2015-in-paris-france-photo-by-dominique-charriau-wireimage-square.jpg',
        }}
      />
    </View>
  )
}
export default Badge
