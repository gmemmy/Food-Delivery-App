import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'
import colors from '../utils/colors'

//Icons
import { EvilIcons } from '@expo/vector-icons'

const SearchBar = () => {
  return (
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
  )
}

export default SearchBar
