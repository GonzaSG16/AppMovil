import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '0%',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    marginTop: '5%',
    marginBottom: '2%',
    marginLeft: '5%',
  },
  imageContainer: {
    height: '40%',
    marginTop: '3%',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '-5%',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  price: {
    fontSize: 40,
    marginVertical: '12%',
    marginLeft: '3%',
  },
  description: {
    fontSize: 16,
    margin: 20,
    marginTop: '-5%',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    marginLeft: '3%',
  },
  quantityText: {
    fontWeight: '500',
    fontSize: 17,
  },
  quantityInput: {
    width: '75%',
    height: 40,
    borderWidth: 1,
    borderColor: colors.celesclaro,
    borderRadius: 5,
    marginLeft: 10,
    paddingLeft: 10,
    fontSize: 17,
  },
  addToCartContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '5%',
  },
  addToCartButton: {
    backgroundColor: colors.celesclaro,
    borderRadius: 7,
    width: '90%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
  addToCartButtonText: {
    color: colors.azul,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '2%',
    backgroundColor: colors.ml,
    height: '13%',
    marginTop: 0,
  },
  headerIcon: {
    padding: 10,
    marginBottom: -30,
  },
});
