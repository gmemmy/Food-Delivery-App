import { StyleSheet } from 'react-native'
import colors from '../utils/colors'
import { getWidth, getHeight } from '../utils/dimensions'

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    marginTop: getHeight(30),
    marginLeft: getWidth(15)
  },
  input: {
    height: getHeight(50),
    width: getWidth(250),
    backgroundColor: colors.grey,
    borderRadius: getWidth(12),
    paddingHorizontal: getWidth(20),
    color: colors.black
  },
  searchIcon: {
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: getWidth(25),
    height: getHeight(50),
    width: getWidth(50),
    borderRadius: getWidth(12)
  },
  foodListContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getHeight(15)
  },
  food: {
    fontWeight: 'bold',
    fontSize: getWidth(18),
    paddingHorizontal: getWidth(20)
  },
  foodHighLight: {
    backgroundColor: colors.lightOrange,
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getWidth(10),
    borderBottomColor: colors.orange,
    borderBottomWidth: getWidth(5)
  }
})

export default styles
