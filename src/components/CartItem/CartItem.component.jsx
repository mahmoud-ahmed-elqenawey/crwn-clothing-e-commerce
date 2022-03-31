import { Typography } from '@mui/material';
import './CartItem.styles.scss';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <Typography className='name'>{name}</Typography>
                <Typography className='price'>
                    {quantity}X{price}
                </Typography>
            </div>
        </div>
    );
};

export default CartItem;
