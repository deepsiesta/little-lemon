import Home from './Home.js';
import Book from './Book.js'
import Success from './Success.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from '../utils/times.js';

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='book' element={<Book availableTimes={availableTimes} dispatch={dispatch} />} />
                <Route path='success' element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
