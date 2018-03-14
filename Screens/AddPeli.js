import React, { Component } from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'center',
    },
    ContenedorBoton:{
        margin: 30,
    },
    Titulo:{
        alignItems: 'center',
        fontSize: 20,
    },
});


class Form extends Component{
    render(){
        return(
            <View>
                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Titulo de la pelicula"
                    />
                    <TextInput
                        style={{height: 40}}
                        placeholder="Año"
                    />
                    <TextInput
                        style={{height: 40}}
                        placeholder="Director"
                    />
                </View>
                <View style={styles.ContenedorBoton}>
                    <Button
                        onPress={
                            ()=>{}
                        }
                        title="Agregar"
                        color="#FA8072"
                    />
                </View>
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
            <View style={styles.Container}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.Titulo}>Pantalla de formulario</Text>
                </View>
                <Form />
            </View>
        );
    }
}