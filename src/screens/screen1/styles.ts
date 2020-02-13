import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'
import { getWidth, getHeight } from '../../utils/dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getHeight(50)
  },
  menuIcon: {
    marginLeft: getWidth(15),
    color: colors.black
  },
  bagIcon: {
    marginRight: getWidth(15)
  },
  burgerImage: {
    resizeMode: 'contain',
    height: getHeight(50),
    width: getWidth(50),
    borderRadius: getWidth(50) / 2,
    overflow: 'hidden'
  },
  headerText: {
    marginLeft: getWidth(15),
    fontWeight: 'bold',
    fontSize: getHeight(30)
  }
})

export default styles
