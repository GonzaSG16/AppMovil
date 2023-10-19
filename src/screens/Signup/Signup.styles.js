import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupContainer: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputEmail: {
        width: '95%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.celeste,
        backgroundColor: colors.blanco,
        height: 30,
        marginVertical: 15,
    },
    signupButton: {
        backgroundColor: colors.celeste,
        width: '50%',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    validationText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 8,
    }
})