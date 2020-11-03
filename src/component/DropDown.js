import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AppColors from '../values/AppColors';



const DropDown = (props) => {

    const { meta: { touched, error }, placeholder, secureTextEntry, keyboardType, maxLength, value, onSubmitEditing, input: { onChange, ...restInput }, lable } = props;

    const [pickedValue, setPickedValue] = useState('dfsdf');

    const handlePicker = (value) => {

        console.log(`picker value: ${value}`)
        setPickedValue(value);
        onChange(value);
    };
    return (
        <View>
            <Text style={styles.inputLable}>{lable}</Text>

            <View style={styles.inputBox}>
                <RNPickerSelect
                    pickerProps={{ style: { height: 60, overflow: 'hidden' } }}
                    onValueChange={(value, index) => console.log(onChange(value))}
                    value={props.regionId}
                    placeholder={{
                        label: 'Select State',
                        value: null,
                    }}
                    items={[
                        { label: 'Red', value: 'red' },
                        { label: 'Blue', value: 'blue' },
                        { label: 'White', value: 'white' },
                        { label: 'Green', value: 'green' },
                        { label: 'Black', value: 'black' },
                        { label: 'Silver', value: 'sliver' },
                    ]}
                />
            </View>



            <Text style={styles.errorText}>{(touched && error) && error}</Text>

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
        paddingLeft: 16,
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
        marginBottom: 8

    }

});

export default DropDown;
