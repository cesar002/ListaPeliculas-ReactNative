import React, { Component } from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';


class Inputs extends Component{
    render(){
        return(
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Titulo de la pelicula"
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Año"
                />
            </View>
        );
    }
}

export default class AddPeli extends Component{
    static navigationOptions = {
        title: 'Agregar Pelicula',
    };

    render(){
        return(
            <View>
                <Text>Pantalla de formulario</Text>
                <Inputs />
            </View>
        );
    }
}