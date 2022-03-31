import './CartDropdown.styles.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import { Menu, Typography } from '@mui/material';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as CartEmptySVG } from '../../assets/images/illustration_empty_cart.svg';

const CartDropdown = ({ open, anchorEl, handleClose }) => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    };

    return (
        <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                    width: 350,
                    padding: 20,
                },
            }}
        >
            {cartItems.length ? (
                cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))
            ) : (
                <div className='empty-message'>
                    <CartEmptySVG className='empty-icon' />
                    <Typography>Your cart is empty</Typography>
                </div>
            )}

            <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
        </Menu>
    );
};

export default CartDropdown;
