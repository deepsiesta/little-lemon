import { fetchAPI } from './api.js'

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today)
}

export const updateTimes = (_, date) => fetchAPI(date)


