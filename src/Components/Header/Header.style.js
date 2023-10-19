import { StyleSheet } from "react-native"
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.ml,
        height: 90,
        paddingTop: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontFamily: 'Alata',
    }
})