import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Order from '../Order/Order';

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element ={<Home></Home>}></Route>
                    <Route path='/about' element ={<About></About>}></Route>
                    <Route path='/order' element ={<Order></Order>}></Route>
                    <Route path='/footer' element ={<Footer></Footer>}></Route>
                </Routes>
            </BrowserRouter>
            <h3>Mani page Fille</h3>
        </div>
    );
};

export default Main;