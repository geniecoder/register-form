import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppColors from '../values/AppColors';

const ButtonForm = (props) => (
    <TouchableOpacity
        style={styles.buttonForm}
        onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.isSubmitting ? 'loading...' : props.text}</Text>
    </TouchableOpacity>


);

const styles = StyleSheet.create({
    buttonForm: {
        backgroundColor: AppColors.primary,
        borderRadius: 6,
        marginVertical: 10,
        paddingVertical: 12,
        alignSelf: 'stretch',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
})

export default ButtonForm;
