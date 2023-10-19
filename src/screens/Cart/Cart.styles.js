import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    backgroundColor: colors.ml,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  headerText: {
    fontSize: 22,
    marginTop: '7%',
    color: colors.white,
    fontFamily: 'Alata',
  },
  listContent: {
    paddingTop: 20,
  },
  listContainer: {
    flex: 1,
  },
  totalContainer: {
    flex: 1,
    maxHeight: '7%',
    backgroundColor: colors.blanco,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
    alignItems: 'center',
  },
  totalTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    marginLeft: '70%',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: colors.celeste,
    width: '94%',
    marginLeft: '3%',
    marginRight: '3%',
    borderRadius: 20,
    marginBottom: '2%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '7%',
  },
  confirmButtonText: {
    fontSize: 16,
    color: colors.white,
  },
});