import React from "react";
import {Outlet} from "react-router-dom";
import Header from '../assets/components/landing/header'
import Footer from "../assets/components/landing/footer";

const Layout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout