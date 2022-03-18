import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assets/images/crown.svg';

const Navigation = () => {
    return (
        <Fragment>
            <nav className='navigation'>
                <Link to='/' className='logo-container'>
                    <CrownLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                    <Link to='/shop' className='nav-link'>
                        Shop
                    </Link>
                </div>
            </nav>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
