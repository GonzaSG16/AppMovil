import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        padding: 8,
        borderRadius: 20,
        backgroundColor: colors.gris,
    },
    img: {
        width: 75,
        height: 75,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 15,
    },
    name: {
        fontSize: 18,
    },
    quantity: {
        fontSize: 16,
    },
    price: {
        fontSize: 16,
    },
})
