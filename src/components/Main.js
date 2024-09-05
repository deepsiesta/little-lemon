import Home from './Home.js';
import Book from './Book.js'
import ConfirmedBooking from './ConfirmedBooking.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from '../utils/times.js';
import { submitAPI } from '../utils/api.js';
const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='book' element={
                    <Book
                        availableTimes={availableTimes}
                        dispatch={dispatch}
                        submitForm={submitAPI}
                    />}
                />
                <Route path='success' element={<ConfirmedBooking />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
