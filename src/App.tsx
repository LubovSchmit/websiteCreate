import React from 'react';
import style from './App.module.css';
import {Header} from './pages/header/Header';
import {Footer} from './pages/footer/Footer';
import {Main} from './pages/main/Main';

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
