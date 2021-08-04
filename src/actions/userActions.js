import { RENDER_SIGNUP, RENDER_LOGIN, LOGIN_USER } from '../constants/appConstants';


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
    console.log("In action", email, password)
    return ({
        type: LOGIN_USER,
        payload: {
            email: email,
            password: password
        }
    })
}