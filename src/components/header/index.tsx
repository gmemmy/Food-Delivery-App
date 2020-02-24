import React, { Fragment } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import colors from '../../utils/colors'

//Icons
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuIcon}>
        <AntDesign name="menuunfold" size={20} color={colors.black} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bagIcon}>
        <SimpleLineIcons name="handbag" size={20} color={colors.orange} />
      </TouchableOpacity>
    </View>
  )
}

export default Header
