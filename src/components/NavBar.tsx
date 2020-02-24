import React, { useState } from 'react'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { foodList } from '../screens/screen1/constants'
import colors from '../utils/colors'
import styles from './styles'

const NavBar = () => {
  const [itemColor, setHighlightColor] = useState(null)
  const [itemIndex, setIndex] = useState('1')
  return (
    <FlatList
      data={foodList}
      contentContainerStyle={styles.foodListContainer}
      renderItem={({ item }: any) => (
        <TouchableOpacity
          onPress={() => {
            setHighlightColor(colors.black)
            setIndex(item.id)
          }}
          style={item.id === itemIndex && styles.foodHighLight}
        >
          <Text
            style={[
              styles.food,
              {
                color: item.id === itemIndex ? colors.black : colors.ash
              }
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  )
}

export default NavBar
