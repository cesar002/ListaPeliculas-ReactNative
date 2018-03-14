import axios from 'axios';

//estados
export const ADD_PELI='ADD_PELI';
export const VIEW_ALL_PELIS='VIEW_ALL_PELIS';
export const REMOVE_PELI='REMOVE_PELI';


export function addPeli(Peli){
    return{
        type: ADD_PELI,
        Peli
    }
}

export function viewAllPelis(){
    return dispatch =>{
        return axios.get("http://localhost:8080/pelicula").then(response => {
            dispatch({
                type: VIEW_ALL_PELIS,
                Pelis: response.data
            })
        });
    };
}

export function removePeli(Peli){
    return{
        type: REMOVE_PELI,
        Peli
    }
}