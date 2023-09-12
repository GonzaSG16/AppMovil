import { StyleSheet } from "react-native"
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.verdito,
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 2 },
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})