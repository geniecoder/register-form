import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AppColors from '../values/AppColors';
import AppStyle from '../values/AppStyle';



const DropDown = (props) => {

    const { meta: { touched, error }, input: { onChange, ...restInput }, lable, colorList } = props;

   
    return (
        <View>
            <Text style={AppStyle.inputLable}>{lable}</Text>
            <View style={styles.inputBox}>
                <RNPickerSelect
                    pickerProps={{ style: { height: 60, overflow: 'hidden', color: '#666', } }}
                    onValueChange={(value, index) => console.log(onChange(value))}
                    value={props.regionId}
                    placeholder={{
                        label: 'Select State',
                        value: null,
                    }}
                    items={colorList}
                />
            </View>
            <Text style={AppStyle.errorText}>{(touched && error) && error}</Text>
        </View>
    )
};



const styles = StyleSheet.create({
    inputBox: {
        height: 40,
        alignContent: 'stretch',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ececec',
        borderRadius: 6,
        borderColor: '#d6d6d6',
        borderWidth: 1,
        paddingLeft: 6,
        paddingVertical: 10,
        fontSize: 14,
        color: '#666',
        marginVertical: 2,
    },
    inputLable: {
        fontSize: 14,
        color: AppColors.primary,
        marginBottom: 3
    },
    errorText: {
        color: '#999',
        fontSize: 12,
        marginLeft: 16,
        marginBottom: 8,
        alignSelf: 'flex-end'

    }

});

export default DropDown;
