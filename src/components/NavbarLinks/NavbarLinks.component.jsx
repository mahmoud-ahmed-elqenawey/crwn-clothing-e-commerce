import { Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarLinks = ({ screen }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    if (screen === 'mobile') {
        return (
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', md: 'none' },
                }}
            >
                <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleOpenNavMenu}
                    color='inherit'
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id='menu-appbar'
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography
                            to='/'
                            component={Link}
                            onClick={handleCloseNavMenu}
                            sx={{
                                color: 'black',
                            }}
                        >
                            Home
                        </Typography>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography
                            to='/shop'
                            component={Link}
                            onClick={handleCloseNavMenu}
                            sx={{
                                color: 'black',
                            }}
                        >
                            Shop
                        </Typography>
                    </MenuItem>
                </Menu>
            </Box>
        );
    } else {
        return (
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                }}
            >
                <Button
                    to='/'
                    component={Link}
                    onClick={handleCloseNavMenu}
                    variant='text'
                    color='inherit'
                >
                    Home
                </Button>
                <Button
                    to='/shop'
                    component={Link}
                    onClick={handleCloseNavMenu}
                    color='inherit'
                >
                    Shop
                </Button>
            </Box>
        );
    }
};

export default NavbarLinks;
