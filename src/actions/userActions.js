import { RENDER_SIGNUP } from '../constants/appConstants';

export const renderSignupUser = () => {
    return ({
        type: RENDER_SIGNUP
    })
}





export function createUser(firstName, lastName, email, password, passwordConfirmation){
    return async (dispatch) => {
        console.log(firstName, lastName, email, password, passwordConfirmation)
    }
} 
