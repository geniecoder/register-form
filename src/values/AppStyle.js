import { StyleSheet } from 'react-native'
import AppColors from './AppColors';

export default AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:30,
        marginHorizontal: 40
    },
    scrollStyle: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    inputLable: {
        fontSize:14,
        color: AppColors.primary,
        marginBottom:3
    },
    errorText: {
        color:AppColors.errorText,
        fontSize:12,
        marginLeft:16,
        marginBottom:8,
        alignSelf:'flex-end'
    }
})