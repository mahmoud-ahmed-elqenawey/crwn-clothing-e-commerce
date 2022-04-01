import {
    Avatar,
    Button,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Tooltip,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

const UserInfo = () => {
    const { currentUser } = useContext(UserContext);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            {currentUser ? (
                <>
                    <Tooltip title='Open settings'>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar
                                alt='User image'
                                src='/static/images/avatar/2.jpg'
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id='menu-appbar'
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleCloseUserMenu}>
                            <ListItemIcon>
                                <AccountCircleTwoToneIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </MenuItem>

                        <MenuItem onClick={handleCloseUserMenu}>
                            <ListItemIcon>
                                <LogoutTwoToneIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemText onClick={signOutUser}>
                                Logout
                            </ListItemText>
                        </MenuItem>
                    </Menu>
                </>
            ) : (
                <Button component={Link} to='/authentication' color='inherit'>
                    SignIn
                </Button>
            )}
        </Box>
    );
};

export default UserInfo;
