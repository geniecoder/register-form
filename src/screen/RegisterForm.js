import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import InputText from '../component/InputText';
import ButtonForm from '../component/ButtonForm';
import CheckBoxToggle from '../component/CheckBoxToggle';
import DateInput from '../component/DateInput';
import DropDown from '../component/DropDown';
import DialogView from '../component/DialogView';

import { loadFormData, submitFormData, hideDialog } from '../actions/register.actions';
import { useDispatch, useSelector } from 'react-redux';




import AppStyle from '../values/AppStyle';




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



    const [isVisible, setVisible] = useState(true);

    useEffect(() => {
        dispatch(loadFormData());
    }, [])

    const formData = useSelector((state) => state.formData);

    //console.log(`state: ${JSON.stringify(formData)}`)


    const dispatch = useDispatch();
    const onSubmit = (value) => {
        if (formData.isDataSubmiting) {
            console.log(`Data is already submitting`);
        } else {
            dispatch(submitFormData(value));
        }

    }
    const { handleSubmit } = props;
    return (
        <View style={AppStyle.container}>
            <ScrollView contentContainerStyle={AppStyle.scrollStyle}
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
            >
                <Field name='name' lable='Customer Name*' maxLength={35} component={InputText} />
                <Field name='mobile' lable='Customer Mobile*' keyboardType='numeric' maxLength={10} component={InputText} />
                <Field name='modelPurchased' lable='Model Purchased*' maxLength={45} component={InputText} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Field name='pincode' lable='Pin Code*' keyboardType='numeric' maxLength={12} component={InputText} />
                    <View style={{ width: 40 }} />
                    <Field name='state' lable='State*' component={InputText} />
                </View>
                <Field name='dateOfInvoice' lable='Date of Invoice*' component={DateInput} />
                <Field name='batteryNo' lable='Battery No.*' maxLength={35} component={InputText} />
                <Field name='chassisNo' lable='Chassis No.*' maxLength={35} component={InputText} />
                <Field name='modelColor' lable='Model Color' colorList={formData.colorList} component={DropDown} />
                <Field name='isBajajFinance' lable='finance Through Bajaj' component={CheckBoxToggle} />
                <View style={{ height: 20 }} />
                <ButtonForm text='SUBMIT' isSubmitting={formData.isDataSubmiting} onPress={handleSubmit(onSubmit)} />
                <Dialog
                    visible={formData.dialogVisible}
                    onTouchOutside={() => {
                       // setVisible(false);
                       dispatch(hideDialog());
                    }}
                >
                    <DialogContent >
                        <DialogView text='Thank You' text1='Data Submitted'/>
                    </DialogContent>
                </Dialog>
            </ScrollView>
        </View>
    )
};


mapStateToProps = (state) => ({
    createUser: state.formData
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "login",
        validate
    })
)(RegisterForm);


