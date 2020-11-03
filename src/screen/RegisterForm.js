import React, {useState} from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import InputText from '../component/InputText';
import ButtonForm from '../component/ButtonForm';
import CheckBoxToggle from '../component/CheckBoxToggle';
import DateInput from '../component/DateInput';
import DropDown from '../component/DropDown';




import AppStyle from '../values/AppStyle';


const onSubmit = (value) => {
    console.log(value);
}

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Name is required'
    }
    if (!values.mobile) {
        errors.mobile = "Mobile is required"
    }
    if (!values.modelPurchased) {
        errors.modelPurchased = "Model is required"
    }
    if (!values.pincode) {
        errors.pincode = "Pincode is required"
    }
    if (!values.state) {
        errors.state = "State is required"
    }
    if (!values.dateOfInvoice) {
        errors.dateOfInvoice = "Date is required"
    }
    if (!values.batteryNo) {
        errors.batteryNo = "Battery No. is required"
    }
    if (!values.chassisNo) {
        errors.chassisNo = "Chassis No. is required"
    }

    return errors;
}

const RegisterForm = (props) => {
 
    const { handleSubmit, createUser } = props;
    return (
        <View style={AppStyle.container}>
            <ScrollView contentContainerStyle={AppStyle.scrollStyle}
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
            >
                <Field name='name' lable='Customer Name*' maxLength={35} component={InputText} />
                <Field name='mobile' lable='Customer Mobile*' keyboardType='numeric' maxLength={10}  component={InputText} />
                <Field name='modelPurchased' lable='Model Purchased*' maxLength={45}  component={InputText} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Field name='pincode' lable='Pin Code*' keyboardType='numeric' maxLength={12}  component={InputText} />
                    <View style={{ width: 40 }} />
                    <Field name='state' lable='State*' component={InputText} />
                </View>
                <Field name='dateOfInvoice' lable='Date of Invoice*' component={DateInput} />
                <Field name='batteryNo' lable='Battery No.*' maxLength={35}  component={InputText} />
                <Field name='chassisNo' lable='Chassis No.*' maxLength={35}  component={InputText} />
                <Field name='modelColor' lable='Model Color' component={DropDown} />
                <Field name='isBajajFinance' lable='finance Through Bajaj' component={CheckBoxToggle} />
                <View style={{ height: 20 }} />
                <ButtonForm text='SUBMIT' onPress={handleSubmit(onSubmit)} />
            </ScrollView>
        </View>
    )
};

export default connect(null, null)(reduxForm({
    form: 'login',
    validate
})(RegisterForm))
