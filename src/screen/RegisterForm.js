import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import InputText from '../component/InputText';
import ButtonForm from '../component/ButtonForm';
import CheckBoxToggle from '../component/CheckBoxToggle';




import AppStyle from '../values/AppStyle';


const onSubmit = (value) => {
    console.log(value);
}

const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'email is required'
    }
    if (!values.password) {
        errors.password = "password is required"
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
                <Field name='email' lable='Customer Name*' component={InputText} />
                <Field name='mobile' lable='Customer Mobile*' component={InputText} />
                <Field name='pincode' lable='Model Purchased*' component={InputText} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Field name='pincode' lable='Pin Code*' component={InputText} />
                    <View style={{ width: 40 }} />
                    <Field name='state' lable='State*' component={InputText} />
                </View>
                <Field name='dateOfInvoice' lable='Date of Invoice*' component={InputText} />
                <Field name='batteryNo' lable='Battery No.*' component={InputText} />
                <Field name='chassisNo' lable='Chassis No.*' component={InputText} />
                <Field name='modelColor' lable='Model Color' component={InputText} />
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
