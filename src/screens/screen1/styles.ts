import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'
import { getWidth, getHeight } from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getHeight(40),
  },
  menuIcon: {
    marginLeft: getWidth(15),
    color: colors.black
  },
  bagIcon: {
    marginRight: getWidth(15),
  }
})

export default styles;
