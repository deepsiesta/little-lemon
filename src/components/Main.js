import Home from './Home.js';
import Book from './Book.js'
import ConfirmedBooking from './ConfirmedBooking.js'

import { } from "react-router-dom";
import { useNavigate, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from '../utils/times.js';
import { submitAPI } from '../utils/api.js';
const Main = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log(values);
        const submit = submitAPI(values);
        if (submit) {
            navigate("/success");
        }
    };

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='book' element={
                <Book
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={handleSubmit}
                />}
            />
            <Route path='success' element={<ConfirmedBooking />} />
        </Routes>
    );
}

export default Main;
