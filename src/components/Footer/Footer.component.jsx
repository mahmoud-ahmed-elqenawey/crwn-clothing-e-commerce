import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' to='/'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <Box component='footer' sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth='lg'>
                <Typography variant='h6' align='center' gutterBottom>
                    CRWN Clothing
                </Typography>
                <Typography
                    variant='subtitle1'
                    align='center'
                    color='text.secondary'
                    component='p'
                >
                    description
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
};

export default Footer;
