import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Page/Shared/Footer/Footer';
import Header from '../component/Page/Shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;