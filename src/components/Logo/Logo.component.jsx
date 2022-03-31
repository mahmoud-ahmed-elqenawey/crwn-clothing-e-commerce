import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/images/crown.svg';

const Logo = ({ screen }) => {
    if (screen === 'mobile') {
        return (
            <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', md: 'none' },
                }}
            >
                <Link to='/' underline='none'>
                    <CrownLogo className='logo' />
                </Link>
            </Typography>
        );
    } else {
        return (
            <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                }}
            >
                <Link to={'/'} underline='none'>
                    <CrownLogo className='logo' />
                </Link>
            </Typography>
        );
    }
};

export default Logo;
