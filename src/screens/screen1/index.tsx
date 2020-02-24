import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles'

// Components
import Header from '../../components/header'
import SearchBar from '../../components/searchBar'
import NavBar from '../../components/NavBar'

//Icons
import { SimpleLineIcons, AntDesign, EvilIcons } from '@expo/vector-icons'

const burgerImage = require('../../../assets/burger.png')

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerText}>Houz Cheese</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.headerText}>Burger</Text>
        <Image source={burgerImage} style={styles.burger} />
      </View>
      <SearchBar />
      <NavBar />
      <View style={styles.feed}>
        <ScrollView>
          <Text>Hello</Text>
          {/* <Image style={styles.burgerImage} source={burgerImage} />
          <Image style={styles.burgerImage} source={burgerImage} />
          <Image style={styles.burgerImage} source={burgerImage} />
          <Image style={styles.burgerImage} source={burgerImage} /> */}
        </ScrollView>
      </View>
    </View>
  )
}

export default Home
