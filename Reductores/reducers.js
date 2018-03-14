import { combineReducers } from 'redux'

//importa estados
import {VIEW_ALL_PELIS, ADD_PELI, REMOVE_PELI} from '../Acciones/Actions'

function reducer (state = [], action){

    switch(action.type){
        case VIEW_ALL_PELIS:
            return{
                ...state,
                Pelis: action.Pelis
            }
        default:
            return state;
    }
}

export default reducer;