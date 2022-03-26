import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import { CategoriesContext } from '../../contexts/categories.context';
import './Category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    // to remember this function called async func you must wait for him to get data from the fireStore database
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <div className='category-container'>
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    );
};

export default Category;
