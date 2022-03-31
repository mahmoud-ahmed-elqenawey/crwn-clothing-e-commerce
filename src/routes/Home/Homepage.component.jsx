import './Homepage.styles.scss';
import Directory from '../../components/Directory/Directory.component';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <>
            <Box sx={{ my: 2 }}>
                <Directory />
            </Box>
        </>
    );
};

export default Home;
