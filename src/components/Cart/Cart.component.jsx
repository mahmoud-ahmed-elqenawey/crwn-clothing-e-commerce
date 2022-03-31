import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { Button } from '@mui/material';
import { useState } from 'react';

const Cart = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* Cart button */}
            <Button
                title='Account settings'
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <CartIcon className='nav-link' />
            </Button>
            {/* Cart button */}

            {/* Cart Dropdown */}
            {
                <CartDropdown
                    open={open}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                />
            }
            {/* Cart Dropdown */}
        </>
    );
};

export default Cart;
