import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import AppColors from '../values/AppColors';
import AppStyle from '../values/AppStyle';

const InputText = (props) => {
    const { meta: {touched, error}, placeholder, secureTextEntry, keyboardType, maxLength, value, onSubmitEditing, input: {onChange, ...restInput}, lable} = props;
    return (
        <View style={{flex:1}}>
            <Text style={AppStyle.inputLable}>{lable}</Text>
            <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder={placeholder}
                placeholderTextColor="#cfcfcf"
                selectionColor="#999999"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                maxLength={maxLength}
                returnKeyType="next"
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChange}
                {...restInput} />
                <Text style={AppStyle.errorText}>{(touched && error) && error}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    inputBox: {
        height:40,
        alignContent:'stretch',
        alignSelf: 'stretch',
        backgroundColor: '#ececec',
        borderRadius: 6,
        borderColor:'#d6d6d6',
        borderWidth:1,
        paddingHorizontal: 16,
        paddingVertical:5,
        fontSize: 14,
        color: '#666',
        marginVertical: 2,
    },
});

export default InputText;
