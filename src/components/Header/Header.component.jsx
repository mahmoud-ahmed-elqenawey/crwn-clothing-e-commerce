import './Header.styles.scss';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box className='section-header' component='header' sx={{ py: 6 }}>
            <div className='header-title'>
                <h1>Crwn Clothing app</h1>
                <Button
                    component={Link}
                    to='/shop'
                    variant='outlined'
                    size='large'
                >
                    SHOP NOW
                </Button>
            </div>
        </Box>
    );
};

export default Header;
