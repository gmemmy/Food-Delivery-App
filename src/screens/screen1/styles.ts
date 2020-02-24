import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'
import { getWidth, getHeight } from '../../utils/dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  burgerImage: {
    resizeMode: 'contain',
    height: getHeight(200),
    width: getWidth(200)
  },
  headerText: {
    marginLeft: getWidth(15),
    fontWeight: 'bold',
    fontSize: getHeight(30)
  },
  burger: {
    height: getHeight(35),
    width: getWidth(50),
    resizeMode: 'contain'
  },
  feed: {
    backgroundColor: colors.orange,
    marginTop: getHeight(200)
  }
})

export default styles
