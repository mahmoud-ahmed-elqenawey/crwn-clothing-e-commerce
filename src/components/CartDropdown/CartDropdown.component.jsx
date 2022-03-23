import Button from '../Button/Button.component';
import './CartDropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-item' />
            <Button>CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
