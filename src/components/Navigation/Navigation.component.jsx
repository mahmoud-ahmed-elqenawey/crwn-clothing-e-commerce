import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assets/images/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            Sign out
                        </span>
                    ) : (
                        <Link to='/authentication' className='nav-link'>
                            SignIn
                        </Link>
                    )}
                    <CartIcon className='nav-link' />
                </div>
                {isCartOpen && <CartDropdown />}
            </nav>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
