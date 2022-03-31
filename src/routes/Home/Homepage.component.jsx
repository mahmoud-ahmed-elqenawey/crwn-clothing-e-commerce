import './Homepage.styles.scss';
import Directory from '../../components/Directory/Directory.component';
import { Container } from '@mui/material';
import Header from '../../components/Header/Header.component';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <Directory />
            </Container>
        </Fragment>
    );
};

export default Home;
