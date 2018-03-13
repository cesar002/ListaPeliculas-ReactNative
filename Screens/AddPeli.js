import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';

const util = require('util');

export default class AddPeli extends Component{
    static navigationOptions = {
        title: 'List',
    };

    render(){
        return(
            <View>
                <Text>Pantalla de formulario</Text>
            </View>
        );
    }
}