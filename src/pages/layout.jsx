import React from "react";
import {Outlet} from "react-router-dom";
import Header from '../assets/components/layout/header'
import Footer from "../assets/components/layout/footer";

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