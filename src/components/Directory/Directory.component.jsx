import './Directory.styles.scss';
import DirectoryItem from '../DirectoryItem/DirectoryItem.component';
import { Grid } from '@mui/material';

const categories = [
    {
        id: 1,
        title: 'hats',
        imageUrl: '/cat/5-1_360x.webp',
        route: 'shop/hats',
    },
    {
        id: 2,
        title: 'jackets',
        imageUrl: 'cat/1_423afc51-89a7-412d-b94e-1905f35af736_360x.webp',
        route: 'shop/jackets',
    },
    {
        id: 3,
        title: 'sneakers',
        imageUrl: 'cat/astel3151418e89_q1_2-0_360x.webp',
        route: 'shop/sneakers',
    },
    {
        id: 4,
        title: 'womens',
        imageUrl: 'cat/banner_3_720x.webp',
        route: 'shop/womens',
        size: 'large',
    },
    {
        id: 5,
        title: 'mens',
        imageUrl: '/cat/slide7-1_1_720x.webp',
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
