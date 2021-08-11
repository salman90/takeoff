import { RENDER_SIGNUP, RENDER_LOGIN, LOGIN_USER, CREATE_USER_SUCUCCESSFUL } from '../constants/appConstants';
import axios from 'axios';


export const renderSignupUser = () => {
    return ({
        type: RENDER_SIGNUP
    })
}

export const renderLogin = () => {

    return ({
        type: RENDER_LOGIN
    })
}

export const loginUser = (email, password) => {
    return ({ 
        type: LOGIN_USER,
        payload: {
            email: email,
            password: password
        }
    })
}




export function createUser(firstName, lastName, email, password, passwordConfirmation){
    return async (dispatch) => {
        console.log(firstName, lastName, email, password, passwordConfirmation)
        const response = await axios.post("http://127.0.0.1:5000/user/signup", {
            
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation,

        }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
        if(response.status === 200){
            let data = response.data;
            console.log(data)
            dispatch({type: CREATE_USER_SUCUCCESSFUL, payload: data})
        }else{

        }

    }
} 
