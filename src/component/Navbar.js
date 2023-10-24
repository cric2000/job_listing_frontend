import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import WorkIcon from '@mui/icons-material/Work';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from '../redux/actions/userAction';
import PersonIcon from '@mui/icons-material/Person';



const pages = ['Home', 'Log In'];

const Navbar = () => {
  
    //show / hide button
    const { userInfo } = useSelector(state => state.signIn);
    const { user } = useSelector(state => state.userProfile);
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { palette } = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // log out user
    const logOutUser = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        setTimeout(() => {
            navigate('/');
        }, 500)
    }

   


    return (
        <AppBar position="sticky" sx={{ color: "#1F1717",
        bgcolor: "#FFF6F6"}}>
           
                {/* principal Menu */}
                <Toolbar disableGutters sx={{padding:'0 10px'}}>
                    <WorkIcon sx={{ flexGrow: 0,display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                       
                        noWrap
                        component="a"
                        href="/"
                        style={{ fontFamily: 'Montserrat, sans-serif'}}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 500,
                            color: 'inherit',
                            textDecoration: 'none',
                            letterSpacing:'1px',
                            fontSize:'28px'
                            
                        }}
                    >
                     <strong >H</strong>ired                 </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
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

<MenuItem  onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none", color: palette.secondary.main, fontFamily: 'Montserrat, sans-serif' }} to="/">Home</Link></Typography>
                                </MenuItem>
                          
                                <MenuItem  onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none", color: palette.secondary.main, fontFamily: 'Montserrat, sans-serif' }} to="/register">Sign up</Link></Typography>
                                </MenuItem>
                              
                        </Menu>
                    </Box>
                    <WorkIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                         style={{ fontFamily: 'Montserrat, sans-serif', fontSize:'28px' }}
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                          
                            fontWeight: 500,
                            letterSpacing: '1px',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <strong>H</strong>ired     
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* menu desktop */}

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            <Link to="/" style={{ color: '#454545', textDecoration: "none",fontFamily: 'Montserrat, sans-serif' }}  >
                                Home
                            </Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            <Link to="/register" style={{ color: '#454545', textDecoration: "none" , fontFamily: 'Montserrat, sans-serif'}}>
                                Sign up
                            </Link>
                        </Button>


                    </Box>
                  

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings" style={{ fontFamily: 'Montserrat, sans-serif'}}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <PersonIcon sx={{ fontSize: 32, color: '#1F1717' }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            PaperProps={{
                                sx: {
                                    "& 	.MuiMenu-list": {
                                        bgcolor: "primary.white",
                                        color: "white"
                                    },
                                    
                                }
                            }}

                            sx={{ mt: '45px' }}
                            
                            id="menu-appbar"
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
                            style={{  fontFamily: 'Montserrat, sans-serif'}}
                        >

{
  userInfo && userInfo.role === 1 ? (
    <MenuItem onClick={handleCloseUserMenu}>
      <Typography textAlign="center">
        <Link
          style={{
            textDecoration: "none",
            color: "#454545",
            fontFamily: "Montserrat, sans-serif",
          }}
          to="/admin/dashboard"
        >
          Admin Dashboard
        </Link>
      </Typography>
    </MenuItem>
  ) : userInfo ? (
    <MenuItem onClick={handleCloseUserMenu}>
      <Typography textAlign="center">
        <Link
          style={{
            textDecoration: "none",
            color: "#454545",
            fontFamily: "Montserrat, sans-serif",
          }}
          to="/user/dashboard"
        >
        
        {user && user.firstName && user.lastName ? (
  `${user.firstName} ${user.lastName}'s Dashboard`
) : (
  "User Dashboard"
)}

        </Link>
      </Typography>
    </MenuItem>
  ) : null
}

                            {
                                !userInfo ?

                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center"><Link style={{ textDecoration: "none", color: palette.secondary.main, fontFamily: 'Montserrat, sans-serif' }} to="/login">Log In</Link></Typography>
                                    </MenuItem> :
                                  
                                  
                                    <MenuItem onClick={logOutUser}>
                                        <Typography style={{ textDecoration: "none", color: palette.secondary.main , fontFamily: 'Montserrat, sans-serif'}} textAlign="center">Log Out</Typography>
                                    </MenuItem>
                                
                            }


                        </Menu>
                    </Box>
                </Toolbar>
           
        </AppBar>
    );
}
export default Navbar;
