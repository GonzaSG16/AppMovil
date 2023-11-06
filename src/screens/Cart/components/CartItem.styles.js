import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    padding: 8,
    borderRadius: 20,
    backgroundColor: colors.gris,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
  },
  quantity: {
    fontSize: 16,
  },
  image: {
    width: 67,
    height: 67,
  },
});
