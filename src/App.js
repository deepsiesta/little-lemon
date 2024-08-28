import './App.css';
import './components/Nav.js'
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path='book' element={null} />

                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
