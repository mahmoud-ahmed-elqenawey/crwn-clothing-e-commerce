import SignUpForm from '../../components/SignUpForm/SignUpForm.component';
import SignInForm from '../../components/SignInForm/SignInForm.component';
import './Authentication.styles.scss';
import { Container, Grid } from '@mui/material';

const Authentication = () => {
    return (
        <Container>
            <Grid container alignItems='center' justifyContent='center'>
                <Grid item xs={12} md={6}>
                    <SignInForm />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SignUpForm />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Authentication;
