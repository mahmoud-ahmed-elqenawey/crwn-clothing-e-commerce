import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard.component';

import './CategoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <Typography className='center'>
                <Button
                    component={Link}
                    className='title'
                    color='inherit'
                    to={title}
                >
                    {title.toUpperCase()}
                </Button>
            </Typography>
            <Grid container spacing={2}>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <ProductCard key={product.id} product={product} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    );
};

export default CategoryPreview;
