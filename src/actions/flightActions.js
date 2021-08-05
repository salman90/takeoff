import {
    EXAMPLE_TO_SUBMIT, FLIGHT_SEARCH,
} from '../constants/appConstants';

/**
 * 
 * @param {String} title 
 * @returns payload and type that will be passed in reducer
 */
export const flightSearch = (maxPrice, passport, startDate, endDate, currentCity) => {
    return ({
        type: FLIGHT_SEARCH,
        payload: {
            maxPrice: maxPrice,
            passport: passport,
            startDate: startDate,
            endDate: endDate,
            currentCity: currentCity,
        }    })
}
