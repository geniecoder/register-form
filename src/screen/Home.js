import React from 'react';
import { Text, View } from 'react-native';
import AppStyle from '../values/AppStyle';

const Home = (props) => {
    return (
        <View style={AppStyle.container}>
            <Text style={{color:'#333'}}>Home</Text>
        </View>
    )
};

export default Home;
