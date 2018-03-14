import { createStore, applyMiddleware} from 'redux';
import { reducer } from '../Reductores/reducers'
import thunk from 'redux-thunk';

export default createStore(reducer, window.STATE_FROM_SERVER, applyMiddleware(thunk));