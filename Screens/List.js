import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class List extends Component{
    static navigationOptions = {
        title: 'Lista de peliculas',
    };


    render(){
        return(
            <View>
                <Text>Pantalla de lista</Text>
            </View>
        );
    }
}