import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    cameraButton: {
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
        height: windowHeight * 0.25,
    },
    buttonText: {
        fontSize: 18,
        color: colors.negro,
    },
});