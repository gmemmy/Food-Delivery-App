import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  FlatList
} from 'react-native'
import styles from './styles'
import colors from '../../utils/colors'
import foodList from './constants'

//Icons
import { SimpleLineIcons, AntDesign, EvilIcons } from '@expo/vector-icons'

const burgerImage = require('../../../assets/burger.png')

const Home = () => {
  const [itemColor, setHighlightColor] = useState(null)
  const [itemIndex, setIndex] = useState('0')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <AntDesign name="menuunfold" size={20} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bagIcon}>
          <SimpleLineIcons name="handbag" size={20} color={colors.orange} />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>Houz Cheese</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.headerText}>Burger</Text>
        <Image source={burgerImage} style={styles.burger} />
      </View>
      <View style={styles.searchView}>
        <TextInput
          style={styles.input}
          placeholder="Search here"
          placeholderTextColor={colors.ash}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <EvilIcons name="search" size={30} />
        </TouchableOpacity>
      </View>
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
    </View>
  )
}

export default Home
