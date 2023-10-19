import { StyleSheet } from "react-native"
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10%',
        width: '85%',
        paddingTop: 10,
    },
    backButton: {
        marginLeft: '5%',
    },
    input: {
        color: 'black',
        backgroundColor: colors.blanco,
        borderRadius: 8,
        padding: 10,
        width: '75%',
        fontSize: 20,
        marginLeft: '6%',
    },
    cancel: {
        color: 'black',
        fontSize: 20,
    },
    search: {
        marginLeft: '3%',
    },
    close: {
        marginLeft: '3%',
        marginRight: '6%',
    }
})