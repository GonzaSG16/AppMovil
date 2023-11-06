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
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonContainer2: {
        justifyContent: 'top',
        marginTop: '2%',
        alignItems: 'center',
    },
    buttonContainer3: {
        flex: 1,
        justifyContent: 'top',
        marginTop: '2%',
        marginLeft: '2%',
        alignItems: 'flex-start',
    },
    ProfileTextBold: {
        fontSize: 24,
        color: colors.negro,
        fontWeight: 'bold',
    },
    ProfileText: {
        fontSize: 20,
        color: colors.black,
        marginTop: 10,
        justifyContent: 'flex-start',
    },
    LogoutButton: {
        flex: 1,
        backgroundColor: colors.rojo,
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%',
        borderRadius: 20,
        marginBottom: '2%',
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '15%',
    },
    LogoutText: {
        fontSize: 22,
        color: colors.white,
    },
});
