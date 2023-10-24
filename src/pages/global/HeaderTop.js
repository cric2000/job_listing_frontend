import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
//import sidebar hook
import { useProSidebar } from 'react-pro-sidebar';
import { DarkMode, LightMode } from "@mui/icons-material";
import { toggleActionTheme } from '../../redux/actions/themeAction';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';


const HeaderTop = () => {

    const { collapseSidebar } = useProSidebar();
    const { palette } = useTheme();
    const dispatch = useDispatch();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: 0, bgcolor: "primary.main" }}>
                <Toolbar>
                    <IconButton onClick={() => collapseSidebar()}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        style={{fontFamily: 'Montserrat, sans-serif'}}
                    >
                        Hired Portal
                    </Typography>

                 
                   
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderTop;