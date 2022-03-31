import './Directory.styles.scss';
import DirectoryItem from '../DirectoryItem/DirectoryItem.component';
import { Grid } from '@mui/material';

const categories = [
    {
        id: 1,
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        route: 'shop/hats',
    },
    {
        id: 2,
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        route: 'shop/jackets',
    },
    {
        id: 3,
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        route: 'shop/sneakers',
    },
    {
        id: 4,
        title: 'womens',
        imageUrl:
            'https://cdn.shopify.com/s/files/1/0256/4594/0810/files/banner_3_720x.png?v=1615515309',
        route: 'shop/womens',
        size: 'large',
    },
    {
        id: 5,
        title: 'mens',
        imageUrl:
            'https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slide7-1_1_720x.jpg?v=1582126438',
        route: 'shop/mens',
        size: 'large',
    },
];

const Directory = () => {
    return (
        <div className='directory-container'>
            <Grid container spacing={2}>
                {categories.map((category) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={category.size === 'large' ? 6 : 4}
                        key={category.id}
                    >
                        <DirectoryItem category={category} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Directory;
