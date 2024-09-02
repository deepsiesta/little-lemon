import './App.css';
import './components/Nav.js'
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Book from './components/Book.js'
import Success from './components/Success.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';

function App() {
    const initializeTimes = () => {
        return [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",

        ]
    }

    const updateTimes = () => initializeTimes()

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    return (
        <>
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path='book' element={<Book availableTimes={availableTimes} dispatch={dispatch} />} />
                    <Route path='success' element={<Success />} />

                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
