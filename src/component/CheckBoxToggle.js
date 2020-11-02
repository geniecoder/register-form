import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';


import AppColors from '../values/AppColors'
import checkedImg from '../../assets/images/checkboxChecked.png'
import uncheckedImg from '../../assets/images/checkboxUnchecked.png';

const CheckBoxToggle = (props) => {
    const [selected, setSelection] = useState(true);
    const { meta: {touched, error}, placeholder, secureTextEntry, keyboardType, maxLength, value, onChangeText, onSubmitEditing, input: {onChange, ...restInput}, lable} = props;
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{color: AppColors.primary}}> {lable}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => {
                        setSelection(true);
                        onChange(true);
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                        <Image style={{ marginRight: 4, tintColor: AppColors.primary }} source={selected ? checkedImg : uncheckedImg} />
                        <Text>Yes</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setSelection(false);
                        onChange(false);
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ marginRight: 4, tintColor: AppColors.primary }} source={selected ? uncheckedImg : checkedImg} />
                        <Text>No</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
};

export default CheckBoxToggle;
