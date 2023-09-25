import { StyleSheet } from 'react-native'
import { colors } from '../../../constants/colors'
import Feather from '@expo/vector-icons/Feather'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.naranja,
    },
    name: {
        fontSize: 18
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
