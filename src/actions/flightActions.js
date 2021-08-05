import {
    EXAMPLE_TO_SUBMIT,
} from '../constants/appConstants';

/**
 * 
 * @param {String} title 
 * @returns payload and type that will be passed in reducer
 */
export const submitExample = (maxPrice, passport, startDate) => {
    return ({
        type: EXAMPLE_TO_SUBMIT,
        payload: {
            maxPrice: maxPrice,
            passport: passport,
            startDate: startDate,
            endDate: endDate,
            currentCity: currentCity,
        }    })
}
