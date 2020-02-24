import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'
import { getWidth, getHeight } from '../../utils/dimensions'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getHeight(55)
  },
  menuIcon: {
    marginLeft: getWidth(15),
    color: colors.black
  },
  bagIcon: {
    marginRight: getWidth(15)
  }
})

export default styles
