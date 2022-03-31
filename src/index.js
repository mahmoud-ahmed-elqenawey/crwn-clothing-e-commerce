import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fff',
        },
    },
});
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CategoriesProvider>
                    <CartProvider>
                        <ThemeProvider theme={theme}>
                            <App />
                        </ThemeProvider>
                    </CartProvider>
                </CategoriesProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
