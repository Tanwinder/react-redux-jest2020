import { GET_EVENTS, EVENTS_LOADER, POST_EVENT, DELETE_EVENT, UPDATE_EVENT, SET_CURRENT_ID } from '../constant/actionTypes'
import {Api, signIn, signUp} from '../utils/api'


export const getEvents = () => async dispatch => {
    dispatch({type: 'EVENTS_LOADER'});

    try {
        const events = await Api.get('/events');
        dispatch({type: 'GET_EVENTS', payload: events && events.data});
    } catch(error) {
        console.log(error)
    }
}

export const postEvent = (value) => async dispatch => {
    dispatch({type: 'EVENTS_LOADER'});
    try {
        const {data} = await Api.post('/events', value);

        dispatch({type: POST_EVENT, payload: data})
    } catch(error) {
        console.log(error)
    }
}

export const deleteEvent = (id) => async dispatch => {
    dispatch({type: EVENTS_LOADER});
    try {
        const { data } = await Api.delete(`/events/${id}`);
        dispatch({type: DELETE_EVENT, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const updateEvent = (updateData) => async dispatch => {
    dispatch({type: EVENTS_LOADER});
    try {
        const {data} = await Api.patch(`/events/${updateData._id}`, updateData);
        dispatch({type: UPDATE_EVENT, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const likeEvent = (id) => async dispatch => {
    dispatch({type: EVENTS_LOADER});
    try {
        const {data} = await Api.patch(`/events/likeevent/${id}`);
        dispatch({type: UPDATE_EVENT, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const setCurrentId = (event) => dispatch => {
    console.log('idddd ', event)
    dispatch({type: SET_CURRENT_ID, payload: event})
}