import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {viewAllPelis} from '../Acciones/Actions'

export default class List extends Component{
    constructor(){
        super();
        this.allPelis = this.allPelis.bind(this)

        this.state = {
            Pelis: []
        }
    }


    static navigationOptions = {
        title: 'Lista de peliculas',
    };


    render(){
        return(
            <View>
                {this.state.Pelis.map(peli =>
                    <View>
                        <Text>{peli.titulo}</Text>
                        <Text>{peli.fecha}</Text>
                        <Text>{peli.director}</Text>
                    </View>
                )}
            </View>
        );
    }

    allPelis(){

    }
}