import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/banner.jpg';
import SearchInputEl from './SearchInputE1';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 400,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.65)), url(${headerImage})`,
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat",
            backgroundPosition: "top",
            backgroundColor: theme.palette.secondary.main
        }

    ));
    return (
        <>
            <StyleHeader >
                <SearchInputEl />
            </StyleHeader>
        </>
    )
}

export default Header