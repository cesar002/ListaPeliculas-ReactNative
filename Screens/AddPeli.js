import React, { Component } from 'react';
import {View, StyleSheet, Text, TextInput, Button, Alert} from 'react-native';
import axios from 'axios';


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
    constructor(props){
        super(props);

        this.setPeli = this.setPeli.bind(this);

        this.state = {
            titulo: '',
            fecha: '',
            director: ''
        };
    }

    render(){
        return(
            <View>
                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder = "Titulo de la pelicula"
                        onChangeText = { (titulo) => this.setState({titulo}) }
                    />
                    <TextInput
                        style={{height: 40}}
                        placeholder="Año"
                        onChangeText = {(fecha) => this.setState({fecha})} 
                    />
                    <TextInput
                        style={{height: 40}}
                        placeholder="Director"
                        onChangeText = {(director) => this.setState({director})}
                    />
                </View>
                <View style={styles.ContenedorBoton}>
                    <Button
                        onPress={
                            () => this.setPeli(this.state)
                        }
                        title="Agregar"
                        color="#FA8072"
                    />
                </View>
            </View>
        );
    }

    setPeli(state){
        let formData = new FormData();

        formData.append('Titulo',state.titulo);
        formData.append('Fecha',state.fecha);
        formData.append('Director', state.director);

        axios({
            method: 'post',
            url: 'http://192.168.1.70:8080/pelicula/create',
            data: formData,
        }).then(response => {
            Alert.alert('Pelicula insertada');
        }).catch(error => {
            Alert.alert('Error al conectar');
        })
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