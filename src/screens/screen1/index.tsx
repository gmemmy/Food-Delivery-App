import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native'
import styles from './styles'
import colors from '../../utils/colors'

//Icons
import { SimpleLineIcons, AntDesign, EvilIcons } from '@expo/vector-icons'

const burgerImage = require('../../../assets/burger.png')

const Home = () => {
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
          placeholderTextColor={colors.black}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <EvilIcons name="search" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home
