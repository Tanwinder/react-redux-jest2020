import {signIn, signUp} from '../utils/api'
import { AUTH, CALL_AUTH, LOG_OUT } from './actionTypes'

export const checkAuth = () => async dispatch => {
    // dispatch({type: EVENTS_LOADER});
    // const user = await 
    const user = document.cookie;
    dispatch({type: AUTH, payload: null});
}

export const signin = (formData, router, from, alreadyLoggedIn) => ({ type: CALL_AUTH, formData, router, from, alreadyLoggedIn });

// export const signin = (formData, router) => async (dispatch) => {
//     try {
//       const { data } = await signIn(formData);
  
//       dispatch({ type: "AUTH", payload: data });
  
//       router.push('/events');
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
  export const signup = (formData, router) => async (dispatch) => {
    try {
      const { data } = await signUp(formData);
  
      dispatch({ type: "AUTH", data });
  
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  export const logOut = () => ({type: LOG_OUT})