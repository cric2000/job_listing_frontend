import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();

    const footerStyle = {
        height: '70px',
        backgroundColor: 'whitesmoke', // Light background color
        display: 'flex',
        justifyContent: 'space-between', // Align text and links at opposite ends
        alignItems: 'center',
        padding: '0 10px',
        borderTop: '1px solid rgb(232, 237, 235)' // Add padding to the footer
    };

    const textStyles = {
        color: '#454545', // Use the primary color for text
    };

    const linkStyles = {
        color: palette.primary.main, // Use the primary color for links
        textDecoration: 'underline',
        textUnderlineOffset:'5px'
    };

    return (
        <Box sx={footerStyle}>
            <Typography variant="body1" sx={textStyles} style={{fontFamily: 'Montserrat, sans-serif'}}>
                &copy; <strong>H</strong>ired {new Date().getFullYear()}
            </Typography>
            <Box>
                <Link href="/login" sx={linkStyles} style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Login
                </Link>
                <Link href="/register" sx={{ ...linkStyles, marginLeft: '20px' }} style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Sign up
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
