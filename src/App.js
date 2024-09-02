import './App.css';
import './components/Nav.js'
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Book from './components/Book.js'
import Success from './components/Success.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path='book' element={<Book />} />
                    <Route path='success' element={<Success />} />

                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
