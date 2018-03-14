import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const styles = StyleSheet.create({
    Conteiner:{
        flex: 1,
        justifyContent: 'center',
    },
    Titulo:{
        fontSize: 30,
        color: "red",
        justifyContent: 'center',
    },
    ContenedorBoton:{
        margin: 20,
    },
})

class Titulo extends Component{
    render(){
        return(
            <View style={{alignItems: 'center'}}>
                <Text style={styles.Titulo}>Mi lista de peliculas</Text>
            </View>
        );
    }
}

class Botones extends Component{
    render(){
        var {navigate} = this.props.nav;
        return(
            <View>
                <View style={styles.ContenedorBoton}>
                    <Button
                        onPress={
                            ()=>navigate("ListS", {})
                        }
                        title="Ver Lista"
                        color="#3498DB"
                    />
                </View>
                <View style={styles.ContenedorBoton}>
                    <Button
                        onPress={
                            ()=>navigate("AddPeliS", {})
                        }
                        title="Agregar nueva pelicula"
                        color="#48C9B0"
                    />
                </View>
            </View>
        );
    }
}

export default class Home extends Component{
    static navigationOptions = {
        title: 'Home',
    };

    render(){
        return(
            <View style={styles.Conteiner}>
                <Titulo />
                <Botones nav={this.props.navigation} />
            </View>
        );
    }
}