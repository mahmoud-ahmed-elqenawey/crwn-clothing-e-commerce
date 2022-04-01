import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import Cart from '../Cart/Cart.component';
import Logo from '../Logo/Logo.component';
import NavbarLinks from '../NavbarLinks/NavbarLinks.component';
import UserInfo from '../UserInfo/UserInfo.component';

// hide navbar on scroll
function HideOnScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger();

    return <Slide in={!trigger}>{children}</Slide>;
}

const Navbar = (props) => {
    return (
        <HideOnScroll {...props}>
            {/* Hide nav on scroll */}
            <AppBar position='fixed' elevation={0} sx={{ borderBottom: 0 }}>
                {/* App bar */}
                <Container>
                    <Toolbar>
                        {/* my logo */}
                        <Logo />
                        {/* my logo */}

                        {/* Dropdown links in mobile */}
                        <NavbarLinks screen='mobile' />
                        {/* Dropdown links in mobile */}

                        {/* my logo in mobile */}
                        <Logo screen='mobile' />
                        {/* my logo in mobile */}

                        {/* my links */}
                        <NavbarLinks />
                        {/* my links */}

                        {/* my user info */}
                        <UserInfo />
                        {/* my user info */}

                        {/* my cart */}
                        <Cart />
                        {/* my cart */}
                    </Toolbar>
                </Container>
                {/* App bar */}
            </AppBar>
            {/* Hide nav on scroll */}
        </HideOnScroll>
    );
};
export default Navbar;
