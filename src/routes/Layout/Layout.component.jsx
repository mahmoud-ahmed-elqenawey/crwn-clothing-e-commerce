import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import './Navigation.styles.scss';
import Navbar from '../../components/Navbar/Navbar.component';
import Footer from '../../components/Footer/Footer.component';
import { Toolbar } from '@mui/material';

const Layout = () => {
    return (
        <Fragment>
            <Navbar />
            <Toolbar />
            <Outlet />
            <Footer />
        </Fragment>
    );
};

export default Layout;
