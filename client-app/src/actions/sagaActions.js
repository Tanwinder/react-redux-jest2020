import { GET_EVENTS, EVENTS_LOADER, POST_EVENT, DELETE_EVENT, UPDATE_EVENT, SET_CURRENT_ID } from '../constant/actionTypes'
import {Api, signIn, signUp} from '../utils/api'


export const getEvents = () => dispatch => {
    dispatch({type: 'GET_EVENTS_ITEMS'});

    // try {
    //     const events = await Api.get('/events');
    //     dispatch({type: 'GET_EVENTS', payload: events && events.data});
    // } catch(error) {
    //     console.log(error)
    // }
}