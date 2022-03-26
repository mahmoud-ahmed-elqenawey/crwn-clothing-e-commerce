import { Route, Routes } from 'react-router-dom';

import Category from '../Category/Category.component';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.component';

import './Shop.style.scss';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;
