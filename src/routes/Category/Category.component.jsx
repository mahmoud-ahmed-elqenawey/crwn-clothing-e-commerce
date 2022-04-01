import { Container, Grid, Typography } from '@mui/material';
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
        <Container>
            <Typography variant='h2' className='category-title'>
                {category.toUpperCase()}
            </Typography>
            <Grid container spacing={2}>
                {products &&
                    products.map((product) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <ProductCard key={product.id} product={product} />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
};

export default Category;
