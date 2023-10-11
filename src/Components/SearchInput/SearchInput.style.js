import { StyleSheet } from "react-native"
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10%',
        width: '90%',
        paddingTop: 10,
    },
    input: {
        color: 'black',
        backgroundColor: colors.blanco,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.ml,
        width: '80%',
        fontSize: 20,
    },
    cancel: {
        color: 'black',
        fontSize: 20,
    }
})