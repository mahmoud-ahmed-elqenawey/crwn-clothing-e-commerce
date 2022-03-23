import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <ProductsProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </ProductsProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
