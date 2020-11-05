import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AppColors from '../values/AppColors';
import AppStyle from '../values/AppStyle';



const DateInput = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selecteDate, setDate] = useState('Select Date');
    const { meta: { touched, error }, placeholder, secureTextEntry, keyboardType, maxLength, value, onSubmitEditing, input: { onChange, ...restInput }, lable } = props;

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const newDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
        setDate(newDate);
        onChange(newDate);
        hideDatePicker();
    };
    return (
        <View>
            <Text style={AppStyle.inputLable}>{lable}</Text>
            <TouchableWithoutFeedback
                onPress={() => showDatePicker()}>
                <Text style={styles.inputBox}>{selecteDate}</Text>
            </TouchableWithoutFeedback>

            <Text style={AppStyle.errorText}>{(touched && error) && error}</Text>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    inputBox: {
        height:40,
        alignContent: 'stretch',
        alignSelf: 'stretch',
        backgroundColor: '#ececec',
        borderRadius: 6,
        borderColor: '#d6d6d6',
        borderWidth: 1,
        paddingHorizontal: 16,
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
        alignSelf:'flex-end'

    }

});

export default DateInput;
