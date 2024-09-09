import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav.js';
import './App.css';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {

    return (
        <BrowserRouter>
            <Nav />
            <Main />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
