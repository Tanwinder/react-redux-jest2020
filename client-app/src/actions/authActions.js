import {signIn, signUp} from '../utils/api'
import { GET_EVENTS, EVENTS_LOADER, POST_EVENT, DELETE_EVENT, UPDATE_EVENT, SET_CURRENT_ID } from '../constant/actionTypes'

export const checkAuth = () => dispatch => {
    console.log('checkAuth--------')
    dispatch({type: EVENTS_LOADER});
    // const user = await 
    dispatch({type: "AUTH", payload: null});
}

export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await signIn(formData);
  
      dispatch({ type: "AUTH", data });
  
      router.push('/events');
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signup = (formData, router) => async (dispatch) => {
    try {
      const { data } = await signUp(formData);
  
      dispatch({ type: "AUTH", data });
  
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };