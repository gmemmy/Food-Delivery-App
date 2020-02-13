import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles'
import colors from '../../utils/colors'

//Icons
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons'

const burgerImage = require('../../../assets/burger.png')

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <AntDesign name="menuunfold" size={20} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bagIcon}>
          <SimpleLineIcons name="handbag" size={20} color={colors.red} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.headerText}>Houz Cheese{'\n'}Burger</Text>
      </View>
    </View>
  )
}

export default Home
