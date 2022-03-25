import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './CheckoutItem.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } =
        useContext(CartContext);

    const clearItemFromCartHandler = () => clearItemFromCart(cartItem);
    const addItemToCartHandler = () => addItemToCart(cartItem);
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name} img`} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={removeItemFromCartHandler}>
                    &#10094;
                </div>

                <span className='value'>{quantity}</span>

                <div className='arrow' onClick={addItemToCartHandler}>
                    &#10095;
                </div>
            </div>
            <span className='price'>{price}</span>

            <div className='remove-button' onClick={clearItemFromCartHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
