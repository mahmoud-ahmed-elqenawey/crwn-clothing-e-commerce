import './CartIcon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);
    return (
        <div className='cart-icon-container'>
            <AddShoppingCartTwoToneIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};

export default CartIcon;
