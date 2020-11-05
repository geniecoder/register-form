import React from 'react';
import { Text, View } from 'react-native';

const DialogView = (props) => (
    <View>
        <View style={{ marginTop: 20, height: 100, width: 200, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>{props.text}</Text>
            <Text style={{fontSize:12, color:'#999'}}>{props.text1}</Text>
        </View>
    </View>

);

export default DialogView;
